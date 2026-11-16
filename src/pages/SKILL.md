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

- Logo：/images/logo-white.png
- 導覽項目（順序不可更動）：首頁 / 產品介紹 / 臨床技術支持 / 聯絡我們 / 會員登入 / 中文｜EN
- 首頁透明背景，滾動或換頁後切換為深海軍藍半透明背景
- 右側：語系切換按鈕（中文｜EN）

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
