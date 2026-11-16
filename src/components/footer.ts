/* ============================================================
   Footer — 頁尾（精確對照設計截圖）
   ============================================================ */

import { currentGlobalLang } from './header';

const FOOTER_I18N = {
  zh: {
    intro: '牙科植體與再生醫材之引進、臨床教育與技術支援',
    productsTitle: '產品',
    productOsseofuse: 'OsseoFuse 一鑽植牙',
    productEzechbone: 'Ezechbone 甦骨粒',
    servicesTitle: '服務',
    serviceClinical: '臨床技術支持',
    serviceContact: '聯絡我們',
    serviceLogin: '會員登入',
    copyright: '© 2026 OSF Technology Co.,Ltd. ALL RIGHTS RESERVED.',
    privacy: 'PRIVACY',
    terms: 'TERMS'
  },
  en: {
    intro: 'Introduction of Dental Implants & Regenerative Materials, Clinical Education & Technical Support',
    productsTitle: 'PRODUCTS',
    productOsseofuse: 'OsseoFuse Dental Implant',
    productEzechbone: 'Ezechbone Bone Graft',
    servicesTitle: 'SERVICES',
    serviceClinical: 'Clinical Support',
    serviceContact: 'Contact Us',
    serviceLogin: 'Member Login',
    copyright: '© 2026 OSF Technology Co.,Ltd. ALL RIGHTS RESERVED.',
    privacy: 'PRIVACY',
    terms: 'TERMS'
  }
};

export function renderFooter(): string {
  const lang = currentGlobalLang || 'zh';
  const t = FOOTER_I18N[lang];

  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img src="/images/logo-white.png" alt="OSF 歐舒福生技" class="footer-logo-img" />
          <p class="footer-intro" id="footer-intro">${t.intro}</p>
        </div>

        <div class="footer-col">
          <h4 id="footer-products-title">${t.productsTitle}</h4>
          <ul>
            <li><a href="#/osseofuse" id="footer-link-osseofuse">${t.productOsseofuse}</a></li>
            <li><a href="#/ezechbone" id="footer-link-ezechbone">${t.productEzechbone}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 id="footer-services-title">${t.servicesTitle}</h4>
          <ul>
            <li><a href="#/clinical-support" id="footer-link-clinical">${t.serviceClinical}</a></li>
            <li><a href="#/contact" id="footer-link-contact">${t.serviceContact}</a></li>
            <li><a href="#/login" id="footer-link-login">${t.serviceLogin}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div class="footer-bottom-inner">
          <div class="footer-copyright" id="footer-copyright">
            ${t.copyright}
          </div>
          <div class="footer-legal">
            <a href="#/privacy" class="footer-legal-link" id="footer-link-privacy">${t.privacy}</a>
            <span class="footer-legal-dot">·</span>
            <a href="#/privacy" class="footer-legal-link" id="footer-link-terms">${t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/** 更新 Footer 雙語文字 */
function updateFooterLang(lang: 'zh' | 'en'): void {
  const t = FOOTER_I18N[lang] || FOOTER_I18N.zh;
  const intro = document.getElementById('footer-intro');
  if (intro) intro.textContent = t.intro;

  const prodTitle = document.getElementById('footer-products-title');
  if (prodTitle) prodTitle.textContent = t.productsTitle;

  const linkOsseo = document.getElementById('footer-link-osseofuse');
  if (linkOsseo) linkOsseo.textContent = t.productOsseofuse;

  const linkEzech = document.getElementById('footer-link-ezechbone');
  if (linkEzech) linkEzech.textContent = t.productEzechbone;

  const servTitle = document.getElementById('footer-services-title');
  if (servTitle) servTitle.textContent = t.servicesTitle;

  const linkClin = document.getElementById('footer-link-clinical');
  if (linkClin) linkClin.textContent = t.serviceClinical;

  const linkContact = document.getElementById('footer-link-contact');
  if (linkContact) linkContact.textContent = t.serviceContact;

  const linkLogin = document.getElementById('footer-link-login');
  if (linkLogin) linkLogin.textContent = t.serviceLogin;

  const copyright = document.getElementById('footer-copyright');
  if (copyright) copyright.textContent = t.copyright;

  const privacy = document.getElementById('footer-link-privacy');
  if (privacy) privacy.textContent = t.privacy;

  const terms = document.getElementById('footer-link-terms');
  if (terms) terms.textContent = t.terms;
}

/** 初始化 Footer 互動行為與雙語監聽 */
export function initFooter(): void {
  window.addEventListener('langchange', (e: Event) => {
    const customEvent = e as CustomEvent<{ lang: 'zh' | 'en' }>;
    if (customEvent.detail && customEvent.detail.lang) {
      updateFooterLang(customEvent.detail.lang);
    }
  });
}

