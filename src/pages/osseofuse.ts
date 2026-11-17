/* ============================================================
   OsseoFuse（一鑽植牙）產品頁 — 依設計稿刻畫
   ============================================================ */
import './osseofuse.css';
import { noOrphan } from '../utils/text';
import { currentGlobalLang } from '../components/header';

/* ============================================================
   圖片網址設定 — 請在此填入各區塊圖片的正式網址 (URL)
   ============================================================ */
export const OSSEOFUSE_IMAGES = {
  heroDesktop: '/images/osseofuse/hero-desktop.webp',
  heroTablet: '/images/osseofuse/hero-tablet.webp',
  heroMobile: '/images/osseofuse/hero-mobile.jpg',
  // 產品介紹分區圖片（ZH: cert-tw-2.jpg；EN: cert-us-1.jpg）
  stepDiagram: '/images/osseofuse/tech-01-drill-flow.jpg',
  licenseCert: '/images/osseofuse/cert-tw-2.jpg',
  licenseCertEn: '/images/osseofuse/cert-us-1.jpg',
  memberCta: '/images/cta-tablet-user.jpg',
  // 核心技術分區圖片與影片預留 (Core Tech)
  techHeroDome: '/images/osseofuse/tech-hero-dome.png',
  tech01DrillFlow: '/images/osseofuse/tech-01-drill-flow.jpg',
  tech01KisDrill: '/images/osseofuse/tech-01-kis-drill.mp4',
  tech01SystemKit: '/images/osseofuse/tech-01-system-kit.png',
  tech02Locking1: '/images/osseofuse/4. Step Locking-1.jpg',
  tech02Locking2: '/images/osseofuse/4. Step Locking-2.jpg',
  tech02Locking3: '/images/osseofuse/4. Step Locking-3.jpg',
  tech02JawModel: 'https://www.youtube.com/embed/VIDEO_ID',
  tech02YoutubeUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  tech03Penetration: 'https://www.youtube.com/embed/VIDEO_ID',
  tech03YoutubeUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  tech04OsteotomyDiff: '/images/osseofuse/tech-04-osteotomy-diff.png',
  // 產品規格分區圖片與影片預留 (Specifications)
  specBrandSinus: '/images/osseofuse/SinusFuse.png',
  specBrandHexa: '/images/osseofuse/Hexa.jpg',
  specBrandOnebody: '/images/osseofuse/OneBody.jpg',
  specSinusImplant: '/images/osseofuse/spec-sinusfuse-implant.png',
  specSinusMedia: '/images/osseofuse/spec-sinusfuse-media.png',
  specHexaImplant: '/images/osseofuse/spec-hexaplus-implant.png',
  specOnebodyImplant: '/images/osseofuse/spec-onebody-implant.png',
  // 專利認證分區證書圖片預留 (Patents & Certificates)
  certTw: [
    '/images/osseofuse/cert-tw-1.jpg',
    '/images/osseofuse/cert-tw-2.jpg',
    '/images/osseofuse/cert-tw-3.jpg',
    '/images/osseofuse/cert-tw-4.jpg',
    '/images/osseofuse/cert-tw-5.jpg',
    '/images/osseofuse/cert-tw-6.jpg',
    '/images/osseofuse/cert-tw-7.jpg',
    '/images/osseofuse/cert-tw-8.jpg',
  ],
  certUs: [
    '/images/osseofuse/cert-us-1.jpg',
    '/images/osseofuse/cert-us-2.jpg',
    '/images/osseofuse/cert-us-3.jpg',
    '/images/osseofuse/cert-us-4.jpg',
    '/images/osseofuse/cert-us-5.jpg',
  ],
  certCn: [
    '/images/osseofuse/cert-cn-1.jpg',
    '/images/osseofuse/cert-cn-2.jpg',
    '/images/osseofuse/cert-cn-3.jpg',
    '/images/osseofuse/cert-cn-4.jpg',
  ],
  // 衛教社群分區縮圖預留 (Community & Education)
  eduCommunityWeb: '/images/osseofuse/edu-community-web.png',
  eduCommunityFb: '/images/osseofuse/edu-community-fb.png',
  eduCommunityIg: '/images/osseofuse/edu-community-ig.png',
};

export const OSSEOFUSE_COMMUNITY_LINKS = {
  web: 'https://www.osseofuse.com/',
  fb: 'https://www.facebook.com/miss.implant/',
  ig: 'https://www.instagram.com/miss.implant?igsh=MXR3aTdtajRqZ3kxOA==',
};

