/* ============================================================
   加入會員 (Register Page) — 依據 1440px 桌面端設計稿 (支援雙語系)
   ============================================================ */
import './register.css';
import { currentGlobalLang } from '../components/header';
import { getCurrentPath, getQueryParams } from '../router';
import {
  registerStep1WithEmail,
  verifyEmailOtp,
  resendVerificationOtp,
  submitDoctorProfile,
} from '../services/auth.service';

let currentLang: 'zh' | 'en' = 'zh';

// 狀態控制：'step1-form' | 'step1-verify' | 'step2' | 'step3-success'
type RegisterStep = 'step1-form' | 'step1-verify' | 'step2' | 'step3-success';
let currentStepState: RegisterStep = 'step1-form';
let registeredEmail = 'doctor@example.com';
let countdownSeconds = 60;
let countdownTimer: number | null = null;

const TAIWAN_CITIES = [
  { zh: '台北市', en: 'Taipei City' },
  { zh: '新北市', en: 'New Taipei City' },
  { zh: '基隆市', en: 'Keelung City' },
  { zh: '桃園市', en: 'Taoyuan City' },
  { zh: '新竹市', en: 'Hsinchu City' },
  { zh: '新竹縣', en: 'Hsinchu County' },
  { zh: '苗栗縣', en: 'Miaoli County' },
  { zh: '台中市', en: 'Taichung City' },
  { zh: '彰化縣', en: 'Changhua County' },
  { zh: '南投縣', en: 'Nantou County' },
  { zh: '雲林縣', en: 'Yunlin County' },
  { zh: '嘉義市', en: 'Chiayi City' },
  { zh: '嘉義縣', en: 'Chiayi County' },
  { zh: '台南市', en: 'Tainan City' },
  { zh: '高雄市', en: 'Kaohsiung City' },
  { zh: '屏東縣', en: 'Pingtung County' },
  { zh: '宜蘭縣', en: 'Yilan County' },
  { zh: '花蓮縣', en: 'Hualien County' },
  { zh: '台東縣', en: 'Taitung County' },
  { zh: '澎湖縣', en: 'Penghu County' },
  { zh: '金門縣', en: 'Kinmen County' },
  { zh: '連江縣', en: 'Lienchiang County' },
];

/** 渲染步驟條 */
function renderSteps(step: RegisterStep, lang: 'zh' | 'en'): string {
  const step1Name = lang === 'zh' ? '建立帳號' : 'Account';
  const step2Name = lang === 'zh' ? '填寫資料' : 'Profile';
  const step3Name = lang === 'zh' ? '送出審核' : 'Review';

  let step1Class = 'step-item';
  let step1Content = '1';

  let step2Class = 'step-item';
  let step2Content = '2';

  let step3Class = 'step-item';
  let step3Content = '3';

  if (step === 'step1-form' || step === 'step1-verify') {
    step1Class += ' step-active';
  } else if (step === 'step2') {
    step1Class += ' step-completed';
    step1Content = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    step2Class += ' step-active';
  } else if (step === 'step3-success') {
    step1Class += ' step-completed';
    step1Content = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    step2Class += ' step-completed';
    step2Content = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    step3Class += ' step-active';
  }

  return `
    <div class="register-steps">
      <div class="${step1Class}" id="step-indicator-1">
        <div class="step-circle">${step1Content}</div>
        <div class="step-name">${step1Name}</div>
      </div>
      <div class="step-separator">&gt;</div>
      <div class="${step2Class}" id="step-indicator-2">
        <div class="step-circle">${step2Content}</div>
        <div class="step-name">${step2Name}</div>
      </div>
      <div class="step-separator">&gt;</div>
      <div class="${step3Class}" id="step-indicator-3">
        <div class="step-circle">${step3Content}</div>
        <div class="step-name">${step3Name}</div>
      </div>
    </div>
  `;
}

