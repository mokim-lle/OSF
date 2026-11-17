/* ============================================================
   Image Placeholder — 圖片載入骨架屏
   ------------------------------------------------------------
   圖片尚未下載完成時，在 <img> 本身顯示流光骨架（.img-loading），
   下載完成後移除骨架並淡入圖片，避免畫面乍看是空的。
   - 自動處理換頁後新插入的圖片，以及動態更換 src 的圖片（如燈箱）
   - 排除：Header / Footer Logo、alt="" 的純裝飾圖、data-no-skeleton
   ============================================================ */

const LOADING_CLASS = 'img-loading';
const LOADED_CLASS = 'img-loaded';
const EXCLUDE_SELECTOR = '.site-header img, .site-footer img, img[alt=""], img[data-no-skeleton]';

function finish(img: HTMLImageElement): void {
  img.classList.remove(LOADING_CLASS);
  img.classList.add(LOADED_CLASS);
  // 淡入動畫結束後移除 class，避免影響元件原有的 opacity 狀態
  window.setTimeout(() => img.classList.remove(LOADED_CLASS), 450);
}

function track(img: HTMLImageElement): void {
  if (img.matches(EXCLUDE_SELECTOR)) return;
  const src = img.getAttribute('src');
  if (!src) return;

  // 已載入完成（含快取命中）→ 不顯示骨架
  if (img.complete && img.naturalWidth > 0) {
    img.classList.remove(LOADING_CLASS);
    return;
  }

  img.classList.add(LOADING_CLASS);
  const done = () => {
    img.removeEventListener('load', done);
    img.removeEventListener('error', fail);
    finish(img);
  };
  const fail = () => {
    img.removeEventListener('load', done);
    img.removeEventListener('error', fail);
    // 載入失敗：只移除骨架，交由各元件既有的 onerror 處理
    img.classList.remove(LOADING_CLASS);
  };
  img.addEventListener('load', done);
  img.addEventListener('error', fail);
}

function scan(root: ParentNode): void {
  root.querySelectorAll('img').forEach((img) => track(img as HTMLImageElement));
}

/** 啟動全站圖片骨架屏監聽（只需呼叫一次） */
export function initImagePlaceholders(root: HTMLElement = document.body): void {
  scan(root);

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.target instanceof HTMLImageElement) {
        track(m.target);
        continue;
      }
      m.addedNodes.forEach((node) => {
        if (node instanceof HTMLImageElement) track(node);
        else if (node instanceof HTMLElement) scan(node);
      });
    }
  });

  observer.observe(root, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src'],
  });
}
