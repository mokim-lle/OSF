/* ============================================================
   臨床技術支持 (Clinical Technical Support) — 一鑽植牙學術論文 (雙語系)
   ============================================================ */
import './clinical-support.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { currentGlobalLang } from '../components/header';
import { fetchCurrentMemberProfile, MemberStatus } from '../services/auth.service';

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
  /* TODO: 以下 ez-2 ~ ez-6 為依產品臨床特性建立之預覽文獻項目，待替換為實際論文標題與檔案 */
  {
    id: 'ez-2',
    sourceOrYear: {
      zh: '臨床驗證報告',
      en: 'Clinical Validation',
    },
    category: {
      zh: '甦骨粒',
      en: 'Ezechbone',
    },
    format: 'PDF',
    title: {
      zh: 'Ezechbone® 顆粒 CBS-400 臨床應用成效分析：涵蓋胸骨、脊椎、骨科與牙科手術逾 1,000 例實證',
      en: 'Clinical Outcomes of Ezechbone® Granule CBS-400: Over 1,000 Cases Across Sternotomy, Spine, Orthopedic, and Dental Surgeries',
    },
    author: {
      zh: '成大 CBR × 喬醫 JMD • 臨床研究團隊',
      en: 'NCKU CBR × JMD • Clinical Research Team',
    },
    type: 'ezechbone',
  },
  {
    id: 'ez-3',
    sourceOrYear: {
      zh: '學術論文',
      en: 'Research Publication',
    },
    category: {
      zh: '甦骨粒',
      en: 'Ezechbone',
    },
    format: 'PDF',
    title: {
      zh: '【臨床生物材料研究】CBS-400 全合成補骨材料之引導止血、溫和控炎與高效骨再生機制評估',
      en: '【Biomaterials Research】Evaluation of Hemostatic Guidance, Mild Inflammatory Modulation, and Osteoconductive Regeneration of CBS-400',
    },
    author: {
      zh: '成大骨科暨生醫材料研發團隊',
      en: 'NCKU Orthopedics & Biomaterials Research Group',
    },
    type: 'ezechbone',
  },
  {
    id: 'ez-4',
    sourceOrYear: {
      zh: '臨床操作指南',
      en: 'Clinical Guide',
    },
    category: {
      zh: '甦骨粒',
      en: 'Ezechbone',
    },
    format: 'PDF',
    title: {
      zh: 'Ezechbone® Granule CBS-400 牙科補骨、拔牙窩洞保存與上顎竇增高術標準操作指引',
      en: 'Standard Operating Protocol for Ezechbone® Granule CBS-400 in Dental Bone Grafting, Socket Preservation, and Sinus Augmentation',
    },
    author: {
      zh: '喬醫 JMD • 歐舒福臨床技術團隊',
      en: 'JMD • OsseoFuse Clinical Support Team',
    },
    type: 'ezechbone',
  },
  {
    id: 'ez-5',
    sourceOrYear: {
      zh: 'TFDA 專案臨床研究',
      en: 'TFDA Clinical Study',
    },
    category: {
      zh: '甦骨粒',
      en: 'Ezechbone',
    },
    format: 'PDF',
    title: {
      zh: 'CBS-400 應用於關節內與關節周圍困難骨折之骨癒合表現及術後沾黏風險評估',
      en: 'Bone Healing Performance and Postoperative Adhesion Risk Assessment of CBS-400 in Complex Intra- and Peri-Articular Fractures',
    },
    author: {
      zh: '成大 CBR × 喬醫 JMD • 骨科臨床專案',
      en: 'NCKU CBR × JMD • Orthopedic Clinical Project',
    },
    type: 'ezechbone',
  },
  {
    id: 'ez-6',
    sourceOrYear: {
      zh: '技術白皮書',
      en: 'Technical Whitepaper',
    },
    category: {
      zh: '甦骨粒',
      en: 'Ezechbone',
    },
    format: 'PDF',
    title: {
      zh: 'CBS-400 與自體骨、異體骨及傳統人工骨粉之臨床特性與生物相容性比較解析',
      en: 'Comparative Analysis of Clinical Properties and Biocompatibility: CBS-400 vs. Autograft, Allograft, and Conventional Synthetic Grafts',
    },
    author: {
      zh: '喬醫 JMD • 材料研發部',
      en: 'JMD • Materials R&D Department',
    },
    type: 'ezechbone',
  },
];

