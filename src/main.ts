/* ============================================================
   Main — 應用程式入口
   ============================================================ */
import './style.css';
import { registerRoute, startRouter, onRouteChange } from './router';
import { renderHeader, initHeader, updateHeaderStyle } from './components/header';
import { renderFooter, initFooter } from './components/footer';
import { initImagePlaceholders } from './utils/image-placeholder';

// Pages
import { homePage, initHomePage } from './pages/home';
import { ezechbonePage, initEzechbonePage } from './pages/ezechbone';
import { osseofusePage, initOsseofusePage } from './pages/osseofuse';
import { certificatesPage } from './pages/certificates';
import { clinicalSupportPage, initClinicalSupportPage } from './pages/clinical-support';
import { loginPage, initLoginPage } from './pages/login';
import { registerPage, initRegisterPage } from './pages/register';
import { membershipStatusPage, initMembershipStatusPage } from './pages/membership-status';
import { forgotPasswordPage, initForgotPasswordPage } from './pages/forgot-password';
import { contactPage, initContactPage } from './pages/contact';
import { privacyPage, initPrivacyPage } from './pages/privacy';
import { styleGuidePage } from './pages/style-guide';

// 註冊路由
registerRoute('/',                      '首頁',         homePage);
registerRoute('/ezechbone',             'Ezechbone',    ezechbonePage);
registerRoute('/osseofuse',             'OsseoFuse',    osseofusePage);
registerRoute('/osseofuse/certificates','專利認證',      certificatesPage);
registerRoute('/clinical-support',      '臨床技術支持',  clinicalSupportPage);
registerRoute('/login',                 '會員登入',      loginPage);
registerRoute('/register',              '醫師註冊',      registerPage);
registerRoute('/register/step1',        '醫師註冊 - 建立帳號', registerPage);
registerRoute('/register/verify',       '醫師註冊 - 驗證信箱', registerPage);
registerRoute('/register/step2',        '醫師註冊 - 填寫資料', registerPage);
registerRoute('/register/step3',        '醫師註冊 - 完成送出', registerPage);
registerRoute('/membership-status',     '會員審核中',    membershipStatusPage);
registerRoute('/membership-status/pending',  '會員審核中',     membershipStatusPage);
registerRoute('/membership-status/rejected', '會員審核未通過', membershipStatusPage);
registerRoute('/forgot-password',       '重設密碼',      forgotPasswordPage);
registerRoute('/forgot-password/input', '重設密碼',      forgotPasswordPage);
registerRoute('/reset-password',        '重設密碼',      forgotPasswordPage);
registerRoute('/reset-password/input',  '重設密碼',      forgotPasswordPage);
registerRoute('/contact',               '聯絡我們',      contactPage);
registerRoute('/privacy',               '隱私條款',      privacyPage);
registerRoute('/style-guide',           '樣式規範',      styleGuidePage);

// 組裝 Shell
const app = document.getElementById('app')!;
app.innerHTML = `
  ${renderHeader()}
  <main class="page-content" id="page-content"></main>
  ${renderFooter()}
`;

// 路由換頁時切換 header 透明/白底及初始化頁面組件
const LIGHT_HEADER_PREFIXES = ['/clinical-support', '/contact', '/login', '/register', '/membership-status', '/forgot-password', '/reset-password', '/privacy', '/style-guide'];
onRouteChange((path) => {
  updateHeaderStyle(path);
  const header = document.getElementById('site-header');
  if (header) {
    const isLight = LIGHT_HEADER_PREFIXES.some(prefix => path.startsWith(prefix));
    if (isLight) {
      header.classList.add('light-mode');
    } else {
      header.classList.remove('light-mode');
    }

    if (path.startsWith('/osseofuse')) {
      header.classList.add('osseofuse-header');
    } else {
      header.classList.remove('osseofuse-header');
    }

    if (path.startsWith('/ezechbone')) {
      header.classList.add('ezechbone-header');
    } else {
      header.classList.remove('ezechbone-header');
    }
  }

  const footer = document.querySelector('.site-footer');
  if (footer) {
    if (path.startsWith('/ezechbone')) {
      footer.classList.add('ezechbone-footer');
    } else {
      footer.classList.remove('ezechbone-footer');
    }
  }
  if (path === '/') {
    initHomePage();
  }
  if (path === '/contact') {
    initContactPage();
  }
  if (path === '/clinical-support') {
    initClinicalSupportPage();
  }
  if (path === '/osseofuse') {
    initOsseofusePage();
  }
  if (path === '/ezechbone') {
    initEzechbonePage();
  }
  if (path === '/privacy') {
    initPrivacyPage();
  }
  if (path === '/login') {
    initLoginPage();
  }
  if (path.startsWith('/register')) {
    initRegisterPage();
  }
  if (path.startsWith('/membership-status')) {
    initMembershipStatusPage();
  }
  if (path.startsWith('/forgot-password') || path.startsWith('/reset-password')) {
    initForgotPasswordPage();
  }
});

// 啟動
const pageContent = document.getElementById('page-content')!;
// 圖片載入骨架屏：需在路由渲染前啟動，才能接住首屏圖片
initImagePlaceholders(pageContent);
startRouter(pageContent);
initHeader();
initFooter();
if (window.location.hash === '' || window.location.hash === '#/') {
  initHomePage();
}
