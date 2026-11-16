# OSF 歐舒福生技 — 公司官網

醫療器材代理商形象網站，使用 **Vite + TypeScript + Vanilla JS** 開發。

---

## 環境需求

| 工具 | 最低版本 |
|------|---------|
| Node.js | v18+ (建議 v20 LTS) |
| npm | v9+ |

> ⚠️ 本機若為 Node v21.1.0，Vite 5 仍可運行；但建議升級至 v20 LTS 以獲得最佳相容性。

---

## 快速開始

```bash
# 1. 安裝依賴
npm install

# 2. 啟動開發伺服器（預設 http://localhost:5173）
npm run dev
```

開啟瀏覽器前往 **http://localhost:5173** 即可預覽。

---

## 可用指令

| 指令 | 說明 |
|------|------|
| `npm run dev` | 啟動 Vite 開發伺服器（HMR 熱更新） |
| `npm run build` | TypeScript 編譯 + 打包為生產版本（輸出至 `dist/`） |
| `npm run preview` | 預覽已打包的生產版本 |

---

## 目錄結構

```
OSF/
├── index.html                        # 入口 HTML（SEO meta、Google Fonts）
├── package.json
├── tsconfig.json
├── public/                           # 靜態資源（不經編譯直接複製）
│   └── vite.svg
├── src/
│   ├── main.ts                       # 應用入口：註冊路由、組裝 Header/Footer
│   ├── router.ts                     # Hash-based SPA 路由系統
│   ├── style.css                     # 全站 CSS 設計系統（品牌色、字型、間距）
│   ├── vite-env.d.ts                 # Vite 型別宣告
│   ├── components/
│   │   ├── header.ts                 # 頁首導覽列（5 項 + 會員按鈕 + 漢堡選單）
│   │   └── footer.ts                 # 頁尾（公司資訊 / 社群連結 / 隱私條款）
│   └── pages/
│       ├── home.ts                   # 首頁
│       ├── ezechbone.ts              # Ezechbone 產品頁
│       ├── osseofuse.ts              # OsseoFuse 一鑽植牙產品頁
│       ├── certificates.ts           # 專利認證
│       ├── clinical-support.ts       # 臨床技術支持（會員限定）
│       ├── login.ts                  # 會員登入
│       ├── register.ts               # 醫師註冊
│       ├── forgot-password.ts        # 忘記密碼
│       ├── contact.ts                # 聯絡我們
│       └── privacy.ts               # 隱私條款
```

---

## 路由對照表

| 路由 | 頁面 | 說明 |
|------|------|------|
| `#/` | 首頁 | 公司介紹、最新消息、活動花絮、會員招募 |
| `#/ezechbone` | Ezechbone | 一頁式長捲軸（特色／規格／適用／諮詢） |
| `#/osseofuse` | OsseoFuse 一鑽植牙 | 六個 Tab（系統簡介／專利優勢／醫生推薦／產品規格／衛教社群） |
| `#/osseofuse/certificates` | 專利認證 | 三國別、30+ 張證書圖牆 |
| `#/clinical-support` | 臨床技術支持 | 全站文件庫，需登入才可下載 |
| `#/login` | 會員登入 | Email / 密碼登入 |
| `#/register` | 醫師註冊 | 僅限具執業資格之醫師與診所，送出後待審核 |
| `#/forgot-password` | 忘記密碼 | 輸入 Email 重設密碼 |
| `#/contact` | 聯絡我們 | 諮詢表單（含送出完成狀態） |
| `#/privacy` | 隱私條款 | 獨立頁，同時可作為彈窗內容共用 |

---

## 開發備註

- **路由機制**：使用 hash-based SPA 路由（`#/path`），不需後端配合。
- **CSS 設計系統**：所有設計 token（色彩、間距、圓角、陰影）定義在 `src/style.css` 的 `:root` 中。
- **RWD**：Header 在 768px 以下自動切換為漢堡選單；Footer 改為單欄排列。
- **字型**：Noto Sans TC（中文）+ Inter（英數），透過 Google Fonts CDN 載入。
