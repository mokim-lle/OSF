/* ============================================================
   重設密碼 (Forgot Password Page) — 依據 1440px 桌面端設計稿 (支援雙語系)
   ============================================================ */
import './forgot-password.css';
import { currentGlobalLang } from '../components/header';
import { getCurrentPath, getQueryParams } from '../router';
import { sendResetPasswordEmail } from '../services/auth.service';

let currentLang: 'zh' | 'en' = 'zh';

// 狀態：'input-email' | 'sent-success'
type ForgotPwdState = 'input-email' | 'sent-success';
let currentState: ForgotPwdState = 'sent-success'; // 預設顯示截圖狀態，亦支援從 input 輸入進入
let resetEmail = 'doctor@example.com';
let countdownSeconds = 60;
let countdownTimer: number | null = null;

function renderCard(state: ForgotPwdState, email: string, lang: 'zh' | 'en'): string {
  if (state === 'input-email') {
    return `
      <form id="forgot-pwd-form" novalidate>
        <div class="reset-form-group">
          <label class="reset-label" for="reset-email-input">
            Email <span class="reset-req-star">*</span>
          </label>
          <input type="email" id="reset-email-input" class="reset-input" placeholder="name@example.com" required autofocus />
          <div class="field-error-msg" id="reset-email-error">
            ${lang === 'zh' ? '請輸入有效的電子信箱' : 'Please enter a valid email address'}
          </div>
        </div>

        <button type="submit" class="reset-primary-btn" id="reset-send-btn">
          ${lang === 'zh' ? '發送重設密碼信' : 'Send Reset Link'}
        </button>

        <div class="reset-footer-tip">
          ${lang === 'zh' ? '記起密碼了？' : 'Remembered your password?'}
          <a href="#/login">${lang === 'zh' ? '返回登入' : 'Back to Login'}</a>
        </div>
      </form>
    `;
  }

  // 狀態 B：已發送驗證信畫面 (對照截圖 2 & 3)
  const countdownBtnText = countdownSeconds > 0
    ? (lang === 'zh' ? `再次寄送（${countdownSeconds} 秒後可再試）` : `Resend in ${countdownSeconds}s`)
    : (lang === 'zh' ? '重新寄送驗證信' : 'Resend Verification Email');

  return `
    <div class="reset-sent-view">
      <!-- 藍色信件圖示 -->
      <div class="reset-icon-wrapper">
        <svg class="reset-icon" viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="64" height="46" rx="4" fill="#235D97" />
          <path d="M4 6L34 28L64 6" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 46L24 28M64 46L44 28" stroke="#1875c7" stroke-width="2" stroke-linecap="round" />
          <!-- 打勾圓章 -->
          <circle cx="50" cy="44" r="14" fill="#ffffff" stroke="#1875c7" stroke-width="3" />
          <polyline points="44 44 48 48 56 40" fill="none" stroke="#1875c7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <h2 class="reset-sent-title">${lang === 'zh' ? '已發送驗證信至您的信箱' : 'Verification Email Sent'}</h2>
      <p class="reset-sent-subtitle">
        ${lang === 'zh'
          ? `已寄至 <strong id="reset-email-display">${email}</strong>，連結 30 分鐘內有效。<br/>若未收到，請確認垃圾郵件匣。`
          : `Sent to <strong id="reset-email-display">${email}</strong>, valid for 30 minutes.<br/>Please check your spam folder if not received.`
        }
      </p>

      <button type="button" class="reset-countdown-btn" id="reset-countdown-btn" ${countdownSeconds > 0 ? 'disabled' : ''}>
        ${countdownBtnText}
      </button>

      <div class="reset-footer-tip" style="margin-top: 20px;">
        <a href="#/login">${lang === 'zh' ? '返回會員登入' : 'Back to Member Login'}</a>
      </div>
    </div>
  `;
}

