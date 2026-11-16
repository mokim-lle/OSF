/* ============================================================
   Ezechbone（甦骨粒）CBS-400 產品頁 — 一頁式長捲軸
   目前僅建立區塊骨架與命名，各區細節待設計稿截圖後再刻畫
   class 前綴統一使用 ezb-
   ============================================================ */
import './ezechbone.css';
import { noOrphan, noOrphanLines } from '../utils/text';
import { currentGlobalLang } from '../components/header';

/* ---------- 第 5 區：標語橫幅背景 SVG ----------
   👉 把 SVG 程式碼整段貼在 RAW_SLOGAN_BG_SVG 的兩個反引號 `` 之間即可
   程式會自動處理根 <svg> 標籤：移除固定 width/height、強制 preserveAspectRatio="xMidYMid slice"，
   讓背景 100% 螢幕寬度、依區塊高度等比填滿（不留白、不變形），各斷點皆自適應。
   ※ 貼入的 SVG 必須有 viewBox，否則無法縮放。 */
const RAW_SLOGAN_BG_SVG = `<svg width="1440" height="310" viewBox="0 0 1440 310" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_740_15285)">
<rect width="1440" height="310" fill="#AEB9F3"/>
<image x="-100" y="-224" width="1640" height="821" preserveAspectRatio="none" xlink:href="/images/ezechbone/slogan-bg.png"/>
</g>
<defs>
<filter id="filter0_g_740_15285" x="-100" y="-224" width="1640" height="821" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.99900001287460327 0.99900001287460327" numOctaves="3" seed="2781" />
<feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
<feMerge result="effect1_texture_740_15285">
<feMergeNode in="displacedImage"/>
</feMerge>
</filter>
<filter id="filter1_d_740_15285" x="-20" y="-20" width="1480" height="350" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0.321569 0 0 0 0 0.392157 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_740_15285"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_740_15285" result="shape"/>
</filter>
<clipPath id="clip0_740_15285">
<rect width="1440" height="310" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const fitSvgToBox = (svg: string): string =>
  svg.replace(/<svg\b([^>]*)>/i, (_m, attrs: string) => {
    const cleaned = attrs.replace(/\s(width|height|preserveAspectRatio)\s*=\s*("[^"]*"|'[^']*')/gi, '');
    return `<svg${cleaned} preserveAspectRatio="xMidYMid slice">`;
  });

const SLOGAN_BG_SVG = fitSvgToBox(RAW_SLOGAN_BG_SVG);

/* ---------- 第 3 區：icon（藍 → 紫漸層線條） ---------- */
const iconGrad = (id: string) => `
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#376AFA" />
      <stop offset="1" stop-color="#7273E2" />
    </linearGradient>
  </defs>`;

const ICON_FLASK = `
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">${iconGrad('ezb-ig-flask')}
  <g stroke="url(#ezb-ig-flask)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 6h16" />
    <path d="M20 6v13L9.3 37.6A3 3 0 0 0 11.9 42h24.2a3 3 0 0 0 2.6-4.4L28 19V6" />
  </g>
  <path d="M14.2 29h19.6l4 7.6a2.2 2.2 0 0 1-2 3.4H12.2a2.2 2.2 0 0 1-2-3.4z" fill="url(#ezb-ig-flask)" />
</svg>`;

const ICON_DNA = `
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">${iconGrad('ezb-ig-dna')}
  <g stroke="url(#ezb-ig-dna)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 5h20M14 43h20" />
    <path d="M15 5c0 13 18 13 18 19S15 30 15 43" />
    <path d="M33 5c0 13-18 13-18 19s18 6 18 19" />
    <path d="M18 13h12M18 35h12" />
  </g>
</svg>`;

const ICON_SHIELD = `
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">${iconGrad('ezb-ig-shield')}
  <g stroke="url(#ezb-ig-shield)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 5l15 5.5v11.5c0 9.5-6.4 16.8-15 21-8.6-4.2-15-11.5-15-21V10.5z" />
    <path d="M17 24.5l5 5 9.5-10" />
  </g>
</svg>`;

const ICON_MICROSCOPE = `
<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">${iconGrad('ezb-ig-micro')}
  <g stroke="url(#ezb-ig-micro)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="22" y="4" width="8" height="17" rx="2" transform="rotate(30 26 12.5)" />
    <path d="M31 25a9 9 0 0 1-9 13" />
    <circle cx="20" cy="26" r="3.5" />
    <path d="M16 38h20M12 43h24" />
  </g>
