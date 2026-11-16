/* ============================================================
   Router — hash-based SPA 路由
   ============================================================ */

type RouteHandler = () => string;

interface Route {
  path: string;
  handler: RouteHandler;
  title: string;
}

type RouteChangeCallback = (path: string) => void;

const routes: Route[] = [];
const callbacks: RouteChangeCallback[] = [];

export function registerRoute(path: string, title: string, handler: RouteHandler): void {
  routes.push({ path, handler, title });
}

export function onRouteChange(cb: RouteChangeCallback): void {
  callbacks.push(cb);
}

export function navigateTo(path: string): void {
  window.location.hash = '#' + path;
}

export function getCurrentPath(): string {
  const hash = window.location.hash.slice(1) || '/';
  const [path] = hash.split('?');
  return path || '/';
}

export function getQueryParams(): URLSearchParams {
  const hash = window.location.hash.slice(1) || '/';
  const qIndex = hash.indexOf('?');
  return new URLSearchParams(qIndex !== -1 ? hash.slice(qIndex + 1) : '');
}

export function startRouter(renderTarget: HTMLElement): void {
  const render = () => {
    const path = getCurrentPath();
    const route = routes.find(r => r.path === path);

    if (route) {
      document.title = `${route.title}｜歐舒福生技 OSF`;
      renderTarget.innerHTML = route.handler();
    } else {
      document.title = '404｜歐舒福生技 OSF';
      renderTarget.innerHTML = `
        <div class="page-placeholder">
          <h1>404</h1>
          <p class="page-route">${path}</p>
          <p>找不到此頁面</p>
        </div>
      `;
    }

    // 首頁 Hero 頂天立地疊合透明 Header，其餘頁面加上 Header 高度 offset
    if (path === '/') {
      renderTarget.classList.remove('page-content-offset');
    } else {
      renderTarget.classList.add('page-content-offset');
    }

    // 換頁時立即回到頂端（避免 html 的 smooth scroll 造成換頁後還在捲動）
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    // 更新 nav active
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === '#' + path || (path === '/' && href === '#/')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });

    // 通知回呼
    callbacks.forEach(cb => cb(path));
  };

  /** 換頁漸進轉場：支援 View Transitions API 時交叉淡化，否則退回 CSS 淡入動畫 */
  const renderWithTransition = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };

    if (!reduceMotion && typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(() => render());
      return;
    }

    render();
    if (!reduceMotion) {
      renderTarget.classList.remove('page-enter');
      void renderTarget.offsetWidth; // 強制 reflow 以重新觸發動畫
      renderTarget.classList.add('page-enter');
    }
  };

  window.addEventListener('hashchange', renderWithTransition);
  render();
}
