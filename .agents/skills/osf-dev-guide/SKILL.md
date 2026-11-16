---
name: osf-dev-guide
description: >-
  OSF 歐舒福生技官網開發準則。
  每次開發前必須讀取此 Skill，確保所有改動符合設計規範、技術架構與互動準則。
  涵蓋：UI 還原規則、色彩字型規範、元件保護原則、效能考量、技術棧。
---

# OSF 歐舒福生技官網 — 開發準則 (Dev Guide)

## 1. 依圖開發規則（最高優先）

**每次用戶提供截圖或設計稿，必須 100% 忠實還原，不得自行發揮。**

- ❌ 不得自行增加設計稿中沒有的元素（例如：額外的圖示、裝飾線、卡片陰影）
- ❌ 不得修改圖片的顯示尺寸、object-fit 行為，除非用戶明確要求
- ❌ 不得自行增加圓角（border-radius）、漸層、動畫，除非截圖中有
- ❌ **設計稿/截圖上的滑鼠游標箭頭（Mouse Cursor Arrow）僅代表 Hover 或點擊狀態的互動示意，絕對不需要在網頁 DOM 畫面上繪製/刻出該游標箭頭！**
- ❌ **絕對禁止頁面出現水平滾動條或左右晃動（No Horizontal Scroll / Overflow）**！所有頁面、區塊及背景動畫元素必須嚴格受控於 `overflow-x: hidden` 與 `max-width: 100%` 內，確保在任何解析度下滑動皆絕對平穩。
- ✅ **全站需實現完整 RWD 響應式排版，絕不破版**！
- ✅ **設計稿三尺寸斷點 (Breakpoints)**：
  - **Desktop 桌面端**：`1440px`
  - **Tablet 平板端**：`768px`
  - **Mobile 手機端**：`375px`
  - *其餘中介與極端尺寸，需使用 flex / grid / fluid layout 自動平滑微調適應。*
- ✅ **全站為雙語系架構（繁體中文 / EN）**：所有頁面內容、導覽列、按鈕、頁尾均需支援點擊 Header `中文 | EN` 時即時切換雙語系。
- ✅ 文字文案必須與截圖完全一致，不得自行翻譯或重新措辭
- ✅ 顏色、字型大小、字重、間距需與截圖目視一致
- ✅ 若截圖不清晰，必須先詢問用戶，不得自行假設

### 🧩 依圖開發流程：二階段切片式開發（必嚴格執行）

當用戶提供整頁設計進行新頁面開發時，必須依序執行以下二階段：

```
[階段一：大圖輪廓與分區] ➔ [用戶提供各區詳細截圖] ➔ [階段二：逐區細刻與三端 RWD]
```

#### 階段一：整頁大圖 ➔ 輪廓分區與架構骨架 (Outline & Skeleton)
1. **分析大圖整體佈局**：辨識頁面包含哪些功能區塊（例如：Hero、特色亮點、核心技術/規格表、橫幅 Slogan、臨床文獻/見證、CTA 行動呼籲等）。
2. **建立分區容器骨架**：
   - 建立頁面檔案（如 `src/pages/{page}.ts` 與 `{page}.css`）。
   - 統一 class 命名空間前綴（如 Ezechbone 頁面使用 `ezb-`，OsseoFuse 頁面使用 `osf-` 等）。
   - 在 DOM 結構中先建立各 `<section class="{prefix}-section-{name}">` 區塊容器與大致背景。
3. **主動回報分區清單**：向用戶清晰列出分區規劃清單（Section 1～N 的主題與範圍），請用戶針對各區塊提供「詳細截圖」以進入階段二。

#### 階段二：分區詳細截圖 ➔ 逐區刻畫與三端 RWD 適配 (Detailed Crafting)
1. 根據用戶提供的每一區詳細截圖，精確刻畫該區的標題、內文、排版、按鈕與微互動。
2. **三端版型嚴格對齊**：用戶會提供電腦版（Desktop 1440px）、平板（Tablet 768px~1024px）與手機版（Mobile 375px）。每刻一個分區，必須同步完成三端 RWD，確保排版完全符合截圖比例且無任何水平滾動條。

---

### 🖼️ 圖片路徑預留規範（嚴禁自行產圖，路徑先行，用戶填入）

**🚨 最高原則：絕對禁止 AI 自行產圖、裁切截圖或合成產出實體圖片檔案！**
開發過程中尚未有實際圖片時，**一律只放 Path（路徑）與取好檔名（Filename）預留於程式碼中**，由用戶根據路徑放置實際圖檔至對應目錄。