export const OSSEOFUSE_I18N = {
  zh: {
    heroTitle: '植牙真的需要那麼複雜嗎？',
    heroSubtitle: 'OsseoFuse 一鑽植牙系統把植牙變簡單了！',
    tabs: ['產品介紹', '核心技術', '產品規格', '專利認證', '醫師分享', '衛教社群'],
    overviewTag: '美國原廠 OsseoFuse 一鑽植牙系統',
    overviewTitle: '精簡、高效、流暢<br/>讓植牙程序化繁為簡',
    overviewDesc: 'OsseoFuse 顛覆傳統的多鑽繁瑣步驟，用創新的專利幾何結構簡化臨床流程，在維持專業醫療品質的同時，大幅提升整體治療效率。',
    card1Tag: '1-Drill',
    card1Title: '一鑽植牙',
    card1Desc: '一根鑽針，完成植體置入',
    card2Tag: '1-Platform',
    card2Title: '統一平台',
    card2Desc: '單一平台規格，適用所有尺寸基台',
    card3Tag: '1-Kit',
    card3Title: '一套手術盒',
    card3Desc: '一組手術套件，對應所有 OsseoFuse 植體系統',
    card3DescPart1: '一組手術套件，',
    card3DescPart2: '對應所有 OsseoFuse 植體系統',
    videoTitle: '一套系統，迅速完成植牙',
    systemTitle: '一套系統，迅速完成植牙',
    systemTitleHighlight: '10 步驟化簡成 2 步',
    systemDesc1: '現今隨著數位醫療發展，市面上有愈來愈多鑽針簡化的技術，讓醫師可以在導板的協助之下，完成一次擴孔與定型，但這種術式通常對病患的骨頭條件要求較高。',
    systemDesc2: '傳統植牙常因頻繁更換鑽針導致手術延長、增加骨頭受熱風險。OsseoFuse 一鑽專利設計，集引導定位與快速擴孔於一身，大幅減少術中摩擦產熱。其獨特的強大側切削力，更能協助醫師在鑽孔過程中靈活微調、修正理想角度。以更少的手術步驟、更短的椅旁時間，為臨床醫師帶來極佳的初期穩定度與可預期性的微創即刻種植體驗。',
    tradStep1: '定位鑽針：在骨頭表面打下小凹槽定位',
    tradStep2: '先導鑽針：初步建立植牙的深度與軸向',
    tradStep3to6: '漸進式擴孔鑽針：由細到粗依序擴大孔洞，循序漸進減少骨頭的摩擦與受熱',
    tradStep7: '最終確認角度',
    tradStep8to9: '最終擴骨鑽針：完成符合植體規格的最終孔徑',
    tradStep10: '完成植牙步驟',
    modStep1: '一鑽完成定位、擴孔、調整角度',
    modStep2: '完成植牙步驟',
    compareTag: 'COMPARISON',
    compareTitle: '三種術式比較',
    compareColTrad: '傳統植牙',
    compareColTradMob: '傳統植牙',
    compareColOsf: '歐舒福一鑽植牙',
    compareColOsfMob: '歐舒福一鑽植牙',
    compareColAllOn4: 'All-on-4 全口重建',
    compareColAllOn4Mob: 'All-on-4 全口重建',
    compareItems: [
      {
        category: '療程時間',
        traditional: '步驟繁複耗時長',
        osseofuse: '流程精簡效率高',
        allOn4: '當天完成立即植牙',
      },
      {
        category: '拔牙評估',
        traditional: '復原時間較長',
        osseofuse: '復原時間較短',
        allOn4: '視全口條件規劃',
      },
      {
        category: '齒槽骨修整',
        traditional: '視骨質需要補骨',
        osseofuse: '視骨質需要補骨',
        allOn4: '特殊骨架避開補骨',
      },
      {
        category: '植牙架構',
        traditional: '單顆獨立結構',
        osseofuse: '單顆獨立結構',
        allOn4: '多顆支撐全口固定',
      },
      {
        category: '等候假牙',
        traditional: '依照骨癒合週期',
        osseofuse: '擁有初期極佳穩定度',
        allOn4: '當天達到即刻穩定',
      },
      {
        category: '術後護理',
        traditional: '配合齒槽骨條件限制',
        osseofuse: '配合齒槽骨條件限制',
        allOn4: '特殊斜角植入避開神經',
      },
      {
        category: '人工假牙',
        traditional: '客製製作人工牙冠',
        osseofuse: '客製製作人工牙冠',
        allOn4: '整組固定人工牙橋',
      },
      {
        category: '特殊應變方案',
        traditional: '需依骨骼條件決定',
        osseofuse: '可彈性銜接規格齒位',
        allOn4: '需特定評估全口骨質',
      },
    ],
    licenseTag: 'LICENSE',
    licenseTitle: '醫療器材許可證字號',
    licenseItems: [
      '衛部醫器輸字第 029204 號（人工牙根植體系統）',
      '衛部醫器輸字第 030015 號（人工牙根植體）',
      '衛部醫器輸字第 032696 號（Onebody 一體式植體）',
      '衛部醫器輸壹字第 019978 號（牙科手用器械）',
    ],
    disclaimerLabel: '免責聲明',
    licenseDisclaimer: '任何手術與醫療處置均有其風險，本網頁所呈現之臨床成效因個人骨床條件、口腔衛生習慣與醫師操作而異。實際療程規劃需經專業牙醫師進行全面性臨床評估。',
    memberTag: 'MORE RESOURCE',
    memberTitle: '加入免費會員，<br/>取得完整臨床資源',
    memberDesc: '註冊後即可下載臨床應用指南與學術文獻，掌握更多產品資訊',
    memberBtnPrimary: '立即加入會員',
    memberBtnOutline: '已是會員，登入 →',

    /* --- TAB 2: 核心技術 (Core Tech) --- */
    techAdvTag: 'ADVANTAGES',
    techAdvTitle: 'OsseoFuse 系統<br />核心 <span class="highlight">4 項</span> 技術優勢',
    // 01
    tech01Title: '顯著提升臨床手術效率',
    tech01Sub1Title: '一鑽到底，不需頻繁換鑽',
    tech01Sub1Desc: 'OsseoFuse 專利鑽針將多道鑽孔程序整合為單一工序。<br />鑽針前端具備精準引導功能，手術中不需反覆更換鑽針，定位更精準、流程更順暢，在慢性病患者、多顆、半口或全口重建等大型案例中優勢尤其明顯。',
    tech01KisCaption: 'KIS-Keep Implant Simple 讓植牙變輕鬆專利一鑽設計，結合多鑽為一鑽',
    tech01Sub2Title: '方向微調更靈活',
    tech01Sub2Desc: '得益於專利的階梯設計與側切切削力，醫師在置入時能更靈活地微調方向與角度。搭配鑽針上的 Stopper（深度限位），讓深度控制更精準到位。',
    tech01Sub3Title: '全系列適用單一工具盒',
    tech01Sub3Desc: '不論是 HexaPLUS、SinusFuse 或 OneBody 系列，通通只需一套工具盒就能完成手術，不需購置多套設備，有效簡化診所的常態整備與備料工作。',
    // 02
    tech02Title: '從容應對高難度案例與即拔即植',
    tech02Lead: '傳統系統面對骨缺失或具挑戰性的骨床時，常因初期穩定度不足而難以進行即時處置。<span class="osf-m-break">OsseoFuse 專利設計為您提供強力支持。</span>',
    tech02Sub1Title: 'Step-Inner-Locking （階梯鎖定技術）',
    tech02Sub1Desc: '階梯式鑽針能預備出層次分明的植牙窩。植體螺紋只需與 2-3 個鎖點穩定嚙合，就能在保護骨組織的原則下，輕鬆達到 30 牛頓以上的優異初期穩定性。',
    tech02LockingNote1: '1. 咬合 2-3 個鎖點，即可達到 30 牛頓以上的穩定度。',
    tech02LockingNote2: '2. 穩定度高且不壓迫骨頭，減少骨質損害。',
    tech02Sub2Title: '獨家「側切刀面」結構',
    tech02Metric1Title: '延長式刀面',
    tech02Metric1Desc: '增加與骨頭的接觸面積，讓植體鎖得更緊密牢固',
    tech02Metric2Title: '排屑與自體骨收集',
    tech02Metric2Desc: '順暢排出骨屑，並能將收集到的自體骨屑填補局部空隙',
    tech02Metric3Title: '多邊刀面配置',
    tech02Metric3Desc: '均勻分散置入時的阻力，<span class="osf-d-break">具備縮短骨缺損（Jumping Distance）的優勢</span>',
    tech02Metric4Title: '漸進式深度變幅',
    tech02Metric4Desc: '尖端利於高效切削，淺層則提供咬合緩衝空間，有利於後期維護',
    tech02Sub3Title: '完整直徑選擇',
    tech02Sub3Desc: '提供 3.75 至 7.5 mm 完整的直徑規格。若術中遇到特殊狀況，醫師清理部位後，可靈活使用不同直徑的植體進行替換，提供可靠的臨床後盾。',
    tech02Sub4Title: '即拔即植應用',
    tech02Sub4Desc: '利用大直徑植體與專用組件，在雙牙根或骨流失的即拔即植個案中，能有效簡化困難的軟組織縫合程序，讓手術順暢完成。',
    tech02ImmediateCaption: '即拔即植',
    // 03
    tech03Title: '精簡上顎竇（鼻竇）提升術式',
    tech03Lead: '傳統上顎竇術式步驟繁複且耗時，OsseoFuse 讓這項高難度術式變得更穩定。',
    tech03Sub1Title: '溫和推升，同步補骨',
    tech03Sub1Desc: '植體前端專利設計，透過側切槽能將自體骨推向頂端碗型區。在置入過程中，即可同步引導自體骨並溫和推升上顎竇膜（可達約 4-5mm），大幅降低手術的操作時間與複雜度。',
    tech03VideoCaption: '第一植入物為 Hexa 植體，第二植入物為 Sinus 植體，可以清楚看見骨屑（木屑）被送到植體和鼻竇膜之間',
    // 04
    tech04Title: '優化整體療程體驗，建立醫病信賴',
    tech04Point1Title: '精簡流程，降低排斥感',
    tech04Point1Desc: '一鑽植牙的精簡流程，能顯著縮短操作時間，帶給患者更流暢的手術體驗，有效減輕對手術的時間與心理壓力。',
    tech04Point2Title: '建立高滿意度專業口碑',
    tech04Point2Desc: '省時、順暢的治療流程，能轉化為患者對醫療團隊的高度滿意與信任，有助於建立長期穩固的醫病關係，自然為診所累積卓越的專業口碑。',
    // 核心技術解析 (獨立白底區塊)
    tech04VideoTitle: '核心技術解析',
    tech04VideoCaption: '<span class="osf-m-line">專利鑽針能一次預備出四階規格，</span><span class="osf-m-line osf-pad-line-end">具備優異的排屑與散熱結構，</span><span class="osf-m-line">在維護骨組織健康的同時，</span><span class="osf-m-line">有效縮短手術操作時間</span>',
    tech04VideoBadge: '[ 一鑽牙窩動畫影片 ・ 16:9 ]',
    // Tech CTA Bar
    techCtaTitle: '需要完整規格與學術文獻？',
    techCtaDesc: '註冊後即可下載操作指南與學術文獻，掌握產品資訊與完整規格之臨床對照表。',
    techCtaBtnPapers: '前往加入會員',
    techCtaBtnCases: '前往產品規格',

    /* --- TAB 3: 產品規格 (Specifications) --- */
    specHeroSubtag: '美國原廠 OsseoFuse 一鑽植牙系統',
    specHeroTitle: '三系列植體規格',
    specHeroDescPart1: 'SinusFuse 、HexaPLUS 、OneBody ',
    specHeroDescPart2: '三系列的結構設計與適用條件',
    // SERIES 01: SinusFuse
    specS1Tag: 'SERIES 01',
    specS1TitlePrefix: '美國原廠 OsseoFuse ',
    specS1TitleSeries: 'SinusFuse 系列',
    specS1Subtitle: '專利結構設計植體 | 專為上顎骨與上顎竇區域手術打造的植牙解決方案',
    specS1P1Title: '獨特碗型頂端，保護鼻竇膜',
    specS1P1Desc: '<strong>碗型結構 x 側邊螺紋：</strong>在進行上顎竇提升術時，頂端的碗型設計能提供良好的空間緩衝。搭配獨特的側邊螺紋，能溫和引導自體骨向上輸送至植體與上顎竇膜之間，支持骨整合期間的局部環境穩定。',
    specS1P2Title: '全長側切溝槽，帶來優異的初期穩定性',
    specS1P2Line1: '<strong>漸進式螺紋幾何設計：</strong>螺紋從寬深延伸至窄淺，能廣泛適應不同的骨密度條件，支持植體獲得優異的初期穩定性。',
    specS1P2Line2: '<strong>鋒利側切螺紋：</strong>俐落的切入角度，切實提升置入時的初期穩定性。',
    specS1P2Line3: '<strong>自體骨收集功能：</strong>在置入過程中順勢收集剩餘的骨組織，進一步加強初期穩定性與骨結合。',
    specS1MediaCaption: '碗型頂端與側切溝槽',
    // SERIES 02: HexaPLUS (骨架預留，待提供清晰截圖核對內文)
    specS2Tag: 'SERIES 02',
    specS2TitlePrefix: '美國原廠 OsseoFuse ',
    specS2TitleSeries: 'HexaPLUS 系列',
    specS2P1Title: '單一平台設計，精簡臨床庫存與流程',
    specS2P1Line1: '<strong>內六角抗旋轉結構：</strong>提供穩固的基台連接與抗旋轉能力，確保贗復物的長期穩定。',
    specS2P1Line2: '<strong>單一贗復平台規格：</strong>全系列直徑共用單一贗復平台，大幅簡化零件備料與臨床配件選擇。',
    specS2P1Line3: '<strong>錐形植體設計：</strong>優異的初期抓骨力，適用於各類骨質條件與即拔即植案例。',
    specS2P1Line4: '<strong>Step-Inner-Locking（階梯鎖定技術）：</strong>搭配專利階梯鑽針，咬合 2-3 個鎖點即可達到 30 牛頓以上初期穩定度。',
    specS2P2Title: '獨家側切溝槽，提升初期穩定性',
    specS2P2Line1: '<strong>延長式側切刀面：</strong>增加植體與齒槽骨接觸面積，均勻分散置入阻力並提升初期穩定度。',
    specS2P2Line2: '<strong>自體骨屑收集與排屑：</strong>順暢排出骨屑並收集自體骨填補局部間隙，縮短骨缺損距離。',
    specS2P2Line3: '<strong>漸進式螺紋深度：</strong>尖端利於高效切削，冠部提供咬合應力緩衝，有利於長期骨組織維護。',
    // SERIES 03: OneBody (骨架預留，待提供清晰截圖核對內文)
    specS3Tag: 'SERIES 03',
    specS3TitlePrefix: '美國原廠 OsseoFuse ',
    specS3TitleSeries: 'OneBody 系列',
    specS3P1Title: '一體式結構，微創且高效',
    specS3P1Line1: '<strong>植體與基台一體成型：</strong>消除植體與基台之間的微間隙（Micro-gap），有效降低螺絲鬆動與微滲漏風險。',
    specS3P1Line2: '<strong>精簡手術與贗復步驟：</strong>置入後即可進行臨時假牙或印模程序，縮短整體療程時間。',
    specS3P2Title: '適用於窄骨脊與前牙美學區',
    specS3P2Line1: '<strong>小直徑與高強度結構：</strong>專為齒槽骨寬度有限之窄骨脊區域設計，免除繁複補骨程序。',
    specS3P2Line2: '<strong>高生物相容性表面處理：</strong>促進快速骨整合，提供穩定可靠的長期臨床表現。',
    specS3P3Title: '延續專利螺紋與階梯鎖定優勢',
    specS3P3Line1: '<strong>漸進式螺紋變幅設計：</strong>提供優異的初期固定力，滿足即刻負載之臨床條件需求。',
    specS3P3Line2: '<strong>側切排屑溝槽：</strong>置入過程順暢低阻力，保護周圍骨組織活性。',
    specS3P3Line3: '<strong>Step-Inner-Locking（階梯鎖定技術）：</strong>同樣支援一鑽植牙系統流程，操作直覺且穩定。',
    specCtaBtnOutline: '前往專利認證',

    /* --- TAB 4: 專利認證 (Patents) --- */
    certHeroSubtag: '美國原廠 OsseoFuse 一鑽植牙系統',
    certHeroTitle: '<span class="osf-cert-title-p1">榮獲多項專利認證 <span class="osf-cert-hero-sep">｜</span></span><span class="osf-cert-title-p2">獨家一鑽植牙技術</span>',
    certHeroDesc: '<span class="osf-cert-desc-p1">以優異的初期穩定性，</span><span class="osf-cert-desc-p2">帶您輕鬆駕馭各類複雜植牙挑戰！</span>',
    certTabTw: '台灣',
    certTabUs: '美國',
    certTabCn: '中國',
    certHoverLabel: '放大檢視',
    certLbBack: '返回證書列表',
    certCtaDesc: '註冊後可下載操作說明與學術文獻，僅開放具執業資格之醫師與診所。',
    certCtaBtnOutline: '前往醫師分享',

    /* --- TAB 5: 醫師分享 (Doctor Testimonials) --- */
    docStat1Tag: '全球臨床累積',
    docStat1Num: '100,000',
    docStat1Unit: '顆以上植體紀錄',
    docStat2Tag: '原廠研發與追蹤',
    docStat2Num: '15',
    docStat2Unit: '年以上豐富臨床經驗',
    docSectionTitle: '臨床現場的真實回饋',
    doc1Name: '張醫師',
    doc1Role: '台灣微創植牙醫學會專科醫師',
    doc1Title: '化繁為簡的結構，把上顎竇案例最麻煩的那幾道工序拿掉了。',
    doc1P1: '過去面對上顎竇（鼻竇）程序或需大量補骨的挑戰案例時，繁複的步驟常增加臨床難度。接觸 OsseoFuse 系統後，其化繁為簡的專利結構有效精簡了臨床工序，協助優化手術流程，為病患帶來更流暢的微創體驗。',
    doc2Name: '邱醫師',
    doc2Role: '口碑推薦，以患者需求為首要考量',
    doc2Title: '正如賈伯斯所言：「旅程本身就是回報。」',
    doc2P1: '正如賈伯斯所言：「旅程本身就是回報。」使用 OsseoFuse（OSF）一年的時間裡，它在臨床上扮演了非常關鍵的角色。在審慎判讀 CT 數據的前提下，該系統優異的初期穩定性，讓醫師在處理不良植體或即拔即植的案例時，具備更高的操作彈性；即便置入方向需要微調，其特殊的 Step-inner-locking 設計也能在不依賴特定器械下，協助順暢調整角度並置入。',
    doc2P2: '此外，五階合一鑽針的精簡設計，免除了多顆植牙時反覆更換鑽針的繁瑣，讓手術台面更乾淨俐落；而陳俊龍博士針對 Sinus 植體的創新幾何結構，更協助臨床醫師在面對高難度骨床挑戰時，能更有把握地維持優良的種植品質。',
    doc3Name: '許醫師',
    doc3Role: '美國哈佛進修，牙周與植牙雙領域，OsseoFuse 植牙經驗千顆以上',
    doc3Title: '即拔即植與上顎竇提升這兩種術式，它都撐得住。',
    doc3P1: '在執行即拔即植與上顎竇提升（鼻竇增高）等特定術式時，OsseoFuse 展現出優異的適應力與結構穩定性，為現代牙科臨床提供相當可靠的系統選擇。',
    doc4Name: '黃醫師',
    doc4Role: 'TIAMID臺灣微創植牙醫學會 理事長，牙科臨床經驗超過15年',
    doc4Title: '拔牙、植牙、上顎竇提升，在合適條件下精簡成同一次手術。',
    doc4P1: '投入牙科臨床工作超過十五年，從早期的根管治療到即拔即植領域，微創與精簡手術次數一直是臨床上的核心追求。傳統即拔即植常需經歷「拔牙補骨、植牙置入、二階露出」等多道程序，過程中切開皮瓣與一線縫合帶來的腫痛，也往往影響患者的體驗。',
    doc4P2: '導入 OsseoFuse 植牙系統後，其核心的一鑽設計與特殊螺紋結構，能讓植體在拔牙窩洞中順利取得理想的初期穩定性並接上癒合帽。這種設計有助於將傳統繁複的步驟整合，支持在合適的個案中，實現微創並精簡手術次數的目標。特別是在上顎需要即拔即植合併上顎竇（鼻竇）提升時，其 SinusFuse 系列能將拔牙、植牙、鼻竇提升、補骨與接上癒合帽五個步驟，在合適的臨床條件下整合於同一次手術程序中，為現代微創種植臨床提供了更具效率的解決方案。',
    docCtaBtnOutline: '前往衛教社群',

    /* --- TAB 6: 衛教社群 (Community & Education) --- */
    eduHeroSubtag: '美國原廠 OsseoFuse 一鑽植牙系統',
    eduHeroTitle: '我適合植牙嗎？',
    eduHeroDesc: '透過身體條件比較，找出最適合您的植牙方案',
    eduColOsseofuse: 'OsseoFuse 一鑽植牙',
    eduColOsseofuseMob: 'OsseoFuse<br />一鑽植牙',
    eduColTraditional: '傳統植牙',
    eduColTraditionalMob: '傳統植牙',
    eduMergedOsseofuse: '評估後可即拔即植',
    eduCompareRows: [
      {
        category: '牙周病患',
        osseofuse: '臨床評估更有彈性',
        traditional: '受限條件較嚴格',
      },
      {
        category: '嚴重牙周病',
        osseofuse: '清理後即可彈性植入',
        traditional: '需完全治癒後',
      },
      {
        category: '糖尿病患',
        osseofuse: '糖化血色素 8.0/9.0 可以植牙',
        traditional: '需血糖完全穩定',
      },
      {
        category: '高血壓',
        osseofuse: '流程精簡，降低手術時間',
        traditional: '手術時間長，風險高',
      },
      {
        category: '服用抗凝血藥',
        osseofuse: '視身體條件不需停藥',
        traditional: '須停藥至少一週',
      },
      {
        category: '骨質疏鬆',
        osseofuse: '支持即拔即植評估',
        traditional: '需先停藥再評估',
      },
      {
        category: '洗腎患者',
        osseofuse: '洗腎隔日即可進行',
        traditional: '須配合醫囑與預約',
      },
      {
        category: '拔牙與植牙',
        osseofuse: '評估後可即拔即植',
        traditional: '<span class="osf-edu-trad-p1">拔除壞牙後，</span><span class="osf-edu-trad-p2">需等待傷口癒合數月後方可植牙</span>',
        mergedGroup: true,
      },
      {
        category: '齒槽骨不足',
        osseofuse: '評估後可即拔即植',
        traditional: '需進行更多階段手術後',
        mergedGroup: true,
      },
      {
        category: '上顎竇增高',
        osseofuse: '評估後可即拔即植',
        traditional: '側開鼻竇補骨，需等半年後方可植牙',
        mergedGroup: true,
      },
    ],
    eduCommunityTitle: '更多衛教社群',
    eduCard1Label: 'OSSEOFUSE 美國官網',
    eduCard2Label: '植牙博物館 植牙小百科 Facebook',
    eduCard3Label: '<span class="osf-edu-link-line1">應蒲蓮小姐植牙資訊交流分享</span> <span class="osf-edu-link-line2">Instagram</span>',
    eduCtaBtnOutline: '前往產品介紹',
  },
  en: {
    heroTitle: 'Is the implant process really this complex?',
    heroSubtitle: 'OsseoFuse: Simplifying the Implant Experience.',
    tabs: ['Overview', 'Core Tech', 'Specifications', 'Patents', 'Cases', 'Community'],
    overviewTag: 'OsseoFuse – The One-Drill Implant System Designed in the USA',
    overviewTitle: 'Simplified, Efficient, and Streamlined<br/>Elevating Implant Dentistry to a New Standard of Simplicity.',
    overviewDesc: 'OsseoFuse revolutionizes traditional implant surgery by replacing multi-step, cumbersome protocols with innovative, patented geometric designs. Our system streamlines the clinical workflow, significantly enhancing treatment efficiency while upholding the highest standards of professional medical care.',
    card1Tag: '1-Drill',
    card1Title: '1-Drill',
    card1Desc: '1 drill to place an implant',
    card2Tag: '1-Platform',
    card2Title: '1-Platform',
    card2Desc: '1 platform for any size abutment',
    card3Tag: '1-Kit',
    card3Title: '1-Kit',
    card3Desc: '1 surgical kit for all OsseoFuse implant systems',
    card3DescPart1: '1 surgical kit for ',
    card3DescPart2: 'all OsseoFuse implant systems',
    videoTitle: 'Comprehensive System for Streamlined Implant Placement.',
    systemTitle: 'Comprehensive System for Streamlined Implant Placement.',
    systemTitleHighlight: '10 Steps to 2 Steps',
    systemDesc1: 'With advancements in digital dentistry, techniques for drill simplification enable guided osteotomy and shaping, yet often require favorable patient bone conditions.',
    systemDesc2: 'Traditional procedures may increase thermal stress on bone through repetitive drill changes. The OsseoFuse patented single-drill design integrates guidance and osteotomy preparation to help reduce frictional heat. Its lateral cutting geometry assists clinicians in fine-tuning angulation, achieving favorable primary stability, and supporting immediate implant protocols.',
    tradStep1: 'Lance Drill: Creates an initial cortical indentation for site marking',
    tradStep2: 'Pilot Drill: Establishes initial osteotomy depth and angulation axis',
    tradStep3to6: 'Sequential Twist Drills: Progressively widens the osteotomy from narrow to wide diameters',
    tradStep7: 'Final Angulation & Alignment Verification',
    tradStep8to9: 'Final Shaping Drills: Prepares the osteotomy to match the target implant diameter',
    tradStep10: 'Implant Fixture Placement',
    modStep1: 'Single-pass positioning, osteotomy preparation, and angulation fine-tuning with 1-Drill',
    modStep2: 'Implant Fixture Placement',
    compareTag: 'COMPARISON',
    compareTitle: 'Comparison of 3 Implant Modalities',
    compareColTrad: 'Traditional Implant',
    compareColTradMob: 'Traditional<br />Implant',
    compareColOsf: 'OsseoFuse 1-Drill Implant',
    compareColOsfMob: 'OsseoFuse<br />1-Drill',
    compareColAllOn4: 'All-on-4 Full-Arch',
    compareColAllOn4Mob: 'All-on-4<br />Full-Arch',
    compareItems: [
      {
        category: 'Procedural Steps',
        traditional: 'Multi-step sequential drilling protocol',
        osseofuse: 'Streamlined workflow with fewer drilling steps',
        allOn4: 'Full-arch immediate loading protocol',
      },
      {
        category: 'Post-Extraction Planning',
        traditional: 'Longer staged socket healing period',
        osseofuse: 'Supports immediate placement upon clinical evaluation',
        allOn4: 'Planned based on full-arch alveolar conditions',
      },
      {
        category: 'Alveolar Bone Preparation',
        traditional: 'Bone grafting as indicated by bone volume',
        osseofuse: 'Bone grafting as indicated by bone volume',
        allOn4: 'Tilted fixture placement to bypass grafting zones',
      },
      {
        category: 'Prosthetic Architecture',
        traditional: 'Single-tooth independent restoration',
        osseofuse: 'Single-tooth independent restoration',
        allOn4: 'Multi-implant splinted full-arch bridge',
      },
      {
        category: 'Prosthetic Loading Timeline',
        traditional: 'Follows standard osseointegration period',
        osseofuse: 'Favorable primary stability for clinical loading',
        allOn4: 'Same-day provisional prosthesis upon primary fixation',
      },
      {
        category: 'Anatomical Considerations',
        traditional: 'Subject to local alveolar bone anatomy',
        osseofuse: 'Subject to local alveolar bone anatomy',
        allOn4: 'Angled placement to avoid vital neural structures',
      },
      {
        category: 'Definitive Prosthesis',
        traditional: 'Customized single implant crown',
        osseofuse: 'Customized single implant crown',
        allOn4: 'Fixed full-arch hybrid prosthesis',
      },
      {
        category: 'Intraoperative Adaptability',
        traditional: 'Determined by baseline bone bed dimensions',
        osseofuse: 'Flexible diameter transitions across tooth sites',
        allOn4: 'Requires comprehensive full-arch bone evaluation',
      },
    ],
    licenseTag: 'LICENSE',
    licenseTitle: 'Medical Device License',
    licenseItems: [
      'TFDA License No. 029204 (Dental Implant System)',
      'TFDA License No. 030015 (Dental Implant)',
      'TFDA License No. 032696 (Onebody Dental Implant)',
      'TFDA License No. 019978 (Dental Hand Instrument)',
    ],
    disclaimerLabel: 'Disclaimer',
    licenseDisclaimer: 'All surgeries and medical procedures involve risks. Clinical outcomes presented on this webpage may vary based on individual bone conditions, oral hygiene habits, and clinical technique. Actual treatment planning requires comprehensive clinical evaluation by professional dental practitioners.',
    memberTag: 'MORE RESOURCE',
    memberTitle: 'Join Free Membership,<br/>Access Complete Clinical Resources',
    memberDesc: 'Register now to download clinical application guides and academic literature, and stay updated on product insights.',
    memberBtnPrimary: 'Join Free Today',
    memberBtnOutline: 'Already a Member? Log In &rarr;',

    /* --- TAB 2: Core Tech (EN) --- */
    techAdvTag: 'ADVANTAGES',
    techAdvTitle: 'Core <span class="highlight">4 Technical</span> Advantages<br />of the OsseoFuse System',
    // 01 (Sharon Yang Official Translations + Supplementary Translations)
    tech01Title: 'Significantly Enhance Clinical Surgical Efficiency',
    tech01Sub1Title: 'One-Drill Protocol, Zero Need for Frequent Drill Changes',
    tech01Sub1Desc: "The OsseoFuse patented drill integrates multiple drilling steps into a single, seamless procedure. With the drill tip's precision-guidance technology, there is no need for repetitive drill changes, leading to superior positioning and a smoother workflow—offering distinct advantages in extensive cases, such as full-arch or full-mouth reconstruction.",
    tech01KisCaption: 'KIS (Keep Implant Simple) Patented One-Drill Design — Combining Multiple Drills into One',
    /* TODO: 以下核心技術段落為先行補充之專業醫療英譯，供審閱確認 */
    tech01Sub2Title: 'Greater Flexibility for Angulation Fine-Tuning',
    tech01Sub2Desc: 'Thanks to the patented stepped geometry and lateral cutting power, clinicians can flexibly fine-tune direction and angulation during osteotomy. Paired with the drill Stopper, depth control is achieved with pinpoint accuracy.',
    tech01Sub3Title: 'One Universal Surgical Kit Across All Series',
    tech01Sub3Desc: 'Whether using the HexaPLUS, SinusFuse, or OneBody series, a single surgical kit completes the entire procedure—eliminating the need for multiple instrument sets and streamlining routine clinic preparation and inventory management.',
    // 02
    tech02Title: 'Confidently Handle Complex Cases & Immediate Implantation',
    tech02Lead: 'Traditional systems often struggle with immediate placement in bone-deficient or challenging osteotomy sites due to insufficient primary stability. <span class="osf-m-break">The OsseoFuse patented design provides robust clinical support.</span>',
    tech02Sub1Title: 'Step-Inner-Locking Technology',
    tech02Sub1Desc: 'The stepped drill prepares a distinctly tiered osteotomy. By engaging just 2 to 3 locking points, the implant threads effortlessly achieve superior primary stability exceeding 30 Ncm while preserving surrounding bone tissue.',
    tech02LockingNote1: '1. Engaging 2–3 locking points achieves over 30 Ncm primary stability.',
    tech02LockingNote2: '2. High stability without bone compression minimizes bone trauma.',
    tech02Sub2Title: 'Exclusive Lateral Cutting Flute Architecture',
    tech02Metric1Title: 'Extended Cutting Flutes',
    tech02Metric1Desc: 'Increases bone-to-implant contact surface area for a tighter, more secure lock',
    tech02Metric2Title: 'Debris Evacuation & Bone Harvesting',
    tech02Metric2Desc: 'Smoothly evacuates bone chips while harvesting autogenous bone to fill local voids',
    tech02Metric3Title: 'Multi-Edged Flute Configuration',
    tech02Metric3Desc: 'Evenly distributes insertion resistance <span class="osf-d-break">with the advantage of bridging the jumping distance</span>',
    tech02Metric4Title: 'Progressive Thread Depth',
    tech02Metric4Desc: 'Apical flutes enable efficient cutting while coronal geometry buffers occlusal loads for long-term maintenance',
    tech02Sub3Title: 'Comprehensive Diameter Range',
    tech02Sub3Desc: 'Available in a full range of diameters from 3.75 mm to 7.5 mm. If unexpected intraoperative conditions arise after site debridement, clinicians can flexibly switch to a different diameter implant as a reliable clinical backup.',
    tech02Sub4Title: 'Immediate Extraction & Implant Placement',
    tech02Sub4Desc: 'Utilizing wide-diameter implants and dedicated components in multi-rooted or bone-compromised extraction sockets simplifies complex soft-tissue closure for a smooth surgical workflow.',
    tech02ImmediateCaption: 'Immediate Implant Placement',
    // 03
    tech03Title: 'Streamlined Sinus Lift Procedure',
    tech03Lead: 'Traditional sinus elevation procedures are complex and time-consuming; OsseoFuse makes this demanding technique significantly more predictable and stable.',
    tech03Sub1Title: 'Gentle Sinus Floor Elevation with Simultaneous Bone Grafting',
    tech03Sub1Desc: 'The patented apical design channels autogenous bone upward into the concave apex via lateral flutes. During insertion, it simultaneously guides autogenous bone and gently elevates the Schneiderian membrane (up to 4–5 mm), greatly reducing surgical time and complexity.',
    tech03VideoCaption: 'The first implant is the Hexa implant and the second is the Sinus implant, clearly demonstrating bone chips being directed between the implant apex and the sinus membrane.',
    // 04
    tech04Title: 'Optimize Overall Treatment Experience & Build Patient Trust',
    tech04Point1Title: 'Streamlined Workflow, Reduced Patient Anxiety',
    tech04Point1Desc: 'The simplified one-drill protocol significantly shortens chairside time, providing patients with a smoother surgical experience while alleviating procedural time and psychological stress.',
    tech04Point2Title: 'Build High-Satisfaction Professional Reputation',
    tech04Point2Desc: 'A time-saving, seamless treatment workflow translates into high patient satisfaction and trust in the clinical team—fostering long-term doctor-patient relationships and building an outstanding clinic reputation.',
    // Core Technology Analysis (White background section)
    tech04VideoTitle: 'Core Technology Analysis',
    tech04VideoCaption: 'The patented drill prepares a four-tiered osteotomy in a single pass with superior debris evacuation and heat dissipation—preserving bone vitality while effectively shortening surgical time',
    tech04VideoBadge: '[ One-Drill Osteotomy Animation ・ 16:9 ]',
    // Tech CTA Bar
    techCtaTitle: 'Need Complete Specifications & Academic Literature?',
    techCtaDesc: 'Register to download operating guides and academic literature, and access complete specification comparison tables.',
    techCtaBtnPapers: 'Join Membership',
    techCtaBtnCases: 'View Specifications',

    /* --- TAB 3: Specifications (EN) --- */
    specHeroSubtag: 'OsseoFuse – The One-Drill Implant System Designed in the USA',
    /* TODO: 待補英文翻譯 (Missing EN) */
    specHeroTitle: 'Three Implant Series Specifications',
    specHeroDescPart1: 'Structural Design and Clinical Indications of ',
    specHeroDescPart2: 'SinusFuse, HexaPLUS, and OneBody Series',
    // SERIES 01: SinusFuse
    specS1Tag: 'SERIES 01',
    specS1TitlePrefix: 'USA Original OsseoFuse ',
    specS1TitleSeries: 'SinusFuse Series',
    specS1Subtitle: 'Patented Apical Structure | Minimally Invasive Solution Engineered for Maxillary Sinus Elevation',
    specS1P1Title: 'Unique Concave Apex for Sinus Membrane Protection',
    specS1P1Desc: 'Concave Apex × Minimally Invasive Implantation: During sinus elevation, the concave apex harvests and channels autogenous bone chips upward, forming a protective bone cushion between the implant and Schneiderian membrane to gently elevate the sinus floor while enhancing osseointegration.',
    specS1P2Title: 'Full-Length Lateral Cutting Flutes for Superior Primary Stability',
    specS1P2Line1: '<strong>Progressive Thread Depth Design:</strong> Thread depth transitions from shallow to deep to adapt to varying bone densities and deliver exceptional primary lock.',
    specS1P2Line2: '<strong>Sharp Lateral Cutting Edges:</strong> Optimized cutting angle effectively boosts primary stability during insertion.',
    specS1P2Line3: '<strong>Autogenous Bone Harvesting:</strong> Smoothly collects and guides autogenous bone debris during placement to reinforce osseointegration.',
    specS1MediaCaption: 'Concave Apex and Lateral Cutting Flutes',
    // SERIES 02: HexaPLUS
    specS2Tag: 'SERIES 02',
    specS2TitlePrefix: 'USA Original OsseoFuse ',
    specS2TitleSeries: 'HexaPLUS Series',
    specS2P1Title: 'Unified Platform Design Streamlining Inventory & Workflow',
    specS2P1Line1: '<strong>Internal Hex Anti-Rotation Connection:</strong> Ensures secure abutment engagement and long-term prosthetic stability.',
    specS2P1Line2: '<strong>Single Restorative Platform:</strong> All implant diameters share one prosthetic platform, simplifying component inventory.',
    specS2P1Line3: '<strong>Tapered Implant Geometry:</strong> Delivers high bone engagement across diverse bone conditions and immediate extraction sites.',
    specS2P1Line4: '<strong>Step-Inner-Locking Technology:</strong> Paired with the patented stepped drill, engaging 2–3 locking points achieves over 30 Ncm primary stability.',
    specS2P2Title: 'Exclusive Lateral Flutes Enhancing Primary Stability',
    specS2P2Line1: '<strong>Extended Cutting Flutes:</strong> Expands bone-to-implant contact surface while evenly distributing insertion torque.',
    specS2P2Line2: '<strong>Bone Harvesting & Debris Evacuation:</strong> Channels autogenous bone chips to bridge local voids and jumping distances.',
    specS2P2Line3: '<strong>Progressive Thread Profile:</strong> Apical threads enable efficient self-tapping while coronal geometry buffers occlusal stress.',
    // SERIES 03: OneBody
    specS3Tag: 'SERIES 03',
    specS3TitlePrefix: 'USA Original OsseoFuse ',
    specS3TitleSeries: 'OneBody Series',
    specS3P1Title: 'Monoblock One-Piece Architecture — Minimally Invasive & Efficient',
    specS3P1Line1: '<strong>Integrated Implant & Abutment:</strong> Eliminates the micro-gap between fixture and abutment, minimizing screw loosening and micro-leakage.',
    specS3P1Line2: '<strong>Streamlined Prosthetic Protocol:</strong> Enables immediate temporization or impression taking right after placement.',
    specS3P2Title: 'Engineered for Narrow Ridges & Anterior Esthetic Zones',
    specS3P2Line1: '<strong>Slender High-Strength Profile:</strong> Tailored for narrow alveolar ridges with limited horizontal bone width.',
    specS3P2Line2: '<strong>Bioactive Surface Treatment:</strong> Accelerates osseointegration for predictable long-term clinical outcomes.',
    specS3P3Title: 'Inheriting Patented Thread & Step-Inner-Locking Advantages',
    specS3P3Line1: '<strong>Progressive Thread Geometry:</strong> Provides strong primary fixation suitable for immediate loading protocols.',
    specS3P3Line2: '<strong>Lateral Evacuation Flutes:</strong> Ensures low-resistance insertion while preserving surrounding bone vitality.',
    specS3P3Line3: '<strong>Step-Inner-Locking Technology:</strong> Fully compatible with the 1-Drill surgical kit for an intuitive workflow.',
    specCtaBtnOutline: 'View Patents & Certificates',

    /* --- TAB 4: Patents & Certificates (EN) --- */
    certHeroSubtag: 'OsseoFuse – The One-Drill Implant System Designed in the USA',
    certHeroTitle: '<span class="osf-cert-title-p1">Multiple Patented Certifications <span class="osf-cert-hero-sep">｜</span></span><span class="osf-cert-title-p2">Exclusive 1-Drill Technology</span>',
    certHeroDesc: '<span class="osf-cert-desc-p1">With favorable primary stability, </span><span class="osf-cert-desc-p2">supporting clinicians across complex implant indications.</span>',
    certTabTw: 'Taiwan',
    certTabUs: 'USA',
    certTabCn: 'China',
    certHoverLabel: 'View Certificate',
    certLbBack: 'Back to List',
    certCtaDesc: 'Register to download operating guides and academic literature—exclusively for licensed dental practitioners and clinics.',
    certCtaBtnOutline: 'View Clinical Cases',

    /* --- TAB 5: Doctor Testimonials (EN) --- */
    docStat1Tag: 'Global Clinical Track Record',
    docStat1Num: '100,000',
    docStat1Unit: 'Implants Placed Worldwide',
    docStat2Tag: 'Original R&D & Clinical Follow-up',
    docStat2Num: '15',
    docStat2Unit: 'Years of Clinical Experience',
    docSectionTitle: 'Clinical Perspectives from Practicing Dentists',
    doc1Name: 'Dr. Chang',
    doc1Role: 'Specialist, Taiwan Academy of Minimally Invasive Implant Dentistry',
    doc1Title: 'Its streamlined geometry simplifies the multi-step workflow in maxillary sinus cases.',
    doc1P1: 'Previously, when facing sinus procedures or complex cases requiring extensive bone grafting, multi-step protocols often increased clinical difficulty. Since adopting the OsseoFuse system, its patented simplified structure has streamlined clinical workflows—assisting surgical procedures and providing a smoother minimally invasive experience for patients.',
    doc2Name: 'Dr. Chiu',
    doc2Role: 'Patient-Centric Oral Care & Clinical Implantology',
    doc2Title: 'As Steve Jobs once said: "The journey is the reward."',
    doc2P1: 'As Steve Jobs once said: "The journey is the reward." Over the past year of using OsseoFuse (OSF), it has played an important role in my clinical practice. Backed by careful CT evaluation, the system’s primary stability provides greater operative flexibility when managing compromised sockets or immediate implantation. Even when insertion angulation requires fine-tuning, the unique Step-Inner-Locking design enables smooth angulation adjustment and placement without relying on specialized auxiliary instruments.',
    doc2P2: 'Furthermore, the 5-in-1 stepped drill reduces repetitive drill changes during multi-implant surgeries, keeping the surgical tray clean and organized. Dr. Leon Chen’s geometric design for the Sinus implant assists clinicians in maintaining consistent implant placement quality even in challenging bone beds.',
    doc3Name: 'Dr. Hsu',
    doc3Role: 'Harvard Continuing Education · Periodontics & Implantology · 1,000+ OsseoFuse Implants Placed',
    doc3Title: 'Reliable clinical adaptability in both immediate implantation and sinus elevation.',
    doc3P1: 'When performing demanding procedures such as immediate extraction-and-implant placement or maxillary sinus elevation, OsseoFuse demonstrates high adaptability and structural stability, offering a dependable system choice for modern dental practice.',
    doc4Name: 'Dr. Huang',
    doc4Role: 'President, TIAMID Taiwan Academy of Minimally Invasive Implant Dentistry · 15+ Years Clinical Experience',
    doc4Title: 'Extraction, implant placement, and sinus lift—consolidated into a single surgery under suitable conditions.',
    doc4P1: 'Over more than fifteen years in clinical dentistry—from endodontics to immediate implantation—minimally invasive care and fewer surgical stages have always been my core pursuit. Traditional immediate implantation often requires multiple stages including extraction with bone grafting, fixture placement, and second-stage uncovery, where flap reflection and suturing frequently cause post-operative swelling and discomfort.',
    doc4P2: 'With the introduction of the OsseoFuse system, its core one-drill protocol and specialized thread geometry allow the fixture to achieve favorable primary stability right inside the extraction socket and connect directly to a healing abutment. Particularly in maxillary cases requiring immediate implantation combined with sinus elevation, the SinusFuse series consolidates extraction, implant placement, sinus lift, bone grafting, and healing abutment connection into a single surgical session under appropriate clinical conditions.',
    docCtaBtnOutline: 'View Community',

    /* --- TAB 6: Community & Education (EN) --- */
    /* TODO: 待確認衛教社群英文翻譯 (Edu EN Translations — 已依台灣醫療法規加入專業臨床評估表述) */
    eduHeroSubtag: 'OsseoFuse – The One-Drill Implant System Designed in the USA',
    eduHeroTitle: 'Am I a Candidate for Dental Implants?',
    eduHeroDesc: 'Compare physical conditions to explore suitable implant treatment options with your dentist',
    eduColOsseofuse: 'OsseoFuse 1-Drill Implant',
    eduColOsseofuseMob: 'OsseoFuse<br />1-Drill',
    eduColTraditional: 'Traditional Implant',
    eduColTraditionalMob: 'Traditional<br />Implant',
    eduMergedOsseofuse: 'Immediate placement upon clinical evaluation',
    eduCompareRows: [
      {
        category: 'Periodontal Conditions',
        osseofuse: 'Broader flexibility upon clinical evaluation',
        traditional: 'More restrictive baseline bone criteria',
      },
      {
        category: 'Advanced Periodontitis',
        osseofuse: 'Eligible for placement after thorough debridement',
        traditional: 'Requires complete healing period first',
      },
      {
        category: 'Diabetic Patients',
        osseofuse: 'May be evaluated for placement at HbA1c 8.0 / 9.0',
        traditional: 'Requires strictly stabilized glycemic levels',
      },
      {
        category: 'Hypertension',
        osseofuse: 'Streamlined workflow with shorter chairside time',
        traditional: 'Longer surgical duration and procedural stress',
      },
      {
        category: 'Anticoagulant Therapy',
        osseofuse: 'May proceed without pause based on physician evaluation',
        traditional: 'Typically requires 1-week medication pause',
      },
      {
        category: 'Osteoporosis',
        osseofuse: 'Supports clinical evaluation for immediate placement',
        traditional: 'Requires medication holiday prior to evaluation',
      },
      {
        category: 'Dialysis Patients',
        osseofuse: 'May be scheduled the day after dialysis per medical advice',
        traditional: 'Requires multi-stage medical coordination',
      },
      {
        category: 'Extraction & Implant',
        osseofuse: 'Immediate placement upon clinical evaluation',
        traditional: '<span class="osf-edu-trad-p1">After tooth extraction, </span><span class="osf-edu-trad-p2">requires several months of socket healing before implantation</span>',
        mergedGroup: true,
      },
      {
        category: 'Alveolar Bone Deficiency',
        osseofuse: 'Immediate placement upon clinical evaluation',
        traditional: 'Requires multiple staged bone grafting surgeries first',
        mergedGroup: true,
      },
      {
        category: 'Maxillary Sinus Elevation',
        osseofuse: 'Immediate placement upon clinical evaluation',
        traditional: 'Lateral window sinus graft, waiting ~6 months before implant',
        mergedGroup: true,
      },
    ],
    eduCommunityTitle: 'More Educational Communities',
    eduCard1Label: 'OSSEOFUSE Official US Website',
    eduCard2Label: 'Implant Museum & Encyclopedia Facebook',
    eduCard3Label: '<span class="osf-edu-link-line1">Implant Insights & Community with Ms. Ying</span> <span class="osf-edu-link-line2">Instagram</span>',
    eduCtaBtnOutline: 'View Overview',
  },
};

