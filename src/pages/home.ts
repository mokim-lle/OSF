/* ============================================================
   首頁 (Home Page) — 精準對照 Wireframe & Guide Style (支援中英雙語系)
   ============================================================ */
import './home.css';
import { currentGlobalLang } from '../components/header';

/* TODO: 待確認首頁英文翻譯 (Home EN Translations — 已依台灣醫療法規採客觀專業臨床表述) */
const HOME_I18N = {
  zh: {
    heroTitle: '精準掌握<br class="hero-mobile-br" />每一次治療',
    heroSubtitle: '專注提供牙科植體醫材與專業臨床支援，<br class="hero-desktop-br" />深化牙科領域，並持續引進更多元醫療選擇。',
    aboutTag: '01 - 關於歐舒福 ABOUT US',
    aboutTitle: '致力發展多元的牙科植體與再生醫材，為臨床醫師提供安全、高效的治療選擇',
    aboutP1: '長期專注於引進與完善之牙科植體系統與再生醫材，圍繞著各階段的輔助臨床及生物相容性材料應用，協助臨床持續強化整體診療流程。我們相信良好的醫材，是回到病人本身，回歸於臨床醫療本質',
    aboutP2: '醫材選擇關乎臨床安全性的信賴基石。除了嚴格挑選符合國際規範標準之材料外，也投入大量心力於臨床教育與陪伴支援，讓臨床能結合資源與知識、提供安心而穩定的整體表現',
    feat1Title: '高品質醫療器材',
    feat1Desc: '嚴選符合國際規範之植體與再生醫材，為臨床治療提供安心保障',
    feat2Title: '專業臨床支援',
    feat2Desc: '術前規劃、方案評估與教育訓練同步陪伴，降低操作風險',
    feat3Title: '持續引進國際技術',
    feat3Desc: '追蹤全球臨床趨勢，持續引進兼具多元性與最新技術之醫療產品',
    prodTag: '02 - 完整產品系列 PRODUCTS',
    prodTitle: '植體系統與骨修復材料',
    prodDesc: '涵蓋 OsseoFuse 與 Ezechbone 骨修復材料，滿足各階段不同臨床條件與臨床需求',
    osfTypeLabel: '美國原廠 OsseoFuse',
    osfTitle: '一鑽植牙',
    osfDesc: '模組化植體平台，涵蓋窄徑至標準徑規格，對應多樣骨質條件與即拔即種需求',
    osfSpec1Label: '1-Drill',
    osfSpec1Val: '流程簡化，提升手術效率',
    osfSpec2Label: '1-Kit',
    osfSpec2Val: '一組套件，統一平台規格',
    osfSpec3Label: 'Step-Inner-Locking',
    osfSpec3Val: '優異初期穩定度',
    osfSpec4Label: '專利設計',
    osfSpec4Val: '精簡上顎竇提升術式',
    ezbTypeLabel: 'Ezechbone® CBS-400',
    ezbTitle: '甦骨粒',
    ezbDesc: '完美整合引導止血與溫和控炎，啟動高效骨再生新未來',
    ezbSpec1Label: '全合成設計',
    ezbSpec1Val: '100 % 可吸收',
    ezbSpec2Label: '來源安全',
    ezbSpec2Val: '無動物 / 人體成分',
    ezbSpec3Label: '臨保驗證',
    ezbSpec3Val: 'TFDA 核准使用',
    ezbSpec4Label: '產學開發',
    ezbSpec4Val: '成大 CBR × 喬醫 JMD',
    clinTag: '03 - 活動花絮 HIGHLIGHTS',
    clinTitle: '臨床現場與學術交流',
    memTag: '04 - 會員專區 MEMBERSHIP',
    memTitle: '加入會員，<br/>取得完整臨床資源',
    memDesc: '註冊後即可下載臨床應用指南與學術文獻，掌握產品資訊與會員之獨家限時優惠。',
    memBtnPrimary: '立即加入會員',
    memBtnOutline: '已是會員，登入 →',
  },
  en: {
    heroTitle: 'Precision in Every Clinical Procedure',
    heroSubtitle: 'Dedicated to providing dental implant systems and professional clinical support,<br/>advancing dental care while continuously introducing diverse clinical solutions.',
    aboutTag: '01 - ABOUT US',
    aboutTitle: 'Advancing Diverse Dental Implants and Regenerative Biomaterials to Provide Safe, Reliable Clinical Solutions',
    aboutP1: 'With a long-standing focus on introducing well-established dental implant systems and regenerative biomaterials, we support every stage of clinical practice with biocompatible material applications to optimize the overall treatment workflow. We believe that quality medical devices ultimately serve the patient and return to the core essence of clinical care.',
    aboutP2: 'Selecting appropriate medical devices is fundamental to clinical safety. Beyond strictly sourcing materials that comply with international regulatory standards, we invest extensively in clinical education and ongoing technical support—empowering practitioners to integrate knowledge and resources for consistent, dependable clinical outcomes.',
    feat1Title: 'Quality Medical Devices',
    feat1Desc: 'Carefully selected implants and regenerative biomaterials compliant with international standards to support clinical safety.',
    feat2Title: 'Professional Clinical Support',
    feat2Desc: 'Comprehensive support in preoperative planning, case evaluation, and educational training to assist clinical operations.',
    feat3Title: 'Global Technological Integration',
    feat3Desc: 'Tracking international clinical developments to continuously introduce diverse, advanced medical devices.',
    prodTag: '02 - PRODUCTS',
    prodTitle: 'Implant Systems & Bone Grafting Materials',
    prodDesc: 'Featuring OsseoFuse implant systems and Ezechbone bone grafting materials to address diverse clinical indications across treatment stages.',
    osfTypeLabel: 'USA Original OsseoFuse',
    osfTitle: '1-Drill Implant System',
    osfDesc: 'Modular implant platform spanning narrow to wide diameters, designed to accommodate varied bone conditions and immediate placement protocols.',
    osfSpec1Label: '1-Drill',
    osfSpec1Val: 'Streamlined Protocol & Efficiency',
    osfSpec2Label: '1-Kit',
    osfSpec2Val: 'Single Kit, Unified Platform',
    osfSpec3Label: 'Step-Inner-Locking',
    osfSpec3Val: 'Favorable Primary Stability',
    osfSpec4Label: 'Patented Design',
    osfSpec4Val: 'Streamlined Sinus Elevation',
    ezbTypeLabel: 'Ezechbone® CBS-400',
    ezbTitle: 'Synthetic Bone Graft',
    ezbDesc: 'Integrates hemostatic support and mild inflammatory modulation to facilitate bone regeneration.',
    ezbSpec1Label: 'Fully Synthetic',
    ezbSpec1Val: '100% Bioresorbable',
    ezbSpec2Label: 'Source Safety',
    ezbSpec2Val: 'Animal- & Human-Tissue Free',
    ezbSpec3Label: 'Regulatory Approval',
    ezbSpec3Val: 'TFDA Cleared for Clinical Use',
    ezbSpec4Label: 'Academic-Industry R&D',
    ezbSpec4Val: 'NCKU CBR × JMD Collaboration',
    clinTag: '03 - HIGHLIGHTS',
    clinTitle: 'Clinical Practice & Academic Exchange',
    memTag: '04 - MEMBERSHIP',
    memTitle: 'Join Membership to<br/>Access Complete Clinical Resources',
    memDesc: 'Register to download clinical application guides and peer-reviewed literature, and stay informed on product updates and member services.',
    memBtnPrimary: 'Join Membership',
    memBtnOutline: 'Member Login →',
  },
};