const ALL_LITERATURE: LiteratureItem[] = [
  ...OSSEOFUSE_LITERATURE,
  ...EZECHBONE_LITERATURE,
];

const ITEMS_PER_PAGE = 10;
/** 未登入前僅顯示前幾則文獻作為預覽（讓訪客能感受到文獻數量眾多） */
const PREVIEW_ITEMS_COUNT = 5;

type AccessState = 'guest' | MemberStatus;

let currentPage = 1;
let currentFilter: 'osseofuse' | 'ezechbone' = 'osseofuse';
let currentLang: 'zh' | 'en' = 'zh';
/** 僅當會員已登入且審核狀態為 approved 時才授權參閱與下載 */
let isAuthorized = false;
let currentAccessState: AccessState = 'guest';

const LOCK_PROMPT_I18N: Record<
  AccessState,
  { zh: { text: string; btn: string }; en: { text: string; btn: string }; href: string }
> = {
  guest: {
    zh: {
      text: '依醫療器材相關法規，<br/>以下文件僅供醫事人員參閱。<br/>註冊約 30 秒，通過審核後即可下載。',
      btn: '前往會員登入',
    },
    en: {
      text: 'According to medical device regulations,<br/>the following documents are restricted to medical professionals.<br/>Registration takes ~30s, download available upon approval.',
      btn: 'Go to Member Login',
    },
    href: '#/login',
  },
  pending: {
    zh: {
      text: '您的會員資格目前仍在審核中，<br/>需通過審核（Approved）後方可參閱<br/>並下載完整臨床技術文件。',
      btn: '查看審核進度',
    },
    en: {
      text: 'Your membership is currently under review.<br/>Full access to view and download clinical documents<br/>will be unlocked once approved.',
      btn: 'View Review Status',
    },
    href: '#/membership-status/pending',
  },
  rejected: {
    zh: {
      text: '您的會員審核未通過，<br/>請檢視原因並更新資料，<br/>通過審核後即可參閱並下載文件。',
      btn: '前往修正資料',
    },
    en: {
      text: 'Your membership application was not approved.<br/>Please review the reason and update your profile<br/>to unlock clinical documents.',
      btn: 'Update Application',
    },
    href: '#/membership-status/rejected',
  },
  'not-found': {
    zh: {
      text: '您尚未完成醫師基本資料填寫，<br/>完成註冊並通過審核後，<br/>即可參閱並下載臨床技術文件。',
      btn: '繼續完成註冊',
    },
    en: {
      text: 'Your doctor profile is incomplete.<br/>Please finish registration and await approval<br/>to access clinical documents.',
      btn: 'Complete Registration',
    },
    href: '#/register/step2',
  },
  unverified: {
    zh: {
      text: '您的電子信箱尚未完成驗證，<br/>請先完成信箱驗證與會員審核，<br/>通過後即可參閱並下載文件。',
      btn: '前往驗證信箱',
    },
    en: {
      text: 'Your email is not yet verified.<br/>Please complete email verification and approval<br/>to access clinical documents.',
      btn: 'Verify Email',
    },
    href: '#/register/verify',
  },
  approved: {
    zh: { text: '', btn: '' },
    en: { text: '', btn: '' },
    href: '#/clinical-support',
  },
};

function getCachedAccessState(): AccessState {
  if (!auth?.currentUser) return 'guest';
  try {
    const raw = sessionStorage.getItem('osf_doctor_profile');
    if (!raw) return 'pending';
    const parsed = JSON.parse(raw) as { status?: string };
    if (parsed.status === 'approved' || parsed.status === 'pending' || parsed.status === 'rejected') {
      return parsed.status;
    }
  } catch (_e) {
    // ignore
  }
  return 'pending';
}

