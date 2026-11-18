/* ============================================================
   會員登入 (Login Page) — 依據 1440px 桌面端設計稿 (支援雙語系)
   整合 Firebase Auth 登入 + Firestore 會員狀態查詢
   已登入時顯示會員登入狀態、審核狀態與登出/前往功能按鈕
   ============================================================ */
import './login.css';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase';
import { currentGlobalLang } from '../components/header';
import {
  loginWithEmail,
  logoutMember,
  fetchCurrentMemberProfile,
  getRedirectPath,
  DoctorProfile,
  MemberStatus,
} from '../services/auth.service';
import { noOrphan } from '../utils/text';

let currentLang: 'zh' | 'en' = 'zh';

interface AuthViewState {
  user: User;
  profile: DoctorProfile | null;
  status: MemberStatus;
  loadingProfile: boolean;
}

const LOGIN_I18N = {
  zh: {
    guestTitle: '會員登入',
    guestSubtitle:
      '只需 30 秒填寫 4 個基本欄位，<br/>免上傳證件完成身分審核，即可參閱並下載臨床技術文件',
    authTitle: '會員已登入',
    authSubtitle: '您目前已登入歐舒福生技會員帳號，可直接前往對應服務或登出切換帳號',
    emailError: '請輸入有效的電子信箱',
    passwordLabel: '密碼',
    passwordPlaceholder: '請輸入密碼',
    passwordError: '請輸入密碼',
    forgotPassword: '忘記密碼？',
    loginBtn: '登入會員',
    loggingIn: '登入中...',
    noAccount: '還沒有會員帳號？',
    signUp: '立即註冊',
    systemError: '系統異常，請稍後再試',
    authBadge: '已登入',
    authHeading: '您目前已登入會員帳號',
    labelEmail: '登入信箱',
    labelName: '醫師姓名',
    labelClinic: '執業院所',
    labelStatus: '會員狀態',
    loadingStatus: '載入會員資料中...',
    logoutBtn: '登出並切換帳號',
    loggingOut: '登出中...',
    statusMap: {
      approved: { label: '已通過審核', desc: '您已具備完整臨床技術文件參閱與下載權限。', cta: '前往臨床技術支持' },
      pending: { label: '審核中', desc: '您的醫師資料正在人工審核中，完成後將寄信通知。', cta: '查看審核進度' },
      rejected: { label: '需修正資料', desc: '您的會員審核未通過，請檢視原因並更新資料。', cta: '前往修正資料' },
      'not-found': { label: '尚未完成註冊', desc: '帳號已建立，請補充醫師基本資料以完成審核申請。', cta: '繼續完成註冊' },
      unverified: { label: '信箱未驗證', desc: '請先完成電子信箱驗證，以繼續後續註冊流程。', cta: '前往驗證信箱' },
    },
  },
  en: {
    guestTitle: 'Member Login',
    guestSubtitle:
      'Takes only 30s to complete 4 basic fields.<br/>Access and download clinical technical documents upon verification.',
    authTitle: 'Member Signed In',
    authSubtitle: 'You are currently signed in to your OSF member account. Continue to services or switch accounts below.',
    emailError: 'Please enter a valid email address',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter password',
    passwordError: 'Please enter password',
    forgotPassword: 'Forgot Password?',
    loginBtn: 'Log In',
    loggingIn: 'Logging in...',
    noAccount: 'Don\u2019t have an account?',
    signUp: 'Sign Up',
    systemError: 'System error. Please try again later.',
    authBadge: 'Signed In',
    authHeading: 'You are currently signed in',
    labelEmail: 'Account Email',
    labelName: 'Doctor Name',
    labelClinic: 'Clinic / Hospital',
    labelStatus: 'Member Status',
    loadingStatus: 'Loading member status...',
    logoutBtn: 'Log Out / Switch Account',
    loggingOut: 'Logging out...',
    statusMap: {
      approved: { label: 'Verified Member', desc: 'You have full access to view and download clinical technical documents.', cta: 'Go to Clinical Support' },
      pending: { label: 'Pending Review', desc: 'Your profile is currently under review. We will notify you by email once approved.', cta: 'View Review Status' },
      rejected: { label: 'Action Required', desc: 'Your application needs updates. Please review the reason and resubmit.', cta: 'Update Application' },
      'not-found': { label: 'Incomplete Registration', desc: 'Your account is created. Please complete your doctor profile to submit for review.', cta: 'Complete Registration' },
      unverified: { label: 'Email Unverified', desc: 'Please verify your email address to continue the registration process.', cta: 'Verify Email' },
    },
  },
} as const;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCachedProfile(): DoctorProfile | null {
  try {
    const raw = sessionStorage.getItem('osf_doctor_profile');
    if (!raw) return null;
    return JSON.parse(raw) as DoctorProfile;
  } catch (_e) {
    return null;
  }
}

