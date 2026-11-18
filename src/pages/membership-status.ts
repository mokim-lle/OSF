/* ============================================================
   會員審核狀態 (Membership Status Page) — 依據 1440px 桌面端設計稿 (支援雙語系)
   ============================================================ */
import './membership-status.css';
import { currentGlobalLang } from '../components/header';
import { getCurrentPath, getQueryParams } from '../router';

let currentLang: 'zh' | 'en' = 'zh';

// 狀態：'pending' (審核中) | 'rejected' (退件修正)
export type MembershipStatusMode = 'pending' | 'rejected';
let currentMode: MembershipStatusMode = 'pending';

interface MemberProfile {
  name: string;
  category: 'dentist' | 'other';
  city: string;
  clinic: string;
}

const defaultProfile: MemberProfile = {
  name: '李曉明',
  category: 'dentist',
  city: '新北市',
  clinic: '康欣診所',
};

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

function getStoredProfile(): MemberProfile {
  try {
    const raw = sessionStorage.getItem('osf_doctor_profile');
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    // ignore
  }
  return defaultProfile;
}

function saveStoredProfile(profile: MemberProfile) {
  try {
    sessionStorage.setItem('osf_doctor_profile', JSON.stringify(profile));
  } catch (e) {
    // ignore
  }
}

/** 渲染卡片內容 */
function renderCardContent(mode: MembershipStatusMode, profile: MemberProfile, lang: 'zh' | 'en'): string {
  if (mode === 'pending') {
    const categoryText = profile.category === 'dentist'
      ? (lang === 'zh' ? '牙醫師' : 'Dentist')
      : (lang === 'zh' ? '其他醫事人員' : 'Other Medical Professional');

    return `
      <!-- 頂部：資料已送出綠色打勾標題 -->
      <div class="status-success-header">
        <div class="status-success-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div class="status-success-heading">${lang === 'zh' ? '資料已送出' : 'Application Submitted'}</div>
      </div>

      <div class="status-info-list">
        <div class="status-info-item">
          <div class="status-info-label">${lang === 'zh' ? '醫師姓名' : 'Doctor Name'}</div>
          <div class="status-info-value" id="status-val-name">${profile.name}</div>
        </div>

        <div class="status-info-item">
          <div class="status-info-label">${lang === 'zh' ? '人員類別' : 'Category'}</div>
          <div class="status-info-value" id="status-val-category">${categoryText}</div>
        </div>

        <div class="status-info-item">
          <div class="status-info-label">${lang === 'zh' ? '職業縣市' : 'City'}</div>
          <div class="status-info-value" id="status-val-city">${profile.city}</div>
        </div>

        <div class="status-info-item">
          <div class="status-info-label">${lang === 'zh' ? '執業診所或醫院名稱' : 'Clinic / Hospital Name'}</div>
          <div class="status-info-value" id="status-val-clinic">${profile.clinic}</div>
        </div>
      </div>

      <a href="#/" class="status-outline-btn">
        ${lang === 'zh' ? '回到首頁' : 'Back to Home'}
      </a>
    `;
  }

  // 狀態 2：退件原因與重新送出表單
  const cityOptions = TAIWAN_CITIES.map(c => `
    <option value="${c.zh}" ${profile.city === c.zh ? 'selected' : ''}>${lang === 'zh' ? c.zh : c.en}</option>
  `).join('');

  return `
    <!-- 退件原因警告框 -->
    <div class="status-reject-box">
      <div class="status-reject-title">${lang === 'zh' ? '退件原因' : 'Rejection Reason'}</div>
      <div class="status-reject-desc">
        ${lang === 'zh'
          ? '所填姓名與執業機構無法核對，請確認姓名是否與證書一致，並填寫完整的診所或醫院名稱。'
          : 'Name and medical institution could not be verified. Please ensure your name matches official certificates and provide the full clinic/hospital name.'
        }
      </div>
    </div>

    <!-- 修正表單 -->
    <form class="status-form" id="status-resubmit-form" novalidate>
      <div class="status-form-group">
        <label class="status-label" for="resubmit-name">
          ${lang === 'zh' ? '醫師姓名' : 'Doctor Name'} <span class="status-req-star">*</span>
        </label>
        <input type="text" id="resubmit-name" class="status-input" value="${profile.name}" required />
      </div>

      <div class="status-form-group">
        <label class="status-label">
          ${lang === 'zh' ? '人員類別' : 'Category'} <span class="status-req-star">*</span>
        </label>
        <div class="status-radio-group">
          <label class="status-radio-label">
            <input type="radio" name="resubmit-category" value="dentist" ${profile.category === 'dentist' ? 'checked' : ''} />
            <span>${lang === 'zh' ? '牙醫師' : 'Dentist'}</span>
          </label>
          <label class="status-radio-label">
            <input type="radio" name="resubmit-category" value="other" ${profile.category === 'other' ? 'checked' : ''} />
            <span>${lang === 'zh' ? '其他醫事人員' : 'Other Medical Professional'}</span>
          </label>
        </div>
      </div>

      <div class="status-form-group">
        <label class="status-label" for="resubmit-city">
          ${lang === 'zh' ? '職業縣市' : 'City'} <span class="status-req-star">*</span>
        </label>
        <div class="status-select-wrapper">
          <select id="resubmit-city" class="status-select" required>
            ${cityOptions}
          </select>
          <svg class="status-select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <div class="status-form-group">
        <label class="status-label" for="resubmit-clinic">
          ${lang === 'zh' ? '執業診所或醫院名稱' : 'Clinic / Hospital Name'} <span class="status-req-star">*</span>
        </label>
        <input type="text" id="resubmit-clinic" class="status-input" value="${profile.clinic}" required />
      </div>

      <button type="submit" class="status-primary-btn" id="status-submit-btn">
        ${lang === 'zh' ? '送出審核' : 'Submit for Review'}
      </button>
    </form>
  `;
}