/** 輸出重設密碼完整頁面 HTML */
export function forgotPasswordPage(): string {
  currentLang = currentGlobalLang;

  const path = getCurrentPath();
  const params = getQueryParams();
  const stepParam = params.get('step');

  if (path.endsWith('/sent') || stepParam === 'sent' || stepParam === '2') {
    currentState = 'sent-success';
  } else {
    currentState = 'input-email';
  }

  countdownSeconds = 60;
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }

  const titleText = currentLang === 'zh' ? '重設密碼' : 'Reset Password';

  return `
    <div class="reset-page">

      <!-- Breadcrumb -->
      <div class="reset-breadcrumb">
        <a href="#/" class="breadcrumb-link">HOME</a>
        <span class="breadcrumb-sep"> / </span>
        <span class="breadcrumb-current">RESET PASSWORD</span>
      </div>

      <!-- 背景裝飾弧形 -->
      <div class="reset-bg-dome-wrapper">
        <svg class="reset-bg-dome" width="1440" height="920" viewBox="0 0 1440 920" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.5" filter="url(#filter0_dif_reset)">
            <path d="M1440 820C1440 725.448 1421.38 631.822 1385.19 544.468C1349.01 457.113 1295.98 377.741 1229.12 310.883C1162.26 244.025 1082.89 190.99 995.532 154.807C908.178 118.623 814.552 100 720 100C625.448 100 531.822 118.623 444.468 154.807C357.113 190.99 277.741 244.025 210.883 310.883C144.025 377.741 90.9901 457.113 54.8067 544.468C18.6233 631.822 -8.26597e-06 725.448 0 820L720 820H1440Z" fill="#F2F2F7"/>
          </g>
          <defs>
            <filter id="filter0_dif_reset" x="-100" y="0" width="1640" height="920" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.905882 0 0 0 0 0.933333 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_reset"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_reset" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_reset"/>
              <feGaussianBlur stdDeviation="0" result="effect3_foregroundBlur_reset"/>
            </filter>
          </defs>
        </svg>
      </div>

      <!-- 頁面標題區 (Hero) -->
      <div class="reset-hero">
        <h1 class="reset-title" id="reset-title">${titleText}</h1>
      </div>

      <!-- 表單卡片 -->
      <div class="reset-card-wrapper">
        <div class="reset-card" id="reset-card">
          ${renderCard(currentState, resetEmail, currentLang)}
        </div>
      </div>

    </div>
  `;
}

/** 初始化重設密碼頁面互動行為 */
export function initForgotPasswordPage(): void {
  const cardContainer = document.getElementById('reset-card');

  function startCountdown() {
    countdownSeconds = 60;
    if (countdownTimer) clearInterval(countdownTimer);

    const btn = document.getElementById('reset-countdown-btn') as HTMLButtonElement | null;
    if (btn) {
      btn.disabled = true;
      btn.textContent = currentLang === 'zh' ? `再次寄送（60 秒後可再試）` : `Resend in 60s`;
    }

    countdownTimer = window.setInterval(() => {
      countdownSeconds--;
      if (btn) {
        if (countdownSeconds > 0) {
          btn.disabled = true;
          btn.textContent = currentLang === 'zh'
            ? `再次寄送（${countdownSeconds} 秒後可再試）`
            : `Resend in ${countdownSeconds}s`;
        } else {
          btn.disabled = false;
          btn.textContent = currentLang === 'zh' ? '重新寄送驗證信' : 'Resend Verification Email';
          if (countdownTimer) clearInterval(countdownTimer);
        }
      }
    }, 1000);
  }

  function bindEvents() {
    if (currentState === 'input-email') {
      const form = document.getElementById('forgot-pwd-form') as HTMLFormElement | null;
      const emailInput = document.getElementById('reset-email-input') as HTMLInputElement | null;
      const emailError = document.getElementById('reset-email-error');
      const sendBtn = document.getElementById('reset-send-btn') as HTMLButtonElement | null;

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailVal = emailInput?.value.trim() || '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailVal)) {
          emailInput?.classList.add('input-error');
          if (emailError) {
            emailError.textContent = currentLang === 'zh' ? '請輸入有效的電子信箱' : 'Please enter a valid email address';
            emailError.classList.add('show');
          }
          return;
        }

        emailInput?.classList.remove('input-error');
        emailError?.classList.remove('show');

        if (sendBtn) {
          sendBtn.disabled = true;
          sendBtn.textContent = currentLang === 'zh' ? '發送中...' : 'Sending...';
        }

        const result = await sendResetPasswordEmail(emailVal);

        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.textContent = currentLang === 'zh' ? '發送重設密碼信' : 'Send Reset Link';
        }

        if (result.success) {
          resetEmail = emailVal;
          currentState = 'sent-success';
          if (cardContainer) {
            cardContainer.innerHTML = renderCard('sent-success', resetEmail, currentLang);
            bindEvents();
            startCountdown();
          }
        } else if (result.errorMessage) {
          emailInput?.classList.add('input-error');
          if (emailError) {
            emailError.textContent = currentLang === 'zh' ? result.errorMessage.zh : result.errorMessage.en;
            emailError.classList.add('show');
          }
        }
      });
    }

    if (currentState === 'sent-success') {
      const btn = document.getElementById('reset-countdown-btn') as HTMLButtonElement | null;
      btn?.addEventListener('click', async () => {
        if (countdownSeconds <= 0) {
          startCountdown();
          await sendResetPasswordEmail(resetEmail);
        }
      });
    }
  }

  // 全域語系切換監聽
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      currentLang = customEvent.detail.lang;
      const titleEl = document.getElementById('reset-title');
      if (titleEl) titleEl.textContent = currentLang === 'zh' ? '重設密碼' : 'Reset Password';
      if (cardContainer) {
        cardContainer.innerHTML = renderCard(currentState, resetEmail, currentLang);
        bindEvents();
      }
    }
  });

  bindEvents();
  if (currentState === 'sent-success') {
    startCountdown();
  }
}
