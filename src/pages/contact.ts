/* 聯絡我們 — 諮詢表單（對照 1440px 設計稿，支援中英雙語系） */
import './contact.css';
import { privacyContent } from './privacy';
import { currentGlobalLang } from '../components/header';
import { renderPageBgDome } from '../utils/dome';

const CONTACT_I18N = {
  zh: {
    title: '聯絡我們',
    subtitle: '我們將依您的身份，提供最合適的專業諮詢',
    tabDentistZh: '醫師',
    tabPatientZh: '患者',
    labelName: '姓名',
    phName: '請輸入',
    errName: '請填寫姓名',
    labelGender: '稱謂',
    genderMr: '先生',
    genderMs: '女士',
    labelRegion: '服務地區',
    regTaipei: '雙北',
    regHsinchu: '桃竹苗',
    regTaichung: '中彰投',
    regTainan: '雲嘉南',
    regKaohsiung: '高屏',
    regHualien: '宜花東',
    regIslands: '澎湖金門馬祖',
    regOverseas: '全球其他國家',
    errRegion: '醫師身份請至少選擇一個服務地區',
    labelClinic: '服務診所名稱',
    phClinic: 'OSF 牙醫診所',
    labelPhone: '聯絡電話',
    phPhone: '手機或市話（含分機）',
    errPhone: '請填寫有效的聯絡電話（至少 8 碼數字）',
    errPhoneEmpty: '請填寫聯絡電話',
    errPhoneAlpha: '電話號碼格式錯誤，不可包含英文字母',
    errPhoneLen: '請填寫有效的聯絡電話（電話號碼需為 8 至 15 碼數字）',
    labelMsg: '諮詢內容',
    phMsg: '請描述您的需求或問題',
    errMsg: '請填寫諮詢內容',
    privacyPrefix: '我已閱讀並同意',
    privacyLink: '隱私條款',
    errPrivacy: '請閱讀並同意隱私條款',
    submitBtn: '送出申請',
    submittingBtn: '送出申請中...',
    note: '送出後專人將於 1－2 個工作日內與您電聯。',
    modalTitle: '隱私權保護政策',
    modalClose: '關閉',
    modalAgree: '我已閱讀並同意',
    successTitle: '已收到您的諮詢',
    successDesc: '我們將於 1-2 個工作日內由專人回電，請留意來電。',
    successHomeBtn: '回到首頁',
  },
  en: {
    title: 'Contact Us',
    subtitle: 'We provide tailored professional consultation based on your role',
    tabDentistZh: 'Dentist',
    tabPatientZh: 'Patient',
    labelName: 'Full Name',
    phName: 'Enter your name',
    errName: 'Please enter your name',
    labelGender: 'Salutation',
    genderMr: 'Mr.',
    genderMs: 'Ms.',
    labelRegion: 'Service Region',
    regTaipei: 'Greater Taipei',
    regHsinchu: 'Taoyuan / Hsinchu / Miaoli',
    regTaichung: 'Central Taiwan',
    regTainan: 'Yunlin / Chiayi / Tainan',
    regKaohsiung: 'Kaohsiung / Pingtung',
    regHualien: 'Yilan / Hualien / Taitung',
    regIslands: 'Outlying Islands',
    regOverseas: 'International / Overseas',
    errRegion: 'Please select at least one service region',
    labelClinic: 'Clinic / Hospital Name',
    phClinic: 'OSF Dental Clinic',
    labelPhone: 'Contact Phone',
    phPhone: 'Mobile or landline (with ext.)',
    errPhone: 'Please enter a valid phone number (at least 8 digits)',
    errPhoneEmpty: 'Please enter your contact phone number',
    errPhoneAlpha: 'Invalid phone format: letters are not allowed',
    errPhoneLen: 'Please enter a valid phone number (8 to 15 digits)',
    labelMsg: 'Inquiry Message',
    phMsg: 'Please describe your inquiry or clinical needs',
    errMsg: 'Please enter your inquiry message',
    privacyPrefix: 'I have read and agree to the ',
    privacyLink: 'Privacy Policy',
    errPrivacy: 'Please read and accept the Privacy Policy',
    submitBtn: 'Submit Inquiry',
    submittingBtn: 'Submitting...',
    note: 'Our specialist will contact you by phone within 1–2 business days.',
    modalTitle: 'Privacy Policy',
    modalClose: 'Close',
    modalAgree: 'I Have Read and Agree',
    successTitle: 'Inquiry Received',
    successDesc: 'Our specialist will contact you within 1–2 business days.',
    successHomeBtn: 'Back to Home',
  },
};