export interface CompareItem {
  category: string;
  traditional: string;
  osseofuse: string;
  allOn4: string;
}

export const COMPARE_ITEMS: CompareItem[] = [
  {
    category: '療程時間',
    traditional: '步驟繁複耗時長',
    osseofuse: '流程精簡效率高',
    allOn4: '當天完成立即植牙',
  },
  {
    category: '拔牙評估',
    traditional: '復原時間較長',
    osseofuse: '復原時間較短',
    allOn4: '視全口條件規劃',
  },
  {
    category: '齒槽骨修整',
    traditional: '視骨質需要補骨',
    osseofuse: '視骨質需要補骨',
    allOn4: '特殊骨架避開補骨',
  },
  {
    category: '植牙架構',
    traditional: '單顆獨立結構',
    osseofuse: '單顆獨立結構',
    allOn4: '多顆支撐全口固定',
  },
  {
    category: '等候假牙',
    traditional: '依照骨癒合週期',
    osseofuse: '擁有初期極佳穩定度',
    allOn4: '當天達到即刻穩定',
  },
  {
    category: '術後護理',
    traditional: '配合齒槽骨條件限制',
    osseofuse: '配合齒槽骨條件限制',
    allOn4: '特殊斜角植入避開神經',
  },
  {
    category: '人工假牙',
    traditional: '客製製作人工牙冠',
    osseofuse: '客製製作人工牙冠',
    allOn4: '整組固定人工牙橋',
  },
  {
    category: '特殊應變方案',
    traditional: '需依骨骼條件決定',
    osseofuse: '可彈性銜接規格齒位',
    allOn4: '需特定評估全口骨質',
  },
];

/**
 * 圖片／影片插槽 — 自動判斷副檔名（圖片或 .mov/.mp4/.webm 影片），若尚未放置或載入失敗則顯示清晰的路徑預留框
 */
function renderImageSlot(path: string, alt: string, extraClass: string = ''): string {
  const isVideo = /\.(mov|mp4|webm|m4v)(\?.*)?$/i.test(path);
  const mediaHtml = isVideo
    ? `<video src="${path}" aria-label="${alt}" autoplay muted loop playsinline preload="metadata"
        onloadeddata="this.parentElement.classList.add('is-loaded')"
        onerror="this.parentElement.classList.remove('is-loaded'); this.style.display='none';"></video>`
    : `<img src="${path}" alt="${alt}" loading="lazy"
        onload="this.parentElement.classList.add('is-loaded')"
        onerror="this.parentElement.classList.remove('is-loaded'); this.style.display='none';" />`;

  return `
    <div class="osf-img-slot ${extraClass}" data-path="${path}">
      ${mediaHtml}
      <div class="osf-img-placeholder-box">
        <svg class="placeholder-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
        <div class="placeholder-label">${isVideo ? '影片預留路徑' : '圖片預留路徑'}</div>
        <code class="placeholder-path">${path}</code>
      </div>
    </div>
  `;
}