function getFilteredLiterature(): LiteratureItem[] {
  return ALL_LITERATURE.filter(item => item.type === currentFilter);
}

function getTotalPages(): number {
  if (!isAuthorized) {
    return 1;
  }
  const filtered = getFilteredLiterature();
  return Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
}

function renderCards(page: number, lang: 'zh' | 'en'): string {
  const filtered = getFilteredLiterature();
  const pageItems = isAuthorized
    ? filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    : filtered.slice(0, PREVIEW_ITEMS_COUNT);

  const downloadText = lang === 'zh' ? '下載' : 'Download';

  return pageItems.map((item) => {
    const downloadActionHtml = isAuthorized
      ? `<button type="button" class="card-download-btn" data-id="${item.id}" aria-label="${downloadText}">
          <span>${downloadText}</span>
          <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>`
      : `<span class="card-download-btn is-disabled" aria-disabled="true">
          <span>${downloadText}</span>
          <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </span>`;

    return `
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
      ${downloadActionHtml}
    </div>
  `;
  }).join('');
}

function renderPagination(page: number): string {
  if (!isAuthorized) {
    return '';
  }
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
  currentAccessState = getCachedAccessState();
  isAuthorized = currentAccessState === 'approved';
  const totalPages = getTotalPages();
  const initialCards = renderCards(1, currentLang);
  const initialPagination = renderPagination(1);
  const paginationStyle = !isAuthorized || totalPages <= 1 ? 'style="display: none;"' : '';
  const lockedClass = isAuthorized ? '' : 'is-locked';
  const inertAttr = isAuthorized ? '' : 'inert aria-hidden="true"';
  const overlayStyle = isAuthorized ? 'style="display: none;"' : '';
  const promptConfig = LOCK_PROMPT_I18N[currentAccessState];
  const promptText = promptConfig[currentLang].text;
  const promptBtnText = promptConfig[currentLang].btn;
  const promptHref = promptConfig.href;

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
        <svg class="clinical-bg-dome" width="1440" height="920" viewBox="0 0 1440 920" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
          <g opacity="0.5" filter="url(#filter0_dif_clinical)">
            <path d="M1440 820C1440 725.448 1421.38 631.822 1385.19 544.468C1349.01 457.113 1295.98 377.741 1229.12 310.883C1162.26 244.025 1082.89 190.99 995.532 154.807C908.178 118.623 814.552 100 720 100C625.448 100 531.822 118.623 444.468 154.807C357.113 190.99 277.741 244.025 210.883 310.883C144.025 377.741 90.9901 457.113 54.8067 544.468C18.6233 631.822 -8.26597e-06 725.448 0 820L720 820H1440Z" fill="#F2F2F7"/>
          </g>
          <defs>
            <filter id="filter0_dif_clinical" x="-100" y="0" width="1640" height="920" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="-10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.905882 0 0 0 0 0.933333 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_clinical"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_clinical" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_clinical"/>
              <feGaussianBlur stdDeviation="0" result="effect3_foregroundBlur_clinical"/>
            </filter>
          </defs>
        </svg>
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
      <div class="clinical-list-wrapper ${lockedClass}" id="clinical-list-wrapper">
        <div class="clinical-list-container" id="clinical-list-container" ${inertAttr}>
          ${initialCards}
        </div>

        <!-- 漸層漸進式毛玻璃遮罩（上半部清晰，向下越來越模糊） -->
        <div class="clinical-gradient-blur" id="clinical-gradient-blur" ${overlayStyle}></div>

        <!-- 懸浮登入提示卡片（位於可視中央，純白實體） -->
        <div class="clinical-login-prompt-wrapper" id="clinical-login-prompt-wrapper" ${overlayStyle}>
          <div class="clinical-login-card">
            <p class="clinical-login-text" id="clinical-login-text">
              ${promptText}
            </p>
            <a href="${promptHref}" class="clinical-login-btn" id="clinical-login-btn">
              <span id="clinical-login-btn-text">${promptBtnText}</span>
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
  const listWrapper = document.getElementById('clinical-list-wrapper');
  const container = document.getElementById('clinical-list-container');
  const gradientBlur = document.getElementById('clinical-gradient-blur');
  const loginPromptWrapper = document.getElementById('clinical-login-prompt-wrapper');
  const paginationWrapper = document.getElementById('clinical-pagination');
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.clinical-filter-btn');

  function syncLockState() {
    if (listWrapper) {
      listWrapper.classList.toggle('is-locked', !isAuthorized);
    }
    if (container) {
      if (isAuthorized) {
        container.removeAttribute('inert');
        container.removeAttribute('aria-hidden');
      } else {
        container.setAttribute('inert', '');
        container.setAttribute('aria-hidden', 'true');
      }
    }
    const overlayDisplay = isAuthorized ? 'none' : '';
    if (gradientBlur) gradientBlur.style.display = overlayDisplay;
    if (loginPromptWrapper) loginPromptWrapper.style.display = overlayDisplay;
  }

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
      if (!isAuthorized || totalPages <= 1) {
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
    const loginBtn = document.getElementById('clinical-login-btn') as HTMLAnchorElement | null;
    const loginBtnText = document.getElementById('clinical-login-btn-text');

    if (titleEl) titleEl.textContent = currentLang === 'zh' ? '臨床技術支持' : 'Clinical Technical Support';
    if (subtitleEl) subtitleEl.textContent = currentLang === 'zh' ? '提供醫師完善的學術文獻與操作文件' : 'Providing clinicians with comprehensive academic literature and operating guides';
    if (tabOsseofuse) tabOsseofuse.textContent = currentLang === 'zh' ? '一鑽植牙' : 'OsseoFuse 1-Drill';
    if (tabEzechbone) tabEzechbone.textContent = currentLang === 'zh' ? '甦骨粒' : 'Ezechbone';

    const promptConfig = LOCK_PROMPT_I18N[currentAccessState];
    if (loginText) {
      loginText.innerHTML = promptConfig[currentLang].text;
    }
    if (loginBtn) {
      loginBtn.setAttribute('href', promptConfig.href);
    }
    if (loginBtnText) {
      loginBtnText.textContent = promptConfig[currentLang].btn;
    }
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
  const handleLangChange = (e: Event) => {
    if (!container || !document.body.contains(container)) {
      window.removeEventListener('langchange', handleLangChange);
      return;
    }
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      currentLang = customEvent.detail.lang;
      updateLanguageTexts();
      updatePage(currentPage);
    }
  };
  window.addEventListener('langchange', handleLangChange);

  function applyAccessState(nextState: AccessState) {
    const nextAuthorized = nextState === 'approved';
    const stateChanged = nextState !== currentAccessState || nextAuthorized !== isAuthorized;
    currentAccessState = nextState;
    isAuthorized = nextAuthorized;
    if (stateChanged) {
      syncLockState();
      updateLanguageTexts();
      updatePage(1);
    }
  }

  // 監聽登入與會員審核狀態變化（未登入或未通過 approved 審核前，鎖定並僅顯示預覽）
  if (auth) {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!container || !document.body.contains(container)) {
        unsubscribeAuth();
        return;
      }

      if (!user) {
        applyAccessState('guest');
        return;
      }

      // 先以快取狀態更新，再向 Firestore 確認最新審核狀態
      applyAccessState(getCachedAccessState());

      const profile = await fetchCurrentMemberProfile();
      if (!container || !document.body.contains(container) || auth?.currentUser?.uid !== user.uid) {
        return;
      }

      const freshState: AccessState = profile
        ? (profile.status === 'approved' || profile.status === 'pending' || profile.status === 'rejected'
            ? profile.status
            : 'pending')
        : 'not-found';
      applyAccessState(freshState);
    });
  }

  syncLockState();
  bindPaginationEvents();
}
