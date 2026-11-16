/* ============================================================
   文字排版工具 — 防止孤字（Orphan）
   規則：任何文字段落的最後一行不得只剩一個字（含「字＋標點」）。
   做法：把段落結尾的最後幾個字包進 white-space: nowrap 的 span，
   讓瀏覽器斷行時這幾個字一定會一起換行。
   搭配 CSS `text-wrap: pretty` 雙重保險。
   ============================================================ */

/** 結尾保留不斷開的字數（不含結尾標點） */
const DEFAULT_TAIL = 3;

/** 結尾標點（會跟著最後幾個字一起綁定） */
const TRAILING_PUNCT = /[。，、！？；：）」』】》,.!?;:)\]]+$/;

/**
 * 防孤字：將文字結尾 N 個字包進 `.nowrap-tail`
 * - 只處理純文字結尾；若結尾區段含 HTML 標籤則原樣回傳
 * - 例：noOrphan('均展現穩定止血效應。') → '均展現穩定止<span class="nowrap-tail">血效應。</span>'
 */
export function noOrphan(text: string, tail: number = DEFAULT_TAIL): string {
  const trimmed = text.trimEnd();
  const punctMatch = trimmed.match(TRAILING_PUNCT);
  const punct = punctMatch ? punctMatch[0] : '';
  const body = trimmed.slice(0, trimmed.length - punct.length);

  // 英文（拉丁字母）結尾：絕不可依字元切開單字，改以 &nbsp; 綁定最後兩個單字
  // （不使用 span，避免在 flex 容器中被拆成獨立欄位而造成「conditi / ons」斷字錯位）
  if (/[A-Za-z0-9®™%)\]]$/.test(body)) {
    return bindLastWords(trimmed);
  }

  // 以 Array.from 正確處理多位元組字元
  const chars = Array.from(body);
  if (chars.length <= tail) return text;

  const tailStr = chars.slice(-tail).join('') + punct;
  if (/[<>]/.test(tailStr)) return text;

  return `${chars.slice(0, -tail).join('')}<span class="nowrap-tail">${tailStr}</span>`;
}

/** 英文防孤字：將最後一個空白換成 &nbsp;，讓最後兩個單字一起換行 */
function bindLastWords(text: string): string {
  const idx = text.lastIndexOf(' ');
  if (idx <= 0) return text;
  const lastWord = text.slice(idx + 1);
  const before = text.slice(0, idx);
  // 結尾含 HTML、單字過長，或整段僅兩個字以內時不處理
  if (/[<>]/.test(lastWord) || lastWord.length > 14 || !before.includes(' ')) return text;
  return `${before}&nbsp;${lastWord}`;
}

/** 多行文字（每段各自防孤字）以 <br /> 串接 */
export function noOrphanLines(lines: string[], tail: number = DEFAULT_TAIL): string {
  return lines.map((line) => noOrphan(line, tail)).join('<br />');
}
