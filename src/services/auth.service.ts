/* ============================================================
   Auth Service — Firebase 登入 / 註冊 / 驗證碼 / 會員資料服務層
   封裝 Firebase Auth 與 Firestore (members / emailVerifications)
   ============================================================ */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  AuthError,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../firebase';

/** 會員審核狀態 */
export type MemberStatus = 'approved' | 'pending' | 'rejected' | 'not-found' | 'unverified';

/** 醫師基本資料結構 */
export interface DoctorProfile {
  name: string;
  category: 'dentist' | 'other';
  city: string;
  clinic: string;
  status?: 'approved' | 'pending' | 'rejected';
  rejectReason?: string;
}

/** 通用操作結果 */
export interface AuthActionResult {
  success: boolean;
  memberStatus?: MemberStatus;
  email?: string;
  /** 開發測試用：回傳產生的 6 位數驗證碼（若尚未串接正式發信服務時可於 Console 檢視） */
  devOtpCode?: string;
  errorMessage?: { zh: string; en: string };
}

/**
 * 將 Firebase AuthError code 對應成中英文使用者友善訊息
 */
function mapAuthError(code: string): { zh: string; en: string } {
  switch (code) {
    case 'auth/user-not-found':
    case 'auth/invalid-credential':
      return {
        zh: '帳號或密碼錯誤，請重新輸入',
        en: 'Invalid email or password. Please try again.',
      };
    case 'auth/wrong-password':
      return {
        zh: '密碼錯誤，請重新輸入',
        en: 'Incorrect password. Please try again.',
      };
    case 'auth/email-already-in-use':
      return {
        zh: '此電子信箱已被註冊，請直接返回登入',
        en: 'This email is already registered. Please log in instead.',
      };
    case 'auth/invalid-email':
      return {
        zh: '請輸入有效的電子信箱格式',
        en: 'Please enter a valid email address.',
      };
    case 'auth/weak-password':
      return {
        zh: '密碼強度不足，請輸入至少 8 個字元',
        en: 'Password is too weak. Please enter at least 8 characters.',
      };
    case 'auth/too-many-requests':
      return {
        zh: '嘗試次數過多，請稍後再試',
        en: 'Too many attempts. Please try again later.',
      };
    case 'auth/user-disabled':
      return {
        zh: '此帳號已被停用，請聯繫客服',
        en: 'This account has been disabled. Please contact support.',
      };
    case 'auth/network-request-failed':
      return {
        zh: '網路連線異常，請檢查網路後重試',
        en: 'Network error. Please check your connection and try again.',
      };
    default:
      return {
        zh: '系統處理失敗，請稍後再試',
        en: 'Operation failed. Please try again later.',
      };
  }
}

/** 產生 6 位數隨機數字驗證碼 */
function generateOtpCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * 發送 6 位數驗證碼至使用者信箱
 * 支援透過 Google Apps Script (VITE_GOOGLE_SHEET_URL) 或自訂發信 API (VITE_OTP_WEBHOOK_URL) 寄出
 */
async function dispatchOtpEmail(email: string, code: string): Promise<void> {
  const webhookUrl =
    import.meta.env.VITE_OTP_WEBHOOK_URL || import.meta.env.VITE_GOOGLE_SHEET_URL;

  // 在 Console 印出驗證碼以便開發與測試確認
  console.info(
    `%c[OSF Auth] 6 位數信箱驗證碼 (${email}): ${code}`,
    'color: #1875c7; font-weight: bold; font-size: 13px;'
  );

  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'send_otp',
        email,
        code,
        expiresInMinutes: 30,
      }),
    });
  } catch (err) {
    console.warn('[OSF Auth] 觸發外部驗證碼發信 Webhook 異常:', err);
  }
}

/**
 * 1. 使用 Email / Password 登入，並查詢 Firestore 會員狀態
 */