/** 輸出會員審核狀態完整 HTML */
export function membershipStatusPage(): string {
  currentLang = currentGlobalLang;
  const profile = getStoredProfile();

  const path = getCurrentPath();
  const params = getQueryParams();
  const modeParam = params.get('mode');

  if (path.endsWith('/rejected') || modeParam === 'rejected' || modeParam === '2') {
    currentMode = 'rejected';
  } else {
    currentMode = 'pending';
  }

  const titleText = currentLang === 'zh' ? '會員審核中' : 'Membership Under Review';
  const subtitlePending = currentLang === 'zh'
    ? '專員正在核對您的醫事人員身分，通常於 1-2 個工作日內完成（不含週末及國定假日）。<br/>審核通過後即可瀏覽專區文件。'
    : 'Our team is verifying your medical credentials, typically within 1-2 business days (excluding weekends & holidays).<br/>Documents will be accessible once approved.';
  const subtitleRejected = currentLang === 'zh'
    ? '審核未通過，請修正後重新送出'
    : 'Review unsuccessful. Please revise your details and resubmit.';

  const currentSubtitle = currentMode === 'pending' ? subtitlePending : subtitleRejected;

  return `
    <div class="status-page">

      <!-- Breadcrumb -->
      <div class="status-breadcrumb">
        <a href="#/" class="breadcrumb-link">HOME</a>
        <span class="breadcrumb-sep"> / </span>
        <span class="breadcrumb-current">MEMBERSHIP STATUS</span>
      </div>

      <!-- 背景裝飾弧形 -->
      <div class="status-bg-dome-wrapper">
        <svg class="status-bg-dome" width="1440" height="920" viewBox="0 0 1440 920" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.5" filter="url(#filter0_dif_status)">
            <path d="M1440 820C1440 725.448 1421.38 631.822 1385.19 544.468C1349.01 457.113 1295.98 377.741 1229.12 310.883C1162.26 244.025 1082.89 190.99 995.532 154.807C908.178 118.623 814.552 100 720 100C625.448 100 531.822 118.623 444.468 154.807C357.113 190.99 277.741 244.025 210.883 310.883C144.025 377.741 90.9901 457.113 54.8067 544.468C18.6233 631.822 -8.26597e-06 725.448 0 820L720 820H1440Z" fill="#F2F2F7"/>
          </g>
          <defs>
            <filter id="filter0_dif_status" x="-100" y="0" width="1640" height="920" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.905882 0 0 0 0 0.933333 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_status"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_status" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_status"/>
              <feGaussianBlur stdDeviation="0" result="effect3_foregroundBlur_status"/>
            </filter>
          </defs>
        </svg>
      </div>

      <!-- 頁面標題區 (Hero) -->
      <div class="status-hero">
        <h1 class="status-title" id="status-title">${titleText}</h1>
        <p class="status-subtitle" id="status-subtitle">${currentSubtitle}</p>
      </div>

      <!-- 卡片外層 -->
      <div class="status-card-wrapper">
        <!-- 狀態預覽切換控制（便於檢視審核中與退件修正兩畫面） -->
        <div class="status-preview-switch">
          <button type="button" class="status-switch-btn ${currentMode === 'pending' ? 'active' : ''}" id="btn-mode-pending">
            ${currentLang === 'zh' ? '模擬：審核中' : 'Demo: Pending'}
          </button>
          <button type="button" class="status-switch-btn ${currentMode === 'rejected' ? 'active' : ''}" id="btn-mode-rejected">
            ${currentLang === 'zh' ? '模擬：退件修正' : 'Demo: Rejected'}
          </button>
        </div>

        <div class="status-card" id="status-card">
          ${renderCardContent(currentMode, profile, currentLang)}
        </div>
      </div>

    </div>
  `;
}