function resolveMemberStatus(profile: DoctorProfile | null): MemberStatus {
  if (!profile) return 'not-found';
  if (profile.status === 'approved' || profile.status === 'pending' || profile.status === 'rejected') {
    return profile.status;
  }
  return 'pending';
}

function buildAuthenticatedHtml(state: AuthViewState, lang: 'zh' | 'en'): string {
  const t = LOGIN_I18N[lang];
  const statusInfo = t.statusMap[state.status];
  const redirectPath = getRedirectPath(state.status);
  const email = escapeHtml(state.user.email || '');
  const name = state.profile?.name ? escapeHtml(state.profile.name) : '';
  const clinic = state.profile?.clinic ? escapeHtml(state.profile.clinic) : '';

  return `
    <div class="login-auth-header">
      <div class="login-auth-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span class="login-auth-badge">${t.authBadge}</span>
      <h2 class="login-auth-heading">${noOrphan(t.authHeading)}</h2>
      <p class="login-auth-desc">${
        state.loadingProfile ? noOrphan(t.loadingStatus) : noOrphan(statusInfo.desc)
      }</p>
    </div>

    <div class="login-auth-info-list">
      <div class="login-auth-info-item">
        <span class="login-auth-info-label">${t.labelEmail}</span>
        <span class="login-auth-info-value">${email}</span>
      </div>
      ${
        name
          ? `<div class="login-auth-info-item">
               <span class="login-auth-info-label">${t.labelName}</span>
               <span class="login-auth-info-value">${name}</span>
             </div>`
          : ''
      }
      ${
        clinic
          ? `<div class="login-auth-info-item">
               <span class="login-auth-info-label">${t.labelClinic}</span>
               <span class="login-auth-info-value">${clinic}</span>
             </div>`
          : ''
      }
      <div class="login-auth-info-item">
        <span class="login-auth-info-label">${t.labelStatus}</span>
        <span class="login-status-pill login-status-pill--${state.status}">
          ${state.loadingProfile ? t.loadingStatus : statusInfo.label}
        </span>
      </div>
    </div>

    <div class="login-auth-actions">
      <a href="${redirectPath}" class="login-primary-btn login-auth-cta">
        ${statusInfo.cta}
      </a>
      <button type="button" class="login-secondary-btn" id="login-logout-btn">
        ${t.logoutBtn}
      </button>
    </div>
  `;
}

