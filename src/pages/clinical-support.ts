/* ============================================================
   臨床技術支持 (Clinical Technical Support) — 一鑽植牙學術論文 (雙語系)
   ============================================================ */
import './clinical-support.css';
import { currentGlobalLang } from '../components/header';
import { renderPageBgDome } from '../utils/dome';

interface BilingualText {
  zh: string;
  en: string;
}

interface LiteratureItem {
  id: string;
  sourceOrYear: BilingualText;
  category: BilingualText;
  format: string;
  title: BilingualText;
  author: BilingualText;
  type: 'osseofuse' | 'ezechbone';
}

const OSSEOFUSE_LITERATURE: LiteratureItem[] = [
  {
    id: 'lit-1',
    sourceOrYear: {
      zh: 'Journal of Periodontology (2005)',
      en: 'Journal of Periodontology (March 2005)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際權威期刊發表】微創液壓式上顎竇植牙技術：8年 1100 位臨床案例研究',
      en: '【Featured Journal Publication】An 8-Year Retrospective Study: 1,100 Patients Receiving 1,557 Implants Using the Minimally Invasive Hydraulic Sinus Condensing Technique',
    },
    author: {
      zh: 'Leon Chen, Jennifer Cha',
      en: 'Leon Chen, Jennifer Cha',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-2',
    sourceOrYear: {
      zh: 'JIA CD (2012)',
      en: 'The Journal of Implant & Advanced Clinical Dentistry (September 2012)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際牙科期刊發表】植體移位至兩種不同上顎竇腔室之臨床研究與處置',
      en: '【Featured Journal Publication】Dental Implant Migration Into Two Different Maxillary Sinus Cavities',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-3',
    sourceOrYear: {
      zh: 'JIA CD (2011)',
      en: 'The Journal of Implant & Advanced Clinical Dentistry (December/January 2011)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際牙科期刊發表】上顎竇膜穿孔：臨床治療策略與技術分類研究',
      en: '【Featured Journal Publication】Sinus Perforation: Treatment and Classifications',
    },
    author: {
      zh: 'Leon Chen, DMS, MS • Jennifer Cha, DMS, MS • Hsin-Chen Chen, MD • Hong Liang Lin, MD',
      en: 'Leon Chen, DMS, MS • Jennifer Cha, DMS, MS • Hsin-Chen Chen, MD • Hong Liang Lin, MD',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-4',
    sourceOrYear: {
      zh: 'JIA CD (2012)',
      en: 'The Journal of Implant & Advanced Clinical Dentistry (September 2012)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際牙科期刊發表】植體移位至兩種不同上顎竇腔室之臨床研究與處置',
      en: '【Featured Journal Publication】Dental Implant Migration Into Two Different Maxillary Sinus Cavities',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-5',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際學術論文發表】移除上顎竇異物：鼻竇區域分類與手術技術選擇',
      en: '【Featured Research Publication】Removing Foreign Bodies from the Maxillary Sinus: Sinus Area Classification and Technique Selection',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-6',
    sourceOrYear: {
      zh: 'Dentistry Today (2002)',
      en: 'Dentistry Today (October 2002)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際牙科期刊發表】牙根覆蓋之三點位移技術：4年臨床追蹤研究',
      en: '【Featured Journal Publication】A Three-Point-Translation Technique for Root Coverage With 4-Year Follow-up',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS • Chih-Hsiang Ho, PhD',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS • Chih-Hsiang Ho, PhD',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-7',
    sourceOrYear: {
      zh: 'JIA CD (2017)',
      en: 'The Journal of Implant & Advanced Clinical Dentistry (August 2017)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際牙科期刊發表】Osseofuse HexaPlus 人工植體：超過 250 支植體之 6 年臨床追蹤研究',
      en: '【Featured Journal Publication】Osseofuse HexaPlus Dental Implants: A 6-Year Retrospective Follow-Up of Over 250 Implants',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-8',
    sourceOrYear: {
      zh: 'Compendium (2020)',
      en: 'Compendium (May 2020)',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際牙科期刊發表】利用創新功能性鼻竇植體實現可預期之液壓式上顎竇技術：臨床病例報告',
      en: '【Featured Journal Publication】Achieving Predictable Hydraulic Sinus Condensing Using an Innovative Functional Sinus Implant: A Case Report',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-9',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際學術論文發表】於即刻植牙合併補骨手術中利用肉芽組織作為生物膜以達到傷口一期癒合',
      en: '【Featured Research Publication】Using Granulomatous Tissue as a Membrane for Primary Closure During Immediate Implant Placement with Grafting Material',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-10',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際學術論文發表】一鑽系統於可預期之窩洞製備與即拔即植手術之應用',
      en: '【Featured Research Publication】A One-Drill System for Predictable Osteotomy & Immediate Implant Placement',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-11',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際學術論文發表】植牙整合失敗處之立即再植入：透過鑽針與植體直徑漸進式調整，以確保初期穩定性',
      en: '【Featured Research Publication】Immediate Reimplantation at Failed Osseointegration Sites: A Drilling and Systematically Increasing Implant Width Protocol to Ensure Primary Stability',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-12',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際學術論文發表】利用五合一技術縮短從拔牙到假牙修復之治療時間',
      en: '【Featured Research Publication】Reducing Extraction-to-Restoration Time Utilizing a 5-in-1 Technique',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
  {
    id: 'lit-13',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '一鑽植牙',
      en: '1-Drill Implant',
    },
    format: 'PDF',
    title: {
      zh: '【國際學術論文發表】嚴重萎縮頰側骨之三層皮質骨穩定術：即刻前牙美學植牙修復技術',
      en: '【Featured Research Publication】Tricortical Stabilization in Severely Atrophic Buccal Bone: A Technique for Immediate Anterior Esthetic Implant Restoration',
    },
    author: {
      zh: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
      en: 'Leon Chen, DMD, MS • Jennifer Cha, DMD, MS',
    },
    type: 'osseofuse',
  },
];

const EZECHBONE_LITERATURE: LiteratureItem[] = [
  {
    id: 'ez-1',
    sourceOrYear: {
      zh: 'FDA 突破性醫療器材計畫',
      en: 'FDA Breakthrough Device Program',
    },
    category: {
      zh: '甦骨粒',
      en: 'Ezechbone',
    },
    format: 'PDF',
    title: {
      zh: 'Ezechbone® 顆粒 CBS-400 用於胸骨閉合應用之延伸摘要 (適用於美國 FDA 突破性醫療器材計畫)',
      en: 'Extended Abstract of Ezechbone® Granule CBS-400 for Sternum Closure Application for FDA Breakthrough Device Program',
    },
    author: {
      zh: '成大 CBR × 喬醫 JMD • FDA Breakthrough Device Program',
      en: 'NCKU CBR × JMD • FDA Breakthrough Device Program',
    },
    type: 'ezechbone',
  },
];

const ALL_LITERATURE: LiteratureItem[] = [
  ...OSSEOFUSE_LITERATURE,
  ...EZECHBONE_LITERATURE,
];

const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let currentFilter: 'osseofuse' | 'ezechbone' = 'osseofuse';
let currentLang: 'zh' | 'en' = 'zh';

function getTotalPages(): number {
  const filtered = ALL_LITERATURE.filter(item => item.type === currentFilter);
  return Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
}

function renderCards(page: number, lang: 'zh' | 'en'): string {
  const filtered = ALL_LITERATURE.filter(item => item.type === currentFilter);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

  const downloadText = lang === 'zh' ? '下載' : 'Download';

  return pageItems.map((item) => `
    <div class="clinical-card" data-type="${item.type}">
      <div class="clinical-card-main">
        <div class="card-tags">
          <span class="tag-badge ${item.sourceOrYear[lang].includes('(') ? 'tag-source' : 'tag-year'}">${item.sourceOrYear[lang]}</span>
          <span class="tag-badge tag-category">${item.category[lang]}</span>
          <span class="tag-badge tag-format">${item.format}</span>
        </div>
        <h3 class="card-title">${item.title[lang]}</h3>
        <p class="card-meta">${item.author[lang]}</p>
      </div>
      <a href="#/login" class="card-download-btn" aria-label="${downloadText}">
        <span>${downloadText}</span>
        <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </a>
    </div>
  `).join('');
}

function renderPagination(page: number): string {
  const totalPages = getTotalPages();
  if (totalPages <= 1) {
    return '';
  }

  let pagesHtml = '';
  for (let i = 1; i <= totalPages; i++) {
    pagesHtml += `<button type="button" class="pagination-btn ${i === page ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }

  const prevDisabled = page === 1 ? 'disabled' : '';
  const nextDisabled = page === totalPages ? 'disabled' : '';

  return `
    <button type="button" class="pagination-btn arrow-btn ${prevDisabled}" id="prev-page-btn" aria-label="上一頁">&larr;</button>
    ${pagesHtml}
    <button type="button" class="pagination-btn arrow-btn ${nextDisabled}" id="next-page-btn" aria-label="下一頁">&rarr;</button>
  `;
}

export function clinicalSupportPage(): string {
  currentPage = 1;
  currentFilter = 'osseofuse';
  currentLang = currentGlobalLang;
  const totalPages = getTotalPages();
  const initialCards = renderCards(1, currentLang);
  const initialPagination = renderPagination(1);
  const paginationStyle = totalPages <= 1 ? 'style="display: none;"' : '';

  const titleText = currentLang === 'zh' ? '臨床技術支持' : 'Clinical Technical Support';
  const subtitleText = currentLang === 'zh' ? '提供醫師完善的學術文獻與操作文件' : 'Providing clinicians with comprehensive academic literature and operating guides';
  const tabOsseofuseText = currentLang === 'zh' ? '一鑽植牙' : 'OsseoFuse 1-Drill';
  const tabEzechboneText = currentLang === 'zh' ? '甦骨粒' : 'Ezechbone';

  return `
    <div class="clinical-page">

      <!-- Breadcrumb (固定於 Header 下方左上角) -->
      <div class="clinical-breadcrumb">
        <a href="#/" class="breadcrumb-link">HOME</a>
        <span class="breadcrumb-sep"> / </span>
        <span class="breadcrumb-current">CLINICAL TECHNICAL SUPPORT</span>
      </div>

      <!-- 背景裝飾弧形 -->
      <div class="clinical-bg-dome-wrapper">
        ${renderPageBgDome('clinical', 'clinical-bg-dome')}
      </div>

      <!-- 頁面標題區 (Hero) -->
      <div class="clinical-hero">
        <h1 class="clinical-title" id="clinical-title">${titleText}</h1>
        <p class="clinical-subtitle" id="clinical-subtitle">${subtitleText}</p>

        <!-- 分類切換按鈕 -->
        <div class="clinical-filter-tabs">
          <button type="button" class="clinical-filter-btn active" data-filter="osseofuse" id="tab-osseofuse">${tabOsseofuseText}</button>
          <button type="button" class="clinical-filter-btn" data-filter="ezechbone" id="tab-ezechbone">${tabEzechboneText}</button>
        </div>
      </div>

      <!-- 文獻清單列表區（外層包裝 + 漸層毛玻璃遮罩 + 懸浮登入卡片） -->
      <div class="clinical-list-wrapper">
        <div class="clinical-list-container" id="clinical-list-container">
          ${initialCards}
        </div>

        <!-- 漸層漸進式毛玻璃遮罩（上半部清晰，向下越來越模糊） -->
        <div class="clinical-gradient-blur"></div>

        <!-- 懸浮登入提示卡片（位於可視中央，純白實體） -->
        <div class="clinical-login-prompt-wrapper">
          <div class="clinical-login-card">
            <p class="clinical-login-text" id="clinical-login-text">
              ${currentLang === 'zh'
                ? `依醫療器材相關法規，<br/>以下文件僅供醫事人員參閱。<br/>註冊約 30 秒，通過審核後即可下載。`
                : `According to medical device regulations,<br/>the following documents are restricted to medical professionals.<br/>Registration takes ~30s, download available upon approval.`
              }
            </p>
            <a href="#/login" class="clinical-login-btn">
              <span id="clinical-login-btn-text">${currentLang === 'zh' ? '前往會員登入' : 'Go to Member Login'}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 分頁 Pagination (動態計算頁數，若 <= 1 頁則隱藏) -->
      <div class="clinical-pagination" id="clinical-pagination" ${paginationStyle}>
        ${initialPagination}
      </div>

    </div>
  `;
}

/** 初始化臨床技術支持頁面互動（Filter Tabs, Pagination & Lang Switch） */
export function initClinicalSupportPage(): void {
  const container = document.getElementById('clinical-list-container');
  const paginationWrapper = document.getElementById('clinical-pagination');
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.clinical-filter-btn');

  function bindPaginationEvents() {
    const prevBtn = document.getElementById('prev-page-btn') as HTMLButtonElement | null;
    const nextBtn = document.getElementById('next-page-btn') as HTMLButtonElement | null;
    const pageBtns = document.querySelectorAll<HTMLButtonElement>('.pagination-btn[data-page]');
    const totalPages = getTotalPages();

    pageBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const page = Number(btn.dataset.page);
        if (page && page !== currentPage && page <= totalPages) {
          updatePage(page);
        }
      });
    });

    prevBtn?.addEventListener('click', () => {
      if (currentPage > 1) {
        updatePage(currentPage - 1);
      }
    });

    nextBtn?.addEventListener('click', () => {
      if (currentPage < totalPages) {
        updatePage(currentPage + 1);
      }
    });
  }

  function updatePage(page: number) {
    currentPage = page;
    if (container) {
      container.innerHTML = renderCards(page, currentLang);
    }
    if (paginationWrapper) {
      const totalPages = getTotalPages();
      if (totalPages <= 1) {
        paginationWrapper.style.display = 'none';
        paginationWrapper.innerHTML = '';
      } else {
        paginationWrapper.style.display = 'flex';
        paginationWrapper.innerHTML = renderPagination(page);
        bindPaginationEvents();
      }
    }
  }

  function updateLanguageTexts() {
    const titleEl = document.getElementById('clinical-title');
    const subtitleEl = document.getElementById('clinical-subtitle');
    const tabOsseofuse = document.getElementById('tab-osseofuse');
    const tabEzechbone = document.getElementById('tab-ezechbone');
    const loginText = document.getElementById('clinical-login-text');
    const loginBtnText = document.getElementById('clinical-login-btn-text');

    if (titleEl) titleEl.textContent = currentLang === 'zh' ? '臨床技術支持' : 'Clinical Technical Support';
    if (subtitleEl) subtitleEl.textContent = currentLang === 'zh' ? '提供醫師完善的學術文獻與操作文件' : 'Providing clinicians with comprehensive academic literature and operating guides';
    if (tabOsseofuse) tabOsseofuse.textContent = currentLang === 'zh' ? '一鑽植牙' : 'OsseoFuse 1-Drill';
    if (tabEzechbone) tabEzechbone.textContent = currentLang === 'zh' ? '甦骨粒' : 'Ezechbone';
    if (loginText) {
      loginText.innerHTML = currentLang === 'zh'
        ? `依醫療器材相關法規，<br/>以下文件僅供醫事人員參閱。<br/>註冊約 30 秒，通過審核後即可下載。`
        : `According to medical device regulations,<br/>the following documents are restricted to medical professionals.<br/>Registration takes ~30s, download available upon approval.`;
    }
    if (loginBtnText) loginBtnText.textContent = currentLang === 'zh' ? '前往會員登入' : 'Go to Member Login';
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = (btn.dataset.filter as 'osseofuse' | 'ezechbone') || 'osseofuse';
      updatePage(1);
    });
  });

  // 全域語系切換監聽
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      currentLang = customEvent.detail.lang;
      updateLanguageTexts();
      updatePage(currentPage);
    }
  });

  bindPaginationEvents();
}