1. **嚴禁產圖行為**：
   - ❌ **嚴禁使用 Python/腳本或其他工具從截圖裁切、縮放或合成產出圖片檔案**。
   - ❌ **嚴禁自行調用生圖工具生成任何假圖/素材圖**。
2. **程式碼中預留標準路徑與檔名**：
   - 圖片一律使用語意化結構路徑，例如：`/images/{page-id}/{descriptive-name}.{ext}`（例：`/images/osseofuse/license-cert.png`、`/images/osseofuse/cta-tablet-user.jpg`）。
   - 程式碼中必須設定好對應的 `alt`、`loading="lazy"`、寬高比例與容器樣式（`object-fit: contain` 或 `cover`），並加上防破圖處理（如 `onerror="this.parentElement.classList.add('img-placeholder')"` 或 `onerror="this.style.display='none'"`），確保在實際圖片放入前**版型骨架完整不破版**。
3. **回報圖片需求與放置清單（必附表格）**：
   - 開發完成或調整分區後，必須在回覆中提供「圖片路徑與檔名清單表格」，讓用戶一目了然該放置何種圖檔：
     | 存放路徑 (Directory) | 建議檔名 (Filename) | 完整引用路徑 (Path) | 對應區塊 | 圖片用途與格式建議 |
     |---------------------|--------------------|-------------------|----------|-------------------|
     | `public/images/osseofuse/` | `license-cert.png` | `/images/osseofuse/license-cert.png` | 第 7 區許可證 | 醫療器材許可證與專利證書 (PNG) |
     | `public/images/osseofuse/` | `cta-tablet-user.jpg` | `/images/osseofuse/cta-tablet-user.jpg` | 第 8 區會員 CTA | 操作平板情境照 (JPG/WebP) |

---

### 🌐 雙語系（中文 / EN）文案填寫與缺漏處理規範

全站頁面均須支援即時中英雙語系切換（監聽全域事件 `langchange`）。針對文案填寫與缺漏情況，嚴格遵守以下準則：

#### 1. 雙語資料結構
- 頁面文字一律集中管理於雙語字典或介面中（如 `PAGE_I18N = { zh: { ... }, en: { ... } }` 或 `interface BilingualText { zh: string; en: string; }`）。
- 切換語系時透過 `window.addEventListener('langchange', ...)` 即時更新文字，無需重新整理頁面。

#### 2. 文案缺漏填入規則（如何填入？）
| 情況 | 中文 (zh) 填入方式 | 英文 (en) 填入方式 | 處理準則與標記 |
|------|-------------------|-------------------|----------------|
| **雙語皆完整提供** | 依中文截圖 100% 填入 | 依英文截圖 100% 填入 | 完全忠實還原，不擅自修改 |
| **僅有中文，缺少英文**<br>*(最常見)* | 依中文截圖 100% 填入 | **優先以繁中原文作為 Fallback 暫代**；若涉及專有名詞/品牌（如 Ezechbone, OsseoFuse, 1-Drill），直接使用該英文名。 | 1. 程式碼加上註解：`/* TODO: 待補英文翻譯 (Missing EN) */`<br>2. **主動在回覆中列出「待補英文清單」**，並附上專業生技/醫療英譯建議供用戶審閱確認。 |
| **僅有英文，缺少中文** | 暫以英文原文保留作為 Fallback | 依英文截圖 100% 填入 | 1. 程式碼加上註解：`/* TODO: 待補中文翻譯 (Missing ZH) */`<br>2. 主動提供繁中建議翻譯供用戶確認，不擅自定稿。 |

#### 3. 英文版排版防破版機制
- 英文單字長度變異大，文字容器與卡片標題必須加上 `word-break: break-word;` 或 `hyphens: auto;`。
- 中文文字依規定套用 `noOrphan()` / `noOrphanLines()`；英文文字搭配 `text-wrap: pretty` 自然折行，避免單字溢出或造成卡片高度崩塌。

---

### 📸 截圖版本辨識規則（必遵守）

**每次用戶傳入截圖，必須先主動判斷並說明是哪個版本：**

| 版本 | 寬度範圍 | 對應 CSS 斷點 |
|------|----------|--------------|
| Desktop（桌面） | ≥ 1024px（設計稿 1440px） | 全域樣式，無 `@media` 包覆 |
| Pad（平板） | 768px ～ 1024px | `@media (max-width: 1024px)` |
| Mobile（手機） | ≤ 768px（設計稿 375px） | `@media (max-width: 768px)` 或 `@media (max-width: 480px)` |

### 🚫 禁止孤字規則（嚴格執行，所有斷點皆適用）