export function contactPage(): string {
  const lang = currentGlobalLang || 'zh';
  const t = CONTACT_I18N[lang] || CONTACT_I18N.zh;

  return `
    <div class="contact-page">

      <!-- Breadcrumb -->
      <div class="contact-breadcrumb">
        <a href="#/" class="breadcrumb-link">HOME</a>
        <span class="breadcrumb-sep"> / </span>
        <span class="breadcrumb-current">CONTACT US</span>
      </div>

      <!-- 頁面標題 -->
      <div class="contact-hero">
        <h1 class="contact-title" id="contact-title">${t.title}</h1>
        <p class="contact-subtitle" id="contact-subtitle">${t.subtitle}</p>
      </div>

      <!-- 背景裝飾弧形 -->
      <div class="contact-bg-dome-wrapper">
        ${renderPageBgDome('contact', 'contact-bg-dome')}
      </div>

      <!-- 表單卡片 -->
      <div class="contact-card-wrapper">
        <div class="contact-card">

          <!-- Tab 切換：醫師 / 患者 -->
          <div class="contact-tabs">
            <button type="button" class="contact-tab active" id="tab-dentist" data-tab="dentist">
              <span class="tab-label-en">DENTIST</span>
              <span class="tab-label-zh" id="contact-tab-dentist-zh">${t.tabDentistZh}</span>
            </button>
            <button type="button" class="contact-tab" id="tab-patient" data-tab="patient">
              <span class="tab-label-en">PATIENT</span>
              <span class="tab-label-zh" id="contact-tab-patient-zh">${t.tabPatientZh}</span>
            </button>
          </div>

          <!-- 表單內容 -->
          <form class="contact-form" id="contact-form" novalidate>

            <!-- 姓名 -->
            <div class="form-group">
              <label class="form-label" for="contact-name">
                <span id="contact-label-name">${t.labelName}</span> <span class="required-mark">*</span>
              </label>
              <input type="text" id="contact-name" name="name" class="form-input" placeholder="${t.phName}" required />
              <div class="field-error-msg" id="error-name">${t.errName}</div>
            </div>

            <!-- 稱謂 -->
            <div class="form-group">
              <label class="form-label" id="contact-label-gender">${t.labelGender}</label>
              <div class="radio-group">
                <label class="radio-item">
                  <input type="radio" name="gender" value="mr" id="gender-mr" />
                  <span class="radio-custom"></span><span id="contact-gender-mr">${t.genderMr}</span>
                </label>
                <label class="radio-item">
                  <input type="radio" name="gender" value="ms" id="gender-ms" />
                  <span class="radio-custom"></span><span id="contact-gender-ms">${t.genderMs}</span>
                </label>
              </div>
            </div>

            <!-- 服務地區（醫師專屬） -->
            <div class="form-group dentist-only">
              <label class="form-label"><span id="contact-label-region">${t.labelRegion}</span> <span class="required-mark">*</span></label>
              <div class="checkbox-group" id="region-checkbox-group">
                <label class="checkbox-item"><input type="checkbox" name="region" value="taipei" id="region-taipei" /><span class="checkbox-custom"></span><span id="contact-reg-taipei">${t.regTaipei}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="hsinchu" id="region-hsinchu" /><span class="checkbox-custom"></span><span id="contact-reg-hsinchu">${t.regHsinchu}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="taichung" id="region-taichung" /><span class="checkbox-custom"></span><span id="contact-reg-taichung">${t.regTaichung}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="tainan" id="region-tainan" /><span class="checkbox-custom"></span><span id="contact-reg-tainan">${t.regTainan}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="kaohsiung" id="region-kaohsiung" /><span class="checkbox-custom"></span><span id="contact-reg-kaohsiung">${t.regKaohsiung}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="hualien" id="region-hualien" /><span class="checkbox-custom"></span><span id="contact-reg-hualien">${t.regHualien}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="islands" id="region-islands" /><span class="checkbox-custom"></span><span id="contact-reg-islands">${t.regIslands}</span></label>
                <label class="checkbox-item"><input type="checkbox" name="region" value="overseas" id="region-overseas" /><span class="checkbox-custom"></span><span id="contact-reg-overseas">${t.regOverseas}</span></label>
              </div>
              <div class="field-error-msg" id="error-region">${t.errRegion}</div>
            </div>

            <!-- 服務診所名稱（醫師專屬） -->
            <div class="form-group dentist-only">
              <label class="form-label" for="contact-clinic" id="contact-label-clinic">${t.labelClinic}</label>
              <input type="text" id="contact-clinic" name="clinic" class="form-input" placeholder="${t.phClinic}" />
            </div>

            <!-- 聯絡電話 -->
            <div class="form-group">
              <label class="form-label" for="contact-phone"><span id="contact-label-phone">${t.labelPhone}</span> <span class="required-mark">*</span></label>
              <input type="tel" id="contact-phone" name="phone" class="form-input" placeholder="${t.phPhone}" required />
              <div class="field-error-msg" id="error-phone">${t.errPhone}</div>
            </div>

            <!-- 諮詢內容 -->
            <div class="form-group">
              <label class="form-label" for="contact-message"><span id="contact-label-msg">${t.labelMsg}</span> <span class="required-mark">*</span></label>
              <textarea id="contact-message" name="message" class="form-input form-textarea" placeholder="${t.phMsg}" rows="5" required></textarea>
              <div class="field-error-msg" id="error-message">${t.errMsg}</div>
            </div>

            <!-- 隱私條款 -->
            <div class="form-group form-privacy">
              <label class="checkbox-item privacy-check">
                <input type="checkbox" id="privacy-agree" name="privacy" required />
                <span class="checkbox-custom"></span>
                <span id="contact-privacy-prefix">${t.privacyPrefix}</span><a href="#/privacy" class="privacy-link" id="contact-privacy-link">${t.privacyLink}</a><span class="required-mark">*</span>
              </label>
              <div class="field-error-msg" id="error-privacy">${t.errPrivacy}</div>
            </div>

            <!-- 送出按鈕 -->
            <button type="submit" class="contact-submit-btn" id="contact-submit">${t.submitBtn}</button>

            <p class="contact-note" id="contact-note">${t.note}</p>

          </form>
        </div>
      </div>

    </div>
  `;
}

