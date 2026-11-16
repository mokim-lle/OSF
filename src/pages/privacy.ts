/* 隱私條款 — 對照 1440px 設計稿 (支援中英雙語系) */
import './privacy.css';
import { currentGlobalLang } from '../components/header';

const PRIVACY_I18N = {
  zh: {
    backBtn: '返回上一頁',
    title: '隱私條款',
    intro:
      '歐舒福科技股份有限公司非常重視您的個人資料保護，並遵從《個人資料保護法》之規範。為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，請您詳閱下列內容：',
    s1Title: '一、隱私權保護政策的適用範圍',
    s1Text:
      '本網站的隱私權保護政策，適用於您在使用本網站會員登入及相關服務時所涉及的個人資料蒐集、處理與利用。',
    s2Title: '二、個人資料之蒐集、類別與使用方式',
    s2Lead: '資料處理原則：',
    s2Text:
      '將依服務需求保存您所提供之會員資料，並僅於會員身份驗證、資格審核、帳戶管理、提供會員服務及相關通知等目的範圍內使用。除依法令規定或取得您的同意外，不會將您的個人資料提供予無關之第三方。',
    s3Title: '三、資料之保護',
    s3Text:
      '本網站採用雲端主機及資料庫服務，並依系統架構採取適當之資訊安全措施，包括存取控制、資料傳輸安全機制及必要之防護措施，以維護您的個人資料安全，避免資料遭未經授權之存取、洩漏、竄改或損毀。',
    s4Title: '四、隱私權保護政策之修正',
    s4Text:
      '本網站隱私權保護政策將因應需求隨時進行修正，修正後的條項將刊登於網站上。',
  },
  en: {
    backBtn: 'Back',
    title: 'Privacy Policy',
    intro:
      'OSF Technology Co., Ltd. places the highest priority on protecting your personal data in compliance with the Personal Data Protection Act of Taiwan. To ensure you can use the services and information on this website with confidence, we hereby explain our Privacy Policy below:',
    s1Title: '1. Scope of the Privacy Policy',
    s1Text:
      'This Privacy Policy applies to the collection, processing, and use of personal data involved when you access member login and related clinical services on this website.',
    s2Title: '2. Collection, Categories, and Use of Personal Data',
    s2Lead: 'Data Processing Principles:',
    s2Text:
      'Member information provided by you is retained according to service requirements and used solely for identity verification, professional credential review, account administration, member services, and relevant notifications. Except as required by law or with your prior consent, your personal data will not be disclosed to unrelated third parties.',
    s3Title: '3. Data Protection & Security',
    s3Text:
      'This website utilizes cloud hosting and database infrastructure with appropriate information security controls—including access management, encrypted data transmission, and necessary protective safeguards—to protect your personal data against unauthorized access, disclosure, alteration, or destruction.',
    s4Title: '4. Amendments to the Privacy Policy',
    s4Text:
      'This Privacy Policy may be amended from time to time in response to operational or regulatory requirements. Updated provisions will be published on this website.',
  },
};

export function privacyPage(): string {
  const lang = currentGlobalLang || 'zh';
  const t = PRIVACY_I18N[lang] || PRIVACY_I18N.zh;

  return `
    <div class="privacy-page">

      <!-- Breadcrumb 與返回引導 -->
      <div class="privacy-breadcrumb-wrapper">
        <div class="privacy-breadcrumb">
          <a href="#/" class="breadcrumb-link">HOME</a>
          <span class="breadcrumb-sep"> / </span>
          <span class="breadcrumb-current">PRIVACY POLICY</span>
        </div>
        <a href="javascript:history.back()" class="privacy-back-btn" id="privacy-back-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span id="privacy-back-text">${t.backBtn}</span>
        </a>
      </div>

      <!-- 頁面標題 -->
      <div class="privacy-hero">
        <h1 class="privacy-title" id="privacy-title">${t.title}</h1>
      </div>

      <!-- 橫向分隔線 -->
      <div class="privacy-divider"></div>

      <!-- 條款內容容器 -->
      <div class="privacy-container">
        <p class="privacy-intro" id="privacy-intro">
          ${t.intro}
        </p>

        <!-- 一、隱私權保護政策的適用範圍 -->
        <div class="privacy-section">
          <h2 class="privacy-section-title" id="privacy-s1-title">${t.s1Title}</h2>
          <p class="privacy-section-text" id="privacy-s1-text">
            ${t.s1Text}
          </p>
        </div>

        <!-- 二、個人資料之蒐集、類別與使用方式 -->
        <div class="privacy-section">
          <h2 class="privacy-section-title" id="privacy-s2-title">${t.s2Title}</h2>
          <p class="privacy-section-text" id="privacy-s2-lead">${t.s2Lead}</p>
          <p class="privacy-section-text" id="privacy-s2-text">
            ${t.s2Text}
          </p>
        </div>

        <!-- 三、資料之保護 -->
        <div class="privacy-section">
          <h2 class="privacy-section-title" id="privacy-s3-title">${t.s3Title}</h2>
          <p class="privacy-section-text" id="privacy-s3-text">
            ${t.s3Text}
          </p>
        </div>

        <!-- 四、隱私權保護政策之修正 -->
        <div class="privacy-section">
          <h2 class="privacy-section-title" id="privacy-s4-title">${t.s4Title}</h2>
          <p class="privacy-section-text" id="privacy-s4-text">
            ${t.s4Text}
          </p>
        </div>
      </div>

    </div>
  `;
}

/** 彈窗用：回傳隱私條款 HTML 片段 */
export function privacyContent(langParam?: 'zh' | 'en'): string {
  const lang = langParam || currentGlobalLang || 'zh';
  const t = PRIVACY_I18N[lang] || PRIVACY_I18N.zh;
  return `
    <div class="privacy-content-modal">
      <p>${t.intro}</p>
      <h4>${t.s1Title}</h4>
      <p>${t.s1Text}</p>
      <h4>${t.s2Title}</h4>
      <p>${t.s2Lead} ${t.s2Text}</p>
      <h4>${t.s3Title}</h4>
      <p>${t.s3Text}</p>
      <h4>${t.s4Title}</h4>
      <p>${t.s4Text}</p>
    </div>
  `;
}

export function initPrivacyPage(): void {
  if (!(window as unknown as { __privacyLangBound?: boolean }).__privacyLangBound) {
    (window as unknown as { __privacyLangBound?: boolean }).__privacyLangBound = true;
    window.addEventListener('langchange', (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
      const lang = customEvent.detail?.lang || currentGlobalLang || 'zh';
      const t = PRIVACY_I18N[lang] || PRIVACY_I18N.zh;
      const setText = (id: string, val: string) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };
      setText('privacy-back-text', t.backBtn);
      setText('privacy-title', t.title);
      setText('privacy-intro', t.intro);
      setText('privacy-s1-title', t.s1Title);
      setText('privacy-s1-text', t.s1Text);
      setText('privacy-s2-title', t.s2Title);
      setText('privacy-s2-lead', t.s2Lead);
      setText('privacy-s2-text', t.s2Text);
      setText('privacy-s3-title', t.s3Title);
      setText('privacy-s3-text', t.s3Text);
      setText('privacy-s4-title', t.s4Title);
      setText('privacy-s4-text', t.s4Text);
    });
  }
}