**任何文字段落（標題、內文、卡片說明、按鈕、表格文字）的最後一行，絕對不得只剩「一個字」或「一個字＋標點」。**

- ❌ 錯誤範例：`…均展現穩定止血效` ／ `應。`（最後一行孤字）
- ✅ 必須在 Desktop / Pad / Mobile 三個斷點，以及中介寬度下都檢查一次
- ✅ 實作方式（兩層保險，缺一不可）：
  1. **TS**：所有段落文字一律經過 `src/utils/text.ts` 的 `noOrphan()`（單段）或 `noOrphanLines()`（多段 `<br />`），將結尾 3 字＋標點包進 `<span class="nowrap-tail">`（`white-space: nowrap`，定義於 `style.css`）
  2. **CSS**：頁面層級對 `h1~h4, p, li` 設定 `text-wrap: pretty`
- ✅ 若設計稿本身換行位置會產生孤字，需先告知用戶，不得放任
- ✅ 設計稿有指定換行（每行固定內容）時，以 `<br />` 或區塊 `span` 分行，各行再各自套用 `noOrphan()`

### 📌 頁首與導覽規範（必遵守）

- ✅ **Header 頁首**：全站固定於視窗最上方（`position: fixed`），背景依頁面深淺模式切換（深色頁面為半透明深海軍藍，淺色頁面如聯絡我們、隱私條款、臨床技術支持為白底深字）。
- ✅ **麵包屑（Breadcrumb）**：位於頁面左上方，**隨頁面內容自然流動排版（不固定）**，向下滾動時隨頁面內容自然移動。
- ✅ **內容流動**：頁面內容（麵包屑、Hero、主要卡片與列表）皆依正常文檔流由上至下垂直排版，隨視窗平滑滾動。

---


## 2. Style Guide — 色彩系統

所有顏色皆使用 src/style.css 中定義的 CSS 變數，禁止直接寫 hex 色碼（除非 style.css 尚未定義）。

| CSS 變數 | 色碼 | 用途 |
|---------|------|------|
| --color-navy | #071322 | 主背景（深海軍藍） |
| --color-navy-darkest | #060e18 | Footer 背景 |
| --color-navy-card | #0c2035 | 深色卡片背景 |
| --color-primary | #0a5e6c | 主品牌色 |
| --color-primary-light | #0e7a8d | 淺主色 |
| --color-accent | #1db2a0 | 翡翠綠 Accent |
| --color-accent-light | #3ecfbd | 亮 Accent |
| --color-blue-btn | #1875c7 | 藍色按鈕 |
| --color-text-light | #ffffff | 深色區塊上的白字 |
| --color-text-light-sub | rgba(255,255,255,0.65) | 次要白字 |
| --color-bg-light | #f7f9fc | 淺色區塊背景 |
| --color-text-dark | #121d28 | 淺色區塊上的深字 |
| --color-text-dark-muted | #5e6d7d | 次要深字 |

字型：
- heading/body：Noto Sans TC、Inter、-apple-system、sans-serif
- mono：Inter、monospace

版面：
- --container-max: 1240px
- --header-height: 74px（手機 64px）

---

## 3. 元件保護原則

以下元件已由用戶確認定稿，在沒有用戶明確指示的情況下，絕對不得修改：

### Header（已鎖定）

- Logo：首頁使用白色版本 `/images/logo-white.png`；除了首頁以外的其他所有頁面，一律統一使用藍綠色彩色版本 `/images/logo.png`（嚴禁使用 CSS `filter: invert()` 轉為全黑色）
- 導覽項目（**順序絕對不可更動，`OSSEOFUSE` 必須固定在最左邊第一個**）：`OSSEOFUSE` / `EZECHBONE` / `臨床技術支持` / `聯絡我們` / `會員登入` / `中文｜EN`
- 首頁最頂部為完全透明背景（Hero Banner 頂格貼齊視窗頂部無空隙），向下滾動後切換為深海軍藍毛玻璃半透明背景
- 右側：語系切換按鈕（`中文 / EN`），RWD 依 Desktop（完整導覽＋語系）、Pad（語系＋漢堡選單）、Mobile（僅漢堡選單）呈現

### Footer（已鎖定）

- Logo：/images/logo-white.png
- 公司簡介文字不可更改
- 兩主欄固定（3 欄 Layout）：
  - 產品（OsseoFuse 一鑽植牙 / Ezechbone 甦骨粒）
  - 服務（臨床技術支持 / 聯絡我們 / 會員登入）
- 版權文字：© YYYY 歐舒福生技股份有限公司 All Rights Reserved. | 隱私條款

### 規則