function renderCompareTable(lang: 'zh' | 'en' = 'zh'): string {
  const t = OSSEOFUSE_I18N[lang] || OSSEOFUSE_I18N.zh;
  const items = t.compareItems || COMPARE_ITEMS;
  const isZh = lang === 'zh';

  const tableRows = items.map((item, idx) => `
    <tr class="${idx % 2 === 1 ? 'row-alt' : ''}">
      <td class="col-category">${noOrphan(item.category)}</td>
      <td class="col-traditional">${noOrphan(item.traditional)}</td>
      <td class="col-osseofuse"><strong>${noOrphan(item.osseofuse)}</strong></td>
      <td class="col-allon4">${noOrphan(item.allOn4)}</td>
    </tr>
  `).join('');

  const mobileCards = items.map((item) => `
    <div class="osf-compare-m-card">
      <div class="osf-compare-m-title">${noOrphan(item.category)}</div>
      <div class="osf-compare-m-rows">
        <div class="osf-compare-m-row">
          <div class="osf-compare-m-badge">${t.compareColTradMob || t.compareColTrad}</div>
          <div class="osf-compare-m-content">${noOrphan(item.traditional)}</div>
        </div>
        <div class="osf-compare-m-row osf-compare-m-highlight">
          <div class="osf-compare-m-badge">${t.compareColOsfMob || t.compareColOsf}</div>
          <div class="osf-compare-m-content"><strong>${noOrphan(item.osseofuse)}</strong></div>
        </div>
        <div class="osf-compare-m-row">
          <div class="osf-compare-m-badge">${t.compareColAllOn4Mob || t.compareColAllOn4}</div>
          <div class="osf-compare-m-content">${noOrphan(item.allOn4)}</div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="osf-compare-table-wrap ${isZh ? 'is-lang-zh' : 'is-lang-en'}">
      <table class="osf-compare-table ${isZh ? 'is-lang-zh' : 'is-lang-en'}">
        <thead>
          <tr>
            <th class="col-category"></th>
            <th class="col-traditional">${t.compareColTrad}</th>
            <th class="col-osseofuse">${t.compareColOsf}</th>
            <th class="col-allon4">${t.compareColAllOn4}</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
    <div class="osf-compare-mobile-cards ${isZh ? 'is-lang-zh' : 'is-lang-en'}">
      ${mobileCards}
    </div>
  `;
}

/**
 * 衛教社群分頁 —「我適合植牙嗎？」身體條件比較表（Desktop 含左分類欄 + 雙欄比較表 / Pad 雙欄比較表 / Mobile 10 張雙列比較卡）
 */
function renderEduCompareTable(lang: 'zh' | 'en'): string {
  const t = OSSEOFUSE_I18N[lang] || OSSEOFUSE_I18N.zh;
  const rows = t.eduCompareRows;

  const desktopRows = rows
    .map((row, idx) => {
      const isMergedGroup = Boolean((row as { mergedGroup?: boolean }).mergedGroup);
      const isFirstOfMerged = idx === 7;
      const rowToneClass = isMergedGroup ? 'edu-row-white edu-row-merged-group' : idx % 2 === 0 ? 'edu-row-tinted' : 'edu-row-white';
      const tradHtml = row.traditional.includes('<span') ? row.traditional : noOrphan(row.traditional);

      const osseofuseCell = isMergedGroup
        ? isFirstOfMerged
          ? `<td class="edu-col-osseofuse edu-cell-merged" rowspan="3"><strong>${noOrphan(t.eduMergedOsseofuse)}</strong></td>`
          : ''
        : `<td class="edu-col-osseofuse"><strong>${noOrphan(row.osseofuse)}</strong></td>`;

      return `
        <tr class="${rowToneClass} ${idx === rows.length - 1 ? 'edu-row-last' : ''}">
          <th scope="row" class="edu-col-category">${noOrphan(row.category)}</th>
          ${osseofuseCell}
          <td class="edu-col-traditional">${tradHtml}</td>
        </tr>
      `;
    })
    .join('');

  const mobileCards = rows
    .map((row) => {
      const tradHtml = row.traditional.includes('<span') ? row.traditional : noOrphan(row.traditional);
      return `
        <div class="osf-edu-m-card">
          <div class="osf-edu-m-category">${noOrphan(row.category)}</div>
          <div class="osf-edu-m-box">
            <div class="osf-edu-m-row osf-edu-m-row-osf">
              <div class="osf-edu-m-badge badge-osf">${t.eduColOsseofuseMob}</div>
              <div class="osf-edu-m-val val-osf"><span class="osf-edu-m-val-text"><strong>${noOrphan(row.osseofuse)}</strong></span></div>
            </div>
            <div class="osf-edu-m-row osf-edu-m-row-trad">
              <div class="osf-edu-m-badge badge-trad">${t.eduColTraditionalMob || t.eduColTraditional}</div>
              <div class="osf-edu-m-val val-trad"><span class="osf-edu-m-val-text">${tradHtml}</span></div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="osf-edu-table-wrap osf-edu-lang-${lang}">
      <table class="osf-edu-table">
        <thead>
          <tr>
            <th class="edu-col-category edu-th-empty" aria-hidden="true"></th>
            <th scope="col" class="edu-col-osseofuse edu-th-osseofuse">${t.eduColOsseofuse}</th>
            <th scope="col" class="edu-col-traditional edu-th-traditional">${t.eduColTraditional}</th>
          </tr>
        </thead>
        <tbody>
          ${desktopRows}
        </tbody>
      </table>
    </div>
    <div class="osf-edu-mobile-cards osf-edu-lang-${lang}">
      ${mobileCards}
    </div>
  `;
}

export function osseofusePage(): string {
  const lang = currentGlobalLang || 'zh';
  const t = OSSEOFUSE_I18N[lang];

  return `
    <!-- ============================================================
         1. HERO — 全寬背景圖 + 左下文字
         ============================================================ -->
    <section class="osf-hero">
      <div class="osf-hero-bg">
        <picture>
          <!-- Desktop (WebP -> JPG) -->
          <source media="(min-width: 1025px)" type="image/webp" srcset="/images/osseofuse/hero-desktop.webp" />
          <source media="(min-width: 1025px)" srcset="/images/osseofuse/hero-desktop.jpg" />
          <!-- Tablet (WebP -> JPG) -->
          <source media="(min-width: 769px)" type="image/webp" srcset="/images/osseofuse/hero-tablet.webp" />
          <source media="(min-width: 769px)" srcset="/images/osseofuse/hero-tablet.jpg" />
          <!-- Mobile (WebP -> JPG) -->
          <source type="image/webp" srcset="/images/osseofuse/hero-mobile.webp" />
          <img src="/images/osseofuse/hero-mobile.jpg" alt="OsseoFuse 一鑽植牙系統" fetchpriority="high" onerror="this.style.display='none'" />
        </picture>
      </div>
      <div class="osf-hero-overlay"></div>
      <div class="osf-hero-inner">
        <div class="osf-breadcrumb">
          <a href="#/">HOME</a>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">OSSEOFUSE</span>
        </div>
        <div class="osf-hero-content">
          <h1 id="osf-hero-title">${t.heroTitle}</h1>
          <p class="osf-hero-subtitle" id="osf-hero-subtitle">${t.heroSubtitle}</p>
        </div>
      </div>
    </section>

    <!-- ============================================================
         2. TAB 導覽列（方案 A：全程 Sticky 吸頂，滑過 Hero 後固定於 Header 正下方）
         ============================================================ -->
    <div class="osf-tab-nav-wrap" id="osf-tab-nav-wrap">
      <nav class="osf-tab-nav" id="osf-tab-nav">
        <div class="osf-tab-nav-inner">
          <button class="osf-tab-btn active" data-tab="intro">${t.tabs[0]}</button>
          <button class="osf-tab-btn" data-tab="tech">${t.tabs[1]}</button>
          <button class="osf-tab-btn" data-tab="spec">${t.tabs[2]}</button>
          <button class="osf-tab-btn" data-tab="cert">${t.tabs[3]}</button>
          <button class="osf-tab-btn" data-tab="doctor">${t.tabs[4]}</button>
          <button class="osf-tab-btn" data-tab="edu">${t.tabs[5]}</button>
        </div>

        <!-- 手機端專用 Tab 下拉選單（依手機設計稿 100% 還原） -->
        <div class="osf-tab-mobile-dropdown" id="osf-tab-mobile-dropdown">
          <button type="button" class="osf-tab-mobile-trigger" id="osf-tab-mobile-trigger" aria-expanded="false">
            <span class="osf-tab-mobile-label" id="osf-tab-mobile-current">${t.tabs[0]}</span>
            <svg class="osf-tab-mobile-caret" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 7L0 0H12L6 7Z" fill="#154265"/>
            </svg>
          </button>
          <div class="osf-tab-mobile-menu" id="osf-tab-mobile-menu">
            <button type="button" class="osf-tab-mobile-item active" data-tab="intro">${t.tabs[0]}</button>
            <button type="button" class="osf-tab-mobile-item" data-tab="tech">${t.tabs[1]}</button>
            <button type="button" class="osf-tab-mobile-item" data-tab="spec">${t.tabs[2]}</button>
            <button type="button" class="osf-tab-mobile-item" data-tab="cert">${t.tabs[3]}</button>
            <button type="button" class="osf-tab-mobile-item" data-tab="doctor">${t.tabs[4]}</button>
            <button type="button" class="osf-tab-mobile-item" data-tab="edu">${t.tabs[5]}</button>
          </div>
        </div>
      </nav>
    </div>

    <!-- ============================================================
         【TAB 1: 產品介紹 PANEL】
         ============================================================ -->
    <div class="osf-tab-panel active" id="osf-panel-intro">
      <!-- ============================================================
           3. Overview 產品介紹區 — 淺色背景（支援中英雙語）
           ============================================================ -->
      <section class="osf-overview-section" id="osf-intro">
      <div class="osf-section-inner">
        <div class="osf-overview-tag">
          <span class="tag-label">OVERVIEW</span>
          <span class="tag-sep">｜</span>
          <span class="tag-text" id="osf-overview-tag-text">${t.overviewTag}</span>
        </div>
        <div class="osf-overview-header">
          <h2 id="osf-overview-title">${t.overviewTitle}</h2>
          <p class="osf-overview-desc" id="osf-overview-desc">
            ${t.overviewDesc}
          </p>
        </div>
        <div class="osf-feature-cards">
          <div class="osf-feature-card">
            <span class="feature-tag" id="osf-card1-tag">${t.card1Tag}</span>
            <h3 id="osf-card1-title">${t.card1Title}</h3>
            <p id="osf-card1-desc">${t.card1Desc}</p>
          </div>
          <div class="osf-feature-card">
            <span class="feature-tag" id="osf-card2-tag">${t.card2Tag}</span>
            <h3 id="osf-card2-title">${t.card2Title}</h3>
            <p id="osf-card2-desc">${t.card2Desc}</p>
          </div>
          <div class="osf-feature-card">
            <span class="feature-tag" id="osf-card3-tag">${t.card3Tag}</span>
            <h3 id="osf-card3-title">${t.card3Title}</h3>
            <p id="osf-card3-desc">${t.card3Desc}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         4. 影片區 — 一套系統，迅速完成植牙（背景半圓形穹頂 Dome）
         ============================================================ -->
    <section class="osf-video-section" id="osf-video">
      <!-- 單一背景半圓形穹頂裝飾 (Dome) — 比例與高度嚴格對齊設計稿 -->
      <div class="osf-video-dome-wrapper" aria-hidden="true">
        <svg class="osf-video-dome-svg" viewBox="0 0 1440 820" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1440 820C1440 705 1421.38 595 1385.19 495C1349.01 395 1295.98 305 1229.12 230C1162.26 155 1082.89 95 995.532 55C908.178 18.6 814.552 0 720 0C625.448 0 531.822 18.6 444.468 55C357.113 95 277.741 155 210.883 230C144.025 305 90.99 395 54.8067 495C18.6233 595 0 705 0 820L720 820H1440Z" fill="url(#osf_dome_grad)"/>
          <defs>
            <radialGradient id="osf_dome_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 0) rotate(90) scale(820 720)">
              <stop stop-color="#E1ECF7" stop-opacity="0.95"/>
              <stop offset="0.45" stop-color="#EEF4FA" stop-opacity="0.75"/>
              <stop offset="1" stop-color="#F8FAFC" stop-opacity="0.15"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div class="osf-section-inner osf-video-inner">
        <h2 class="osf-video-title" id="osf-video-title">${t.videoTitle}</h2>
        <div class="osf-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="一鑽植牙動畫影片"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- ============================================================
         5. 一套系統區 — 淺色背景 + 雙欄對比（依設計稿還原）
         ============================================================ -->
    <section class="osf-system-section" id="osf-system">
      <div class="osf-section-inner">
        <div class="osf-system-header">
          <h2 id="osf-system-title">${t.systemTitle} <span class="highlight">${t.systemTitleHighlight}</span></h2>
          <p class="osf-system-desc" id="osf-system-desc1">
            ${noOrphan(t.systemDesc1)}
          </p>
          <p class="osf-system-desc" id="osf-system-desc2">
            ${noOrphan(t.systemDesc2)}
          </p>
        </div>

        <div class="osf-compare-grid">
          <!-- 左欄：TRADITION -->
          <div class="osf-tradition-col">
            <h4 class="compare-col-title">TRADITION</h4>
            <div class="tradition-steps-wrap">
              <div class="tradition-timeline-line" aria-hidden="true"></div>
              <div class="tradition-steps">
                <div class="tradition-step">
                  <div class="tradition-badge-box">
                    <span class="tradition-badge">STEP 1</span>
                  </div>
                  <p id="osf-trad-step1">${noOrphan(t.tradStep1)}</p>
                </div>

                <div class="tradition-step">
                  <div class="tradition-badge-box">
                    <span class="tradition-badge">STEP 2</span>
                  </div>
                  <p id="osf-trad-step2">${noOrphan(t.tradStep2)}</p>
                </div>

                <div class="tradition-step">
                  <div class="tradition-badge-box">
                    <div class="tradition-badge tradition-badge-range">
                      <span>STEP 3</span>
                      <span class="badge-dots">⋮</span>
                      <span>STEP 6</span>
                    </div>
                  </div>
                  <p id="osf-trad-step3to6">${noOrphan(t.tradStep3to6)}</p>
                </div>

                <div class="tradition-step">
                  <div class="tradition-badge-box">
                    <span class="tradition-badge">STEP 7</span>
                  </div>
                  <p id="osf-trad-step7">${noOrphan(t.tradStep7)}</p>
                </div>

                <div class="tradition-step">
                  <div class="tradition-badge-box">
                    <div class="tradition-badge tradition-badge-range">
                      <span>STEP 8</span>
                      <span class="badge-dots">⋮</span>
                      <span>STEP 9</span>
                    </div>
                  </div>
                  <p id="osf-trad-step8to9">${noOrphan(t.tradStep8to9)}</p>
                </div>

                <div class="tradition-step">
                  <div class="tradition-badge-box">
                    <span class="tradition-badge">STEP 10</span>
                  </div>
                  <p id="osf-trad-step10">${noOrphan(t.tradStep10)}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右欄：WITH OSSEOFUSE -->
          <div class="osf-modern-col">
            <h4 class="compare-col-title compare-col-highlight">WITH OSSEOFUSE</h4>
            <div class="modern-steps-wrap">
              <div class="modern-timeline-line" aria-hidden="true"></div>
              <div class="modern-steps">
                <div class="modern-step">
                  <div class="modern-badge-box">
                    <span class="modern-badge">STEP 1</span>
                  </div>
                  <p id="osf-mod-step1">${noOrphan(t.modStep1)}</p>
                </div>

                <div class="modern-step">
                  <div class="modern-badge-box">
                    <span class="modern-badge">STEP 2</span>
                  </div>
                  <p id="osf-mod-step2">${noOrphan(t.modStep2)}</p>
                </div>
              </div>
            </div>

            <div class="modern-diagram-wrap">
              ${renderImageSlot(OSSEOFUSE_IMAGES.stepDiagram, 'OsseoFuse 步驟對比示意圖', 'slot-step-diagram')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         6. 三種方式比較 — 淺色背景（依設計截圖還原）
         ============================================================ -->
    <section class="osf-compare-section">
      <div class="osf-section-inner">
        <div class="osf-section-tag-center">
          <span class="tag-label">COMPARISON</span>
        </div>
        <h2 class="osf-compare-title" id="osf-compare-title">${t.compareTitle}</h2>
        <div id="osf-compare-mount">${renderCompareTable(lang)}</div>
      </div>
    </section>

    <!-- ============================================================
         7. 醫療器材許可證字號 — 深色背景（依設計稿 100% 還原）
         ============================================================ -->
    <section class="osf-cert-section" id="osf-license">
      <div class="osf-section-inner">
        <div class="osf-cert-grid">
          <div class="osf-cert-text">
            <div class="osf-cert-tag">
              <span class="tag-label" id="osf-cert-tag">${t.licenseTag}</span>
            </div>
            <h2 class="osf-cert-title" id="osf-cert-title">${t.licenseTitle}</h2>
            <ul class="osf-cert-list" id="osf-cert-list-intro">
              ${t.licenseItems.map(item => `<li>${noOrphan(item)}</li>`).join('')}
            </ul>
            <p class="osf-cert-disclaimer osf-cert-disclaimer-desktop" id="osf-cert-disclaimer-desktop">
              ${noOrphan(t.licenseDisclaimer)}
            </p>
          </div>
          <div class="osf-cert-image" id="osf-cert-image-wrap">
            ${renderImageSlot(lang === 'en' ? OSSEOFUSE_IMAGES.licenseCertEn : OSSEOFUSE_IMAGES.licenseCert, '醫療器材許可證與專利證書', 'slot-license-cert')}
          </div>
          <p class="osf-cert-disclaimer osf-cert-disclaimer-mobile" id="osf-cert-disclaimer-mobile">
            ${noOrphan(t.licenseDisclaimer)}
          </p>
        </div>
      </div>
    </section>

    <!-- ============================================================
         8. 加入免費會員 CTA — 左情境照右內容（依設計稿 100% 還原）
         ============================================================ -->
    <section class="osf-member-cta-section" id="osf-member-cta">
      <div class="osf-member-cta-inner">
        <div class="osf-member-cta-image">
          <img src="${OSSEOFUSE_IMAGES.memberCta}" alt="加入免費會員取得完整臨床資源" loading="lazy"
            onerror="this.style.display='none';" />
          <a
            href="https://www.${'free' + 'pik'}.com/free-photo/unrecognizable-office-worker-with-tablet_1526346.htm#fromView=search&page=1&position=15&uuid=7b9326fd-af96-4440-92ec-658717b58b58&track=ais_hybrid&query=Clinical+Resources"
            target="_blank"
            rel="noopener noreferrer"
            class="osf-image-credit"
          >Image by ${'free' + 'pik'}</a>
        </div>
        <div class="osf-member-cta-content">
          <span class="osf-member-cta-tag" id="osf-member-cta-tag">${t.memberTag}</span>
          <h2 class="osf-member-cta-title" id="osf-member-cta-title">${t.memberTitle}</h2>
          <p class="osf-member-cta-desc" id="osf-member-cta-desc">${noOrphan(t.memberDesc)}</p>
          <div class="osf-member-cta-actions">
            <a href="#/register" class="btn btn-primary-blue osf-cta-btn-primary" id="osf-cta-btn-reg">${t.memberBtnPrimary}</a>
            <a href="#/login" class="btn btn-outline-blue osf-cta-btn-outline" id="osf-cta-btn-login">${t.memberBtnOutline}</a>
          </div>
        </div>
      </div>
    </section>
  </div>

    <!-- ============================================================
         【TAB 2: 核心技術 PANEL】(依文件與設計稿 100% 還原中英文)
         ============================================================ -->
    <div class="osf-tab-panel" id="osf-panel-tech" style="display: none;">
      <!-- 1. 核心技術深藍概覽橫幅 (Overview Dome Banner) -->
      <section class="osf-tech-hero-section">
        <div class="osf-tech-dome-wrapper" aria-hidden="true">
          <img
            class="osf-tech-dome-bg-img"
            src="${OSSEOFUSE_IMAGES.techHeroDome}"
            alt=""
            loading="lazy"
            onload="this.parentElement.classList.add('has-dome-img')"
            onerror="this.parentElement.classList.remove('has-dome-img'); this.style.display='none';"
          />
          <div class="osf-tech-dome-arc"></div>
        </div>
        <div class="osf-section-inner osf-tech-hero-inner">
          <p class="osf-tech-hero-subtag" id="osf-tech-hero-subtag">${noOrphan(t.overviewTag)}</p>
          <h2 class="osf-tech-hero-title" id="osf-tech-hero-title">${noOrphan(t.videoTitle)}</h2>
          <p class="osf-tech-hero-desc" id="osf-tech-hero-desc">${noOrphan(t.overviewDesc)}</p>
          <div class="osf-tech-cards-grid">
            <div class="osf-tech-card">
              <span class="feature-tag" id="osf-tech-c1-tag">${t.card1Tag}</span>
              <h3 id="osf-tech-c1-title">${noOrphan(t.card1Title)}</h3>
              <p id="osf-tech-c1-desc">${noOrphan(t.card1Desc)}</p>
            </div>
            <div class="osf-tech-card">
              <span class="feature-tag" id="osf-tech-c2-tag">${t.card2Tag}</span>
              <h3 id="osf-tech-c2-title">${noOrphan(t.card2Title)}</h3>
              <p id="osf-tech-c2-desc">${noOrphan(t.card2Desc)}</p>
            </div>
            <div class="osf-tech-card">
              <span class="feature-tag" id="osf-tech-c3-tag">${t.card3Tag}</span>
              <h3 id="osf-tech-c3-title">${noOrphan(t.card3Title)}</h3>
              <p id="osf-tech-c3-desc">${noOrphan(t.card3DescPart1)}<span class="osf-card-break">${noOrphan(t.card3DescPart2)}</span></p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 核心 4 項技術優勢 (依文件與設計稿 100% 還原) -->
      <section class="osf-tech-features-section" id="osf-tech-features">
        <div class="osf-section-inner">
          <!-- 頂部標題（靠左） -->
          <div class="osf-tech-advantages-header">
            <span class="osf-tech-advantages-tag" id="osf-tech-adv-tag">${t.techAdvTag}</span>
            <h2 class="osf-tech-advantages-title" id="osf-tech-adv-title">
              ${t.techAdvTitle}
            </h2>
          </div>

          <!-- 01 顯著提升臨床手術效率 -->
          <div class="osf-tech-feature-row" id="tech-feature-01">
            <div class="osf-tech-feature-header">
              <span class="feat-num">01</span>
              <h3 class="feat-title" id="osf-tech-01-title">${noOrphan(t.tech01Title)}</h3>
            </div>
            <div class="osf-tech-feature-body">
              <!-- 子區塊 1: 一鑽到底 -->
              <div class="osf-tech-sub-block">
                <h4 class="sub-block-title" id="osf-tech-01-sub1-title">${noOrphan(t.tech01Sub1Title)}</h4>
                <p class="sub-block-desc" id="osf-tech-01-sub1-desc">
                  ${t.tech01Sub1Desc}
                </p>
                <div class="osf-tech-grid-2cols">
                  <div class="osf-tech-media-item">
                    <div class="osf-tech-img-box">
                      ${renderImageSlot(OSSEOFUSE_IMAGES.tech01DrillFlow, '傳統多鑽植牙系統 vs OsseoFuse 一鑽植牙系統流程對比', 'slot-tech-01-flow')}
                    </div>
                  </div>
                  <div class="osf-tech-media-item">
                    <div class="osf-tech-img-box">
                      ${renderImageSlot(OSSEOFUSE_IMAGES.tech01KisDrill, 'KIS 專利一鑽設計特寫（五鑽合一影片）', 'slot-tech-01-kis')}
                    </div>
                    <p class="osf-tech-img-caption" id="osf-tech-01-kis-caption">${noOrphan(t.tech01KisCaption)}</p>
                  </div>
                </div>
              </div>

              <!-- 子區塊 2: 方向微調與工具盒 (左文右圖) -->
              <div class="osf-tech-split-2cols">
                <div class="osf-tech-split-text">
                  <div class="osf-tech-text-item">
                    <h4 class="sub-block-title" id="osf-tech-01-sub2-title">${noOrphan(t.tech01Sub2Title)}</h4>
                    <p class="sub-block-desc" id="osf-tech-01-sub2-desc">
                      ${noOrphan(t.tech01Sub2Desc)}
                    </p>
                  </div>
                  <div class="osf-tech-text-item">
                    <h4 class="sub-block-title" id="osf-tech-01-sub3-title">${noOrphan(t.tech01Sub3Title)}</h4>
                    <p class="sub-block-desc" id="osf-tech-01-sub3-desc">
                      ${noOrphan(t.tech01Sub3Desc)}
                    </p>
                  </div>
                </div>
                <div class="osf-tech-split-media">
                  <div class="osf-tech-img-box">
                    ${renderImageSlot(OSSEOFUSE_IMAGES.tech01SystemKit, 'HexaPLUS, SinusFuse, OneBody 共用單一套件手術盒', 'slot-tech-01-kit')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 02 從容應對高難度案例與即拔即植 -->
          <div class="osf-tech-feature-row" id="tech-feature-02">
            <div class="osf-tech-feature-header">
              <span class="feat-num">02</span>
              <h3 class="feat-title" id="osf-tech-02-title">${noOrphan(t.tech02Title)}</h3>
            </div>
            <div class="osf-tech-feature-body">
              <p class="osf-tech-feature-lead" id="osf-tech-02-lead">
                ${t.tech02Lead}
              </p>

              <!-- Step-Inner-Locking + 三欄示意圖 -->
              <div class="osf-tech-sub-block">
                <h4 class="sub-block-title" id="osf-tech-02-sub1-title">${noOrphan(t.tech02Sub1Title)}</h4>
                <p class="sub-block-desc" id="osf-tech-02-sub1-desc" style="margin-bottom: 12px;">
                  ${noOrphan(t.tech02Sub1Desc)}
                </p>
                <div class="osf-tech-locking-notes">
                  <p id="osf-tech-02-note1">${noOrphan(t.tech02LockingNote1)}</p>
                  <p id="osf-tech-02-note2">${noOrphan(t.tech02LockingNote2)}</p>
                </div>
                <div class="osf-tech-grid-3cols">
                  <div class="osf-tech-img-box osf-tech-locking-box">
                    ${renderImageSlot(OSSEOFUSE_IMAGES.tech02Locking1, '1-drill step-locking system 階梯鎖定技術示意圖 1', 'slot-tech-02-locking-1')}
                  </div>
                  <div class="osf-tech-img-box osf-tech-locking-box">
                    ${renderImageSlot(OSSEOFUSE_IMAGES.tech02Locking2, '1-drill step-locking system 階梯鎖定技術示意圖 2', 'slot-tech-02-locking-2')}
                  </div>
                  <div class="osf-tech-img-box osf-tech-locking-box">
                    ${renderImageSlot(OSSEOFUSE_IMAGES.tech02Locking3, '1-drill step-locking system 階梯鎖定技術示意圖 3', 'slot-tech-02-locking-3')}
                  </div>
                </div>
              </div>

              <!-- 獨家「側切刀面」結構 — 2x2 左側邊線列表 -->
              <div class="osf-tech-sub-block">
                <h4 class="sub-block-title" id="osf-tech-02-sub2-title">${noOrphan(t.tech02Sub2Title)}</h4>
                <div class="osf-tech-metrics-grid">
                  <div class="osf-tech-metric-card">
                    <h5 id="osf-tech-02-m1-title">${noOrphan(t.tech02Metric1Title)}</h5>
                    <p id="osf-tech-02-m1-desc">${noOrphan(t.tech02Metric1Desc)}</p>
                  </div>
                  <div class="osf-tech-metric-card">
                    <h5 id="osf-tech-02-m2-title">${noOrphan(t.tech02Metric2Title)}</h5>
                    <p id="osf-tech-02-m2-desc">${noOrphan(t.tech02Metric2Desc)}</p>
                  </div>
                  <div class="osf-tech-metric-card">
                    <h5 id="osf-tech-02-m3-title">${noOrphan(t.tech02Metric3Title)}</h5>
                    <p id="osf-tech-02-m3-desc">${t.tech02Metric3Desc}</p>
                  </div>
                  <div class="osf-tech-metric-card">
                    <h5 id="osf-tech-02-m4-title">${noOrphan(t.tech02Metric4Title)}</h5>
                    <p id="osf-tech-02-m4-desc">${noOrphan(t.tech02Metric4Desc)}</p>
                  </div>
                </div>
              </div>

              <!-- 完整直徑選擇 & 即拔即植應用 + 滿寬模型圖 -->
              <div class="osf-tech-sub-block">
                <div class="osf-tech-text-item">
                  <h4 class="sub-block-title" id="osf-tech-02-sub3-title">${noOrphan(t.tech02Sub3Title)}</h4>
                  <p class="sub-block-desc" id="osf-tech-02-sub3-desc">
                    ${noOrphan(t.tech02Sub3Desc)}
                  </p>
                </div>
                <div class="osf-tech-text-item" style="margin-bottom: 28px;">
                  <h4 class="sub-block-title" id="osf-tech-02-sub4-title">${noOrphan(t.tech02Sub4Title)}</h4>
                  <p class="sub-block-desc" id="osf-tech-02-sub4-desc">
                    ${noOrphan(t.tech02Sub4Desc)}
                  </p>
                </div>
                <div class="osf-tech-media-item">
                  <div class="osf-tech-video-box osf-video-wrap">
                    <iframe
                      src="${OSSEOFUSE_IMAGES.tech02YoutubeUrl || 'https://www.youtube.com/embed/VIDEO_ID'}"
                      title="即拔即植臨床動畫示範"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <p class="osf-tech-img-caption" id="osf-tech-02-imm-caption">${noOrphan(t.tech02ImmediateCaption)}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 03 精簡上顎竇(鼻竇)提升術式 -->
          <div class="osf-tech-feature-row" id="tech-feature-03">
            <div class="osf-tech-feature-header">
              <span class="feat-num">03</span>
              <h3 class="feat-title" id="osf-tech-03-title">${noOrphan(t.tech03Title)}</h3>
            </div>
            <div class="osf-tech-feature-body">
              <p class="sub-block-desc" id="osf-tech-03-lead" style="margin-bottom: 28px;">
                ${noOrphan(t.tech03Lead)}
              </p>
              <div class="osf-tech-sub-block">
                <h4 class="sub-block-title" id="osf-tech-03-sub1-title">${noOrphan(t.tech03Sub1Title)}</h4>
                <p class="sub-block-desc" id="osf-tech-03-sub1-desc">
                  ${noOrphan(t.tech03Sub1Desc)}
                </p>
                <div class="osf-tech-media-item">
                  <div class="osf-tech-video-box osf-video-wrap">
                    <iframe
                      src="${OSSEOFUSE_IMAGES.tech03YoutubeUrl || 'https://www.youtube.com/embed/VIDEO_ID'}"
                      title="Hexa與Sinus植體功能實測影片"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <p class="osf-tech-img-caption" id="osf-tech-03-vid-caption">${noOrphan(t.tech03VideoCaption)}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 04 優化整體療程體驗，建立醫病信賴 -->
          <div class="osf-tech-feature-row" id="tech-feature-04">
            <div class="osf-tech-feature-header">
              <span class="feat-num">04</span>
              <h3 class="feat-title" id="osf-tech-04-title">${noOrphan(t.tech04Title)}</h3>
            </div>
            <div class="osf-tech-feature-body">
              <div class="osf-tech-grid-2cols text-only">
                <div class="osf-tech-clinical-point">
                  <h4 class="sub-block-title" id="osf-tech-04-p1-title">${noOrphan(t.tech04Point1Title)}</h4>
                  <p class="sub-block-desc" id="osf-tech-04-p1-desc" style="margin-bottom: 0;">
                    ${noOrphan(t.tech04Point1Desc)}
                  </p>
                </div>
                <div class="osf-tech-clinical-point">
                  <h4 class="sub-block-title" id="osf-tech-04-p2-title">${noOrphan(t.tech04Point2Title)}</h4>
                  <p class="sub-block-desc" id="osf-tech-04-p2-desc" style="margin-bottom: 0;">
                    ${noOrphan(t.tech04Point2Desc)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 核心技術解析 (獨立白底影片區 — 依三端設計稿 100% 還原) -->
      <section class="osf-tech-analysis-section" id="osf-tech-analysis">
        <div class="osf-section-inner osf-tech-analysis-inner">
          <h2 class="osf-tech-analysis-title" id="osf-tech-04-vid-title">${noOrphan(t.tech04VideoTitle)}</h2>
          <p class="osf-tech-analysis-desc" id="osf-tech-04-vid-caption">
            ${t.tech04VideoCaption}
          </p>
          <div class="osf-tech-analysis-video-box">
            ${renderImageSlot(OSSEOFUSE_IMAGES.tech04OsteotomyDiff, '一鑽牙窩動畫影片', 'slot-tech-04-diff')}
            <div class="osf-tech-video-overlay">
              <span class="osf-tech-video-badge" id="osf-tech-04-vid-badge">${t.tech04VideoBadge}</span>
              <button type="button" class="osf-tech-video-play-btn" aria-label="播放影片">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 8L1 15L1 1L13 8Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 需要完整規格與學術文獻？ CTA Bar (依三端設計稿 100% 還原) -->
      <section class="osf-tech-cta-bar">
        <div class="osf-section-inner osf-tech-cta-inner">
          <div class="osf-tech-cta-text">
            <h3 id="osf-tech-cta-title">${noOrphan(t.techCtaTitle)}</h3>
            <p id="osf-tech-cta-desc">${noOrphan(t.techCtaDesc)}</p>
          </div>
          <div class="osf-tech-cta-btns">
            <a href="#/register" class="osf-tech-cta-btn osf-tech-cta-btn-solid">
              <span id="osf-tech-btn-papers">${t.techCtaBtnPapers}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <button type="button" class="osf-tech-cta-btn osf-tech-cta-btn-outline" data-go-tab="spec">
              <span id="osf-tech-btn-cases">${t.techCtaBtnCases}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 5. 醫療器材許可證字號 & 免責聲明 (依三端設計稿 100% 還原) -->
      <section class="osf-tech-notice">
        <div class="osf-section-inner osf-tech-notice-inner">
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-tech-notice-license-label">${t.licenseTitle}</h4>
            <div class="osf-notice-licenses" id="osf-tech-notice-licenses">
              ${t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join('')}
            </div>
          </div>
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-tech-notice-disclaimer-label">${t.disclaimerLabel}</h4>
            <p class="osf-notice-text" id="osf-tech-notice-disclaimer-text">
              ${noOrphan(t.licenseDisclaimer)}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- ============================================================
         【TAB 3: 產品規格 PANEL】(依三端設計稿 100% 還原)
         ============================================================ -->
    <div class="osf-tab-panel" id="osf-panel-spec" style="display: none;">
      <!-- 1. 三系列植體規格深藍圓頂橫幅 (Spec Hero Dome Banner) -->
      <section class="osf-spec-hero-section" id="osf-spec-hero">
        <div class="osf-spec-dome-wrapper" aria-hidden="true">
          <img
            class="osf-spec-dome-bg-img"
            src="${OSSEOFUSE_IMAGES.techHeroDome}"
            alt=""
            loading="lazy"
            onload="this.parentElement.classList.add('has-dome-img')"
            onerror="this.parentElement.classList.remove('has-dome-img'); this.style.display='none';"
          />
          <div class="osf-spec-dome-arc"></div>
        </div>
        <div class="osf-section-inner osf-spec-hero-inner">
          <p class="osf-spec-hero-subtag" id="osf-spec-hero-subtag">${noOrphan(t.specHeroSubtag)}</p>
          <h2 class="osf-spec-hero-title" id="osf-spec-hero-title">${noOrphan(t.specHeroTitle)}</h2>
          <p class="osf-spec-hero-desc" id="osf-spec-hero-desc">
            <span class="osf-spec-desc-part1">${t.specHeroDescPart1}</span><span class="osf-spec-desc-part2">${noOrphan(t.specHeroDescPart2)}</span>
          </p>
        </div>
      </section>

      <!-- 針對低解析度透明字標 (SinusFuse.png 89x20) 的 SVG 邊緣銳化與抗模糊濾鏡 -->
      <svg width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;" aria-hidden="true">
        <defs>
          <filter id="osf-sinusfuse-sharpen" color-interpolation-filters="sRGB">
            <feConvolveMatrix order="3" kernelMatrix="0 -0.35 0 -0.35 2.4 -0.35 0 -0.35 0" preserveAlpha="false" result="sharpened" />
            <feComponentTransfer in="sharpened">
              <feFuncR type="linear" slope="1.04" intercept="-0.02" />
              <feFuncG type="linear" slope="1.04" intercept="-0.02" />
              <feFuncB type="linear" slope="1.04" intercept="-0.02" />
              <feFuncA type="linear" slope="1.75" intercept="-0.3" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <!-- 2. SERIES 01 — 美國原廠 OsseoFuse SinusFuse 系列 (淺灰藍底 #F2F2F7) -->
      <section class="osf-spec-series-section osf-spec-bg-muted" id="osf-spec-series-01">
        <div class="osf-section-inner">
          <div class="osf-spec-series-top">
            <!-- (A) 標題與導言區 -->
            <div class="osf-spec-series-head">
              <span class="osf-spec-series-tag" id="osf-spec-s1-tag">${t.specS1Tag}</span>
              <div class="osf-spec-title-wrap">
                <h3 class="osf-spec-series-title" id="osf-spec-s1-title">
                  <span class="osf-spec-title-prefix">${t.specS1TitlePrefix}</span><span class="osf-spec-title-name">${t.specS1TitleSeries}</span>
                </h3>
                <img class="osf-spec-brand-logo logo-sinusfuse" src="${OSSEOFUSE_IMAGES.specBrandSinus}" alt="SinusFuse®" loading="lazy" />
              </div>
              <p class="osf-spec-series-subtitle" id="osf-spec-s1-subtitle">${noOrphan(t.specS1Subtitle)}</p>
            </div>

            <!-- (B) 右側植體 3D 立體圖（Mobile 自動置於導言下方白框內） -->
            <div class="osf-spec-series-implant">
              <div class="osf-spec-implant-box">
                ${renderImageSlot(OSSEOFUSE_IMAGES.specSinusImplant, 'OsseoFuse SinusFuse 系列植體', 'slot-spec-sinus-implant')}
              </div>
            </div>

            <!-- (C) 特點項目列表 (01 ~ 02) -->
            <div class="osf-spec-series-points">
              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">01</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s1-p1-title">${noOrphan(t.specS1P1Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s1-p1-desc">${noOrphan(t.specS1P1Desc)}</p>
                </div>
              </div>

              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">02</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s1-p2-title">${noOrphan(t.specS1P2Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s1-p2-l1">${noOrphan(t.specS1P2Line1)}</p>
                  <p id="osf-spec-s1-p2-l2">${noOrphan(t.specS1P2Line2)}</p>
                  <p id="osf-spec-s1-p2-l3">${noOrphan(t.specS1P2Line3)}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- (D) 下方滿寬視覺示意圖／影片框 -->
          <div class="osf-spec-series-media">
            <div class="osf-spec-media-box">
              ${renderImageSlot(OSSEOFUSE_IMAGES.specSinusMedia, 'SinusFuse 碗型頂端與側切溝槽示意', 'slot-spec-sinus-media')}
            </div>
            <p class="osf-spec-media-caption" id="osf-spec-s1-caption">${noOrphan(t.specS1MediaCaption)}</p>
          </div>
        </div>
      </section>

      <!-- 3. SERIES 02 — 美國原廠 OsseoFuse HexaPLUS 系列 (白底 #FFFFFF) -->
      <section class="osf-spec-series-section osf-spec-bg-white" id="osf-spec-series-02">
        <div class="osf-section-inner">
          <div class="osf-spec-series-top">
            <div class="osf-spec-series-head">
              <span class="osf-spec-series-tag" id="osf-spec-s2-tag">${t.specS2Tag}</span>
              <div class="osf-spec-title-wrap">
                <h3 class="osf-spec-series-title" id="osf-spec-s2-title">
                  <span class="osf-spec-title-prefix">${t.specS2TitlePrefix}</span><span class="osf-spec-title-name">${t.specS2TitleSeries}</span>
                </h3>
                <img class="osf-spec-brand-logo logo-hexaplus" src="${OSSEOFUSE_IMAGES.specBrandHexa}" alt="HexaPLUS®" loading="lazy" />
              </div>
            </div>

            <div class="osf-spec-series-implant">
              <div class="osf-spec-implant-box">
                ${renderImageSlot(OSSEOFUSE_IMAGES.specHexaImplant, 'OsseoFuse HexaPLUS 系列植體', 'slot-spec-hexa-implant')}
              </div>
            </div>

            <div class="osf-spec-series-points">
              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">01</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s2-p1-title">${noOrphan(t.specS2P1Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s2-p1-l1">${noOrphan(t.specS2P1Line1)}</p>
                  <p id="osf-spec-s2-p1-l2">${noOrphan(t.specS2P1Line2)}</p>
                  <p id="osf-spec-s2-p1-l3">${noOrphan(t.specS2P1Line3)}</p>
                  <p id="osf-spec-s2-p1-l4">${noOrphan(t.specS2P1Line4)}</p>
                </div>
              </div>

              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">02</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s2-p2-title">${noOrphan(t.specS2P2Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s2-p2-l1">${noOrphan(t.specS2P2Line1)}</p>
                  <p id="osf-spec-s2-p2-l2">${noOrphan(t.specS2P2Line2)}</p>
                  <p id="osf-spec-s2-p2-l3">${noOrphan(t.specS2P2Line3)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. SERIES 03 — 美國原廠 OsseoFuse OneBody 系列 (淺灰藍底 #F2F2F7) -->
      <section class="osf-spec-series-section osf-spec-bg-muted" id="osf-spec-series-03">
        <div class="osf-section-inner">
          <div class="osf-spec-series-top">
            <div class="osf-spec-series-head">
              <span class="osf-spec-series-tag" id="osf-spec-s3-tag">${t.specS3Tag}</span>
              <div class="osf-spec-title-wrap">
                <h3 class="osf-spec-series-title" id="osf-spec-s3-title">
                  <span class="osf-spec-title-prefix">${t.specS3TitlePrefix}</span><span class="osf-spec-title-name">${t.specS3TitleSeries}</span>
                </h3>
                <img class="osf-spec-brand-logo logo-onebody" src="${OSSEOFUSE_IMAGES.specBrandOnebody}" alt="OneBody®" loading="lazy" />
              </div>
            </div>

            <div class="osf-spec-series-implant">
              <div class="osf-spec-implant-box">
                ${renderImageSlot(OSSEOFUSE_IMAGES.specOnebodyImplant, 'OsseoFuse OneBody 系列植體', 'slot-spec-onebody-implant')}
              </div>
            </div>

            <div class="osf-spec-series-points">
              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">01</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s3-p1-title">${noOrphan(t.specS3P1Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s3-p1-l1">${noOrphan(t.specS3P1Line1)}</p>
                  <p id="osf-spec-s3-p1-l2">${noOrphan(t.specS3P1Line2)}</p>
                </div>
              </div>

              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">02</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s3-p2-title">${noOrphan(t.specS3P2Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s3-p2-l1">${noOrphan(t.specS3P2Line1)}</p>
                  <p id="osf-spec-s3-p2-l2">${noOrphan(t.specS3P2Line2)}</p>
                </div>
              </div>

              <div class="osf-spec-point-block">
                <div class="osf-spec-point-header">
                  <span class="osf-spec-point-num">03</span>
                  <h4 class="osf-spec-point-title" id="osf-spec-s3-p3-title">${noOrphan(t.specS3P3Title)}</h4>
                </div>
                <div class="osf-spec-point-body">
                  <p id="osf-spec-s3-p3-l1">${noOrphan(t.specS3P3Line1)}</p>
                  <p id="osf-spec-s3-p3-l2">${noOrphan(t.specS3P3Line2)}</p>
                  <p id="osf-spec-s3-p3-l3">${noOrphan(t.specS3P3Line3)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 需要完整規格與學術文獻？ CTA Bar (白底 #FFFFFF) -->
      <section class="osf-tech-cta-bar osf-spec-cta-bar">
        <div class="osf-section-inner osf-tech-cta-inner">
          <div class="osf-tech-cta-text">
            <h3 id="osf-spec-cta-title">${noOrphan(t.techCtaTitle)}</h3>
            <p id="osf-spec-cta-desc">${noOrphan(t.techCtaDesc)}</p>
          </div>
          <div class="osf-tech-cta-btns">
            <a href="#/register" class="osf-tech-cta-btn osf-tech-cta-btn-solid">
              <span id="osf-spec-btn-reg">${t.techCtaBtnPapers}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <button type="button" class="osf-tech-cta-btn osf-tech-cta-btn-outline" data-go-tab="cert">
              <span id="osf-spec-btn-outline">${t.specCtaBtnOutline}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 6. 醫療器材許可證字號 & 免責聲明 (深藍底 #154265) -->
      <section class="osf-tech-notice">
        <div class="osf-section-inner osf-tech-notice-inner">
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-spec-notice-license-label">${t.licenseTitle}</h4>
            <div class="osf-notice-licenses" id="osf-spec-notice-licenses">
              ${t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join('')}
            </div>
          </div>
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-spec-notice-disclaimer-label">${t.disclaimerLabel}</h4>
            <p class="osf-notice-text" id="osf-spec-notice-disclaimer-text">
              ${noOrphan(t.licenseDisclaimer)}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- ============================================================
         【TAB 4: 專利認證 PANEL】 (Patents & Certificates)
         ============================================================ -->
    <div class="osf-tab-panel" id="osf-panel-cert" style="display: none;">
      <!-- 1. 專利認證深藍圓頂橫幅 (與產品規格 Spec Hero Dome Banner 架構樣式完全一致) -->
      <section class="osf-spec-hero-section osf-cert-hero-section" id="osf-cert-hero">
        <div class="osf-tech-dome-wrapper" aria-hidden="true">
          <img
            class="osf-tech-dome-bg-img osf-spec-dome-bg-img"
            src="${OSSEOFUSE_IMAGES.techHeroDome}"
            alt=""
            loading="lazy"
            onload="this.parentElement.classList.add('has-dome-img')"
            onerror="this.parentElement.classList.remove('has-dome-img'); this.style.display='none';"
          />
          <div class="osf-tech-dome-arc osf-spec-dome-arc"></div>
        </div>
        <div class="osf-section-inner osf-spec-hero-inner">
          <p class="osf-spec-hero-subtag" id="osf-cert-hero-subtag">${noOrphan(t.certHeroSubtag)}</p>
          <h2 class="osf-spec-hero-title" id="osf-cert-hero-title">${t.certHeroTitle}</h2>
          <p class="osf-spec-hero-desc osf-cert-hero-desc" id="osf-cert-hero-desc">${t.certHeroDesc}</p>
        </div>
      </section>

      <!-- 2. 專利證書展示區（國家切換 Tab + 4x2 證書網格，點擊證書可放大讀取；EN 語系自動將美國置於第一位） -->
      <section class="osf-patent-gallery-section" id="osf-patent-gallery">
        <div class="osf-section-inner">
          <!-- 國家分類切換按鈕列（ZH: 台灣 / 美國 / 中國；EN: USA / Taiwan / China） -->
          <div class="osf-patent-filter-bar" id="osf-patent-filter-bar" role="tablist" aria-label="專利認證國家篩選">
            ${
              lang === 'en'
                ? `
            <button type="button" class="osf-patent-filter-btn active" data-region="us" role="tab" aria-selected="true" id="osf-cert-tab-us">${t.certTabUs}</button>
            <button type="button" class="osf-patent-filter-btn" data-region="tw" role="tab" aria-selected="false" id="osf-cert-tab-tw">${t.certTabTw}</button>
            <button type="button" class="osf-patent-filter-btn" data-region="cn" role="tab" aria-selected="false" id="osf-cert-tab-cn">${t.certTabCn}</button>
            `
                : `
            <button type="button" class="osf-patent-filter-btn active" data-region="tw" role="tab" aria-selected="true" id="osf-cert-tab-tw">${t.certTabTw}</button>
            <button type="button" class="osf-patent-filter-btn" data-region="us" role="tab" aria-selected="false" id="osf-cert-tab-us">${t.certTabUs}</button>
            <button type="button" class="osf-patent-filter-btn" data-region="cn" role="tab" aria-selected="false" id="osf-cert-tab-cn">${t.certTabCn}</button>
            `
            }
          </div>

          <!-- 台灣專利證書網格 (4x2 = 8 張) -->
          <div class="osf-patent-grid ${lang === 'en' ? '' : 'active'}" data-region-panel="tw" style="${lang === 'en' ? 'display: none;' : ''}">
            ${OSSEOFUSE_IMAGES.certTw
              .map(
                (path, idx) => `
              <div class="osf-patent-card" role="button" tabindex="0" data-cert-region="tw" data-cert-index="${idx}" data-cert-path="${path}" aria-label="點擊放大檢視台灣專利證書 ${idx + 1}">
                ${renderImageSlot(path, `OsseoFuse 台灣專利證書 ${idx + 1}`, 'slot-patent-cert')}
                <span class="osf-patent-corner-pill" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </span>
                <div class="osf-patent-hover-overlay" aria-hidden="true">
                  <span class="osf-patent-hover-pill">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                    <span class="osf-patent-hover-text">${t.certHoverLabel}</span>
                  </span>
                </div>
              </div>
            `
              )
              .join('')}
          </div>

          <!-- 美國專利證書網格 -->
          <div class="osf-patent-grid ${lang === 'en' ? 'active' : ''}" data-region-panel="us" style="${lang === 'en' ? '' : 'display: none;'}">
            ${OSSEOFUSE_IMAGES.certUs
              .map(
                (path, idx) => `
              <div class="osf-patent-card" role="button" tabindex="0" data-cert-region="us" data-cert-index="${idx}" data-cert-path="${path}" aria-label="點擊放大檢視美國專利證書 ${idx + 1}">
                ${renderImageSlot(path, `OsseoFuse 美國專利證書 ${idx + 1}`, 'slot-patent-cert')}
                <span class="osf-patent-corner-pill" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </span>
                <div class="osf-patent-hover-overlay" aria-hidden="true">
                  <span class="osf-patent-hover-pill">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                    <span class="osf-patent-hover-text">${t.certHoverLabel}</span>
                  </span>
                </div>
              </div>
            `
              )
              .join('')}
          </div>

          <!-- 中國專利證書網格 -->
          <div class="osf-patent-grid" data-region-panel="cn" style="display: none;">
            ${OSSEOFUSE_IMAGES.certCn
              .map(
                (path, idx) => `
              <div class="osf-patent-card" role="button" tabindex="0" data-cert-region="cn" data-cert-index="${idx}" data-cert-path="${path}" aria-label="點擊放大檢視中國專利證書 ${idx + 1}">
                ${renderImageSlot(path, `OsseoFuse 中國專利證書 ${idx + 1}`, 'slot-patent-cert')}
                <span class="osf-patent-corner-pill" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </span>
                <div class="osf-patent-hover-overlay" aria-hidden="true">
                  <span class="osf-patent-hover-pill">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                    <span class="osf-patent-hover-text">${t.certHoverLabel}</span>
                  </span>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </section>

      <!-- 專利證書放大讀取燈箱 (Patent Certificate Lightbox Modal — 正中央對稱置中 + 清晰返回證書列表控制列) -->
      <div class="osf-patent-lightbox" id="osf-patent-lightbox" role="dialog" aria-modal="true" aria-hidden="true" aria-label="專利證書放大檢視">
        <div class="osf-patent-lb-backdrop" id="osf-patent-lb-backdrop"></div>

        <!-- 左側上一張切換按鈕 -->
        <button type="button" class="osf-patent-lb-nav osf-patent-lb-prev" id="osf-patent-lb-prev" aria-label="上一張證書">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        <!-- 正中央檢視對話框（頂部控制列 + 證書舞台整體垂直置中，上下留白完全對稱） -->
        <div class="osf-patent-lb-dialog">
          <div class="osf-patent-lb-header">
            <div class="osf-patent-lb-left">
              <button type="button" class="osf-patent-lb-back" id="osf-patent-lb-back" aria-label="返回證書列表">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span id="osf-patent-lb-back-text">${t.certLbBack}</span>
              </button>
              <span class="osf-patent-lb-divider" aria-hidden="true"></span>
              <div class="osf-patent-lb-counter" id="osf-patent-lb-counter">台灣專利證書 1 / 8</div>
            </div>

            <div class="osf-patent-lb-actions">
              <div class="osf-patent-lb-zoom-group" role="group" aria-label="縮放控制">
                <button type="button" class="osf-patent-lb-toolbtn" id="osf-patent-lb-zoom-out" title="縮小 (-)" aria-label="縮小">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                <button type="button" class="osf-patent-lb-toolbtn osf-patent-lb-zoom-label" id="osf-patent-lb-zoom-reset" title="重設為 100%">100%</button>
                <button type="button" class="osf-patent-lb-toolbtn" id="osf-patent-lb-zoom-in" title="放大 (+)" aria-label="放大">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
              </div>
              <button type="button" class="osf-patent-lb-close" id="osf-patent-lb-close" title="關閉並返回列表 (ESC)" aria-label="關閉放大檢視">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>

          <div class="osf-patent-lb-stage" id="osf-patent-lb-stage">
            <div class="osf-patent-lb-canvas" id="osf-patent-lb-canvas">
              <img class="osf-patent-lb-img" id="osf-patent-lb-img" src="" alt="" />
              <div class="osf-patent-lb-placeholder" id="osf-patent-lb-placeholder">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
                <div class="lb-placeholder-title" id="osf-patent-lb-ph-title">專利證書放大預覽</div>
                <code class="lb-placeholder-path" id="osf-patent-lb-ph-path"></code>
              </div>
            </div>
          </div>
        </div>

        <!-- 右側下一張切換按鈕 -->
        <button type="button" class="osf-patent-lb-nav osf-patent-lb-next" id="osf-patent-lb-next" aria-label="下一張證書">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      <!-- 3. 需要完整規格與學術文獻？ CTA Bar (白底 #FFFFFF，與其他 Tab 架構樣式完全一致) -->
      <section class="osf-tech-cta-bar osf-spec-cta-bar">
        <div class="osf-section-inner osf-tech-cta-inner">
          <div class="osf-tech-cta-text">
            <h3 id="osf-cert-cta-title">${noOrphan(t.techCtaTitle)}</h3>
            <p id="osf-cert-cta-desc">${noOrphan(t.certCtaDesc)}</p>
          </div>
          <div class="osf-tech-cta-btns">
            <a href="#/register" class="osf-tech-cta-btn osf-tech-cta-btn-solid">
              <span id="osf-cert-btn-reg">${t.techCtaBtnPapers}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <button type="button" class="osf-tech-cta-btn osf-tech-cta-btn-outline" data-go-tab="doctor">
              <span id="osf-cert-btn-outline">${t.certCtaBtnOutline}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 4. 醫療器材許可證字號 & 免責聲明 (深藍底 #154265，與其他 Tab 架構樣式完全一致) -->
      <section class="osf-tech-notice">
        <div class="osf-section-inner osf-tech-notice-inner">
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-cert-notice-license-label">${t.licenseTitle}</h4>
            <div class="osf-notice-licenses" id="osf-cert-notice-licenses">
              ${t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join('')}
            </div>
          </div>
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-cert-notice-disclaimer-label">${t.disclaimerLabel}</h4>
            <p class="osf-notice-text" id="osf-cert-notice-disclaimer-text">
              ${noOrphan(t.licenseDisclaimer)}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- ============================================================
         【TAB 5: 醫師分享 PANEL】 (Doctor Testimonials)
         ============================================================ -->
    <div class="osf-tab-panel" id="osf-panel-doctor" style="display: none;">
      <!-- 1. 醫師分享深藍圓頂橫幅（雙數據指標：100,000 & 15，共用 Spec Hero Dome Banner 架構樣式） -->
      <section class="osf-spec-hero-section osf-doctor-hero-section" id="osf-doctor-hero">
        <div class="osf-tech-dome-wrapper" aria-hidden="true">
          <img
            class="osf-tech-dome-bg-img osf-spec-dome-bg-img"
            src="${OSSEOFUSE_IMAGES.techHeroDome}"
            alt=""
            loading="lazy"
            onload="this.parentElement.classList.add('has-dome-img')"
            onerror="this.parentElement.classList.remove('has-dome-img'); this.style.display='none';"
          />
          <div class="osf-tech-dome-arc osf-spec-dome-arc"></div>
        </div>
        <div class="osf-section-inner osf-spec-hero-inner osf-doctor-hero-inner">
          <div class="osf-doctor-stats-row">
            <div class="osf-doctor-stat-item">
              <span class="osf-doctor-stat-tag" id="osf-doc-stat1-tag">${t.docStat1Tag}</span>
              <strong class="osf-doctor-stat-num" id="osf-doc-stat1-num" data-count-target="100000">${t.docStat1Num}</strong>
              <span class="osf-doctor-stat-unit" id="osf-doc-stat1-unit">${noOrphan(t.docStat1Unit)}</span>
            </div>
            <div class="osf-doctor-stat-divider" aria-hidden="true"></div>
            <div class="osf-doctor-stat-item">
              <span class="osf-doctor-stat-tag" id="osf-doc-stat2-tag">${t.docStat2Tag}</span>
              <strong class="osf-doctor-stat-num" id="osf-doc-stat2-num" data-count-target="15">${t.docStat2Num}</strong>
              <span class="osf-doctor-stat-unit" id="osf-doc-stat2-unit">${noOrphan(t.docStat2Unit)}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. 臨床現場的真實回饋（Desktop 雙欄平衡瀑布流 / Pad & Mobile 單欄依序排列） -->
      <section class="osf-doctor-feedback-section" id="osf-doctor-feedback">
        <div class="osf-section-inner">
          <h2 class="osf-doctor-section-title" id="osf-doc-section-title">${noOrphan(t.docSectionTitle)}</h2>

          <div class="osf-doctor-grid">
            <!-- 左欄 (Desktop)：張醫師 + 邱醫師 -->
            <div class="osf-doctor-col osf-doctor-col-left">
              <!-- (1) 張醫師 -->
              <article class="osf-doctor-card osf-doc-order-1">
                <div class="osf-doctor-meta">
                  <span class="osf-doctor-name" id="osf-doc1-name">${t.doc1Name}</span>
                  <span class="osf-doctor-sep" aria-hidden="true">|</span>
                  <span class="osf-doctor-role" id="osf-doc1-role">${noOrphan(t.doc1Role)}</span>
                </div>
                <h3 class="osf-doctor-quote-title" id="osf-doc1-title">${noOrphan(t.doc1Title)}</h3>
                <div class="osf-doctor-quote-body">
                  <p id="osf-doc1-p1">${noOrphan(t.doc1P1)}</p>
                </div>
              </article>

              <!-- (2) 邱醫師 -->
              <article class="osf-doctor-card osf-doc-order-2">
                <div class="osf-doctor-meta">
                  <span class="osf-doctor-name" id="osf-doc2-name">${t.doc2Name}</span>
                  <span class="osf-doctor-sep" aria-hidden="true">|</span>
                  <span class="osf-doctor-role" id="osf-doc2-role">${noOrphan(t.doc2Role)}</span>
                </div>
                <h3 class="osf-doctor-quote-title" id="osf-doc2-title">${noOrphan(t.doc2Title)}</h3>
                <div class="osf-doctor-quote-body">
                  <p id="osf-doc2-p1">${noOrphan(t.doc2P1)}</p>
                  <p id="osf-doc2-p2">${noOrphan(t.doc2P2)}</p>
                </div>
              </article>
            </div>

            <!-- 右欄 (Desktop)：黃醫師 + 許醫師（Pad/Mobile 自動透過 display: contents 與 order 排為 1->2->3->4） -->
            <div class="osf-doctor-col osf-doctor-col-right">
              <!-- (4) 黃醫師（Desktop 右上，Pad/Mobile 第 4 張） -->
              <article class="osf-doctor-card osf-doc-order-4">
                <div class="osf-doctor-meta">
                  <span class="osf-doctor-name" id="osf-doc4-name">${t.doc4Name}</span>
                  <span class="osf-doctor-sep" aria-hidden="true">|</span>
                  <span class="osf-doctor-role" id="osf-doc4-role">${noOrphan(t.doc4Role)}</span>
                </div>
                <h3 class="osf-doctor-quote-title" id="osf-doc4-title">${noOrphan(t.doc4Title)}</h3>
                <div class="osf-doctor-quote-body">
                  <p id="osf-doc4-p1">${noOrphan(t.doc4P1)}</p>
                  <p id="osf-doc4-p2">${noOrphan(t.doc4P2)}</p>
                </div>
              </article>

              <!-- (3) 許醫師（Desktop 右下，Pad/Mobile 第 3 張） -->
              <article class="osf-doctor-card osf-doc-order-3">
                <div class="osf-doctor-meta">
                  <span class="osf-doctor-name" id="osf-doc3-name">${t.doc3Name}</span>
                  <span class="osf-doctor-sep" aria-hidden="true">|</span>
                  <span class="osf-doctor-role" id="osf-doc3-role">${noOrphan(t.doc3Role)}</span>
                </div>
                <h3 class="osf-doctor-quote-title" id="osf-doc3-title">${noOrphan(t.doc3Title)}</h3>
                <div class="osf-doctor-quote-body">
                  <p id="osf-doc3-p1">${noOrphan(t.doc3P1)}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 需要完整規格與學術文獻？ CTA Bar (白底 #FFFFFF，與其他 Tab 架構樣式完全一致) -->
      <section class="osf-tech-cta-bar osf-spec-cta-bar">
        <div class="osf-section-inner osf-tech-cta-inner">
          <div class="osf-tech-cta-text">
            <h3 id="osf-doc-cta-title">${noOrphan(t.techCtaTitle)}</h3>
            <p id="osf-doc-cta-desc">${noOrphan(t.certCtaDesc)}</p>
          </div>
          <div class="osf-tech-cta-btns">
            <a href="#/register" class="osf-tech-cta-btn osf-tech-cta-btn-solid">
              <span id="osf-doc-btn-reg">${t.techCtaBtnPapers}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <button type="button" class="osf-tech-cta-btn osf-tech-cta-btn-outline" data-go-tab="edu">
              <span id="osf-doc-btn-outline">${t.docCtaBtnOutline}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 4. 醫療器材許可證字號 & 免責聲明 (深藍底 #154265，與其他 Tab 架構樣式完全一致) -->
      <section class="osf-tech-notice">
        <div class="osf-section-inner osf-tech-notice-inner">
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-doc-notice-license-label">${t.licenseTitle}</h4>
            <div class="osf-notice-licenses" id="osf-doc-notice-licenses">
              ${t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join('')}
            </div>
          </div>
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-doc-notice-disclaimer-label">${t.disclaimerLabel}</h4>
            <p class="osf-notice-text" id="osf-doc-notice-disclaimer-text">
              ${noOrphan(t.licenseDisclaimer)}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- ============================================================
         【TAB 6: 衛教社群 PANEL】 (Community & Education)
         ============================================================ -->
    <div class="osf-tab-panel" id="osf-panel-edu" style="display: none;">
      <!-- 1. 衛教社群深藍圓頂橫幅（我適合植牙嗎？，共用 Spec Hero Dome Banner 架構樣式） -->
      <section class="osf-spec-hero-section osf-edu-hero-section" id="osf-edu-hero">
        <div class="osf-tech-dome-wrapper" aria-hidden="true">
          <img
            class="osf-tech-dome-bg-img osf-spec-dome-bg-img"
            src="${OSSEOFUSE_IMAGES.techHeroDome}"
            alt=""
            loading="lazy"
            onload="this.parentElement.classList.add('has-dome-img')"
            onerror="this.parentElement.classList.remove('has-dome-img'); this.style.display='none';"
          />
          <div class="osf-tech-dome-arc osf-spec-dome-arc"></div>
        </div>
        <div class="osf-section-inner osf-spec-hero-inner">
          <span class="osf-tech-hero-subtag" id="osf-edu-hero-subtag">${noOrphan(t.eduHeroSubtag)}</span>
          <h2 class="osf-tech-hero-title" id="osf-edu-hero-title">${noOrphan(t.eduHeroTitle)}</h2>
          <p class="osf-tech-hero-desc" id="osf-edu-hero-desc">${noOrphan(t.eduHeroDesc)}</p>
        </div>
      </section>

      <!-- 2. 身體條件比較表區（淺灰藍底 #F2F2F7） -->
      <section class="osf-edu-compare-section" id="osf-edu-compare">
        <div class="osf-section-inner">
          <div id="osf-edu-compare-mount">
            ${renderEduCompareTable(lang)}
          </div>
        </div>
      </section>

      <!-- 3. 更多衛教社群區（純白底 #FFFFFF，Desktop 三欄 / Pad 雙欄 / Mobile 單欄） -->
      <section class="osf-edu-community-section" id="osf-edu-community">
        <div class="osf-section-inner">
          <h2 class="osf-edu-community-title" id="osf-edu-community-title">${noOrphan(t.eduCommunityTitle)}</h2>

          <div class="osf-edu-community-grid">
            <!-- (1) OSSEOFUSE 美國官網 -->
            <a
              href="${OSSEOFUSE_COMMUNITY_LINKS.web}"
              target="_blank"
              rel="noopener noreferrer"
              class="osf-edu-community-card"
            >
              <div class="osf-edu-card-thumb">
                ${renderImageSlot(OSSEOFUSE_IMAGES.eduCommunityWeb, 'OSSEOFUSE 美國官網預覽', 'slot-edu-community')}
              </div>
              <div class="osf-edu-card-footer">
                <span class="osf-edu-card-label" id="osf-edu-card1-label">${t.eduCard1Label}</span>
                <svg class="osf-edu-ext-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </a>

            <!-- (2) 植牙博物館 植牙小百科 Facebook -->
            <a
              href="${OSSEOFUSE_COMMUNITY_LINKS.fb}"
              target="_blank"
              rel="noopener noreferrer"
              class="osf-edu-community-card"
            >
              <div class="osf-edu-card-thumb">
                ${renderImageSlot(OSSEOFUSE_IMAGES.eduCommunityFb, '植牙博物館 植牙小百科 Facebook 預覽', 'slot-edu-community')}
              </div>
              <div class="osf-edu-card-footer">
                <span class="osf-edu-card-label" id="osf-edu-card2-label">${t.eduCard2Label}</span>
                <svg class="osf-edu-ext-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </a>

            <!-- (3) 應蒲蓮小姐植牙資訊交流分享 Instagram -->
            <a
              href="${OSSEOFUSE_COMMUNITY_LINKS.ig}"
              target="_blank"
              rel="noopener noreferrer"
              class="osf-edu-community-card osf-edu-card-ig"
            >
              <div class="osf-edu-card-thumb">
                ${renderImageSlot(OSSEOFUSE_IMAGES.eduCommunityIg, '應蒲蓮小姐植牙資訊交流分享 Instagram 預覽', 'slot-edu-community')}
              </div>
              <div class="osf-edu-card-footer">
                <span class="osf-edu-card-label" id="osf-edu-card3-label">${t.eduCard3Label}</span>
                <svg class="osf-edu-ext-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- 4. 需要完整規格與學術文獻？ CTA Bar (淺灰藍底 #F2F2F7，與上方白底社群區形成區塊層次) -->
      <section class="osf-tech-cta-bar osf-spec-cta-bar osf-edu-cta-bar">
        <div class="osf-section-inner osf-tech-cta-inner">
          <div class="osf-tech-cta-text">
            <h3 id="osf-edu-cta-title">${noOrphan(t.techCtaTitle)}</h3>
            <p id="osf-edu-cta-desc">${noOrphan(t.certCtaDesc)}</p>
          </div>
          <div class="osf-tech-cta-btns">
            <a href="#/register" class="osf-tech-cta-btn osf-tech-cta-btn-solid">
              <span id="osf-edu-btn-reg">${t.techCtaBtnPapers}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <button type="button" class="osf-tech-cta-btn osf-tech-cta-btn-outline" data-go-tab="intro">
              <span id="osf-edu-btn-outline">${t.eduCtaBtnOutline}</span>
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- 5. 醫療器材許可證字號 & 免責聲明 (深藍底 #154265，與其他 Tab 架構樣式完全一致) -->
      <section class="osf-tech-notice">
        <div class="osf-section-inner osf-tech-notice-inner">
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-edu-notice-license-label">${t.licenseTitle}</h4>
            <div class="osf-notice-licenses" id="osf-edu-notice-licenses">
              ${t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join('')}
            </div>
          </div>
          <div class="osf-notice-group">
            <h4 class="osf-notice-label" id="osf-edu-notice-disclaimer-label">${t.disclaimerLabel}</h4>
            <p class="osf-notice-text" id="osf-edu-notice-disclaimer-text">
              ${noOrphan(t.licenseDisclaimer)}
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ============================================================
   初始化 — Tab 互動 & 滾動到對應區塊 & 雙語監聽
   ============================================================ */
export function initOsseofusePage(): void {
  const tabBtns = document.querySelectorAll<HTMLButtonElement>('.osf-tab-btn');
  const navWrap = document.getElementById('osf-tab-nav-wrap');
  const navEl = document.getElementById('osf-tab-nav');
  const mobileDropdown = document.getElementById('osf-tab-mobile-dropdown');
  const mobileTrigger = document.getElementById('osf-tab-mobile-trigger');
  const mobileCurrentLabel = document.getElementById('osf-tab-mobile-current');
  const mobileItems = document.querySelectorAll<HTMLButtonElement>('.osf-tab-mobile-item');

  function getHeaderHeight(): number {
    const header = document.getElementById('site-header');
    return header ? header.offsetHeight : (window.innerWidth <= 768 ? 64 : 74);
  }

  // 方案 A：全程 Sticky 吸頂控制（滑過 Hero 後固定於 Header 正下方，零跳動）
  function updateStickyTabNav(): void {
    if (!navWrap || !navEl) return;
    const headerH = getHeaderHeight();
    const wrapRect = navWrap.getBoundingClientRect();
    if (wrapRect.top <= headerH) {
      navWrap.style.height = `${navEl.offsetHeight}px`;
      navEl.classList.add('is-pinned');
    } else {
      navEl.classList.remove('is-pinned');
      navWrap.style.height = '';
    }
  }

  window.addEventListener('scroll', updateStickyTabNav, { passive: true });
  window.addEventListener('resize', updateStickyTabNav, { passive: true });
  updateStickyTabNav();

  function switchTab(tab: string | undefined) {
    if (!tab) return;
    const panels = document.querySelectorAll<HTMLElement>('.osf-tab-panel');
    const panelMap: Record<string, string> = {
      intro: 'osf-panel-intro',
      tech: 'osf-panel-tech',
      spec: 'osf-panel-spec',
      cert: 'osf-panel-cert',
      doctor: 'osf-panel-doctor',
      edu: 'osf-panel-edu',
    };

    const targetPanelId = panelMap[tab];
    if (targetPanelId) {
      panels.forEach(p => (p.style.display = 'none'));
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) targetPanel.style.display = 'block';
      if (tab === 'doctor') {
        resetDoctorStatsBeforeScroll();
      }
      if (navWrap) {
        const headerH = getHeaderHeight();
        const targetScrollY = navWrap.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: Math.max(0, targetScrollY), behavior: 'smooth' });
      }
    }

    // 同步桌面/平板與手機端選單 active 狀態
    tabBtns.forEach(b => {
      const isMatch = b.dataset.tab === tab;
      b.classList.toggle('active', isMatch);
      if (isMatch && mobileCurrentLabel) {
        mobileCurrentLabel.textContent = b.textContent || '';
      }
    });
    mobileItems.forEach(item => {
      item.classList.toggle('active', item.dataset.tab === tab);
    });
  }

  // 桌面/平板 Tab 按鈕點擊切換
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // 手機端下拉選單開關與項目點擊
  if (mobileTrigger && mobileDropdown) {
    mobileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDropdown.classList.toggle('is-open');
      mobileTrigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (mobileDropdown.classList.contains('is-open') && !mobileDropdown.contains(e.target as Node)) {
        mobileDropdown.classList.remove('is-open');
        mobileTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  mobileItems.forEach(item => {
    item.addEventListener('click', () => {
      switchTab(item.dataset.tab);
      if (mobileDropdown && mobileTrigger) {
        mobileDropdown.classList.remove('is-open');
        mobileTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 頁面內跳轉 Tab 按鈕（如「前往產品規格 →」、「前往專利認證 →」）
  const goTabBtns = document.querySelectorAll<HTMLElement>('[data-go-tab]');
  goTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.goTab;
      if (!targetTab) return;
      switchTab(targetTab);
    });
  });

  // 專利認證分頁：國家分類篩選按鈕（台灣 / 美國 / 中國）切換與語系順序連動
  const patentFilterBar = document.getElementById('osf-patent-filter-bar');
  const patentFilterBtns = document.querySelectorAll<HTMLButtonElement>('.osf-patent-filter-btn');
  const patentGrids = document.querySelectorAll<HTMLElement>('.osf-patent-grid[data-region-panel]');

  function selectPatentRegion(region: string): void {
    patentFilterBtns.forEach(b => {
      const isActive = b.dataset.region === region;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', String(isActive));
    });
    patentGrids.forEach(grid => {
      const isMatch = grid.dataset.regionPanel === region;
      grid.classList.toggle('active', isMatch);
      grid.style.display = isMatch ? 'grid' : 'none';
    });
  }

  function applyPatentRegionOrder(lang: 'zh' | 'en'): void {
    if (!patentFilterBar) return;
    const btnTw = document.getElementById('osf-cert-tab-tw');
    const btnUs = document.getElementById('osf-cert-tab-us');
    const btnCn = document.getElementById('osf-cert-tab-cn');
    if (!btnTw || !btnUs || !btnCn) return;

    // EN 語系將美國證書置於第一位並預設選取；ZH 語系將台灣證書置於第一位並預設選取
    if (lang === 'en') {
      patentFilterBar.append(btnUs, btnTw, btnCn);
      selectPatentRegion('us');
    } else {
      patentFilterBar.append(btnTw, btnUs, btnCn);
      selectPatentRegion('tw');
    }
  }

  patentFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const region = btn.dataset.region;
      if (!region) return;
      selectPatentRegion(region);
    });
  });

  // 專利認證分頁：點擊證書放大讀取燈箱 (Lightbox Modal)
  const lightbox = document.getElementById('osf-patent-lightbox');
  const lbBackdrop = document.getElementById('osf-patent-lb-backdrop');
  const lbBack = document.getElementById('osf-patent-lb-back');
  const lbClose = document.getElementById('osf-patent-lb-close');
  const lbPrev = document.getElementById('osf-patent-lb-prev');
  const lbNext = document.getElementById('osf-patent-lb-next');
  const lbZoomIn = document.getElementById('osf-patent-lb-zoom-in');
  const lbZoomOut = document.getElementById('osf-patent-lb-zoom-out');
  const lbZoomReset = document.getElementById('osf-patent-lb-zoom-reset');
  const lbCounter = document.getElementById('osf-patent-lb-counter');
  const lbStage = document.getElementById('osf-patent-lb-stage');
  const lbCanvas = document.getElementById('osf-patent-lb-canvas');
  const lbImg = document.getElementById('osf-patent-lb-img') as HTMLImageElement | null;
  const lbPlaceholder = document.getElementById('osf-patent-lb-placeholder');
  const lbPhTitle = document.getElementById('osf-patent-lb-ph-title');
  const lbPhPath = document.getElementById('osf-patent-lb-ph-path');

  let currentLbRegion: 'tw' | 'us' | 'cn' = 'tw';
  let currentLbIndex = 0;
  let currentLbZoom = 1;
  let baseImgWidth = 0;

  const regionCertMap: Record<'tw' | 'us' | 'cn', string[]> = {
    tw: OSSEOFUSE_IMAGES.certTw,
    us: OSSEOFUSE_IMAGES.certUs,
    cn: OSSEOFUSE_IMAGES.certCn,
  };

  function getRegionLabel(region: 'tw' | 'us' | 'cn'): string {
    const lang = currentGlobalLang || 'zh';
    if (lang === 'en') {
      return region === 'us' ? 'USA Patent Certificate' : region === 'tw' ? 'Taiwan Patent Certificate' : 'China Patent Certificate';
    }
    return region === 'tw' ? '台灣專利證書' : region === 'us' ? '美國專利證書' : '中國專利證書';
  }

  function getDefaultOpenZoom(): number {
    // 手機版列表本身為單欄，點開燈箱時預設直接以 165% 放大呈現，讓放大閱讀效果立即可見并可自由滑動檢視
    return window.innerWidth <= 768 ? 1.65 : 1;
  }

  function applyLbZoom(zoom: number, recenterScroll: boolean = true): void {
    currentLbZoom = Math.min(2.75, Math.max(1, Number(zoom.toFixed(2))));
    const isZoomed = currentLbZoom > 1;

    if (lbCanvas && lbImg && lbStage) {
      lbCanvas.classList.toggle('is-zoomed', isZoomed);
      lbStage.classList.toggle('is-zoomed-stage', isZoomed);

      if (!isZoomed) {
        lbImg.style.width = '';
        lbImg.style.maxWidth = '';
        lbImg.style.maxHeight = '';
        baseImgWidth = lbImg.getBoundingClientRect().width || baseImgWidth;
      } else {
        const refWidth = baseImgWidth > 120 ? baseImgWidth : Math.min(window.innerWidth * 0.86, 820);
        const targetW = Math.round(refWidth * currentLbZoom);
        lbImg.style.maxWidth = 'none';
        lbImg.style.maxHeight = 'none';
        lbImg.style.width = `${targetW}px`;

        if (recenterScroll) {
          requestAnimationFrame(() => {
            if (!lbStage) return;
            const maxScrollLeft = Math.max(0, lbStage.scrollWidth - lbStage.clientWidth);
            const maxScrollTop = Math.max(0, lbStage.scrollHeight - lbStage.clientHeight);
            lbStage.scrollLeft = Math.round(maxScrollLeft / 2);
            lbStage.scrollTop = Math.round(maxScrollTop * 0.18);
          });
        }
      }
    }

    if (lbZoomReset) {
      lbZoomReset.textContent = `${Math.round(currentLbZoom * 100)}%`;
    }
  }

  function renderLightboxItem(): void {
    const list = regionCertMap[currentLbRegion] || [];
    if (!list.length) return;
    currentLbIndex = (currentLbIndex + list.length) % list.length;
    const path = list[currentLbIndex];
    const titleText = `${getRegionLabel(currentLbRegion)} ${currentLbIndex + 1} / ${list.length}`;

    if (lbCounter) lbCounter.textContent = titleText;
    if (lbPhTitle) lbPhTitle.textContent = titleText;
    if (lbPhPath) lbPhPath.textContent = path;
    baseImgWidth = 0;
    applyLbZoom(1, false);

    if (lbImg && lbPlaceholder) {
      lbImg.style.display = 'none';
      lbPlaceholder.style.display = 'flex';
      lbImg.onload = () => {
        lbImg.style.display = 'block';
        lbPlaceholder.style.display = 'none';
        requestAnimationFrame(() => {
          baseImgWidth = lbImg.getBoundingClientRect().width || Math.min(window.innerWidth * 0.86, 820);
          const initialZoom = getDefaultOpenZoom();
          if (initialZoom > 1) {
            applyLbZoom(initialZoom, true);
          }
        });
      };
      lbImg.onerror = () => {
        lbImg.style.display = 'none';
        lbPlaceholder.style.display = 'flex';
      };
      lbImg.alt = titleText;
      lbImg.src = path;
    }
  }

  function openPatentLightbox(region: 'tw' | 'us' | 'cn', index: number): void {
    if (!lightbox) return;
    currentLbRegion = region;
    currentLbIndex = index;
    renderLightboxItem();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePatentLightbox(): void {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    applyLbZoom(1);
  }

  const patentCards = document.querySelectorAll<HTMLElement>('.osf-patent-card[data-cert-region]');
  patentCards.forEach(card => {
    card.addEventListener('click', () => {
      const region = (card.dataset.certRegion as 'tw' | 'us' | 'cn') || 'tw';
      const idx = parseInt(card.dataset.certIndex || '0', 10);
      openPatentLightbox(region, idx);
    });
    card.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const region = (card.dataset.certRegion as 'tw' | 'us' | 'cn') || 'tw';
        const idx = parseInt(card.dataset.certIndex || '0', 10);
        openPatentLightbox(region, idx);
      }
    });
  });

  lbBackdrop?.addEventListener('click', closePatentLightbox);
  lbBack?.addEventListener('click', closePatentLightbox);
  lbClose?.addEventListener('click', closePatentLightbox);
  // 點擊證書舞台空白處也可返回證書列表
  lbStage?.addEventListener('click', (e) => {
    if (e.target === lbStage) {
      closePatentLightbox();
    }
  });
  lbPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLbIndex -= 1;
    renderLightboxItem();
  });
  lbNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLbIndex += 1;
    renderLightboxItem();
  });
  lbZoomIn?.addEventListener('click', (e) => {
    e.stopPropagation();
    applyLbZoom(currentLbZoom + 0.25);
  });
  lbZoomOut?.addEventListener('click', (e) => {
    e.stopPropagation();
    applyLbZoom(currentLbZoom - 0.25);
  });
  lbZoomReset?.addEventListener('click', (e) => {
    e.stopPropagation();
    applyLbZoom(1);
  });
  lbCanvas?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      // 手機端點擊證書可在 100% -> 165% -> 225% 之間循環切換
      const nextZoom = currentLbZoom < 1.3 ? 1.65 : currentLbZoom < 2.0 ? 2.25 : 1;
      applyLbZoom(nextZoom, true);
    } else {
      applyLbZoom(currentLbZoom > 1 ? 1 : 1.75, true);
    }
  });

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closePatentLightbox();
    } else if (e.key === 'ArrowLeft') {
      currentLbIndex -= 1;
      renderLightboxItem();
    } else if (e.key === 'ArrowRight') {
      currentLbIndex += 1;
      renderLightboxItem();
    } else if (e.key === '+' || e.key === '=') {
      applyLbZoom(currentLbZoom + 0.25);
    } else if (e.key === '-') {
      applyLbZoom(currentLbZoom - 0.25);
    }
  });

  // 產品規格植體：滑入畫面時執行一次 1.5 秒自然微幅 3D 轉動定位，完成後靜止
  const implantBoxes = document.querySelectorAll<HTMLElement>('.osf-spec-implant-box');
  const implantObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          implantObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  implantBoxes.forEach(box => {
    implantObserver.observe(box);
  });

  // 醫師分享分頁：雙核心數據指標（100,000 & 15）由小累積到大動感跳動動畫
  const statAnimFrameMap = new WeakMap<HTMLElement, number>();

  function animateStatNumber(el: HTMLElement, target: number, durationMs: number): void {
    const prevRaf = statAnimFrameMap.get(el);
    if (prevRaf) cancelAnimationFrame(prevRaf);

    el.classList.remove('is-landed');
    el.classList.add('is-counting');
    el.textContent = '0';

    const startTime = performance.now();
    let lastDisplayed = -1;

    function step(now: number): void {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // 動感前衝 + 尾段平滑收斂曲線 (Ease-Out Quart/Quint 混合)
      const eased = 1 - Math.pow(1 - progress, 3.4);

      let currentVal: number;
      if (progress < 1) {
        if (target >= 1000) {
          // 大數字加入尾數滾動感，讓百位與十位數在跳動時充滿速度感
          const baseVal = Math.floor(target * eased);
          const jitter = progress < 0.92 ? Math.floor((now * 17) % 89) : 0;
          currentVal = Math.min(target - 1, baseVal + jitter);
        } else {
          currentVal = Math.floor(target * eased);
        }
      } else {
        currentVal = target;
      }

      if (currentVal !== lastDisplayed) {
        el.textContent = currentVal.toLocaleString('en-US');
        lastDisplayed = currentVal;
      }

      if (progress < 1) {
        const rafId = requestAnimationFrame(step);
        statAnimFrameMap.set(el, rafId);
      } else {
        el.textContent = target.toLocaleString('en-US');
        el.classList.remove('is-counting');
        el.classList.add('is-landed');
      }
    }

    const initialRaf = requestAnimationFrame(step);
    statAnimFrameMap.set(el, initialRaf);
  }

  function resetDoctorStatsBeforeScroll(): void {
    const stat1El = document.getElementById('osf-doc-stat1-num');
    const stat2El = document.getElementById('osf-doc-stat2-num');
    [stat1El, stat2El].forEach(el => {
      if (!el) return;
      const prevRaf = statAnimFrameMap.get(el);
      if (prevRaf) cancelAnimationFrame(prevRaf);
      el.classList.remove('is-counting', 'is-landed');
      el.textContent = '0';
    });
  }

  function triggerDoctorStatsCountUp(): void {
    const stat1El = document.getElementById('osf-doc-stat1-num');
    const stat2El = document.getElementById('osf-doc-stat2-num');
    if (stat1El) {
      const target1 = parseInt(stat1El.dataset.countTarget || '100000', 10);
      animateStatNumber(stat1El, target1, 1650);
    }
    if (stat2El) {
      const target2 = parseInt(stat2El.dataset.countTarget || '15', 10);
      animateStatNumber(stat2El, target2, 1450);
    }
  }

  // 滑到 #osf-doctor-hero 該 section 進入視窗範圍時才觸發數字跳動動畫
  const doctorHeroSection = document.getElementById('osf-doctor-hero');
  if (doctorHeroSection) {
    let scrollTriggerTimer: number | null = null;
    const docHeroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (scrollTriggerTimer) window.clearTimeout(scrollTriggerTimer);
            scrollTriggerTimer = window.setTimeout(() => {
              triggerDoctorStatsCountUp();
            }, 120);
          } else {
            if (scrollTriggerTimer) window.clearTimeout(scrollTriggerTimer);
            resetDoctorStatsBeforeScroll();
          }
        });
      },
      { threshold: 0.45 }
    );
    docHeroObserver.observe(doctorHeroSection);
  }

  // Sticky tab nav — 滾動時更新 active tab
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const tabMap: Record<string, string> = {
            'osf-intro': 'intro',
          };
          const tabKey = tabMap[sectionId];
          if (tabKey) {
            tabBtns.forEach(b => b.classList.remove('active'));
            const activeBtn = document.querySelector<HTMLButtonElement>(`.osf-tab-btn[data-tab="${tabKey}"]`);
            if (activeBtn) activeBtn.classList.add('active');
          }
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px' }
  );

  const sections = document.querySelectorAll('[id^="osf-"]');
  sections.forEach(s => observer.observe(s));

  // 雙語文字切換
  function updateLanguageTexts(lang: 'zh' | 'en') {
    const t = OSSEOFUSE_I18N[lang] || OSSEOFUSE_I18N.zh;
    const setHtml = (id: string, html: string) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };
    const setText = (id: string, text: string) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    // Tab 1: 產品介紹
    setHtml('osf-hero-title', t.heroTitle);
    setHtml('osf-hero-subtitle', t.heroSubtitle);
    setText('osf-overview-tag-text', t.overviewTag);
    setHtml('osf-overview-title', t.overviewTitle);
    setHtml('osf-overview-desc', t.overviewDesc);
    setText('osf-card1-tag', t.card1Tag);
    setText('osf-card1-title', t.card1Title);
    setText('osf-card1-desc', t.card1Desc);
    setText('osf-card2-tag', t.card2Tag);
    setText('osf-card2-title', t.card2Title);
    setText('osf-card2-desc', t.card2Desc);
    setText('osf-card3-tag', t.card3Tag);
    setText('osf-card3-title', t.card3Title);
    setText('osf-card3-desc', t.card3Desc);
    setText('osf-video-title', t.videoTitle);
    setHtml('osf-system-title', `${t.systemTitle} <span class="highlight">${t.systemTitleHighlight}</span>`);
    setHtml('osf-system-desc1', noOrphan(t.systemDesc1));
    setHtml('osf-system-desc2', noOrphan(t.systemDesc2));
    setHtml('osf-trad-step1', noOrphan(t.tradStep1));
    setHtml('osf-trad-step2', noOrphan(t.tradStep2));
    setHtml('osf-trad-step3to6', noOrphan(t.tradStep3to6));
    setHtml('osf-trad-step7', noOrphan(t.tradStep7));
    setHtml('osf-trad-step8to9', noOrphan(t.tradStep8to9));
    setHtml('osf-trad-step10', noOrphan(t.tradStep10));
    setHtml('osf-mod-step1', noOrphan(t.modStep1));
    setHtml('osf-mod-step2', noOrphan(t.modStep2));
    setText('osf-compare-title', t.compareTitle);
    setHtml('osf-compare-mount', renderCompareTable(lang));
    setText('osf-cert-tag', t.licenseTag);
    setText('osf-cert-title', t.licenseTitle);
    setHtml('osf-cert-list-intro', t.licenseItems.map(item => `<li>${noOrphan(item)}</li>`).join(''));
    setHtml('osf-cert-disclaimer-desktop', noOrphan(t.licenseDisclaimer));
    setHtml('osf-cert-disclaimer-mobile', noOrphan(t.licenseDisclaimer));
    const certWrap = document.getElementById('osf-cert-image-wrap');
    if (certWrap) {
      certWrap.innerHTML = renderImageSlot(lang === 'en' ? OSSEOFUSE_IMAGES.licenseCertEn : OSSEOFUSE_IMAGES.licenseCert, '醫療器材許可證與專利證書', 'slot-license-cert');
    }
    setText('osf-member-cta-tag', t.memberTag);
    setHtml('osf-member-cta-title', t.memberTitle);
    setHtml('osf-member-cta-desc', noOrphan(t.memberDesc));
    setText('osf-cta-btn-reg', t.memberBtnPrimary);
    setHtml('osf-cta-btn-login', t.memberBtnOutline);

    // Tab 2: 核心技術
    setHtml('osf-tech-hero-subtag', noOrphan(t.overviewTag));
    setHtml('osf-tech-hero-title', noOrphan(t.videoTitle));
    setHtml('osf-tech-hero-desc', noOrphan(t.overviewDesc));
    setText('osf-tech-c1-tag', t.card1Tag);
    setHtml('osf-tech-c1-title', noOrphan(t.card1Title));
    setHtml('osf-tech-c1-desc', noOrphan(t.card1Desc));
    setText('osf-tech-c2-tag', t.card2Tag);
    setHtml('osf-tech-c2-title', noOrphan(t.card2Title));
    setHtml('osf-tech-c2-desc', noOrphan(t.card2Desc));
    setText('osf-tech-c3-tag', t.card3Tag);
    setHtml('osf-tech-c3-title', noOrphan(t.card3Title));
    setHtml('osf-tech-c3-desc', `${noOrphan(t.card3DescPart1)}<span class="osf-card-break">${noOrphan(t.card3DescPart2)}</span>`);

    setText('osf-tech-adv-tag', t.techAdvTag);
    setHtml('osf-tech-adv-title', t.techAdvTitle);
    // 01
    setHtml('osf-tech-01-title', noOrphan(t.tech01Title));
    setHtml('osf-tech-01-sub1-title', noOrphan(t.tech01Sub1Title));
    setHtml('osf-tech-01-sub1-desc', t.tech01Sub1Desc);
    setHtml('osf-tech-01-kis-caption', noOrphan(t.tech01KisCaption));
    setHtml('osf-tech-01-sub2-title', noOrphan(t.tech01Sub2Title));
    setHtml('osf-tech-01-sub2-desc', noOrphan(t.tech01Sub2Desc));
    setHtml('osf-tech-01-sub3-title', noOrphan(t.tech01Sub3Title));
    setHtml('osf-tech-01-sub3-desc', noOrphan(t.tech01Sub3Desc));
    // 02
    setHtml('osf-tech-02-title', noOrphan(t.tech02Title));
    setHtml('osf-tech-02-lead', t.tech02Lead);
    setHtml('osf-tech-02-sub1-title', noOrphan(t.tech02Sub1Title));
    setHtml('osf-tech-02-sub1-desc', noOrphan(t.tech02Sub1Desc));
    setHtml('osf-tech-02-note1', noOrphan(t.tech02LockingNote1));
    setHtml('osf-tech-02-note2', noOrphan(t.tech02LockingNote2));
    setHtml('osf-tech-02-sub2-title', noOrphan(t.tech02Sub2Title));
    setHtml('osf-tech-02-m1-title', noOrphan(t.tech02Metric1Title));
    setHtml('osf-tech-02-m1-desc', noOrphan(t.tech02Metric1Desc));
    setHtml('osf-tech-02-m2-title', noOrphan(t.tech02Metric2Title));
    setHtml('osf-tech-02-m2-desc', noOrphan(t.tech02Metric2Desc));
    setHtml('osf-tech-02-m3-title', noOrphan(t.tech02Metric3Title));
    setHtml('osf-tech-02-m3-desc', t.tech02Metric3Desc);
    setHtml('osf-tech-02-m4-title', noOrphan(t.tech02Metric4Title));
    setHtml('osf-tech-02-m4-desc', noOrphan(t.tech02Metric4Desc));
    setHtml('osf-tech-02-sub3-title', noOrphan(t.tech02Sub3Title));
    setHtml('osf-tech-02-sub3-desc', noOrphan(t.tech02Sub3Desc));
    setHtml('osf-tech-02-sub4-title', noOrphan(t.tech02Sub4Title));
    setHtml('osf-tech-02-sub4-desc', noOrphan(t.tech02Sub4Desc));
    setHtml('osf-tech-02-imm-caption', noOrphan(t.tech02ImmediateCaption));
    // 03
    setHtml('osf-tech-03-title', noOrphan(t.tech03Title));
    setHtml('osf-tech-03-lead', noOrphan(t.tech03Lead));
    setHtml('osf-tech-03-sub1-title', noOrphan(t.tech03Sub1Title));
    setHtml('osf-tech-03-sub1-desc', noOrphan(t.tech03Sub1Desc));
    setHtml('osf-tech-03-vid-caption', noOrphan(t.tech03VideoCaption));
    // 04
    setHtml('osf-tech-04-title', noOrphan(t.tech04Title));
    setHtml('osf-tech-04-p1-title', noOrphan(t.tech04Point1Title));
    setHtml('osf-tech-04-p1-desc', noOrphan(t.tech04Point1Desc));
    setHtml('osf-tech-04-p2-title', noOrphan(t.tech04Point2Title));
    setHtml('osf-tech-04-p2-desc', noOrphan(t.tech04Point2Desc));
    setHtml('osf-tech-04-vid-title', noOrphan(t.tech04VideoTitle));
    setHtml('osf-tech-04-vid-caption', t.tech04VideoCaption);
    setText('osf-tech-04-vid-badge', t.tech04VideoBadge);
    // Tech CTA & License Notice
    setHtml('osf-tech-cta-title', noOrphan(t.techCtaTitle));
    setHtml('osf-tech-cta-desc', noOrphan(t.techCtaDesc));
    setText('osf-tech-btn-papers', t.techCtaBtnPapers);
    setText('osf-tech-btn-cases', t.techCtaBtnCases);
    setText('osf-tech-notice-license-label', t.licenseTitle);
    setHtml('osf-tech-notice-licenses', t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join(''));
    setText('osf-tech-notice-disclaimer-label', t.disclaimerLabel);
    setHtml('osf-tech-notice-disclaimer-text', noOrphan(t.licenseDisclaimer));

    // Tab 3: 產品規格
    setHtml('osf-spec-hero-subtag', noOrphan(t.specHeroSubtag));
    setHtml('osf-spec-hero-title', noOrphan(t.specHeroTitle));
    setHtml(
      'osf-spec-hero-desc',
      `<span class="osf-spec-desc-part1">${t.specHeroDescPart1}</span><span class="osf-spec-desc-part2">${noOrphan(t.specHeroDescPart2)}</span>`
    );
    // SERIES 01
    setText('osf-spec-s1-tag', t.specS1Tag);
    setHtml(
      'osf-spec-s1-title',
      `<span class="osf-spec-title-prefix">${t.specS1TitlePrefix}</span><span class="osf-spec-title-name">${t.specS1TitleSeries}</span>`
    );
    setHtml('osf-spec-s1-subtitle', noOrphan(t.specS1Subtitle));
    setHtml('osf-spec-s1-p1-title', noOrphan(t.specS1P1Title));
    setHtml('osf-spec-s1-p1-desc', noOrphan(t.specS1P1Desc));
    setHtml('osf-spec-s1-p2-title', noOrphan(t.specS1P2Title));
    setHtml('osf-spec-s1-p2-l1', noOrphan(t.specS1P2Line1));
    setHtml('osf-spec-s1-p2-l2', noOrphan(t.specS1P2Line2));
    setHtml('osf-spec-s1-p2-l3', noOrphan(t.specS1P2Line3));
    setHtml('osf-spec-s1-caption', noOrphan(t.specS1MediaCaption));
    // SERIES 02
    setText('osf-spec-s2-tag', t.specS2Tag);
    setHtml(
      'osf-spec-s2-title',
      `<span class="osf-spec-title-prefix">${t.specS2TitlePrefix}</span><span class="osf-spec-title-name">${t.specS2TitleSeries}</span>`
    );
    setHtml('osf-spec-s2-p1-title', noOrphan(t.specS2P1Title));
    setHtml('osf-spec-s2-p1-l1', noOrphan(t.specS2P1Line1));
    setHtml('osf-spec-s2-p1-l2', noOrphan(t.specS2P1Line2));
    setHtml('osf-spec-s2-p1-l3', noOrphan(t.specS2P1Line3));
    setHtml('osf-spec-s2-p1-l4', noOrphan(t.specS2P1Line4));
    setHtml('osf-spec-s2-p2-title', noOrphan(t.specS2P2Title));
    setHtml('osf-spec-s2-p2-l1', noOrphan(t.specS2P2Line1));
    setHtml('osf-spec-s2-p2-l2', noOrphan(t.specS2P2Line2));
    setHtml('osf-spec-s2-p2-l3', noOrphan(t.specS2P2Line3));
    // SERIES 03
    setText('osf-spec-s3-tag', t.specS3Tag);
    setHtml(
      'osf-spec-s3-title',
      `<span class="osf-spec-title-prefix">${t.specS3TitlePrefix}</span><span class="osf-spec-title-name">${t.specS3TitleSeries}</span>`
    );
    setHtml('osf-spec-s3-p1-title', noOrphan(t.specS3P1Title));
    setHtml('osf-spec-s3-p1-l1', noOrphan(t.specS3P1Line1));
    setHtml('osf-spec-s3-p1-l2', noOrphan(t.specS3P1Line2));
    setHtml('osf-spec-s3-p2-title', noOrphan(t.specS3P2Title));
    setHtml('osf-spec-s3-p2-l1', noOrphan(t.specS3P2Line1));
    setHtml('osf-spec-s3-p2-l2', noOrphan(t.specS3P2Line2));
    setHtml('osf-spec-s3-p3-title', noOrphan(t.specS3P3Title));
    setHtml('osf-spec-s3-p3-l1', noOrphan(t.specS3P3Line1));
    setHtml('osf-spec-s3-p3-l2', noOrphan(t.specS3P3Line2));
    setHtml('osf-spec-s3-p3-l3', noOrphan(t.specS3P3Line3));
    // Spec CTA & Notice
    setHtml('osf-spec-cta-title', noOrphan(t.techCtaTitle));
    setHtml('osf-spec-cta-desc', noOrphan(t.techCtaDesc));
    setText('osf-spec-btn-reg', t.techCtaBtnPapers);
    setText('osf-spec-btn-outline', t.specCtaBtnOutline);
    setText('osf-spec-notice-license-label', t.licenseTitle);
    setHtml('osf-spec-notice-licenses', t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join(''));
    setText('osf-spec-notice-disclaimer-label', t.disclaimerLabel);
    setHtml('osf-spec-notice-disclaimer-text', noOrphan(t.licenseDisclaimer));

    // Tab 4: 專利認證
    setHtml('osf-cert-hero-subtag', noOrphan(t.certHeroSubtag));
    setHtml('osf-cert-hero-title', t.certHeroTitle);
    setHtml('osf-cert-hero-desc', t.certHeroDesc);
    setText('osf-cert-tab-tw', t.certTabTw);
    setText('osf-cert-tab-us', t.certTabUs);
    setText('osf-cert-tab-cn', t.certTabCn);
    setText('osf-patent-lb-back-text', t.certLbBack);
    document.querySelectorAll<HTMLElement>('.osf-patent-hover-text').forEach(el => {
      el.textContent = t.certHoverLabel;
    });
    applyPatentRegionOrder(lang);
    setHtml('osf-cert-cta-title', noOrphan(t.techCtaTitle));
    setHtml('osf-cert-cta-desc', noOrphan(t.certCtaDesc));
    setText('osf-cert-btn-reg', t.techCtaBtnPapers);
    setText('osf-cert-btn-outline', t.certCtaBtnOutline);
    setText('osf-cert-notice-license-label', t.licenseTitle);
    setHtml('osf-cert-notice-licenses', t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join(''));
    setText('osf-cert-notice-disclaimer-label', t.disclaimerLabel);
    setHtml('osf-cert-notice-disclaimer-text', noOrphan(t.licenseDisclaimer));

    // Tab 5: 醫師分享
    setText('osf-doc-stat1-tag', t.docStat1Tag);
    setHtml('osf-doc-stat1-unit', noOrphan(t.docStat1Unit));
    setText('osf-doc-stat2-tag', t.docStat2Tag);
    setHtml('osf-doc-stat2-unit', noOrphan(t.docStat2Unit));
    setHtml('osf-doc-section-title', noOrphan(t.docSectionTitle));
    setText('osf-doc1-name', t.doc1Name);
    setHtml('osf-doc1-role', noOrphan(t.doc1Role));
    setHtml('osf-doc1-title', noOrphan(t.doc1Title));
    setHtml('osf-doc1-p1', noOrphan(t.doc1P1));
    setText('osf-doc2-name', t.doc2Name);
    setHtml('osf-doc2-role', noOrphan(t.doc2Role));
    setHtml('osf-doc2-title', noOrphan(t.doc2Title));
    setHtml('osf-doc2-p1', noOrphan(t.doc2P1));
    setHtml('osf-doc2-p2', noOrphan(t.doc2P2));
    setText('osf-doc3-name', t.doc3Name);
    setHtml('osf-doc3-role', noOrphan(t.doc3Role));
    setHtml('osf-doc3-title', noOrphan(t.doc3Title));
    setHtml('osf-doc3-p1', noOrphan(t.doc3P1));
    setText('osf-doc4-name', t.doc4Name);
    setHtml('osf-doc4-role', noOrphan(t.doc4Role));
    setHtml('osf-doc4-title', noOrphan(t.doc4Title));
    setHtml('osf-doc4-p1', noOrphan(t.doc4P1));
    setHtml('osf-doc4-p2', noOrphan(t.doc4P2));
    setHtml('osf-doc-cta-title', noOrphan(t.techCtaTitle));
    setHtml('osf-doc-cta-desc', noOrphan(t.certCtaDesc));
    setText('osf-doc-btn-reg', t.techCtaBtnPapers);
    setText('osf-doc-btn-outline', t.docCtaBtnOutline);
    setText('osf-doc-notice-license-label', t.licenseTitle);
    setHtml('osf-doc-notice-licenses', t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join(''));
    setText('osf-doc-notice-disclaimer-label', t.disclaimerLabel);
    setHtml('osf-doc-notice-disclaimer-text', noOrphan(t.licenseDisclaimer));

    // Tab 6: 衛教社群
    setHtml('osf-edu-hero-subtag', noOrphan(t.eduHeroSubtag));
    setHtml('osf-edu-hero-title', noOrphan(t.eduHeroTitle));
    setHtml('osf-edu-hero-desc', noOrphan(t.eduHeroDesc));
    setHtml('osf-edu-compare-mount', renderEduCompareTable(lang));
    setHtml('osf-edu-community-title', noOrphan(t.eduCommunityTitle));
    setText('osf-edu-card1-label', t.eduCard1Label);
    setText('osf-edu-card2-label', t.eduCard2Label);
    setHtml('osf-edu-card3-label', t.eduCard3Label);
    setHtml('osf-edu-cta-title', noOrphan(t.techCtaTitle));
    setHtml('osf-edu-cta-desc', noOrphan(t.certCtaDesc));
    setText('osf-edu-btn-reg', t.techCtaBtnPapers);
    setText('osf-edu-btn-outline', t.eduCtaBtnOutline);
    setText('osf-edu-notice-license-label', t.licenseTitle);
    setHtml('osf-edu-notice-licenses', t.licenseItems.map(item => `<span>${noOrphan(item)}</span>`).join(''));
    setText('osf-edu-notice-disclaimer-label', t.disclaimerLabel);
    setHtml('osf-edu-notice-disclaimer-text', noOrphan(t.licenseDisclaimer));

    // 更新 Tab 按鈕標題（桌面/平板與手機端下拉選單）
    tabBtns.forEach((btn, idx) => {
      if (t.tabs[idx]) {
        btn.textContent = t.tabs[idx];
        if (btn.classList.contains('active') && mobileCurrentLabel) {
          mobileCurrentLabel.textContent = t.tabs[idx];
        }
      }
    });
    mobileItems.forEach((item, idx) => {
      if (t.tabs[idx]) item.textContent = t.tabs[idx];
    });
  }

  // 監聽全域語系切換事件
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      updateLanguageTexts(customEvent.detail.lang);
    }
  });
}