/** 渲染卡片內容 */
function renderCardContent(step: RegisterStep, lang: 'zh' | 'en'): string {
  // 狀態 1-A：建立帳號表單
  if (step === 'step1-form') {
    return `
      <form class="reg-form" id="register-step1-form" novalidate>
        <div class="reg-form-group">
          <label class="reg-label" for="reg-email">
            Email <span class="req-star">*</span>
          </label>
          <input type="email" id="reg-email" class="reg-input" placeholder="name@example.com" required />
          <div class="field-error-msg" id="reg-email-error">${lang === 'zh' ? '請輸入有效的電子信箱' : 'Please enter a valid email address'}</div>
        </div>

        <div class="reg-form-group">
          <label class="reg-label" for="reg-password">
            ${lang === 'zh' ? '密碼' : 'Password'} <span class="req-star">*</span>
          </label>
          <input type="password" id="reg-password" class="reg-input" placeholder="${lang === 'zh' ? '請輸入密碼' : 'Enter password'}" required minlength="8" />
          <div class="reg-helper-text">
            ${lang === 'zh'
              ? '密碼需至少 8 個字元，可使用英文、數字及常見符號，英文大小寫視為不同字元。'
              : 'Password must be at least 8 characters with letters, numbers, and symbols.'
            }
          </div>
          <div class="field-error-msg" id="reg-password-error">${lang === 'zh' ? '密碼長度需至少 8 個字元' : 'Password must be at least 8 characters'}</div>
        </div>

        <div class="reg-form-group">
          <label class="reg-label" for="reg-confirm-password">
            ${lang === 'zh' ? '再次確認密碼' : 'Confirm Password'} <span class="req-star">*</span>
          </label>
          <input type="password" id="reg-confirm-password" class="reg-input" placeholder="${lang === 'zh' ? '請輸入密碼' : 'Confirm password'}" required />
          <div class="field-error-msg" id="reg-confirm-error">${lang === 'zh' ? '兩次密碼輸入不一致' : 'Passwords do not match'}</div>
        </div>

        <div class="reg-checkbox-group">
          <label class="reg-checkbox-label">
            <input type="checkbox" id="reg-privacy-agree" required />
            <span>
              ${lang === 'zh' ? '我已閱讀並同意' : 'I have read and agree to'}
              <a href="#/privacy" class="reg-link">${lang === 'zh' ? '會員隱私條款' : 'Member Privacy Policy'}</a>
              <span class="req-star">*</span>
            </span>
          </label>
          <div class="field-error-msg" id="reg-privacy-error">${lang === 'zh' ? '請勾選同意會員隱私條款' : 'Please accept the privacy policy'}</div>
        </div>

        <button type="submit" class="reg-primary-btn" id="reg-step1-submit-btn">
          ${lang === 'zh' ? '註冊並驗證信箱' : 'Register & Verify Email'}
        </button>

        <div class="reg-footer-tip">
          ${lang === 'zh' ? '已有會員帳號？' : 'Already have an account?'}
          <a href="#/login">${lang === 'zh' ? '返回登入' : 'Log In'}</a>
        </div>
      </form>
    `;
  }

  // 狀態 1-B：發送驗證信畫面
  if (step === 'step1-verify') {
    const resendBtnText = countdownSeconds > 0
      ? (lang === 'zh' ? `${countdownSeconds} 秒後可再次寄送` : `Resend in ${countdownSeconds}s`)
      : (lang === 'zh' ? '重新寄送驗證碼' : 'Resend Code');

    return `
      <div class="verify-view">
        <!-- 藍色信件圖示 -->
        <div class="verify-icon-wrapper">
          <svg class="verify-icon" viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="64" height="46" rx="4" fill="#235D97" />
            <path d="M4 6L34 28L64 6" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 46L24 28M64 46L44 28" stroke="#1875c7" stroke-width="2" stroke-linecap="round" />
            <!-- 打勾圓章 -->
            <circle cx="50" cy="44" r="14" fill="#ffffff" stroke="#1875c7" stroke-width="3" />
            <polyline points="44 44 48 48 56 40" fill="none" stroke="#1875c7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <h2 class="verify-title">${lang === 'zh' ? '已發送驗證信至您的信箱' : 'Verification Email Sent'}</h2>
        <p class="verify-subtitle">
          ${lang === 'zh'
            ? `已寄至 <strong id="verify-email-display">${registeredEmail}</strong>，連結 30 分鐘內有效。<br/>若未收到，請確認垃圾郵件匣。`
            : `Sent to <strong id="verify-email-display">${registeredEmail}</strong>, valid for 30 minutes.<br/>Please check your spam folder if not received.`
          }
        </p>

        <form id="verify-form" novalidate>
          <div class="reg-form-group" style="text-align:left;">
            <label class="reg-label" for="reg-verify-code">
              ${lang === 'zh' ? '驗證碼' : 'Verification Code'} <span class="req-star">*</span>
            </label>
            <div class="verify-input-group">
              <input type="text" id="reg-verify-code" class="reg-input" placeholder="${lang === 'zh' ? '請輸入' : 'Enter code'}" maxlength="6" required />
              <button type="button" class="verify-resend-btn" id="verify-resend-btn" ${countdownSeconds > 0 ? 'disabled' : ''}>
                ${resendBtnText}
              </button>
            </div>
            <div class="field-error-msg" id="reg-verify-error">${lang === 'zh' ? '請輸入 6 位數驗證碼' : 'Please enter 6-digit code'}</div>
          </div>

          <button type="submit" class="reg-primary-btn" id="verify-submit-btn" style="margin-top:20px;">
            ${lang === 'zh' ? '驗證信箱' : 'Verify Email'}
          </button>
        </form>
      </div>
    `;
  }

  // 狀態 2：填寫資料
  if (step === 'step2') {
    const cityOptions = TAIWAN_CITIES.map(c => `
      <option value="${c.zh}">${lang === 'zh' ? c.zh : c.en}</option>
    `).join('');

    return `
      <!-- 法規與保護說明框 -->
      <div class="step2-notice-box">
        <p class="step2-notice-text">
          ${lang === 'zh'
            ? `依醫療器材相關法規，產品與臨床資訊僅供醫事人員參閱，故需確認您的身分。<br/>所填資料僅供身分核對，不會用於行銷推播，亦不會提供第三方。`
            : `According to medical device regulations, clinical information is restricted to healthcare professionals.<br/>Data is used solely for verification and will not be shared.`
          }
        </p>
      </div>

      <form class="reg-form" id="register-step2-form" novalidate>
        <div class="reg-form-group">
          <label class="reg-label" for="doctor-name">
            ${lang === 'zh' ? '醫師姓名' : 'Doctor Name'} <span class="req-star">*</span>
          </label>
          <input type="text" id="doctor-name" class="reg-input" placeholder="${lang === 'zh' ? '請輸入' : 'Enter name'}" required />
          <div class="field-error-msg" id="doctor-name-error">${lang === 'zh' ? '請輸入醫師姓名' : 'Please enter doctor name'}</div>
        </div>

        <div class="reg-form-group">
          <label class="reg-label">
            ${lang === 'zh' ? '人員類別' : 'Professional Category'} <span class="req-star">*</span>
          </label>
          <div class="reg-radio-group">
            <label class="reg-radio-label">
              <input type="radio" name="personnel-category" value="dentist" checked />
              <span>${lang === 'zh' ? '牙醫師' : 'Dentist'}</span>
            </label>
            <label class="reg-radio-label">
              <input type="radio" name="personnel-category" value="other" />
              <span>${lang === 'zh' ? '其他醫事人員' : 'Other Medical Professional'}</span>
            </label>
          </div>
        </div>

        <div class="reg-form-group">
          <label class="reg-label" for="doctor-city">
            ${lang === 'zh' ? '職業縣市' : 'Practicing City'} <span class="req-star">*</span>
          </label>
          <div class="reg-select-wrapper">
            <select id="doctor-city" class="reg-select" required>
              <option value="" disabled selected>${lang === 'zh' ? '請選擇' : 'Select city'}</option>
              ${cityOptions}
            </select>
            <svg class="reg-select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <div class="field-error-msg" id="doctor-city-error">${lang === 'zh' ? '請選擇職業縣市' : 'Please select practicing city'}</div>
        </div>

        <div class="reg-form-group">
          <label class="reg-label" for="clinic-name">
            ${lang === 'zh' ? '執業診所或醫院名稱' : 'Clinic or Hospital Name'} <span class="req-star">*</span>
          </label>
          <input type="text" id="clinic-name" class="reg-input" placeholder="${lang === 'zh' ? '請輸入' : 'Enter clinic/hospital name'}" required />
          <div class="field-error-msg" id="clinic-name-error">${lang === 'zh' ? '請輸入執業診所或醫院名稱' : 'Please enter clinic or hospital name'}</div>
        </div>

        <button type="submit" class="reg-primary-btn" id="reg-step2-submit-btn" style="margin-top:28px;">
          ${lang === 'zh' ? '送出審核' : 'Submit for Review'}
        </button>
      </form>
    `;
  }

  // 狀態 3：送出審核成功
  return `
    <div class="success-view">
      <div class="success-icon-wrapper">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>

      <h2 class="success-title">${lang === 'zh' ? '資料已送出審核' : 'Application Submitted'}</h2>
      <p class="success-desc">
        ${lang === 'zh'
          ? `感謝您的註冊！我們將於 1-2 個工作天內完成身分資格審核。<br/>審核通過後將發送通知信至您的信箱，屆時即可下載臨床技術支持文獻與操作手冊。`
          : `Thank you for registering! Qualification verification will be completed in 1-2 business days.<br/>Notification will be sent via email once approved.`
        }
      </p>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="#/" class="reg-primary-btn" style="text-decoration:none;max-width:200px;">
          ${lang === 'zh' ? '返回首頁' : 'Back to Home'}
        </a>
        <a href="#/login" class="reg-primary-btn" style="text-decoration:none;max-width:200px;background:#ffffff;color:#1875c7;border:1px solid #1875c7;">
          ${lang === 'zh' ? '前往登入' : 'Go to Login'}
        </a>
      </div>
    </div>
  `;
}

