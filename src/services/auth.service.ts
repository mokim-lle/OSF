/* ============================================================
   Auth Service — Firebase 登入服務層
   封裝 signInWithEmailAndPassword + Firestore 會員狀態查詢
   ============================================================ */
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

/** 會員審核狀態 */
export type MemberStatus = 'approved' | 'pending' | 'rejected' | 'not-found';

/** 登入結果 */
export interface LoginResult {
  success: boolean;
  /** 登入成功時的會員狀態 */
  memberStatus?: MemberStatus;
  /** 登入失敗時的錯誤訊息（中英文） */
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
    case 'auth/too-many-requests':
      return {
        zh: '登入嘗試次數過多，請稍後再試',
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
        zh: '登入失敗，請稍後再試',
        en: 'Login failed. Please try again later.',
      };
  }
}

/**
 * 使用 Email / Password 登入，並查詢 Firestore 會員狀態
 */
export async function loginWithEmail(
  email: string,
  password: string
): Promise<LoginResult> {
  try {
    if (!auth || !db) {
      return {
        success: false,
        errorMessage: {
          zh: 'Firebase 服務尚未初始化，請稍後再試。',
          en: 'Firebase service is not initialized, please try again later.',
        },
      };
    }

    // 1. Firebase Auth 登入
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const uid = credential.user.uid;

    // 2. 查詢 Firestore members/{uid} 取得審核狀態
    const memberRef = doc(db, 'members', uid);
    const memberSnap = await getDoc(memberRef);

    let memberStatus: MemberStatus = 'not-found';
    if (memberSnap.exists()) {
      const data = memberSnap.data();
      const status = data.status as string;
      if (status === 'approved' || status === 'pending' || status === 'rejected') {
        memberStatus = status;
      }
    }

    return { success: true, memberStatus };
  } catch (err) {
    const authErr = err as AuthError;
    const errorMessage = mapAuthError(authErr.code);
    return { success: false, errorMessage };
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
    case 'not-found':
      return '#/register/step2';
  }
}