/** 初始化審核狀態頁面互動 */
export function initMembershipStatusPage(): void {
  const cardContainer = document.getElementById('status-card');
  const subtitleEl = document.getElementById('status-subtitle');
  const btnPending = document.getElementById('btn-mode-pending');
  const btnRejected = document.getElementById('btn-mode-rejected');

  function updateMode(mode: MembershipStatusMode) {
    currentMode = mode;
    const profile = getStoredProfile();

    if (btnPending && btnRejected) {
      btnPending.classList.toggle('active', mode === 'pending');
      btnRejected.classList.toggle('active', mode === 'rejected');
    }

    if (subtitleEl) {
      if (mode === 'pending') {
        subtitleEl.innerHTML = currentLang === 'zh'
          ? '專員正在核對您的醫事人員身分，通常於 1-2 個工作日內完成（不含週末及國定假日）。<br/>審核通過後即可瀏覽專區文件。'
          : 'Our team is verifying your medical credentials, typically within 1-2 business days (excluding weekends & holidays).<br/>Documents will be accessible once approved.';
      } else {
        subtitleEl.innerHTML = currentLang === 'zh'
          ? '審核未通過，請修正後重新送出'
          : 'Review unsuccessful. Please revise your details and resubmit.';
      }
    }

    if (cardContainer) {
      cardContainer.innerHTML = renderCardContent(mode, profile, currentLang);
      bindEvents();
    }
  }

  function bindEvents() {
    if (currentMode === 'rejected') {
      const form = document.getElementById('status-resubmit-form') as HTMLFormElement | null;
      const nameInput = document.getElementById('resubmit-name') as HTMLInputElement | null;
      const citySelect = document.getElementById('resubmit-city') as HTMLSelectElement | null;
      const clinicInput = document.getElementById('resubmit-clinic') as HTMLInputElement | null;
      const categoryRadios = document.querySelectorAll<HTMLInputElement>('input[name="resubmit-category"]');

      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        let cat: 'dentist' | 'other' = 'dentist';
        categoryRadios.forEach(r => {
          if (r.checked && r.value === 'other') cat = 'other';
        });

        const newProfile: MemberProfile = {
          name: nameInput?.value.trim() || '李曉明',
          category: cat,
          city: citySelect?.value || '新北市',
          clinic: clinicInput?.value.trim() || '康欣診所',
        };
        saveStoredProfile(newProfile);
        alert(currentLang === 'zh' ? '資料已重新送出審核！' : 'Details resubmitted for review!');
        updateMode('pending');
      });
    }
  }

  btnPending?.addEventListener('click', () => updateMode('pending'));
  btnRejected?.addEventListener('click', () => updateMode('rejected'));

  // 全域語系切換監聽
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      currentLang = customEvent.detail.lang;
      const titleEl = document.getElementById('status-title');
      if (titleEl) titleEl.textContent = currentLang === 'zh' ? '會員審核中' : 'Membership Under Review';
      if (btnPending) btnPending.textContent = currentLang === 'zh' ? '模擬：審核中' : 'Demo: Pending';
      if (btnRejected) btnRejected.textContent = currentLang === 'zh' ? '模擬：退件修正' : 'Demo: Rejected';
      updateMode(currentMode);
    }
  });

  bindEvents();
}
