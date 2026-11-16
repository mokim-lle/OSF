/* ============================================================
   Header — 頁首導覽
   ============================================================ */

export let currentGlobalLang: 'zh' | 'en' = 'zh';

const HEADER_I18N = {
  zh: {
    clinical: '臨床技術支持',
    contact: '聯絡我們',
    login: '會員登入',
  },
  en: {
    clinical: 'CLINICAL SUPPORT',
    contact: 'CONTACT US',
    login: 'MEMBER LOGIN',
  },
};

export function renderHeader(): string {
  const t = HEADER_I18N[currentGlobalLang] || HEADER_I18N.zh;
  return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a class="header-logo" href="#/">
          <img src="/images/logo-white.png" alt="OSF 歐舒福生技" class="logo-img" />
        </a>

        <nav>
          <ul class="nav-links" id="nav-links">
            <li><a href="#/osseofuse" id="nav-link-osseofuse">OSSEOFUSE</a></li>
            <li><a href="#/ezechbone" id="nav-link-ezechbone">EZECHBONE</a></li>
            <li><a href="#/clinical-support" id="nav-link-clinical">${t.clinical}</a></li>
            <li><a href="#/contact" id="nav-link-contact">${t.contact}</a></li>
            <li><a href="#/login" id="nav-link-login">${t.login}</a></li>
            <li class="mobile-lang-item">
              <button type="button" class="nav-lang-toggle" id="lang-toggle-mobile" aria-label="切換語系">
                <svg class="lang-globe" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span class="lang-active">中文</span>
                <span class="lang-sep">/</span>
                <span class="lang-other">EN</span>
              </button>
            </li>
          </ul>
        </nav>

        <!-- 右側控制組 (貼緊最右側：Pad 含語系+漢堡；Mobile 僅含漢堡) -->
        <div class="header-right-actions">
          <button type="button" class="nav-lang-toggle header-lang-btn" id="lang-toggle-header" aria-label="切換語系">
            <svg class="lang-globe" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span class="lang-active">中文</span>
            <span class="lang-sep">/</span>
            <span class="lang-other">EN</span>
          </button>

          <button class="hamburger" id="hamburger-btn" aria-label="選單">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

export function setGlobalLang(lang: 'zh' | 'en'): void {
  currentGlobalLang = lang;
  const t = HEADER_I18N[lang] || HEADER_I18N.zh;
  const navClin = document.getElementById('nav-link-clinical');
  if (navClin) navClin.textContent = t.clinical;
  const navContact = document.getElementById('nav-link-contact');
  if (navContact) navContact.textContent = t.contact;
  const navLogin = document.getElementById('nav-link-login');
  if (navLogin) navLogin.textContent = t.login;

  document.querySelectorAll('.nav-lang-toggle').forEach(btn => {
    const active = btn.querySelector('.lang-active');
    const other = btn.querySelector('.lang-other');
    if (active && other) {
      active.textContent = lang === 'zh' ? '中文' : 'EN';
      other.textContent = lang === 'zh' ? 'EN' : '中文';
    }
  });
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/** 初始化 Header 互動行為 */
export function initHeader(): void {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav-links');
  const headerEl = document.getElementById('site-header');

  // 漢堡選單開關：同步 header 狀態（讓 header 與選單面板同色）、鎖定背景捲動
  const setMenuOpen = (open: boolean) => {
    nav?.classList.toggle('open', open);
    headerEl?.classList.toggle('menu-open', open);
    btn?.classList.toggle('is-active', open);
    btn?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-menu-open', open);
  };

  if (btn && nav) {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      setMenuOpen(!nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });
    // 換頁或放大至桌機寬度時自動收合
    window.addEventListener('hashchange', () => setMenuOpen(false));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && nav.classList.contains('open')) setMenuOpen(false);
    }, { passive: true });
  }

  // 語系切換按鈕綁定
  const langToggles = document.querySelectorAll<HTMLButtonElement>('.nav-lang-toggle');
  langToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const newLang = currentGlobalLang === 'zh' ? 'en' : 'zh';
      setGlobalLang(newLang);
    });
  });

  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }
}

/** 路由換頁時更新 header 樣式與 Logo 圖檔 */
export function updateHeaderStyle(path: string): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const logoImg = header.querySelector<HTMLImageElement>('.logo-img');
  const pageContent = document.getElementById('page-content');
  if (path === '/') {
    header.classList.remove('solid');
    if (logoImg) logoImg.src = '/images/logo-white.png';
    pageContent?.classList.remove('page-content-offset');
  } else {
    header.classList.add('solid');
    if (logoImg) logoImg.src = '/images/logo.png';
  }
}
