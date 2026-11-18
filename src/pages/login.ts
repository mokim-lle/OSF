/* ============================================================
   會員登入 (Login Page) — 依據 1440px 桌面端設計稿 (支援雙語系)
   整合 Firebase Auth 登入 + Firestore 會員狀態查詢
   ============================================================ */
import './login.css';
import { currentGlobalLang } from '../components/header';
import { loginWithEmail, getRedirectPath } from '../services/auth.service';

let currentLang: 'zh' | 'en' = 'zh';

/** 輸出會員登入完整頁面 HTML */
export function loginPage(): string {
  currentLang = currentGlobalLang;

  const titleText = currentLang === 'zh' ? '會員登入' : 'Member Login';
  const subtitleText = currentLang === 'zh'
    ? '只需 30 秒填寫 4 個基本欄位，<br/>免上傳證件完成身分審核，即可參閱並下載臨床技術文件'
    : 'Takes only 30s to complete 4 basic fields.<br/>Access and download clinical technical documents upon verification.';

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

      <!-- 登入表單卡片 -->
      <div class="login-card-wrapper">
        <div class="login-card">
          <!-- 全域錯誤訊息 -->
          <div class="login-global-error" id="login-global-error"></div>

          <form class="login-form" id="login-form" novalidate>
            <div class="login-form-group">
              <label class="login-label" for="login-email">
                Email <span class="login-req-star">*</span>
              </label>
              <input type="email" id="login-email" class="login-input" placeholder="name@example.com" required autofocus />
              <div class="login-error-msg" id="login-email-error">
                ${currentLang === 'zh' ? '請輸入有效的電子信箱' : 'Please enter a valid email address'}
              </div>
            </div>

            <div class="login-form-group" style="margin-bottom: 8px;">
              <label class="login-label" id="login-password-label" for="login-password">
                ${currentLang === 'zh' ? '密碼' : 'Password'} <span class="login-req-star">*</span>
              </label>
              <input type="password" id="login-password" class="login-input" placeholder="${currentLang === 'zh' ? '請輸入密碼' : 'Enter password'}" required />
              <div class="login-error-msg" id="login-password-error">
                ${currentLang === 'zh' ? '請輸入密碼' : 'Please enter password'}
              </div>
            </div>

            <div class="login-forgot-wrap">
              <a href="#/forgot-password" class="login-forgot-link" id="login-forgot-link">
                ${currentLang === 'zh' ? '忘記密碼？' : 'Forgot Password?'}
              </a>
            </div>

            <button type="submit" class="login-primary-btn" id="login-submit-btn">
              ${currentLang === 'zh' ? '登入會員' : 'Log In'}
            </button>

            <div class="login-footer-tip" id="login-footer-tip">
              ${currentLang === 'zh' ? '還沒有會員帳號？' : 'Don\u2019t have an account?'}
              <a href="#/register">${currentLang === 'zh' ? '立即註冊' : 'Sign Up'}</a>
            </div>
          </form>
        </div>
      </div>

    </div>
  `;
}

/** 初始化會員登入互動行為 */
export function initLoginPage(): void {
  const form = document.getElementById('login-form') as HTMLFormElement | null;
  const emailInput = document.getElementById('login-email') as HTMLInputElement | null;
  const passwordInput = document.getElementById('login-password') as HTMLInputElement | null;
  const emailError = document.getElementById('login-email-error');
  const passwordError = document.getElementById('login-password-error');
  const globalError = document.getElementById('login-global-error');
  const submitBtn = document.getElementById('login-submit-btn') as HTMLButtonElement | null;

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
    if (loading) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="login-spinner"></span>
        ${currentLang === 'zh' ? '登入中...' : 'Logging in...'}
      `;
    } else {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === 'zh' ? '登入會員' : 'Log In';
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
      showGlobalError(
        currentLang === 'zh' ? '系統異常，請稍後再試' : 'System error. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  });

  // 全域語系切換監聽
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      currentLang = customEvent.detail.lang;
      const titleEl = document.getElementById('login-title');
      const subtitleEl = document.getElementById('login-subtitle');
      const passwordLabelEl = document.getElementById('login-password-label');
      const passwordInputEl = document.getElementById('login-password') as HTMLInputElement | null;
      const emailErrorEl = document.getElementById('login-email-error');
      const passwordErrorEl = document.getElementById('login-password-error');
      const forgotEl = document.getElementById('login-forgot-link');
      const submitBtnEl = document.getElementById('login-submit-btn') as HTMLButtonElement | null;
      const footerTip = document.getElementById('login-footer-tip');

      if (titleEl) titleEl.textContent = currentLang === 'zh' ? '會員登入' : 'Member Login';
      if (subtitleEl) {
        subtitleEl.innerHTML = currentLang === 'zh'
          ? '只需 30 秒填寫 4 個基本欄位，<br/>免上傳證件完成身分審核，即可參閱並下載臨床技術文件'
          : 'Takes only 30s to complete 4 basic fields.<br/>Access and download clinical technical documents upon verification.';
      }
      if (passwordLabelEl) {
        passwordLabelEl.innerHTML = `${currentLang === 'zh' ? '密碼' : 'Password'} <span class="login-req-star">*</span>`;
      }
      if (passwordInputEl) {
        passwordInputEl.placeholder = currentLang === 'zh' ? '請輸入密碼' : 'Enter password';
      }
      if (emailErrorEl) {
        emailErrorEl.textContent = currentLang === 'zh' ? '請輸入有效的電子信箱' : 'Please enter a valid email address';
      }
      if (passwordErrorEl) {
        passwordErrorEl.textContent = currentLang === 'zh' ? '請輸入密碼' : 'Please enter password';
      }
      if (forgotEl) forgotEl.textContent = currentLang === 'zh' ? '忘記密碼？' : 'Forgot Password?';
      if (submitBtnEl && !submitBtnEl.classList.contains('loading')) {
        submitBtnEl.textContent = currentLang === 'zh' ? '登入會員' : 'Log In';
      }
      if (footerTip) {
        footerTip.innerHTML = currentLang === 'zh'
          ? `還沒有會員帳號？ <a href="#/register">立即註冊</a>`
          : `Don\u2019t have an account? <a href="#/register">Sign Up</a>`;
      }
    }
  });
}