/** 輸出會員登入完整頁面 HTML */
export function loginPage(): string {
  currentLang = currentGlobalLang;
  const t = LOGIN_I18N[currentLang];

  // 若 Firebase Auth 已同步持有登入使用者，預先呈現已登入視圖避免表單閃爍
  const currentUser = auth?.currentUser ?? null;
  const cachedProfile = currentUser ? getCachedProfile() : null;
  const initialAuthState: AuthViewState | null = currentUser
    ? {
        user: currentUser,
        profile: cachedProfile,
        status: resolveMemberStatus(cachedProfile),
        loadingProfile: !cachedProfile,
      }
    : null;

  const titleText = initialAuthState ? t.authTitle : t.guestTitle;
  const subtitleText = initialAuthState ? noOrphan(t.authSubtitle) : t.guestSubtitle;

  return `
    <div class="login-page">

      <!-- Breadcrumb -->
      <div class="login-breadcrumb">
        <a href="#/" class="breadcrumb-link">HOME</a>
        <span class="breadcrumb-sep"> / </span>
        <span class="breadcrumb-current">MEMBER LOGIN</span>
      </div>

      <!-- 背景裝飾弧形 -->
      <div class="login-bg-dome-wrapper">
        <svg class="login-bg-dome" width="1440" height="920" viewBox="0 0 1440 920" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.5" filter="url(#filter0_dif_login)">
            <path d="M1440 820C1440 725.448 1421.38 631.822 1385.19 544.468C1349.01 457.113 1295.98 377.741 1229.12 310.883C1162.26 244.025 1082.89 190.99 995.532 154.807C908.178 118.623 814.552 100 720 100C625.448 100 531.822 118.623 444.468 154.807C357.113 190.99 277.741 244.025 210.883 310.883C144.025 377.741 90.9901 457.113 54.8067 544.468C18.6233 631.822 -8.26597e-06 725.448 0 820L720 820H1440Z" fill="#F2F2F7"/>
          </g>
          <defs>
            <filter id="filter0_dif_login" x="-100" y="0" width="1640" height="920" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.905882 0 0 0 0 0.933333 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_login"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_login" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_login"/>
              <feGaussianBlur stdDeviation="0" result="effect3_foregroundBlur_login"/>
            </filter>
          </defs>
        </svg>
      </div>

      <!-- 頁面標題區 (Hero) -->
      <div class="login-hero">
        <h1 class="login-title" id="login-title">${titleText}</h1>
        <p class="login-subtitle" id="login-subtitle">${subtitleText}</p>
      </div>

      <!-- 登入表單 / 已登入狀態卡片 -->
      <div class="login-card-wrapper">
        <div class="login-card">
          <!-- 已登入狀態視圖 -->
          <div class="login-auth-view ${initialAuthState ? '' : 'is-hidden'}" id="login-authenticated-view">
            ${initialAuthState ? buildAuthenticatedHtml(initialAuthState, currentLang) : ''}
          </div>

          <!-- 未登入表單視圖 -->
          <div class="login-form-view ${initialAuthState ? 'is-hidden' : ''}" id="login-form-view">
            <!-- 全域錯誤訊息 -->
            <div class="login-global-error" id="login-global-error"></div>

            <form class="login-form" id="login-form" novalidate>
              <div class="login-form-group">
                <label class="login-label" for="login-email">
                  Email <span class="login-req-star">*</span>
                </label>
                <input type="email" id="login-email" class="login-input" placeholder="name@example.com" required autofocus />
                <div class="login-error-msg" id="login-email-error">
                  ${t.emailError}
                </div>
              </div>

              <div class="login-form-group" style="margin-bottom: 8px;">
                <label class="login-label" id="login-password-label" for="login-password">
                  ${t.passwordLabel} <span class="login-req-star">*</span>
                </label>
                <input type="password" id="login-password" class="login-input" placeholder="${t.passwordPlaceholder}" required />
                <div class="login-error-msg" id="login-password-error">
                  ${t.passwordError}
                </div>
              </div>

              <div class="login-forgot-wrap">
                <a href="#/forgot-password" class="login-forgot-link" id="login-forgot-link">
                  ${t.forgotPassword}
                </a>
              </div>

              <button type="submit" class="login-primary-btn" id="login-submit-btn">
                ${t.loginBtn}
              </button>

              <div class="login-footer-tip" id="login-footer-tip">
                ${t.noAccount}
                <a href="#/register">${t.signUp}</a>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  `;
}