</svg>`;

/* ---------- 第 3 區：四項特性圖示目錄 ----------
   icon 檔案放置於 public/images/ezechbone/icons/
   檔案缺失時 onerror 會退回內建 SVG（ICON_*） */
const ICON_DIR = '/images/ezechbone/icons';

/* ---------- 第 4 區：臨床特性比較表資料 ---------- */
const ICON_HAND_HEART = `
<svg class="ezb-compare-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L6 14" />
  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.8" />
  <path d="M2 14h4v6H2z" />
  <path d="M15.8 4.2a2.4 2.4 0 0 0-3.4 0l-.4.4-.4-.4a2.4 2.4 0 0 0-3.4 3.4l3.8 3.8 3.8-3.8a2.4 2.4 0 0 0 0-3.4Z" />
</svg>`;

const ICON_BAN = `
<svg class="ezb-compare-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="10" />
  <path d="m4.9 4.9 14.2 14.2" />
</svg>`;

interface CompareRow {
  nameHtml: string;
  isFeatured?: boolean;
  advantages: string[];
  limitations: string[];
}

/* TODO: 待確認 Ezechbone 英文翻譯 (Ezechbone EN Translations — 已依台灣醫療法規採嚴謹客觀生醫材料表述) */
const EZECHBONE_I18N = {
  zh: {
    heroTitleLine2: '全合成多效設計',
    heroSubtitle: '引導止血 • 溫和控炎 • 高效骨再生',
    introTitleTop: '優異的補骨材料',
    introCards: [
      {
        title: '具備優異引導止血效果',
        desc: '臨床驗證超過 1,000 例，涵蓋胸骨切開、脊椎、骨科與牙科手術，均展現穩定止血效應。',
      },
      {
        title: '有效支持溫和控炎機制',
        desc: '具備極佳的生物相容性，能降低術後組織發炎反應，為臨床醫師提供更安全、穩定的生體替代方案。',
      },
      {
        title: '無機支架引導高效骨再生',
        desc: '微細中空結構為細胞遷移提供理想支架，引導高效骨骼再生，進而縮短患者術後恢復時間。',
      },
    ],
    structureTitle: '科學規劃的<br />材料結構與成分配置',
    structureDesc: [
      'Ezechbone<sup>®</sup> Granule CBS-400 經過專利與精密設計，展現出多重卓越臨床支持，包括引導止血、溫和控炎、高效骨再生。',
      '其特殊的結構能大幅降低術後沾黏、異常骨生成或骨性癒合（異位性骨性連結）等臨床風險。',
      'Ezechbone<sup>®</sup> Granule CBS-400 完美將上述所有關鍵特性整合於單一產品，為各類需要骨癒合的手術帶來全面物理支持與理想的臨床應用表現。',
    ],
    features: [
      {
        src: `${ICON_DIR}/icon-synthetic.svg`,
        icon: ICON_FLASK,
        title: '全合成設計',
        lines: ['由鈣/磷/硫為基礎，', '微米與奈米結構精密設計，', '100% 可生物吸收。'],
      },
      {
        src: `${ICON_DIR}/icon-source-safety.svg`,
        icon: ICON_DNA,
        title: '來源安全',
        lines: ['不含動物或人體成分，', '避免疾病傳播與來源風險。'],
      },
      {
        src: `${ICON_DIR}/icon-clinical-verified.svg`,
        icon: ICON_SHIELD,
        title: '臨床驗證',
        lines: ['已獲 TFDA 臨床使用核准，', '應用於骨科與牙科，專案核准治療關節內、周圍困難骨折。'],
      },
      {
        src: `${ICON_DIR}/icon-research.svg`,
        icon: ICON_MICROSCOPE,
        title: '產學研發',
        lines: ['成功大學 CBR 與喬醫醫材 JMD', '(ISO13485 &amp; GMP)', '認證共同開發。'],
      },
    ],
    compareTitle: 'CBS-400 與自異體補骨材料<br class="ezb-compare-title-br" />臨床特性全解析',
    compareAdvHead: '優點特點',
    compareLimHead: '臨床侷限與限制',
    compareUnlimited: '（ 無限制 ）',
    compareRows: [
      {
        nameHtml: 'Ezechbone<sup>®</sup>Granule<span class="ezb-compare-br-desktop"><br /></span> CBS-400',
        isFeatured: true,
        advantages: [
          '100% 全人工合成無機材料',
          '可完全被人體吸收代謝',
          '具備優異的止血、控炎與骨誘導性',
          '無免疫/疾病風險',
          '通過 TFDA 認證安全有保障',
        ],
        limitations: [],
      },
      {
        nameHtml: '自體骨(自己的骨頭)',
        advantages: ['含成骨細胞利於血管化', '臨床排斥率低'],
        limitations: [
          '自體骨量有限',
          '需額外手術造成二次傷口',
          '供體部位病變風險',
          '吸收速度較快，補骨空間較易凹陷，使軟組織長入',
        ],
      },
      {
        nameHtml: '異體骨(別人的骨頭)',
        advantages: ['長骨速率接近自體骨'],
        limitations: [
          '可能有來源疑慮（合法性、品質差異）',
          '有免疫/疾病傳染風險',
          '吸收速度較快，補骨空間較易凹陷，使軟組織長入',
        ],
      },
      {
        nameHtml: '異種骨(動物骨頭，如牛骨等)',
        advantages: ['品質穩定', '吸收慢，撐空間能力佳'],
        limitations: [
          '需留意骨整合後期吸收效率',
          '需依醫囑密切追蹤常規照護',
          '因不易被人體吸收，在未來可能產生異物發炎症狀',
        ],
      },
    ] as CompareRow[],
    sloganA: '完美整合',
    sloganB: '引導止血與溫和控炎',
    sloganC: '啟動高效骨再生新未來',
    memberTitle: '加入免費會員，<br />取得完整臨床資源',
    memberDesc: '註冊後即可下載臨床應用指南與學術文獻，掌握更多產品資訊',
    memberBtnPrimary: '立即加入會員',
    memberBtnOutline: '已是會員，登入',
    noticeLicenseLabel: '醫療器材許可證字號',
    noticeLicenseVal: '衛署醫器製字第 003890 號',
    noticeDisclaimerLabel: '免責聲明',
    noticeDisclaimer1: '本網頁內容僅供醫療專業人員參考 ，使用前請務必詳閱原廠使用說明書並遵照指示。',
    noticeDisclaimer2: '任何手術與醫療處置均有其風險，本網頁所呈現之臨床成效因個人骨床條件、口腔衛生習慣與醫師操作而異。實際療程規劃需經專業牙醫師進行全面性臨床評估。',
  },
  en: {
    heroTitleLine2: 'Multi-Functional Synthetic Bone Graft',
    heroSubtitle: 'Hemostatic Support • Mild Inflammatory Modulation • Osteoconductive Regeneration',
    introTitleTop: 'Advanced Synthetic Bone Grafting Material',
    introCards: [
      {
        title: 'Reliable Hemostatic Support',
        desc: 'Clinically documented across over 1,000 procedures—including sternotomy, spinal, orthopedic, and dental surgeries—demonstrating consistent hemostatic performance.',
      },
      {
        title: 'Supports Mild Inflammatory Modulation',
        desc: 'Exhibits high biocompatibility to help moderate postoperative tissue inflammatory responses, offering clinicians a stable synthetic grafting option.',
      },
      {
        title: 'Inorganic Scaffold for Bone Regeneration',
        desc: 'Micro- and nano-porous hollow architecture provides an osteoconductive scaffold for cellular migration and bone ingrowth to support postoperative recovery.',
      },
    ],
    structureTitle: 'Scientifically Engineered<br />Material Architecture & Composition',
    structureDesc: [
      'Ezechbone<sup>®</sup> Granule CBS-400 is precision-engineered with a patented structure to provide multi-faceted clinical support, including hemostatic assistance, mild inflammatory modulation, and osteoconductive bone regeneration.',
      'Its specialized microstructure is designed to help reduce clinical risks such as postoperative adhesion, abnormal bone formation, or heterotopic ossification.',
      'Ezechbone<sup>®</sup> Granule CBS-400 integrates these key material properties into a single synthetic graft, providing comprehensive physical support for orthopedic and dental bone grafting procedures.',
    ],
    features: [
      {
        src: `${ICON_DIR}/icon-synthetic.svg`,
        icon: ICON_FLASK,
        title: 'Fully Synthetic Design',
        lines: ['Calcium-, phosphorus-, and sulfur-based,', 'precision micro- and nano-structured,', '100% bioresorbable.'],
      },
      {
        src: `${ICON_DIR}/icon-source-safety.svg`,
        icon: ICON_DNA,
        title: 'Source Safety',
        lines: ['Free of animal or human tissue derivatives,', 'avoiding tissue-source transmission concerns.'],
      },
      {
        src: `${ICON_DIR}/icon-clinical-verified.svg`,
        icon: ICON_SHIELD,
        title: 'Clinical Verification',
        lines: ['Cleared by TFDA for clinical use in orthopedics and dentistry,', 'including complex intra- and peri-articular fractures.'],
      },
      {
        src: `${ICON_DIR}/icon-research.svg`,
        icon: ICON_MICROSCOPE,
        title: 'Academic-Industry R&D',
        lines: ['Co-developed by NCKU CBR and JMD', '(ISO 13485 &amp; GMP certified)', 'for consistent quality control.'],
      },
    ],
    compareTitle: 'Comprehensive Clinical Comparison:<br class="ezb-compare-title-br" /> CBS-400 vs. Traditional Bone Grafts',
    compareAdvHead: 'Key Characteristics',
    compareLimHead: 'Clinical Considerations & Limitations',
    compareUnlimited: '( No Tissue-Source Restrictions )',
    compareRows: [
      {
        nameHtml: 'Ezechbone<sup>®</sup>Granule<span class="ezb-compare-br-desktop"><br /></span> CBS-400',
        isFeatured: true,
        advantages: [
          '100% fully synthetic inorganic biomaterial',
          'Bioresorbable and metabolized during bone remodeling',
          'Supports hemostasis, mild inflammatory modulation, and osteoconduction',
          'Free of animal/human tissue immunogenic or transmission concerns',
          'TFDA cleared for clinical safety and quality',
        ],
        limitations: [],
      },
      {
        nameHtml: 'Autograft (Autogenous Bone)',
        advantages: ['Contains osteogenic cells favorable for vascularization', 'Low immunological rejection rate'],
        limitations: [
          'Limited harvestable bone volume',
          'Requires a secondary surgical harvesting site',
          'Potential donor-site morbidity and discomfort',
          'Faster resorption rate may lead to graft volume contraction and soft-tissue ingrowth',
        ],
      },
      {
        nameHtml: 'Allograft (Human Donor Bone)',
        advantages: ['Bone remodeling rate comparable to autogenous bone'],
        limitations: [
          'Potential variability in donor source and batch consistency',
          'Potential immunogenic or donor-transmission considerations',
          'Faster resorption rate may lead to graft volume contraction and soft-tissue ingrowth',
        ],
      },
      {
        nameHtml: 'Xenograft (Animal-Derived, e.g., Bovine)',
        advantages: ['Consistent manufacturing supply', 'Slow resorption for long-term space maintenance'],
        limitations: [
          'Slower late-stage resorption during bone remodeling',
          'Requires routine clinical follow-up as directed by the clinician',
          'Residual non-resorbed particles may occasionally elicit foreign-body tissue responses',
        ],
      },
    ] as CompareRow[],
    sloganA: 'Integrating',
    sloganB: 'Hemostatic Support & Mild Inflammatory Modulation',
    sloganC: 'to Advance Osteoconductive Bone Regeneration',
    memberTitle: 'Join Free Membership to<br />Access Complete Clinical Resources',
    memberDesc: 'Register to download clinical application guides and peer-reviewed literature, and stay updated on product insights.',
    memberBtnPrimary: 'Join Free Today',
    memberBtnOutline: 'Member Login',
    noticeLicenseLabel: 'Medical Device License',
    noticeLicenseVal: 'TFDA Medical Device Mfg. License No. 003890',
    noticeDisclaimerLabel: 'Disclaimer',
    noticeDisclaimer1: 'The content on this webpage is intended for reference by healthcare professionals only. Please consult the official Instructions for Use (IFU) prior to clinical application.',
    noticeDisclaimer2: 'All surgical and medical procedures involve clinical risks. Clinical outcomes presented on this webpage may vary depending on individual bone bed conditions, oral hygiene habits, and clinical technique. Actual treatment planning requires comprehensive clinical evaluation by a licensed dental practitioner.',
  },
};

function renderCompareRowsHtml(lang: 'zh' | 'en'): string {
  const t = EZECHBONE_I18N[lang] || EZECHBONE_I18N.zh;
  return t.compareRows
    .map(
      (row) => `
      <div class="ezb-compare-row ${row.isFeatured ? 'ezb-compare-row-featured' : ''}">
        <div class="ezb-compare-name">
          <h3>${row.nameHtml}</h3>
        </div>
        <div class="ezb-compare-content">
          <div class="ezb-compare-col ezb-compare-adv">
            <div class="ezb-compare-subhead ezb-compare-subhead-adv">
              <span class="ezb-compare-icon ezb-compare-icon-adv">${ICON_HAND_HEART}</span>
              <span>${t.compareAdvHead}</span>
            </div>
            <ul class="ezb-compare-list">
              ${row.advantages.map((item) => `<li>${noOrphan(item)}</li>`).join('')}
            </ul>
          </div>
          <div class="ezb-compare-col ezb-compare-lim">
            <div class="ezb-compare-subhead ezb-compare-subhead-lim">
              <span class="ezb-compare-icon ezb-compare-icon-lim">${ICON_BAN}</span>
              <span>${t.compareLimHead}</span>
            </div>
            ${
              row.limitations.length === 0
                ? `<div class="ezb-compare-unlimited">${t.compareUnlimited}</div>`
                : `<ul class="ezb-compare-list">
                    ${row.limitations.map((item) => `<li>${noOrphan(item)}</li>`).join('')}
                  </ul>`
            }
          </div>
        </div>
      </div>`
    )
    .join('');
}

export function ezechbonePage(): string {
  const lang = currentGlobalLang || 'zh';
  const t = EZECHBONE_I18N[lang] || EZECHBONE_I18N.zh;

  return `
    <div class="ezb-page">
    <!-- ============================================================
         1. HERO 主視覺 — Ezechbone® CBS-400 全合成多效設計
         ============================================================ -->
    <section class="ezb-hero" id="ezb-hero">
      <!-- 滿版背景圖：圖檔放置於 public/images/ezechbone/ -->
      <div class="ezb-hero-bg">
        <picture>
          <!-- Desktop (>= 1025px) -->
          <source media="(min-width: 1025px)" srcset="/images/ezechbone/hero-desktop.jpg" />
          <!-- Tablet (769px - 1024px) -->
          <source media="(min-width: 769px)" srcset="/images/ezechbone/hero-tablet.jpg" />
          <!-- Mobile (<= 768px) -->
          <img src="/images/ezechbone/hero-mobile.jpg" alt="Ezechbone® CBS-400 甦骨粒" fetchpriority="high"
               onerror="this.style.display='none'" />
        </picture>
      </div>
      <div class="ezb-container ezb-hero-inner">
        <!-- 平板 / 手機版麵包屑（依設計稿置於 Banner 左上方） -->
        <div class="ezb-hero-crumb">
          <a href="#/">HOME</a><span class="ezb-hero-crumb-sep">/</span><span>EZECHBONE</span>
        </div>
        <h1 class="ezb-hero-title">
          <span class="ezb-hero-title-en">Ezechbone<sup>®</sup><span class="ezb-hero-space"> </span><span class="ezb-hero-br-mobile"><br /></span>CBS-400</span><br />
          <span id="ezb-hero-title-line2">${t.heroTitleLine2}</span>
        </h1>
        <p class="ezb-hero-subtitle" id="ezb-hero-subtitle">${t.heroSubtitle}</p>
      </div>
    </section>

    <!-- ============================================================
         2. 產品介紹 — 優異的補骨材料 Ezechbone® Granule CBS-400（3 張特色卡片）
         ============================================================ -->
    <section class="ezb-intro" id="ezb-intro">
      <div class="ezb-container">
        <p class="ezb-eyebrow">OVERVIEW<span class="ezb-eyebrow-sep">|</span>Ezechbone</p>
        <h2 class="ezb-intro-title">
          <span id="ezb-intro-title-top">${t.introTitleTop}</span><br />
          <span class="ezb-intro-title-en">Ezechbone<sup>®</sup> Granule CBS-400</span>
        </h2>
        <div class="ezb-intro-cards" id="ezb-intro-cards">
          ${t.introCards.map((c) => `
          <article class="ezb-intro-card">
            <h3>${c.title}</h3>
            <p>${noOrphan(c.desc)}</p>
          </article>`).join('')}
        </div>
      </div>
    </section>

    <!-- ============================================================
         3. 材料結構 — 科學規劃的材料結構與成分配置（說明文字 + 4 項圖示特性）
         ============================================================ -->
    <section class="ezb-structure" id="ezb-structure">
      <div class="ezb-container">
        <h2 class="ezb-structure-title" id="ezb-structure-title">${t.structureTitle}</h2>
        <p class="ezb-structure-desc" id="ezb-structure-desc">
          ${t.structureDesc.map((line) => `<span class="ezb-structure-line">${noOrphan(line)}</span>`).join('')}
        </p>
        <div class="ezb-features" id="ezb-features">
          ${t.features.map((f) => `
          <div class="ezb-feature">
            <div class="ezb-feature-icon" aria-hidden="true">
              <img src="${f.src}" alt="" width="48" height="48" loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
              <span class="ezb-feature-icon-fallback">${f.icon}</span>
            </div>
            <h3>${f.title}</h3>
            <p>${noOrphanLines(f.lines)}</p>
          </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- ============================================================
         4. 比較表 — CBS-400 與自異體補骨材料臨床特性全解析
         ============================================================ -->
    <section class="ezb-compare" id="ezb-compare">
      <div class="ezb-container">
        <p class="ezb-eyebrow ezb-compare-eyebrow">COMPARISON</p>
        <h2 class="ezb-compare-title" id="ezb-compare-title">
          ${t.compareTitle}
        </h2>

        <div class="ezb-compare-table">
          <!-- 桌面端欄位標頭 -->
          <div class="ezb-compare-head" aria-hidden="true">
            <div class="ezb-compare-head-col ezb-compare-head-name"></div>
            <div class="ezb-compare-head-col ezb-compare-head-adv">
              <span class="ezb-compare-icon ezb-compare-icon-adv">${ICON_HAND_HEART}</span>
              <span id="ezb-compare-head-adv-text">${t.compareAdvHead}</span>
            </div>
            <div class="ezb-compare-head-col ezb-compare-head-lim">
              <span class="ezb-compare-icon ezb-compare-icon-lim">${ICON_BAN}</span>
              <span id="ezb-compare-head-lim-text">${t.compareLimHead}</span>
            </div>
          </div>

          <!-- 各材料列 / 卡片 -->
          <div class="ezb-compare-body" id="ezb-compare-body">
            ${renderCompareRowsHtml(lang)}
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         5. 標語橫幅 — 全寬 Slogan Banner
         ============================================================ -->
    <section class="ezb-slogan" id="ezb-slogan">
      <div class="ezb-slogan-bg" aria-hidden="true">${SLOGAN_BG_SVG}</div>
      <p class="ezb-slogan-text"><span class="ezb-slogan-line ezb-slogan-a" id="ezb-slogan-a">${t.sloganA}</span><span class="ezb-slogan-line ezb-slogan-b" id="ezb-slogan-b">${t.sloganB}</span> <span class="ezb-slogan-line ezb-slogan-c" id="ezb-slogan-c">${t.sloganC}</span></p>
    </section>

    <!-- ============================================================
         6. 會員 CTA — 加入免費會員，取得完整臨床資源（左圖右文）
         ============================================================ -->
    <section class="ezb-member-cta" id="ezb-member-cta">
      <div class="ezb-member-cta-media">
        <img src="/images/cta-tablet-user.jpg" alt="加入免費會員取得完整臨床資源" loading="lazy"
          onerror="this.style.display='none';" />
        <a
          href="https://www.${'free' + 'pik'}.com/free-photo/unrecognizable-office-worker-with-tablet_1526346.htm#fromView=search&page=1&position=15&uuid=7b9326fd-af96-4440-92ec-658717b58b58&track=ais_hybrid&query=Clinical+Resources"
          target="_blank"
          rel="noopener noreferrer"
          class="ezb-image-credit"
        >Image by ${'free' + 'pik'}</a>
      </div>
      <div class="ezb-member-cta-body">
        <div class="ezb-member-cta-inner">
          <p class="ezb-eyebrow">MORE RESOURCE</p>
          <h2 class="ezb-member-cta-title" id="ezb-member-title">${t.memberTitle}</h2>
          <p class="ezb-member-cta-desc" id="ezb-member-desc">${noOrphan(t.memberDesc)}</p>
          <div class="ezb-member-cta-actions">
            <a class="ezb-btn ezb-btn-primary" href="#/register" id="ezb-member-btn-primary">${t.memberBtnPrimary}</a>
            <a class="ezb-btn ezb-btn-outline" href="#/login">
              <span id="ezb-member-btn-outline">${t.memberBtnOutline}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         7. 注意事項 / 法規聲明 — 深色背景小字說明（Footer 上方）
         ============================================================ -->
    <section class="ezb-notice" id="ezb-notice">
      <div class="ezb-container">
        <div class="ezb-notice-group">
          <p class="ezb-notice-label" id="ezb-notice-lic-label">${t.noticeLicenseLabel}</p>
          <p class="ezb-notice-license" id="ezb-notice-lic-val">${t.noticeLicenseVal}</p>
        </div>
        <div class="ezb-notice-group">
          <p class="ezb-notice-label" id="ezb-notice-disc-label">${t.noticeDisclaimerLabel}</p>
          <p class="ezb-notice-text" id="ezb-notice-disc-text">
            <span class="ezb-notice-line">${noOrphan(t.noticeDisclaimer1)}</span>
            <span class="ezb-notice-line">${noOrphan(t.noticeDisclaimer2)}</span>
          </p>
        </div>
      </div>
    </section>
    </div>
  `;
}

export function initEzechbonePage(): void {
  if (!(window as unknown as { __ezbLangBound?: boolean }).__ezbLangBound) {
    (window as unknown as { __ezbLangBound?: boolean }).__ezbLangBound = true;
    window.addEventListener('langchange', (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
      const lang = customEvent.detail?.lang || currentGlobalLang || 'zh';
      const t = EZECHBONE_I18N[lang] || EZECHBONE_I18N.zh;

      const setHtml = (id: string, val: string) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = val;
      };
      const setText = (id: string, val: string) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setText('ezb-hero-title-line2', t.heroTitleLine2);
      setText('ezb-hero-subtitle', t.heroSubtitle);
      setText('ezb-intro-title-top', t.introTitleTop);

      const introCardsEl = document.getElementById('ezb-intro-cards');
      if (introCardsEl) {
        introCardsEl.innerHTML = t.introCards
          .map(
            (c) => `
          <article class="ezb-intro-card">
            <h3>${c.title}</h3>
            <p>${noOrphan(c.desc)}</p>
          </article>`
          )
          .join('');
      }

      setHtml('ezb-structure-title', t.structureTitle);
      setHtml(
        'ezb-structure-desc',
        t.structureDesc.map((line) => `<span class="ezb-structure-line">${noOrphan(line)}</span>`).join('')
      );

      const featuresEl = document.getElementById('ezb-features');
      if (featuresEl) {
        featuresEl.innerHTML = t.features
          .map(
            (f) => `
          <div class="ezb-feature">
            <div class="ezb-feature-icon" aria-hidden="true">
              <img src="${f.src}" alt="" width="48" height="48" loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
              <span class="ezb-feature-icon-fallback">${f.icon}</span>
            </div>
            <h3>${f.title}</h3>
            <p>${noOrphanLines(f.lines)}</p>
          </div>`
          )
          .join('');
      }

      setHtml('ezb-compare-title', t.compareTitle);
      setText('ezb-compare-head-adv-text', t.compareAdvHead);
      setText('ezb-compare-head-lim-text', t.compareLimHead);
      setHtml('ezb-compare-body', renderCompareRowsHtml(lang));

      setText('ezb-slogan-a', t.sloganA);
      setText('ezb-slogan-b', t.sloganB);
      setText('ezb-slogan-c', t.sloganC);

      setHtml('ezb-member-title', t.memberTitle);
      setHtml('ezb-member-desc', noOrphan(t.memberDesc));
      setText('ezb-member-btn-primary', t.memberBtnPrimary);
      setText('ezb-member-btn-outline', t.memberBtnOutline);

      setText('ezb-notice-lic-label', t.noticeLicenseLabel);
      setText('ezb-notice-lic-val', t.noticeLicenseVal);
      setText('ezb-notice-disc-label', t.noticeDisclaimerLabel);
      setHtml(
        'ezb-notice-disc-text',
        `<span class="ezb-notice-line">${noOrphan(t.noticeDisclaimer1)}</span><span class="ezb-notice-line">${noOrphan(t.noticeDisclaimer2)}</span>`
      );
    });
  }
}