/** 輸出加入會員完整頁面 HTML */
export function registerPage(): string {
  currentLang = currentGlobalLang;

  // 支援根據 URL 路徑別名或 ?step= 直達特定步驟
  const path = getCurrentPath();
  const params = getQueryParams();
  const stepParam = params.get('step');

  if (path === '/register/verify' || stepParam === 'verify' || stepParam === '1b') {
    currentStepState = 'step1-verify';
  } else if (path === '/register/step2' || stepParam === '2') {
    currentStepState = 'step2';
  } else if (path === '/register/step3' || stepParam === '3') {
    currentStepState = 'step3-success';
  } else {
    currentStepState = 'step1-form';
  }

  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  countdownSeconds = 60;

  const titleText = currentLang === 'zh' ? '加入會員' : 'Become a Member';
  const subtitleText = currentLang === 'zh'
    ? '只需 30 秒填寫 4 個基本欄位，<br/>免上傳證件完成身分審核，即可參閱並下載臨床技術文件'
    : 'Takes only 30s to complete 4 basic fields.<br/>Access and download clinical technical documents upon verification.';

  return `
    <div class="register-page">

      <!-- Breadcrumb -->
      <div class="register-breadcrumb">
        <a href="#/" class="breadcrumb-link">HOME</a>
        <span class="breadcrumb-sep"> / </span>
        <span class="breadcrumb-current">MEMBER LOGIN</span>
      </div>

      <!-- 背景裝飾弧形 -->
      <div class="register-bg-dome-wrapper">
        <svg class="register-bg-dome" width="1440" height="920" viewBox="0 0 1440 920" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.5" filter="url(#filter0_dif_register)">
            <path d="M1440 820C1440 725.448 1421.38 631.822 1385.19 544.468C1349.01 457.113 1295.98 377.741 1229.12 310.883C1162.26 244.025 1082.89 190.99 995.532 154.807C908.178 118.623 814.552 100 720 100C625.448 100 531.822 118.623 444.468 154.807C357.113 190.99 277.741 244.025 210.883 310.883C144.025 377.741 90.9901 457.113 54.8067 544.468C18.6233 631.822 -8.26597e-06 725.448 0 820L720 820H1440Z" fill="#F2F2F7"/>
          </g>
          <defs>
            <filter id="filter0_dif_register" x="-100" y="0" width="1640" height="920" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.905882 0 0 0 0 0.933333 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_register"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_register" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_register"/>
              <feGaussianBlur stdDeviation="0" result="effect3_foregroundBlur_register"/>
            </filter>
          </defs>
        </svg>
      </div>

      <!-- 頁面標題區 -->
      <div class="register-hero">
        <h1 class="register-title" id="register-title">${titleText}</h1>
        <p class="register-subtitle" id="register-subtitle">${subtitleText}</p>

        <!-- 步驟指示器 -->
        <div id="register-steps-container">
          ${renderSteps(currentStepState, currentLang)}
        </div>
      </div>

      <!-- 表單卡片 -->
      <div class="register-card-wrapper">
        <div class="register-card" id="register-card">
          ${renderCardContent(currentStepState, currentLang)}
        </div>
      </div>

    </div>
  `;
}

