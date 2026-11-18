/**
 * 產生頁面頂部柔和羽化半圓穹頂背景 SVG
 * 供 /clinical-support、/contact、/login、/register 等淺色頁面共用，
 * 搭配頁面頂部冷灰藍過渡至純白底色，呈現清楚的弧形層次與底部無縫銜接。
 */
export function renderPageBgDome(idSuffix: string, svgClass: string): string {
  return `
    <svg class="${svgClass}" width="1440" height="920" viewBox="0 0 1440 920" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <filter id="dome_blur_${idSuffix}" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="dome_rim_blur_${idSuffix}" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <linearGradient id="dome_fade_grad_${idSuffix}" x1="720" y1="60" x2="720" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="white" stop-opacity="1" />
          <stop offset="0.58" stop-color="white" stop-opacity="1" />
          <stop offset="0.86" stop-color="white" stop-opacity="0.25" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <mask id="dome_fade_mask_${idSuffix}">
          <rect x="0" y="0" width="1440" height="920" fill="url(#dome_fade_grad_${idSuffix})" />
        </mask>
        <radialGradient id="dome_grad_${idSuffix}" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 150) rotate(90) scale(720 720)">
          <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.95"/>
          <stop offset="0.45" stop-color="#F6F8FC" stop-opacity="0.88"/>
          <stop offset="0.82" stop-color="#ECF1F7" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#E4EBF4" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <g mask="url(#dome_fade_mask_${idSuffix})">
        <path d="M1400 880C1400 770 1382 662 1347 564C1312 466 1260 378 1195 304C1130 230 1052 171 968 132C884 96 802 84 720 84C638 84 556 96 472 132C388 171 310 230 245 304C180 378 128 466 93 564C58 662 40 770 40 880H1400Z" fill="url(#dome_grad_${idSuffix})" filter="url(#dome_blur_${idSuffix})"/>
        <path d="M1380 820C1380 715 1362 612 1328 518C1294 424 1245 340 1183 270C1121 200 1047 144 966 108C885 78 802 74 720 74C638 74 555 78 474 108C393 144 319 200 257 270C195 340 146 424 112 518C78 612 60 715 60 820" stroke="rgba(255,255,255,0.65)" stroke-width="1.5" fill="none" filter="url(#dome_rim_blur_${idSuffix})"/>
      </g>
    </svg>
  `;
}