/** Google Sheet 串接 Web App 端點（支援環境變數或直接配置） */
export const GOOGLE_SHEET_WEBAPP_URL =
  (import.meta as any).env?.VITE_GOOGLE_SHEET_URL ||
  'https://script.google.com/macros/s/AKfycbyNcw_3Y_Rs0mBlMsi8Wnv5eKrrdvYQv4mb2M9eW4fzZUQgSivUii_hcPdyNNviybMY/exec';

export function initContactPage(): void {
  const DRAFT_KEY = 'osf_contact_draft';
  const tabs = document.querySelectorAll<HTMLButtonElement>('.contact-tab');
  const dentistFields = document.querySelectorAll<HTMLElement>('.dentist-only');
  let currentRole: 'dentist' | 'patient' = 'dentist';

  function updateFieldsVisibility(activeTab: string) {
    currentRole = activeTab === 'dentist' ? 'dentist' : 'patient';
    dentistFields.forEach(el => {
      el.style.display = currentRole === 'dentist' ? '' : 'none';
    });
    // 切換身份時清除服務地區的錯誤
    const regionGroup = document.getElementById('region-checkbox-group');
    const regionError = document.getElementById('error-region');
    regionGroup?.classList.remove('input-error');
    regionError?.classList.remove('show');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateFieldsVisibility(tab.dataset.tab || 'dentist');
      saveDraft();
    });
  });

  // 初始狀態
  const activeTab = document.querySelector<HTMLButtonElement>('.contact-tab.active');
  updateFieldsVisibility(activeTab?.dataset.tab || 'dentist');

  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('contact-submit') as HTMLButtonElement | null;

  const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
  const clinicInput = document.getElementById('contact-clinic') as HTMLInputElement | null;
  const phoneInput = document.getElementById('contact-phone') as HTMLInputElement | null;
  const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement | null;
  const privacyCheck = document.getElementById('privacy-agree') as HTMLInputElement | null;

  const errorName = document.getElementById('error-name');
  const errorRegion = document.getElementById('error-region');
  const errorPhone = document.getElementById('error-phone');
  const errorMessage = document.getElementById('error-message');
  const errorPrivacy = document.getElementById('error-privacy');
  const regionGroup = document.getElementById('region-checkbox-group');

  // 地區代碼與中文名稱對照表
  const regionNameMap: Record<string, string> = {
    taipei: '雙北',
    hsinchu: '桃竹苗',
    taichung: '中彰投',
    tainan: '雲嘉南',
    kaohsiung: '高屏',
    hualien: '宜花東',
    islands: '澎湖金門馬祖',
    overseas: '全球其他國家'
  };

  /** 自動暫存表單輸入草稿至 sessionStorage */
  function saveDraft() {
    const selectedGender = document.querySelector<HTMLInputElement>('input[name="gender"]:checked');
    const checkedRegions: string[] = [];
    document.querySelectorAll<HTMLInputElement>('input[name="region"]:checked').forEach(cb => {
      checkedRegions.push(cb.value);
    });

    const draft = {
      role: currentRole,
      name: nameInput?.value || '',
      gender: selectedGender?.value || '',
      regions: checkedRegions,
      clinic: clinicInput?.value || '',
      phone: phoneInput?.value || '',
      message: messageInput?.value || '',
      privacy: privacyCheck?.checked || false
    };

    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch (e) {
      // ignore
    }
  }

  /** 從 sessionStorage 還原表單草稿（避免按上一頁返回時文字遺失） */
  function restoreDraft() {
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw);

      // 還原身分 Tab
      if (draft.role) {
        currentRole = draft.role;
        tabs.forEach(t => {
          if (t.dataset.tab === draft.role) {
            t.classList.add('active');
          } else {
            t.classList.remove('active');
          }
        });
        updateFieldsVisibility(draft.role);
      }

      // 還原文字欄位
      if (nameInput && draft.name) nameInput.value = draft.name;
      if (clinicInput && draft.clinic) clinicInput.value = draft.clinic;
      if (phoneInput && draft.phone) phoneInput.value = draft.phone;
      if (messageInput && draft.message) messageInput.value = draft.message;
      if (privacyCheck && draft.privacy) privacyCheck.checked = draft.privacy;

      // 還原稱謂 Radio
      if (draft.gender) {
        const radio = document.querySelector<HTMLInputElement>(`input[name="gender"][value="${draft.gender}"]`);
        if (radio) radio.checked = true;
      }

      // 還原服務地區 Checkbox
      if (draft.regions && Array.isArray(draft.regions)) {
        draft.regions.forEach((val: string) => {
          const cb = document.querySelector<HTMLInputElement>(`input[name="region"][value="${val}"]`);
          if (cb) cb.checked = true;
        });
      }
    } catch (e) {
      // ignore
    }
  }

  // 立即還原草稿
  restoreDraft();

  // 監聽輸入即時儲存草稿
  form?.addEventListener('input', saveDraft);
  form?.addEventListener('change', saveDraft);

  // 輸入電話時即時檢測，若移除了英文字母自動清除錯誤
  phoneInput?.addEventListener('input', () => {
    const val = phoneInput.value.trim();
    const t = CONTACT_I18N[currentGlobalLang] || CONTACT_I18N.zh;
    if (/[a-zA-Z]/.test(val)) {
      phoneInput.classList.add('input-error');
      if (errorPhone) errorPhone.textContent = t.errPhoneAlpha;
      errorPhone?.classList.add('show');
    } else if (phoneInput.classList.contains('input-error') && !val) {
      // 留空時交給送出驗證
    } else if (!/[a-zA-Z]/.test(val)) {
      phoneInput.classList.remove('input-error');
      errorPhone?.classList.remove('show');
    }
  });

  // 隱私條款點擊彈窗（Modal）事件綁定（不跳頁，保留所有填寫資料）
  const privacyLinks = document.querySelectorAll<HTMLAnchorElement>('.privacy-link');
  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 阻止傳統跳頁
      saveDraft(); // 即時存檔雙重保障

      const t = CONTACT_I18N[currentGlobalLang] || CONTACT_I18N.zh;
      let modalOverlay = document.getElementById('contact-privacy-modal');
      if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'contact-privacy-modal';
        modalOverlay.className = 'contact-modal-overlay';
        modalOverlay.innerHTML = `
          <div class="contact-modal-card">
            <div class="contact-modal-header">
              <h3 class="contact-modal-title">${t.modalTitle}</h3>
              <button type="button" class="contact-modal-close" id="modal-close-icon">&times;</button>
            </div>
            <div class="contact-modal-body">
              ${privacyContent(currentGlobalLang)}
            </div>
            <div class="contact-modal-footer">
              <button type="button" class="modal-cancel-btn" id="modal-close-btn">${t.modalClose}</button>
              <button type="button" class="modal-agree-btn" id="modal-agree-btn">${t.modalAgree}</button>
            </div>
          </div>
        `;
        document.body.appendChild(modalOverlay);

        const closeModal = () => {
          modalOverlay?.remove();
        };

        modalOverlay.querySelector('#modal-close-icon')?.addEventListener('click', closeModal);
        modalOverlay.querySelector('#modal-close-btn')?.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (ev) => {
          if (ev.target === modalOverlay) closeModal();
        });

        modalOverlay.querySelector('#modal-agree-btn')?.addEventListener('click', () => {
          if (privacyCheck) {
            privacyCheck.checked = true;
            errorPrivacy?.classList.remove('show');
            saveDraft();
          }
          closeModal();
        });
      }
    });
  });

  // 監聽全站語系切換
  window.addEventListener('langchange', ((e: CustomEvent) => {
    const lang = (e.detail?.lang === 'en' ? 'en' : 'zh') as 'zh' | 'en';
    const t = CONTACT_I18N[lang];
    const setTxt = (id: string, val: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setPh = (id: string, val: string) => {
      const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
      if (el) el.placeholder = val;
    };

    setTxt('contact-title', t.title);
    setTxt('contact-subtitle', t.subtitle);
    setTxt('contact-tab-dentist-zh', t.tabDentistZh);
    setTxt('contact-tab-patient-zh', t.tabPatientZh);
    setTxt('contact-label-name', t.labelName);
    setPh('contact-name', t.phName);
    setTxt('error-name', t.errName);
    setTxt('contact-label-gender', t.labelGender);
    setTxt('contact-gender-mr', t.genderMr);
    setTxt('contact-gender-ms', t.genderMs);
    setTxt('contact-label-region', t.labelRegion);
    setTxt('contact-reg-taipei', t.regTaipei);
    setTxt('contact-reg-hsinchu', t.regHsinchu);
    setTxt('contact-reg-taichung', t.regTaichung);
    setTxt('contact-reg-tainan', t.regTainan);
    setTxt('contact-reg-kaohsiung', t.regKaohsiung);
    setTxt('contact-reg-hualien', t.regHualien);
    setTxt('contact-reg-islands', t.regIslands);
    setTxt('contact-reg-overseas', t.regOverseas);
    setTxt('error-region', t.errRegion);
    setTxt('contact-label-clinic', t.labelClinic);
    setPh('contact-clinic', t.phClinic);
    setTxt('contact-label-phone', t.labelPhone);
    setPh('contact-phone', t.phPhone);
    setTxt('error-phone', t.errPhone);
    setTxt('contact-label-msg', t.labelMsg);
    setPh('contact-message', t.phMsg);
    setTxt('error-message', t.errMsg);
    setTxt('contact-privacy-prefix', t.privacyPrefix);
    setTxt('contact-privacy-link', t.privacyLink);
    setTxt('error-privacy', t.errPrivacy);
    if (submitBtn && !submitBtn.disabled) {
      submitBtn.textContent = t.submitBtn;
    }
    setTxt('contact-note', t.note);
  }) as EventListener);

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = CONTACT_I18N[currentGlobalLang] || CONTACT_I18N.zh;

    let isValid = true;
    let firstErrorElement: HTMLElement | null = null;

    // 1. 姓名驗證
    const nameVal = nameInput?.value.trim() || '';
    if (!nameVal) {
      nameInput?.classList.add('input-error');
      errorName?.classList.add('show');
      isValid = false;
      if (!firstErrorElement) firstErrorElement = nameInput;
    } else {
      nameInput?.classList.remove('input-error');
      errorName?.classList.remove('show');
    }

    // 2. 服務地區驗證（醫師身份必填至少 1 項）
    const checkedRegions: string[] = [];
    if (currentRole === 'dentist') {
      const regionCheckboxes = document.querySelectorAll<HTMLInputElement>('input[name="region"]:checked');
      regionCheckboxes.forEach(cb => {
        const zh = regionNameMap[cb.value] || cb.value;
        checkedRegions.push(zh);
      });

      if (checkedRegions.length === 0) {
        regionGroup?.classList.add('input-error');
        errorRegion?.classList.add('show');
        isValid = false;
        if (!firstErrorElement) firstErrorElement = regionGroup;
      } else {
        regionGroup?.classList.remove('input-error');
        errorRegion?.classList.remove('show');
      }
    } else {
      regionGroup?.classList.remove('input-error');
      errorRegion?.classList.remove('show');
    }

    // 3. 聯絡電話驗證（嚴格禁止英文字母，必須為合法電話號碼格式）
    const phoneVal = phoneInput?.value.trim() || '';
    const hasLetters = /[a-zA-Z]/.test(phoneVal);
    const validPhonePattern = /^[0-9+\-#() （）\s]+$/;
    const phoneDigits = phoneVal.replace(/[^0-9]/g, '');

    if (!phoneVal) {
      phoneInput?.classList.add('input-error');
      if (errorPhone) errorPhone.textContent = t.errPhoneEmpty;
      errorPhone?.classList.add('show');
      isValid = false;
      if (!firstErrorElement) firstErrorElement = phoneInput;
    } else if (hasLetters || !validPhonePattern.test(phoneVal)) {
      phoneInput?.classList.add('input-error');
      if (errorPhone) errorPhone.textContent = t.errPhoneAlpha;
      errorPhone?.classList.add('show');
      isValid = false;
      if (!firstErrorElement) firstErrorElement = phoneInput;
    } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      phoneInput?.classList.add('input-error');
      if (errorPhone) errorPhone.textContent = t.errPhoneLen;
      errorPhone?.classList.add('show');
      isValid = false;
      if (!firstErrorElement) firstErrorElement = phoneInput;
    } else {
      phoneInput?.classList.remove('input-error');
      errorPhone?.classList.remove('show');
    }

    // 4. 諮詢內容驗證
    const messageVal = messageInput?.value.trim() || '';
    if (!messageVal) {
      messageInput?.classList.add('input-error');
      errorMessage?.classList.add('show');
      isValid = false;
      if (!firstErrorElement) firstErrorElement = messageInput;
    } else {
      messageInput?.classList.remove('input-error');
      errorMessage?.classList.remove('show');
    }

    // 5. 隱私條款驗證
    if (!privacyCheck?.checked) {
      errorPrivacy?.classList.add('show');
      isValid = false;
      if (!firstErrorElement) firstErrorElement = privacyCheck;
    } else {
      errorPrivacy?.classList.remove('show');
    }

    // 未通過驗證時滾動至第一個錯誤欄位並聚焦
    if (!isValid) {
      firstErrorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (firstErrorElement && 'focus' in firstErrorElement) {
        (firstErrorElement as HTMLElement).focus();
      }
      return;
    }

    // 取得稱謂
    const selectedGender = document.querySelector<HTMLInputElement>('input[name="gender"]:checked');
    const genderText = selectedGender?.value === 'mr' ? '先生' : (selectedGender?.value === 'ms' ? '女士' : '未填');

    // 產生格式化時間戳記 (YYYY/MM/DD HH:mm:ss)
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const timestamp = `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    // 組裝寫入 Google Sheet 的完整 Payload
    const payload = {
      status: false,                                                // A欄：處理狀態 (Checkbox 預設未勾選)
      timestamp: timestamp,                                        // B欄：提交時間
      role: currentRole === 'dentist' ? '醫師' : '患者',             // C欄：身分 (可篩選)
      name: nameVal,                                               // D欄：姓名
      gender: genderText,                                          // E欄：稱謂
      region: currentRole === 'dentist' ? checkedRegions.join(', ') : '-', // F欄：服務地區 (可篩選)
      clinic: (currentRole === 'dentist' && clinicInput?.value.trim()) ? clinicInput.value.trim() : '-', // G欄：診所
      phone: `'${phoneVal}`,                                       // H欄：電話 (加單引號避免被誤判數字去除開頭 0)
      message: messageVal,                                         // I欄：諮詢內容
      notes: ''                                                    // J欄：備註 (預設留空)
    };

    // 按鈕進入 Loading 狀態
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t.submittingBtn;
    }

    // 發送至 Google Sheet (Google Apps Script Web App)
    try {
      if (GOOGLE_SHEET_WEBAPP_URL) {
        await fetch(GOOGLE_SHEET_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      } else {
        console.group('%c[OSF Contact] 表單送出模擬 (Local 本地開發模式)', 'color: #1875c7; font-weight: bold; font-size: 13px;');
        console.log('✅ 所有欄位防呆驗證皆已通過！');
        console.log('📊 將寫入 Google Sheet 的 10 欄資料預覽如下：');
        console.table([
          { 欄位: 'A 處理狀態', 內容: '未處理 (Checkbox: false)' },
          { 欄位: 'B 提交時間', 內容: payload.timestamp },
          { 欄位: 'C 身分', 內容: payload.role },
          { 欄位: 'D 姓名', 內容: payload.name },
          { 欄位: 'E 稱謂', 內容: payload.gender },
          { 欄位: 'F 服務地區', 內容: payload.region },
          { 欄位: 'G 服務診所名稱', 內容: payload.clinic },
          { 欄位: 'H 聯絡電話', 內容: payload.phone },
          { 欄位: 'I 諮詢內容', 內容: payload.message },
          { 欄位: 'J 備註', 內容: '（預設留空）' }
        ]);
        console.groupEnd();
      }
    } catch (err) {
      console.warn('[OSF Contact] 送出至 Google Sheet 異常：', err);
    }

    // 送出成功，清除草稿暫存
    try {
      sessionStorage.removeItem(DRAFT_KEY);
    } catch (e) {
      // ignore
    }

    // 平滑切換為「已收到您的諮詢」完成畫面
    const card = document.querySelector('.contact-card') as HTMLElement | null;
    if (card) {
      card.innerHTML = `
        <div class="contact-success">
          <div class="success-icon">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="28" fill="#1B804F"/>
              <path d="M18 28.5L25 35.5L38 21.5" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="success-title">${t.successTitle}</h2>
          <p class="success-desc">${t.successDesc}</p>
          <a href="#/" class="success-home-btn">${t.successHomeBtn}</a>
        </div>
      `;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}