export async function loginWithEmail(
  email: string,
  password: string
): Promise<AuthActionResult> {
  try {
    if (!auth || !db) {
      return {
        success: false,
        errorMessage: {
          zh: 'Firebase 服務尚未初始化，請確認環境變數設定。',
          en: 'Firebase service is not initialized. Please check configuration.',
        },
      };
    }

    const credential = await signInWithEmailAndPassword(auth, email, password);
    const uid = credential.user.uid;

    // 查詢 Firestore members/{uid} 取得審核狀態
    const memberRef = doc(db, 'members', uid);
    const memberSnap = await getDoc(memberRef);

    let memberStatus: MemberStatus = 'not-found';
    if (memberSnap.exists()) {
      const data = memberSnap.data();
      // 快取基本資料至 sessionStorage 供狀態頁立即呈現
      try {
        sessionStorage.setItem(
          'osf_doctor_profile',
          JSON.stringify({
            name: data.name || '',
            category: data.category === 'other' ? 'other' : 'dentist',
            city: data.city || '',
            clinic: data.clinic || '',
            status: data.status || 'pending',
            rejectReason: data.rejectReason || '',
          })
        );
      } catch (_e) {
        // ignore
      }

      const status = data.status as string;
      if (status === 'approved' || status === 'pending' || status === 'rejected') {
        memberStatus = status;
      }
    }

    return { success: true, memberStatus, email: credential.user.email || email };
  } catch (err) {
    const authErr = err as AuthError;
    return { success: false, errorMessage: mapAuthError(authErr.code) };
  }
}

/**
 * 2. 註冊 Step 1：建立 Firebase Auth 帳號 + 產生並寫入 6 位數驗證碼
 */
export async function registerStep1WithEmail(
  email: string,
  password: string
): Promise<AuthActionResult> {
  try {
    if (!auth || !db) {
      return {
        success: false,
        errorMessage: {
          zh: 'Firebase 服務尚未初始化，請確認環境變數設定。',
          en: 'Firebase service is not initialized.',
        },
      };
    }

    let uid = '';
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      uid = cred.user.uid;
    } catch (createErr) {
      const authErr = createErr as AuthError;
      // 若帳號已建立過但尚未完成填寫醫師資料，嘗試登入並續接流程
      if (authErr.code === 'auth/email-already-in-use') {
        try {
          const signInCred = await signInWithEmailAndPassword(auth, email, password);
          uid = signInCred.user.uid;
          const existingMember = await getDoc(doc(db, 'members', uid));
          if (existingMember.exists()) {
            return {
              success: false,
              errorMessage: mapAuthError('auth/email-already-in-use'),
            };
          }
        } catch (_signInErr) {
          return {
            success: false,
            errorMessage: mapAuthError('auth/email-already-in-use'),
          };
        }
      } else {
        return { success: false, errorMessage: mapAuthError(authErr.code) };
      }
    }

    // 產生 6 位數驗證碼並寫入 Firestore emailVerifications/{uid}（有效期 30 分鐘）
    const code = generateOtpCode();
    const expiresAt = Date.now() + 30 * 60 * 1000;

    await setDoc(doc(db, 'emailVerifications', uid), {
      uid,
      email,
      code,
      expiresAt,
      verified: false,
      createdAt: serverTimestamp(),
    });

    await dispatchOtpEmail(email, code);

    return { success: true, email, devOtpCode: code };
  } catch (err) {
    const authErr = err as AuthError;
    return { success: false, errorMessage: mapAuthError(authErr.code) };
  }
}

/**
 * 3. 重新寄送 6 位數驗證碼
 */
export async function resendVerificationOtp(emailFallback?: string): Promise<AuthActionResult> {
  try {
    if (!auth || !db || !auth.currentUser) {
      return {
        success: false,
        errorMessage: {
          zh: '登入狀態已逾時，請重新操作註冊流程',
          en: 'Session expired. Please restart registration.',
        },
      };
    }

    const uid = auth.currentUser.uid;
    const email = auth.currentUser.email || emailFallback || '';
    const code = generateOtpCode();
    const expiresAt = Date.now() + 30 * 60 * 1000;

    await setDoc(doc(db, 'emailVerifications', uid), {
      uid,
      email,
      code,
      expiresAt,
      verified: false,
      createdAt: serverTimestamp(),
    });

    await dispatchOtpEmail(email, code);

    return { success: true, email, devOtpCode: code };
  } catch (_err) {
    return {
      success: false,
      errorMessage: {
        zh: '驗證碼重新寄送失敗，請稍後再試',
        en: 'Failed to resend verification code. Please try again.',
      },
    };
  }
}

/**
 * 4. 驗證使用者輸入的 6 位數驗證碼
 */