- 若開發其他頁面需要動到 header 或 footer，必須先詢問用戶才能修改
- 若 style.css 的全域樣式會影響已定稿元件，必須先說明影響範圍再動手

---

## 4. 圖片管理規範

### 存放位置

```
public/images/
├── logo-white.png
├── logo.png
├── hero.jpg
├── hero-patient.jpg
├── about-model.jpg
├── product-osseofuse.jpg
├── product-ezechbone.jpg
├── product-box.jpg
├── surgical-kit.jpg
├── event-workshop.jpg
└── gallery/
    ├── exhibition/
    │   ├── 2023-taipei-dental-expo/   # 7 張
    │   ├── 2024-taipei-dental-expo/   # 3 張
    │   ├── 2025-taipei-dental-expo/   # 7 張
    │   └── 2026-taipei-dental-expo/   # 4 張
    ├── workshop/
    │   ├── 2023-osseofuse-sinus-course/              # 3 張
    │   └── 2026-osseofuse-immediate-implant-and-dinner/ # 5 張
    └── symposium/
        ├── 2025-taichung-dental-case-sharing/        # 2 張
        ├── 2026-osseofuse-12-whats/                  # 2 張
        └── osseofuse-member-lecturer-sharing/        # 3 張
```

### 命名規則

- Gallery 照片：{folder-id}-{02d}.jpg（例：2023-taipei-dental-expo-01.jpg）
- 新增活動：在 home.ts → initGallerySlider() 的 events[] 陣列新增一筆，填寫 imageCount

### 效能原則

- 所有 Gallery 圖片必須加 loading="lazy"
- Hero 大圖建議壓縮至 300KB 以下
- 使用 object-fit: cover + 固定 wrapper，避免 CLS
- 商品圖使用 object-fit: contain + 留白 wrapper，確保完整顯示、不裁切、不放大

---

## 5. 技術架構

### 前端

| 項目 | 技術 |
|------|------|
| 框架 | Vite 5 + TypeScript + Vanilla JS |
| 路由 | Hash-based SPA（#/ 開頭） |
| 樣式 | Vanilla CSS（CSS 變數） |
| 部署 | Cloudflare Pages |

### 後端服務

| 功能 | 服務 |
|------|------|
| 登入 / 資料庫 | Firebase (Auth + Firestore) |
| 會員審核認證信 | Resend（寄送至醫師個人信箱） |
| 表單提交通知 | Cloudflare Email Routing（轉寄至內部客服信箱） |

### 路由對照表

```
#/                        首頁
#/osseofuse               OsseoFuse 一鑽植牙
#/osseofuse/certificates  專利認證
#/ezechbone               Ezechbone 甦骨粒
#/clinical-support        臨床技術支持
#/login                   會員登入
#/register                醫師會員註冊
#/forgot-password         忘記密碼
#/contact                 聯絡我們
#/privacy                 隱私條款
```

### 目錄結構

```
src/
├── main.ts
├── router.ts
├── style.css             # 全站設計系統（禁止覆蓋已定義變數）
├── components/
│   ├── header.ts         # ✅ 已鎖定，勿改
│   └── footer.ts         # ✅ 已鎖定，勿改
├── pages/
│   ├── home.ts / home.css
│   ├── osseofuse.ts
│   ├── ezechbone.ts
│   ├── certificates.ts
│   ├── clinical-support.ts
│   ├── login.ts
│   ├── register.ts
│   ├── forgot-password.ts
│   ├── contact.ts
│   └── privacy.ts
└── data/
    └── gallery.ts
```

---

## 6. UX 互動準則

- 動畫時長：基礎 transition 320ms，慢快慢使用 cubic-bezier(0.65, 0, 0.35, 1)
- Hover 效果：必須有回饋（顏色變化 or translateY），不得無反應
- Slider：自動播放 4～6 秒，點擊後重置計時器
- 圖片載入：必須有 onerror fallback，載入失敗不得破版
- RWD 斷點：
  - Desktop：> 1024px（3 欄）
  - Tablet：768px ～ 1024px（2 欄）
  - Mobile：< 768px（1 欄，按鈕全寬）
- 字型最小值：body 0.82rem，label/badge 0.68rem

---

## 7. 開發前確認清單

每次收到新需求，必須先確認：

- [ ] 是否有提供截圖？有截圖一律依照截圖開發，不自行設計
- [ ] 是否會影響 header 或 footer？有則先詢問
- [ ] 是否需要新增圖片？告知正確存放路徑與命名規則
- [ ] 是否涉及 Firebase / Resend / Cloudflare 整合？先規劃 API 再動手
- [ ] 是否有效能疑慮（大量圖片、API 呼叫）？優先考量 lazy load / 快取策略