/** 初始化註冊頁面互動行為 */
export function initRegisterPage(): void {
  const cardContainer = document.getElementById('register-card');
  const stepsContainer = document.getElementById('register-steps-container');

  function updateView(step: RegisterStep) {
    currentStepState = step;
    if (stepsContainer) {
      stepsContainer.innerHTML = renderSteps(step, currentLang);
    }
    if (cardContainer) {
      cardContainer.innerHTML = renderCardContent(step, currentLang);
      bindCurrentStepEvents();
    }
  }

  function startCountdown() {
    countdownSeconds = 60;
    if (countdownTimer) clearInterval(countdownTimer);

    const resendBtn = document.getElementById('verify-resend-btn') as HTMLButtonElement | null;
    if (resendBtn) {
      resendBtn.disabled = true;
      resendBtn.textContent = currentLang === 'zh' ? `60 秒後可再次寄送` : `Resend in 60s`;
    }

    countdownTimer = window.setInterval(() => {
      countdownSeconds--;
      if (resendBtn) {
        if (countdownSeconds > 0) {
          resendBtn.disabled = true;
          resendBtn.textContent = currentLang === 'zh'
            ? `${countdownSeconds} 秒後可再次寄送`
            : `Resend in ${countdownSeconds}s`;
        } else {
          resendBtn.disabled = false;
          resendBtn.textContent = currentLang === 'zh' ? '重新寄送驗證碼' : 'Resend Code';
          if (countdownTimer) clearInterval(countdownTimer);
        }
      }
    }, 1000);
  }

  function bindCurrentStepEvents() {
    // 狀態 1-A：建立帳號
    if (currentStepState === 'step1-form') {
      const form = document.getElementById('register-step1-form') as HTMLFormElement | null;
      const emailInput = document.getElementById('reg-email') as HTMLInputElement | null;
      const passwordInput = document.getElementById('reg-password') as HTMLInputElement | null;
      const confirmInput = document.getElementById('reg-confirm-password') as HTMLInputElement | null;
      const privacyCheck = document.getElementById('reg-privacy-agree') as HTMLInputElement | null;

      const emailError = document.getElementById('reg-email-error');
      const passwordError = document.getElementById('reg-password-error');
      const confirmError = document.getElementById('reg-confirm-error');
      const privacyError = document.getElementById('reg-privacy-error');
      const submitBtn = document.getElementById('reg-step1-submit-btn') as HTMLButtonElement | null;

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        let valid = true;

        // Email 驗證
        const emailVal = emailInput?.value.trim() || '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
          emailInput?.classList.add('input-error');
          if (emailError) {
            emailError.textContent = currentLang === 'zh' ? '請輸入有效的電子信箱' : 'Please enter a valid email address';
            emailError.classList.add('show');
          }
          valid = false;
        } else {
          emailInput?.classList.remove('input-error');
          emailError?.classList.remove('show');
        }

        // 密碼驗證
        const passVal = passwordInput?.value || '';
        if (passVal.length < 8) {
          passwordInput?.classList.add('input-error');
          passwordError?.classList.add('show');
          valid = false;
        } else {
          passwordInput?.classList.remove('input-error');
          passwordError?.classList.remove('show');
        }

        // 確認密碼
        const confirmVal = confirmInput?.value || '';
        if (confirmVal !== passVal || confirmVal === '') {
          confirmInput?.classList.add('input-error');
          confirmError?.classList.add('show');
          valid = false;
        } else {
          confirmInput?.classList.remove('input-error');
          confirmError?.classList.remove('show');
        }

        // 條款勾選
        if (!privacyCheck?.checked) {
          privacyError?.classList.add('show');
          valid = false;
        } else {
          privacyError?.classList.remove('show');
        }

        if (!valid) return;

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = currentLang === 'zh' ? '處理中...' : 'Processing...';
        }

        const result = await registerStep1WithEmail(emailVal, passVal);

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = currentLang === 'zh' ? '註冊並驗證信箱' : 'Register & Verify Email';
        }

        if (result.success) {
          registeredEmail = emailVal;
          updateView('step1-verify');
          startCountdown();
        } else if (result.errorMessage) {
          emailInput?.classList.add('input-error');
          if (emailError) {
            emailError.textContent = currentLang === 'zh' ? result.errorMessage.zh : result.errorMessage.en;
            emailError.classList.add('show');
          }
        }
      });
    }

    // 狀態 1-B：發送驗證信畫面
    if (currentStepState === 'step1-verify') {
      const verifyForm = document.getElementById('verify-form') as HTMLFormElement | null;
      const codeInput = document.getElementById('reg-verify-code') as HTMLInputElement | null;
      const codeError = document.getElementById('reg-verify-error');
      const resendBtn = document.getElementById('verify-resend-btn') as HTMLButtonElement | null;
      const verifySubmitBtn = document.getElementById('verify-submit-btn') as HTMLButtonElement | null;

      resendBtn?.addEventListener('click', async () => {
        if (countdownSeconds <= 0) {
          startCountdown();
          await resendVerificationOtp(registeredEmail);
        }
      });

      verifyForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const codeVal = codeInput?.value.trim() || '';
        if (codeVal.length < 6) {
          codeInput?.classList.add('input-error');
          if (codeError) {
            codeError.textContent = currentLang === 'zh' ? '請輸入 6 位數驗證碼' : 'Please enter 6-digit code';
            codeError.classList.add('show');
          }
          return;
        }

        codeInput?.classList.remove('input-error');
        codeError?.classList.remove('show');

        if (verifySubmitBtn) {
          verifySubmitBtn.disabled = true;
          verifySubmitBtn.textContent = currentLang === 'zh' ? '驗證中...' : 'Verifying...';
        }

        const result = await verifyEmailOtp(codeVal);

        if (verifySubmitBtn) {
          verifySubmitBtn.disabled = false;
          verifySubmitBtn.textContent = currentLang === 'zh' ? '驗證信箱' : 'Verify Email';
        }

        if (result.success) {
          if (countdownTimer) clearInterval(countdownTimer);
          updateView('step2');
        } else if (result.errorMessage) {
          codeInput?.classList.add('input-error');
          if (codeError) {
            codeError.textContent = currentLang === 'zh' ? result.errorMessage.zh : result.errorMessage.en;
            codeError.classList.add('show');
          }
        }
      });
    }

    // 狀態 2：填寫資料
    if (currentStepState === 'step2') {
      const form2 = document.getElementById('register-step2-form') as HTMLFormElement | null;
      const doctorName = document.getElementById('doctor-name') as HTMLInputElement | null;
      const doctorCity = document.getElementById('doctor-city') as HTMLSelectElement | null;
      const clinicName = document.getElementById('clinic-name') as HTMLInputElement | null;
      const step2SubmitBtn = document.getElementById('reg-step2-submit-btn') as HTMLButtonElement | null;

      const nameError = document.getElementById('doctor-name-error');
      const cityError = document.getElementById('doctor-city-error');
      const clinicError = document.getElementById('clinic-name-error');

      form2?.addEventListener('submit', async (e) => {
        e.preventDefault();
        let valid = true;

        if (!doctorName?.value.trim()) {
          doctorName?.classList.add('input-error');
          nameError?.classList.add('show');
          valid = false;
        } else {
          doctorName?.classList.remove('input-error');
          nameError?.classList.remove('show');
        }

        if (!doctorCity?.value) {
          doctorCity?.classList.add('input-error');
          cityError?.classList.add('show');
          valid = false;
        } else {
          doctorCity?.classList.remove('input-error');
          cityError?.classList.remove('show');
        }

        if (!clinicName?.value.trim()) {
          clinicName?.classList.add('input-error');
          clinicError?.classList.add('show');
          valid = false;
        } else {
          clinicName?.classList.remove('input-error');
          clinicError?.classList.remove('show');
        }

        if (!valid) return;

        const categoryRadio = document.querySelector<HTMLInputElement>('input[name="personnel-category"]:checked');
        const profile = {
          name: doctorName?.value.trim() || '',
          category: (categoryRadio?.value === 'other' ? 'other' : 'dentist') as 'dentist' | 'other',
          city: doctorCity?.value || '',
          clinic: clinicName?.value.trim() || '',
        };

        if (step2SubmitBtn) {
          step2SubmitBtn.disabled = true;
          step2SubmitBtn.textContent = currentLang === 'zh' ? '送出中...' : 'Submitting...';
        }

        const result = await submitDoctorProfile(profile);

        if (step2SubmitBtn) {
          step2SubmitBtn.disabled = false;
          step2SubmitBtn.textContent = currentLang === 'zh' ? '送出審核' : 'Submit for Review';
        }

        if (result.success) {
          window.location.hash = '#/membership-status';
        } else if (result.errorMessage) {
          if (clinicError) {
            clinicError.textContent = currentLang === 'zh' ? result.errorMessage.zh : result.errorMessage.en;
            clinicError.classList.add('show');
          }
        }
      });
    }
  }

  // 全域語系切換監聽
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      currentLang = customEvent.detail.lang;
      const titleEl = document.getElementById('register-title');
      const subtitleEl = document.getElementById('register-subtitle');
      if (titleEl) titleEl.textContent = currentLang === 'zh' ? '加入會員' : 'Become a Member';
      if (subtitleEl) {
        subtitleEl.innerHTML = currentLang === 'zh'
          ? '只需 30 秒填寫 4 個基本欄位，<br/>免上傳證件完成身分審核，即可參閱並下載臨床技術文件'
          : 'Takes only 30s to complete 4 basic fields.<br/>Access and download clinical technical documents upon verification.';
      }
      updateView(currentStepState);
    }
  });

  bindCurrentStepEvents();
  if (currentStepState === 'step1-verify') {
    startCountdown();
  }
}