export async function verifyEmailOtp(inputCode: string): Promise<AuthActionResult> {
  try {
    if (!auth || !db || !auth.currentUser) {
      return {
        success: false,
        errorMessage: {
          zh: '登入狀態已逾時，請返回第一步重新註冊',
          en: 'Session expired. Please return to step 1.',
        },
      };
    }

    const uid = auth.currentUser.uid;
    const otpRef = doc(db, 'emailVerifications', uid);
    const otpSnap = await getDoc(otpRef);

    if (!otpSnap.exists()) {
      return {
        success: false,
        errorMessage: {
          zh: '找不到驗證紀錄，請點擊重新寄送驗證碼',
          en: 'Verification record not found. Please resend code.',
        },
      };
    }

    const data = otpSnap.data();
    const storedCode = String(data.code || '').trim();
    const expiresAt = Number(data.expiresAt || 0);

    if (Date.now() > expiresAt) {
      return {
        success: false,
        errorMessage: {
          zh: '驗證碼已超過 30 分鐘有效期限，請重新寄送',
          en: 'Verification code has expired. Please resend.',
        },
      };
    }

    if (inputCode.trim() !== storedCode) {
      return {
        success: false,
        errorMessage: {
          zh: '驗證碼不正確，請重新確認',
          en: 'Incorrect verification code. Please try again.',
        },
      };
    }

    await updateDoc(otpRef, {
      verified: true,
      verifiedAt: serverTimestamp(),
    });

    return { success: true };
  } catch (_err) {
    return {
      success: false,
      errorMessage: {
        zh: '驗證過程發生錯誤，請稍後再試',
        en: 'Verification error. Please try again.',
      },
    };
  }
}

/**
 * 5. 註冊 Step 2 / 退件重送：將醫師資料寫入 Firestore members/{uid}
 */
export async function submitDoctorProfile(profile: DoctorProfile): Promise<AuthActionResult> {
  try {
    if (!auth || !db || !auth.currentUser) {
      return {
        success: false,
        errorMessage: {
          zh: '請先完成帳號登入或註冊第一步',
          en: 'Please sign in or complete step 1 first.',
        },
      };
    }

    const uid = auth.currentUser.uid;
    const email = auth.currentUser.email || '';

    await setDoc(
      doc(db, 'members', uid),
      {
        uid,
        email,
        name: profile.name,
        category: profile.category,
        city: profile.city,
        clinic: profile.clinic,
        status: 'pending',
        emailVerified: true,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      },
      { merge: true }
    );

    try {
      sessionStorage.setItem(
        'osf_doctor_profile',
        JSON.stringify({
          ...profile,
          status: 'pending',
        })
      );
    } catch (_e) {
      // ignore
    }

    return { success: true, memberStatus: 'pending' };
  } catch (_err) {
    return {
      success: false,
      errorMessage: {
        zh: '資料送出失敗，請檢查網路連線或稍後再試',
        en: 'Failed to submit profile. Please try again.',
      },
    };
  }
}

/**
 * 6. 從 Firestore 讀取目前登入會員的審核資料
 */
export async function fetchCurrentMemberProfile(): Promise<DoctorProfile | null> {
  try {
    if (!auth || !db || !auth.currentUser) return null;
    const snap = await getDoc(doc(db, 'members', auth.currentUser.uid));
    if (!snap.exists()) return null;
    const data = snap.data();
    const profile: DoctorProfile = {
      name: data.name || '',
      category: data.category === 'other' ? 'other' : 'dentist',
      city: data.city || '',
      clinic: data.clinic || '',
      status: data.status || 'pending',
      rejectReason: data.rejectReason || '',
    };
    try {
      sessionStorage.setItem('osf_doctor_profile', JSON.stringify(profile));
    } catch (_e) {
      // ignore
    }
    return profile;
  } catch (_err) {
    return null;
  }
}

/**
 * 7. 發送 Firebase 重設密碼信
 */
export async function sendResetPasswordEmail(email: string): Promise<AuthActionResult> {
  try {
    if (!auth) {
      return {
        success: false,
        errorMessage: {
          zh: 'Firebase 服務尚未初始化',
          en: 'Firebase service is not initialized.',
        },
      };
    }
    await sendPasswordResetEmail(auth, email);
    return { success: true, email };
  } catch (err) {
    const authErr = err as AuthError;
    return { success: false, errorMessage: mapAuthError(authErr.code) };
  }
}

/**
 * 8. 登出目前會員帳號並清除快取資料
 */
export async function logoutMember(): Promise<void> {
  try {
    sessionStorage.removeItem('osf_doctor_profile');
  } catch (_e) {
    // ignore
  }
  if (auth) {
    await signOut(auth);
  }
}

/**
 * 根據會員狀態取得應導向的路由
 */
export function getRedirectPath(status: MemberStatus): string {
  switch (status) {
    case 'approved':
      return '#/clinical-support';
    case 'pending':
      return '#/membership-status/pending';
    case 'rejected':
      return '#/membership-status/rejected';
    case 'unverified':
      return '#/register/verify';
    case 'not-found':
      return '#/register/step2';
  }
}