/** 初始化會員登入互動行為 */
export function initLoginPage(): void {
  const formView = document.getElementById('login-form-view');
  const authView = document.getElementById('login-authenticated-view');
  const form = document.getElementById('login-form') as HTMLFormElement | null;
  const emailInput = document.getElementById('login-email') as HTMLInputElement | null;
  const passwordInput = document.getElementById('login-password') as HTMLInputElement | null;
  const emailError = document.getElementById('login-email-error');
  const passwordError = document.getElementById('login-password-error');
  const globalError = document.getElementById('login-global-error');
  const submitBtn = document.getElementById('login-submit-btn') as HTMLButtonElement | null;

  let activeAuthState: AuthViewState | null = null;
  let isLoggingIn = false;

  /** 更新 Hero 標題與副標題以符合登入狀態 */
  function syncHeroText(): void {
    const t = LOGIN_I18N[currentLang];
    const titleEl = document.getElementById('login-title');
    const subtitleEl = document.getElementById('login-subtitle');
    if (titleEl) {
      titleEl.textContent = activeAuthState ? t.authTitle : t.guestTitle;
    }
    if (subtitleEl) {
      subtitleEl.innerHTML = activeAuthState ? noOrphan(t.authSubtitle) : t.guestSubtitle;
    }
  }

  /** 切換顯示已登入視圖或登入表單 */
  function renderViewState(state: AuthViewState | null): void {
    activeAuthState = state;
    syncHeroText();

    if (!formView || !authView) return;

    if (state) {
      formView.classList.add('is-hidden');
      authView.classList.remove('is-hidden');
      authView.innerHTML = buildAuthenticatedHtml(state, currentLang);
      bindLogoutAction();
    } else {
      authView.classList.add('is-hidden');
      authView.innerHTML = '';
      formView.classList.remove('is-hidden');
    }
  }

  /** 綁定登出按鈕事件 */
  function bindLogoutAction(): void {
    const logoutBtn = document.getElementById('login-logout-btn') as HTMLButtonElement | null;
    if (!logoutBtn) return;

    logoutBtn.addEventListener('click', async () => {
      const t = LOGIN_I18N[currentLang];
      logoutBtn.disabled = true;
      logoutBtn.classList.add('loading');
      logoutBtn.innerHTML = `<span class="login-spinner login-spinner--dark"></span>${t.loggingOut}`;
      try {
        await logoutMember();
        if (passwordInput) passwordInput.value = '';
        clearGlobalError();
      } catch (_err) {
        logoutBtn.disabled = false;
        logoutBtn.classList.remove('loading');
        logoutBtn.textContent = t.logoutBtn;
      }
    });
  }

  /** 清除全域錯誤 */
  function clearGlobalError(): void {
    if (globalError) {
      globalError.textContent = '';
      globalError.classList.remove('show');
    }
  }

  /** 顯示全域錯誤 */
  function showGlobalError(message: string): void {
    if (globalError) {
      globalError.textContent = message;
      globalError.classList.add('show');
    }
  }

  /** 設定按鈕載入狀態 */
  function setLoading(loading: boolean): void {
    if (!submitBtn) return;
    const t = LOGIN_I18N[currentLang];
    if (loading) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="login-spinner"></span>
        ${t.loggingIn}
      `;
    } else {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      submitBtn.textContent = t.loginBtn;
    }
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearGlobalError();
    let valid = true;

    // 前端欄位驗證
    const emailVal = emailInput?.value.trim() || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      emailInput?.classList.add('input-error');
      emailError?.classList.add('show');
      valid = false;
    } else {
      emailInput?.classList.remove('input-error');
      emailError?.classList.remove('show');
    }

    const passVal = passwordInput?.value || '';
    if (!passVal) {
      passwordInput?.classList.add('input-error');
      passwordError?.classList.add('show');
      valid = false;
    } else {
      passwordInput?.classList.remove('input-error');
      passwordError?.classList.remove('show');
    }

    if (!valid) return;

    // Firebase 登入
    isLoggingIn = true;
    setLoading(true);

    try {
      const result = await loginWithEmail(emailVal, passVal);

      if (result.success && result.memberStatus) {
        // 登入成功 — 根據會員狀態導向
        const redirectPath = getRedirectPath(result.memberStatus);
        window.location.hash = redirectPath;
      } else if (result.errorMessage) {
        // 登入失敗 — 顯示錯誤
        const msg = currentLang === 'zh' ? result.errorMessage.zh : result.errorMessage.en;
        showGlobalError(msg);
      }
    } catch (_err) {
      showGlobalError(LOGIN_I18N[currentLang].systemError);
    } finally {
      isLoggingIn = false;
      setLoading(false);
    }
  });

  // 監聽 Firebase Auth 狀態，已登入時顯示會員狀態與登出選項
  let unsubscribeAuth: (() => void) | null = null;
  if (auth) {
    unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      // 主動提交表單登入中時，交由表單結果導向對應頁面，避免中途閃切畫面
      if (isLoggingIn) return;

      if (!user) {
        renderViewState(null);
        return;
      }

      const cached = getCachedProfile();
      renderViewState({
        user,
        profile: cached,
        status: resolveMemberStatus(cached),
        loadingProfile: true,
      });

      const freshProfile = await fetchCurrentMemberProfile();
      // 若讀取期間使用者已登出或離開登入頁，則不覆寫畫面
      if (!auth?.currentUser || auth.currentUser.uid !== user.uid || !document.getElementById('login-authenticated-view')) {
        return;
      }

      renderViewState({
        user,
        profile: freshProfile,
        status: resolveMemberStatus(freshProfile),
        loadingProfile: false,
      });
    });
  }

  // 全域語系切換監聽
  const handleLangChange = (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (!customEvent.detail?.lang) return;
    currentLang = customEvent.detail.lang;
    const t = LOGIN_I18N[currentLang];

    syncHeroText();

    if (activeAuthState && authView) {
      authView.innerHTML = buildAuthenticatedHtml(activeAuthState, currentLang);
      bindLogoutAction();
    }

    const passwordLabelEl = document.getElementById('login-password-label');
    const passwordInputEl = document.getElementById('login-password') as HTMLInputElement | null;
    const emailErrorEl = document.getElementById('login-email-error');
    const passwordErrorEl = document.getElementById('login-password-error');
    const forgotEl = document.getElementById('login-forgot-link');
    const submitBtnEl = document.getElementById('login-submit-btn') as HTMLButtonElement | null;
    const footerTip = document.getElementById('login-footer-tip');

    if (passwordLabelEl) {
      passwordLabelEl.innerHTML = `${t.passwordLabel} <span class="login-req-star">*</span>`;
    }
    if (passwordInputEl) {
      passwordInputEl.placeholder = t.passwordPlaceholder;
    }
    if (emailErrorEl) {
      emailErrorEl.textContent = t.emailError;
    }
    if (passwordErrorEl) {
      passwordErrorEl.textContent = t.passwordError;
    }
    if (forgotEl) forgotEl.textContent = t.forgotPassword;
    if (submitBtnEl && !submitBtnEl.classList.contains('loading')) {
      submitBtnEl.textContent = t.loginBtn;
    }
    if (footerTip) {
      footerTip.innerHTML = `${t.noAccount} <a href="#/register">${t.signUp}</a>`;
    }
  };

  window.addEventListener('langchange', handleLangChange);

  // 離開登入頁時清理監聽器
  const cleanupOnLeave = () => {
    unsubscribeAuth?.();
    unsubscribeAuth = null;
    window.removeEventListener('langchange', handleLangChange);
    window.removeEventListener('hashchange', cleanupOnLeave);
  };
  window.addEventListener('hashchange', cleanupOnLeave);
}