export function homePage(): string {
  const fp = 'free' + 'pik';
  const lang = currentGlobalLang || 'zh';
  const t = HOME_I18N[lang] || HOME_I18N.zh;

  return `
    <!-- ============================================================
         1. HERO SECTION (深海軍藍 + 右側透光背景圖 + 底部白色滾動條)
         ============================================================ -->
    <section class="hero" id="hero-section">
      <!-- 雙層形象圖 (Dentist / Patient) -->
      <div class="hero-bg">
        <div class="hero-bg-layer hero-bg-dentist" id="hero-layer-dentist">
          <img src="/images/hero.jpg" alt="[ 圖片: hero-dentist.jpg ] 醫療技術支援現場" fetchpriority="high" onerror="this.style.display='none'" />
        </div>
        <div class="hero-bg-layer hero-bg-patient" id="hero-layer-patient">
          <img src="/images/hero-patient.jpg" alt="[ 圖片: hero-patient.jpg ] 舒適植牙諮詢與微笑體驗" onerror="this.style.display='none'" />
          <a href="https://www.magnific.com/free-photo/unrecognizable-office-worker-with-tablet_1526346.htm#fromView=search&page=1&position=15&uuid=7b9326fd-af96-4440-92ec-658717b58b58&track=ais_hybrid&query=Clinical+Resources">Image by magnific</a>
        </div>
      </div>

      <div class="hero-inner">
        <div class="hero-content">
          <!-- 常駐主文案（背景雙圖切換時保持穩定不閃動） -->
          <div class="hero-text-slide active" id="hero-text-dentist">
            <h1 id="home-hero-title-dentist">${t.heroTitle}</h1>
            <p class="hero-subtitle" id="home-hero-sub-dentist">
              ${t.heroSubtitle}
            </p>
            <div class="hero-actions">
              <a href="#/ezechbone" class="btn btn-outline">EZECHBONE</a>
              <a href="#/osseofuse" class="btn btn-outline">OSSEOFUSE</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero 底部白色進度條 (FOR DENTIST <---> FOR PATIENT) -->
      <div class="hero-slider-bar">
        <div class="hero-slider-inner">
          <button type="button" class="slider-label active" id="label-dentist" aria-label="切換至醫師專區">FOR DENTIST</button>
          <div class="slider-track-wrapper" id="slider-track-wrap" title="點擊切換視角">
            <div class="slider-track">
              <div class="slider-ball" id="slider-ball" style="left: 0%;"></div>
            </div>
          </div>
          <button type="button" class="slider-label" id="label-patient" aria-label="切換至患者專區">FOR PATIENT</button>
        </div>
      </div>

      <!-- Patient 形象圖來源標示 (置於最上層，避免被 .hero-slider-bar 遮擋點擊) -->
      <a
        href="https://www.${fp}.com/free-photo/close-up-doctor-checking-man_18492661.htm#fromView=search&page=2&position=44&uuid=378f3e72-9d65-4cc4-884b-874f25647651&track=ais_hybrid&query=Dental+Implantation"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-image-credit"
        id="hero-patient-credit"
      >Image by ${fp}</a>
    </section>

    <!-- ============================================================
         2. ABOUT OSF (深海軍藍底色 + 透明齒模圖 + 3 個深色微光卡片)
         ============================================================ -->
    <section class="section-about" id="about-section">
      <!-- 藍色弧形背景光暈 (對照圖二，放置於畫面中下) -->
      <div class="about-bg-glow" aria-hidden="true">
        <img src="/images/about-blue-glow.png" alt="" loading="lazy" decoding="async" />
      </div>

      <div class="about-top-grid">
        <!-- 左側文案 -->
        <div class="about-text">
          <span class="section-tag-about" id="home-about-tag">${t.aboutTag}</span>
          <h2 id="home-about-title">${t.aboutTitle}</h2>
          <p id="home-about-p1">
            ${t.aboutP1}
          </p>
          <p id="home-about-p2">
            ${t.aboutP2}
          </p>
        </div>

        <!-- 右側透明齒模照片相框 (486×423px) -->
        <div class="about-image-card">
          <img src="/images/about-model.jpg" alt="透明牙科植體模型" loading="lazy" decoding="async" onerror="this.src='/images/hero.jpg'" />
        </div>
      </div>

      <!-- 下方 3 個深色微光卡片 (對照圖面) -->
      <div class="features-grid">
        <div class="feature-card">
          <h3 id="home-feat1-title">${t.feat1Title}</h3>
          <p id="home-feat1-desc">${t.feat1Desc}</p>
        </div>
        <div class="feature-card">
          <h3 id="home-feat2-title">${t.feat2Title}</h3>
          <p id="home-feat2-desc">${t.feat2Desc}</p>
        </div>
        <div class="feature-card">
          <h3 id="home-feat3-title">${t.feat3Title}</h3>
          <p id="home-feat3-desc">${t.feat3Desc}</p>
        </div>
      </div>
    </section>

    <!-- ============================================================
         3. PRODUCTS (淺色網格背景 + 雙大白卡 + 商品圖精緻置中)
         ============================================================ -->
    <section class="section-products" id="products-section">
      <!-- 幾何透視網格背景 (對照圖二) -->
      <div class="products-grid-bg"></div>

      <div class="products-header">
        <span class="section-tag-products" id="home-prod-tag">${t.prodTag}</span>
        <h2 id="home-prod-title">${t.prodTitle}</h2>
        <p id="home-prod-desc">${t.prodDesc}</p>
      </div>

      <div class="products-grid">
        <!-- 左卡: OsseoFuse 一鑽植牙 -->
        <div class="product-card">
          <div class="product-card-top">
            <span class="product-type-label" id="home-osf-type">${t.osfTypeLabel}</span>
            <a href="#/osseofuse" class="product-link-btn" aria-label="前往 OsseoFuse 一鑽植牙頁面">
              <span class="read-more-text">read more</span>
              <svg class="external-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1875c7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h3 class="product-title" id="home-osf-title">${t.osfTitle}</h3>
          <p class="product-desc" id="home-osf-desc">
            ${t.osfDesc}
          </p>

          <!-- 切換區域：圖片 hover overlay + 規格矩陣，固定高度不影響上方 title -->
          <div class="product-media-zone">
            <!-- 一鑽植牙產品圖 (Desktop hover 顯示，Pad/Mobile 常駐) -->
            <div class="product-centered-image-box" id="product-box-left">
              <img src="/images/product-osseofuse.jpg" alt="OsseoFuse 一鑽植牙" loading="lazy" class="product-img-layer" />
            </div>

            <!-- 規格矩陣 (Desktop 預設顯示，Hover 隱藏) -->
            <div class="product-specs-matrix">
              <div class="spec-matrix-item item-drill">
                <span class="spec-label" id="home-osf-s1-label">${t.osfSpec1Label}</span>
                <h4 class="spec-value" id="home-osf-s1-val">${t.osfSpec1Val}</h4>
              </div>
              <div class="spec-matrix-item item-kit">
                <span class="spec-label" id="home-osf-s2-label">${t.osfSpec2Label}</span>
                <h4 class="spec-value" id="home-osf-s2-val">${t.osfSpec2Val}</h4>
              </div>
              <div class="spec-matrix-item item-lock">
                <span class="spec-label" id="home-osf-s3-label">${t.osfSpec3Label}</span>
                <h4 class="spec-value" id="home-osf-s3-val">${t.osfSpec3Val}</h4>
              </div>
              <div class="spec-matrix-item item-patent">
                <span class="spec-label" id="home-osf-s4-label">${t.osfSpec4Label}</span>
                <h4 class="spec-value" id="home-osf-s4-val">${t.osfSpec4Val}</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- 右卡: Ezechbone 甦骨粒 -->
        <div class="product-card">
          <div class="product-card-top">
            <span class="product-type-label" id="home-ezb-type">${t.ezbTypeLabel}</span>
            <a href="#/ezechbone" class="product-link-btn" aria-label="前往 Ezechbone 甦骨粒頁面">
              <span class="read-more-text">read more</span>
              <svg class="external-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1875c7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <h3 class="product-title" id="home-ezb-title">${t.ezbTitle}</h3>
          <p class="product-desc" id="home-ezb-desc">
            ${t.ezbDesc}
          </p>

          <!-- 切換區域：圖片 hover overlay + 規格矩陣，固定高度不影響上方 title -->
          <div class="product-media-zone">
            <!-- 甦骨粒產品圖 (Desktop hover 顯示，Pad/Mobile 常駐) -->
            <div class="product-centered-image-box" id="product-box-right">
              <img src="/images/product-box.jpg" alt="Ezechbone 甦骨粒" onerror="this.src='/images/product-ezechbone.jpg'" loading="lazy" class="product-img-layer" />
            </div>

            <!-- 規格矩陣 (Desktop 預設顯示，Hover 隱藏) -->
            <div class="product-specs-matrix">
              <div class="spec-matrix-item item-synth">
                <span class="spec-label" id="home-ezb-s1-label">${t.ezbSpec1Label}</span>
                <h4 class="spec-value" id="home-ezb-s1-val">${t.ezbSpec1Val}</h4>
              </div>
              <div class="spec-matrix-item item-source">
                <span class="spec-label" id="home-ezb-s2-label">${t.ezbSpec2Label}</span>
                <h4 class="spec-value" id="home-ezb-s2-val">${t.ezbSpec2Val}</h4>
              </div>
              <div class="spec-matrix-item item-tfda">
                <span class="spec-label" id="home-ezb-s3-label">${t.ezbSpec3Label}</span>
                <h4 class="spec-value" id="home-ezb-s3-val">${t.ezbSpec3Val}</h4>
              </div>
              <div class="spec-matrix-item item-cbr">
                <span class="spec-label" id="home-ezb-s4-label">${t.ezbSpec4Label}</span>
                <h4 class="spec-value" id="home-ezb-s4-val">${t.ezbSpec4Val}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         4. CLINICAL & ACADEMIC — Gallery Slider
         ============================================================ -->
    <section class="section-clinical" id="clinical-section">
      <div class="clinical-header-row">
        <div class="clinical-title-wrap">
          <span class="section-tag-clinical" id="home-clin-tag">${t.clinTag}</span>
          <h2 id="home-clin-title">${t.clinTitle}</h2>
        </div>
        <!-- 右上角左右控制按鈕 (對照截圖：方框無圓角細線箭頭) -->
        <div class="clinical-slider-controls">
          <button type="button" class="slider-nav-btn" id="gallery-prev" aria-label="上一張">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button type="button" class="slider-nav-btn" id="gallery-next" aria-label="下一張">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Slider 主體：overflow hidden + flex track -->
      <div class="gallery-slider-wrapper">
        <div class="gallery-slider-track" id="gallery-track">
          <!-- JS 動態填入卡片 (384×360px) -->
        </div>
      </div>

      <!-- 底部點點進度指示 -->
      <div class="gallery-dots" id="gallery-dots"></div>
    </section>


    <!-- ============================================================
         5. MEMBERSHIP (大卡片左右 1:1 分割)
         ============================================================ -->
    <section class="section-membership" id="membership-section">
      <div class="membership-container">
        <div class="membership-split-card">
          <div class="membership-image-col">
            <img src="/images/cta-tablet-user.jpg" alt="加入免費會員取得完整臨床資源" loading="lazy" onerror="this.style.display='none'" />
            <a
              href="https://www.${fp}.com/free-photo/unrecognizable-office-worker-with-tablet_1526346.htm#fromView=search&page=1&position=15&uuid=7b9326fd-af96-4440-92ec-658717b58b58&track=ais_hybrid&query=Clinical+Resources"
              target="_blank"
              rel="noopener noreferrer"
              class="membership-image-credit"
            >Image by ${fp}</a>
          </div>

          <!-- 右側白色內容區 -->
          <div class="membership-content-col">
            <span class="section-tag-membership" id="home-mem-tag">${t.memTag}</span>
            <h2 id="home-mem-title">${t.memTitle}</h2>
            <p id="home-mem-desc">
              ${t.memDesc}
            </p>
            <div class="membership-actions">
              <a href="#/register" class="btn-membership-primary" id="home-mem-btn-primary">${t.memBtnPrimary}</a>
              <a href="#/login" class="btn-membership-outline" id="home-mem-btn-outline">${t.memBtnOutline}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * 初始化首頁互動 (Hero 雙端滾動與慢快特效、Clinical 輪播進度)
 */
let heroSliderTimer: number | null = null;

export function initHomePage(): void {
  // Hero Slider 元素
  const ball = document.getElementById('slider-ball');
  const labelDentist = document.getElementById('label-dentist');
  const labelPatient = document.getElementById('label-patient');
  const trackWrap = document.getElementById('slider-track-wrap');
  const layerDentist = document.getElementById('hero-layer-dentist');
  const layerPatient = document.getElementById('hero-layer-patient');
  const creditPatient = document.getElementById('hero-patient-credit');

  if (!ball || !labelDentist || !labelPatient || !trackWrap) return;

  let currentMode: 'dentist' | 'patient' = 'dentist';

  function switchMode(mode: 'dentist' | 'patient') {
    currentMode = mode;

    if (mode === 'dentist') {
      ball!.style.left = '0%';
      labelDentist!.classList.add('active');
      labelPatient!.classList.remove('active');

      layerDentist?.classList.add('active');
      layerPatient?.classList.remove('active');

      creditPatient?.classList.remove('active');
    } else {
      ball!.style.left = '100%';
      labelPatient!.classList.add('active');
      labelDentist!.classList.remove('active');

      layerPatient?.classList.add('active');
      layerDentist?.classList.remove('active');

      creditPatient?.classList.add('active');
    }
  }

  // 點擊事件
  labelDentist.addEventListener('click', () => {
    switchMode('dentist');
    restartHeroTimer();
  });

  labelPatient.addEventListener('click', () => {
    switchMode('patient');
    restartHeroTimer();
  });

  trackWrap.addEventListener('click', (e) => {
    const rect = trackWrap.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      switchMode('patient');
    } else {
      switchMode('dentist');
    }
    restartHeroTimer();
  });

  // 自動往返輪播：一進頁面立即觸發首波進場與滑動動畫，無需苦等 6 秒
  let heroInitialTimeout: number | null = null;

  function startHeroTimer(immediateFirstStep = false) {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
    if (heroInitialTimeout) clearTimeout(heroInitialTimeout);

    if (immediateFirstStep) {
      // 第一幀先啟動 Dentist 背景縮放進場動畫
      requestAnimationFrame(() => {
        layerDentist?.classList.add('active');
      });
      // 進頁後立即讓滑桿球與背景啟動第一次動態切換，視覺上一開始就有明顯動畫
      heroInitialTimeout = window.setTimeout(() => {
        const nextMode = currentMode === 'dentist' ? 'patient' : 'dentist';
        switchMode(nextMode);
      }, 1200);
    }

    heroSliderTimer = window.setInterval(() => {
      const nextMode = currentMode === 'dentist' ? 'patient' : 'dentist';
      switchMode(nextMode);
    }, 5000);
  }

  function restartHeroTimer() {
    startHeroTimer(false);
  }

  startHeroTimer(true);

  // ============================================================
  // Products 自動切換：開頁 10 秒後單次切換 (左字➔圖，右圖➔字) 並維持狀態
  // ============================================================
  const boxLeft = document.getElementById('product-box-left');
  const boxRight = document.getElementById('product-box-right');
  const productsSection = document.getElementById('products-section');

  if (boxLeft && boxRight && productsSection) {
    let singleFlipTimer: number | null = window.setTimeout(() => {
      boxLeft.classList.toggle('show-specs');
      boxLeft.classList.toggle('show-image');

      boxRight.classList.toggle('show-specs');
      boxRight.classList.toggle('show-image');
      singleFlipTimer = null;
    }, 10000);

    // 若使用者在 10 秒內先 hover 進入，則取消單次自動切換
    productsSection.addEventListener('mouseenter', () => {
      if (singleFlipTimer !== null) {
        clearTimeout(singleFlipTimer);
        singleFlipTimer = null;
      }
    });
  }

  // ============================================================
  // Gallery Slider 初始化
  // ============================================================
  initGallerySlider();

  // ============================================================
  // Scroll 觸發單次微光呼吸動畫：畫面捲動到該區時稍微呼吸一次，然後停止
  // ============================================================
  const scrollGlowSections = [
    document.getElementById('about-section'),
    document.getElementById('clinical-section'),
  ].filter(Boolean) as HTMLElement[];

  if ('IntersectionObserver' in window && scrollGlowSections.length > 0) {
    const glowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('glow-breathed');
            glowObserver.unobserve(target); // 僅觸發首次進場監聽
            // 首次明顯深呼吸動畫 3.4 秒結束後，無縫接力為「低調緩慢循環」
            window.setTimeout(() => {
              target.classList.remove('glow-breathed');
              target.classList.add('glow-looping');
            }, 3400);
          }
        });
      },
      { threshold: 0.22 }
    );

    scrollGlowSections.forEach((sec) => glowObserver.observe(sec));
  } else {
    scrollGlowSections.forEach((sec) => sec.classList.add('glow-looping'));
  }

  // ============================================================
  // 全域雙語系即時切換監聽
  // ============================================================
  if (!(window as unknown as { __homeLangBound?: boolean }).__homeLangBound) {
    (window as unknown as { __homeLangBound?: boolean }).__homeLangBound = true;
    window.addEventListener('langchange', (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
      const lang = customEvent.detail?.lang || currentGlobalLang || 'zh';
      updateHomeLang(lang);
    });
  }
}

function updateHomeLang(lang: 'zh' | 'en'): void {
  const t = HOME_I18N[lang] || HOME_I18N.zh;
  const setText = (id: string, val: string) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  const setHtml = (id: string, val: string) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  };

  setText('home-hero-title-dentist', t.heroTitle);
  setHtml('home-hero-sub-dentist', t.heroSubtitle);
  setText('home-hero-title-patient', t.heroTitle);
  setHtml('home-hero-sub-patient', t.heroSubtitle);

  setText('home-about-tag', t.aboutTag);
  setText('home-about-title', t.aboutTitle);
  setText('home-about-p1', t.aboutP1);
  setText('home-about-p2', t.aboutP2);
  setText('home-feat1-title', t.feat1Title);
  setText('home-feat1-desc', t.feat1Desc);
  setText('home-feat2-title', t.feat2Title);
  setText('home-feat2-desc', t.feat2Desc);
  setText('home-feat3-title', t.feat3Title);
  setText('home-feat3-desc', t.feat3Desc);

  setText('home-prod-tag', t.prodTag);
  setText('home-prod-title', t.prodTitle);
  setText('home-prod-desc', t.prodDesc);

  setText('home-osf-type', t.osfTypeLabel);
  setText('home-osf-title', t.osfTitle);
  setText('home-osf-desc', t.osfDesc);
  setText('home-osf-s1-label', t.osfSpec1Label);
  setText('home-osf-s1-val', t.osfSpec1Val);
  setText('home-osf-s2-label', t.osfSpec2Label);
  setText('home-osf-s2-val', t.osfSpec2Val);
  setText('home-osf-s3-label', t.osfSpec3Label);
  setText('home-osf-s3-val', t.osfSpec3Val);
  setText('home-osf-s4-label', t.osfSpec4Label);
  setText('home-osf-s4-val', t.osfSpec4Val);

  setText('home-ezb-type', t.ezbTypeLabel);
  setText('home-ezb-title', t.ezbTitle);
  setText('home-ezb-desc', t.ezbDesc);
  setText('home-ezb-s1-label', t.ezbSpec1Label);
  setText('home-ezb-s1-val', t.ezbSpec1Val);
  setText('home-ezb-s2-label', t.ezbSpec2Label);
  setText('home-ezb-s2-val', t.ezbSpec2Val);
  setText('home-ezb-s3-label', t.ezbSpec3Label);
  setText('home-ezb-s3-val', t.ezbSpec3Val);
  setText('home-ezb-s4-label', t.ezbSpec4Label);
  setText('home-ezb-s4-val', t.ezbSpec4Val);

  setText('home-clin-tag', t.clinTag);
  setText('home-clin-title', t.clinTitle);

  setText('home-mem-tag', t.memTag);
  setHtml('home-mem-title', t.memTitle);
  setText('home-mem-desc', t.memDesc);
  setText('home-mem-btn-primary', t.memBtnPrimary);
  setText('home-mem-btn-outline', t.memBtnOutline);

  // 更新活動花絮圖卡雙語標章與標題
  document.querySelectorAll<HTMLElement>('.gallery-slide-card').forEach(card => {
    const themeZh = card.dataset.themeZh || '';
    const themeEn = card.dataset.themeEn || '';
    const titleZh = card.dataset.titleZh || '';
    const titleEn = card.dataset.titleEn || '';
    const badgeEl = card.querySelector('.slide-theme-badge');
    const nameEl = card.querySelector('.slide-event-name');
    const phTitleEl = card.querySelector('.placeholder-title');
    if (badgeEl) {
      badgeEl.textContent = `EVENT HIGHLIGHT / ${lang === 'en' ? themeEn : themeZh}`;
    }
    if (nameEl) {
      nameEl.textContent = lang === 'en' ? titleEn : titleZh;
    }
    if (phTitleEl) {
      phTitleEl.textContent = lang === 'en' ? titleEn : titleZh;
    }
  });
}

/** Gallery Slider — 動態建立卡片並啟動自動播放 */
function initGallerySlider(): void {
  const track = document.getElementById('gallery-track');
  const dotsContainer = document.getElementById('gallery-dots');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  if (!track || !dotsContainer) return;

  const lang = currentGlobalLang || 'zh';

  // 所有活動資料（中英雙語，方便日後編輯）
  const events: Array<{
    themeLabel: string;
    themeLabelEn: string;
    title: string;
    titleEn: string;
    year: string;
    themeKey: string;
    id: string;
    imageCount: number;
  }> = [
    { themeLabel: '牙材展', themeLabelEn: 'DENTAL EXPO', title: 'OSF 大台北牙材展', titleEn: 'OSF Greater Taipei Dental Expo 2026', year: '2026', themeKey: 'exhibition', id: '2026-taipei-dental-expo', imageCount: 4 },
    { themeLabel: '牙材展', themeLabelEn: 'DENTAL EXPO', title: 'OSF 大台北牙材展', titleEn: 'OSF Greater Taipei Dental Expo 2025', year: '2025', themeKey: 'exhibition', id: '2025-taipei-dental-expo', imageCount: 7 },
    { themeLabel: '牙材展', themeLabelEn: 'DENTAL EXPO', title: 'OSF 大台北牙材展', titleEn: 'OSF Greater Taipei Dental Expo 2024', year: '2024', themeKey: 'exhibition', id: '2024-taipei-dental-expo', imageCount: 3 },
    { themeLabel: '牙材展', themeLabelEn: 'DENTAL EXPO', title: 'OSF 大台北牙材展', titleEn: 'OSF Greater Taipei Dental Expo 2023', year: '2023', themeKey: 'exhibition', id: '2023-taipei-dental-expo', imageCount: 7 },
    { themeLabel: '課程工作坊', themeLabelEn: 'WORKSHOP', title: 'OsseoFuse 即拔即植課程 + 會員交流晚宴', titleEn: 'OsseoFuse Immediate Implant Workshop & Member Dinner', year: '2026', themeKey: 'workshop', id: '2026-osseofuse-immediate-implant-and-dinner', imageCount: 5 },
    { themeLabel: '課程工作坊', themeLabelEn: 'WORKSHOP', title: 'OsseoFuse 陳俊龍博士 口鼻相通課程', titleEn: 'OsseoFuse Dr. Leon Chen Sinus & Oroantral Course', year: '2023', themeKey: 'workshop', id: '2023-osseofuse-sinus-course', imageCount: 3 },
    { themeLabel: '學術研討', themeLabelEn: 'SYMPOSIUM', title: 'OsseoFuse 陳俊龍博士 12個What 分享', titleEn: 'OsseoFuse Dr. Leon Chen "12 Whats" Clinical Symposium', year: '2026', themeKey: 'symposium', id: '2026-osseofuse-12-whats', imageCount: 2 },
    { themeLabel: '學術研討', themeLabelEn: 'SYMPOSIUM', title: 'OSF 台中牙醫師公會案例分享', titleEn: 'OSF Taichung Dental Association Case Sharing', year: '2025', themeKey: 'symposium', id: '2025-taichung-dental-case-sharing', imageCount: 2 },
    { themeLabel: '學術研討', themeLabelEn: 'SYMPOSIUM', title: 'OsseoFuse 一鑽植牙會員講師使用分享', titleEn: 'OsseoFuse 1-Drill Implant Member Lecturer Clinical Forum', year: '', themeKey: 'symposium', id: 'osseofuse-member-lecturer-sharing', imageCount: 3 },
  ];

  // 展開成個別圖片卡（有照片則展開，沒有則顯示佔位卡）
  const slides: Array<{ src: string | null; themeLabel: string; themeLabelEn: string; title: string; titleEn: string; year: string }> = [];
  for (const ev of events) {
    if (ev.imageCount > 0) {
      for (let i = 1; i <= ev.imageCount; i++) {
        const idx = String(i).padStart(2, '0');
        slides.push({
          src: `/images/gallery/${ev.themeKey}/${ev.id}/${ev.id}-${idx}.jpg`,
          themeLabel: ev.themeLabel,
          themeLabelEn: ev.themeLabelEn,
          title: ev.title,
          titleEn: ev.titleEn,
          year: ev.year,
        });
      }
    } else {
      // 沒有照片：顯示深色佔位卡
      slides.push({ src: null, themeLabel: ev.themeLabel, themeLabelEn: ev.themeLabelEn, title: ev.title, titleEn: ev.titleEn, year: ev.year });
    }
  }

  // 動態建立卡片 DOM (對照用戶截圖：專屬文案遮罩)
  track.innerHTML = slides.map((slide, _i) => {
    const curTheme = lang === 'en' ? slide.themeLabelEn : slide.themeLabel;
    const curTitle = lang === 'en' ? slide.titleEn : slide.title;
    if (slide.src) {
      return `
        <div class="gallery-slide-card" data-theme-zh="${slide.themeLabel}" data-theme-en="${slide.themeLabelEn}" data-title-zh="${slide.title}" data-title-en="${slide.titleEn}">
          <img src="${slide.src}" alt="${curTitle}" loading="lazy" draggable="false"
            onerror="this.parentElement.innerHTML='<div class=gallery-slide-placeholder><div class=placeholder-year>${slide.year || curTheme}</div><div class=placeholder-title>${curTitle}</div></div>'"/>
          <div class="gallery-slide-caption">
            <div class="slide-theme-badge">EVENT HIGHLIGHT / ${curTheme}</div>
            <div class="slide-event-name">${curTitle}</div>
          </div>
        </div>`;
    } else {
      return `
        <div class="gallery-slide-card" data-theme-zh="${slide.themeLabel}" data-theme-en="${slide.themeLabelEn}" data-title-zh="${slide.title}" data-title-en="${slide.titleEn}">
          <div class="gallery-slide-placeholder">
            <div class="placeholder-year">${slide.year || curTheme}</div>
            <div class="placeholder-title">${curTitle}</div>
            <div class="placeholder-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
        </div>`;
    }
  }).join('');

  const totalSlides = slides.length;
  
  function getVisibleCount(): number {
    return window.innerWidth <= 1024 ? 1 : 3;
  }

  function getMaxIndex(): number {
    return Math.max(0, totalSlides - getVisibleCount());
  }

  function getStep(): number {
    if (!track) return 400;
    const firstCard = track.querySelector('.gallery-slide-card') as HTMLElement | null;
    if (firstCard) {
      return firstCard.offsetWidth + 16;
    }
    return 400;
  }

  let currentIndex = 0;
  let autoTimer: number | null = null;
  let isPausedByClick = false;

  function renderDots() {
    if (!dotsContainer) return;
    const maxIdx = getMaxIndex();
    const dotCount = maxIdx + 1;
    dotsContainer.innerHTML = Array.from({ length: dotCount }, (_, i) =>
      `<button type="button" class="gallery-dot${i === currentIndex ? ' active' : ''}" data-idx="${i}" aria-label="第 ${i + 1} 頁"></button>`
    ).join('');
  }

  function goTo(idx: number) {
    const maxIdx = getMaxIndex();
    currentIndex = Math.max(0, Math.min(idx, maxIdx));
    const step = getStep();
    (track as HTMLElement).style.transform = `translateX(-${currentIndex * step}px)`;
    renderDots();
  }

  function stopAuto() {
    if (autoTimer !== null) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startAuto() {
    if (isPausedByClick) return; // 使用者點擊照片暫停後，不自動恢復滾動
    stopAuto();
    autoTimer = window.setInterval(() => {
      const maxIdx = getMaxIndex();
      goTo(currentIndex >= maxIdx ? 0 : currentIndex + 1);
    }, 4000);
  }

  // 點擊照片卡片時：永久暫停自動滑動
  track.addEventListener('click', (e) => {
    const card = (e.target as HTMLElement).closest('.gallery-slide-card');
    if (card) {
      isPausedByClick = true;
      stopAuto();
    }
  });

  // 按鈕事件 (按下左右切換按鈕手動重置並切換)
  prevBtn?.addEventListener('click', () => { isPausedByClick = false; goTo(currentIndex - 1); startAuto(); });
  nextBtn?.addEventListener('click', () => { isPausedByClick = false; goTo(currentIndex + 1); startAuto(); });

  // 點點事件
  dotsContainer.addEventListener('click', (e) => {
    const dot = (e.target as HTMLElement).closest('.gallery-dot') as HTMLButtonElement | null;
    if (dot) { isPausedByClick = false; goTo(Number(dot.dataset.idx)); startAuto(); }
  });

  // 視窗縮放時重新適應位移與點點
  window.addEventListener('resize', () => {
    goTo(currentIndex);
  });

  renderDots();
  startAuto();
}
