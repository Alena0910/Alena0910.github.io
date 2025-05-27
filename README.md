# Alena0910.github.io

🔗 [部落格連結](https://alena0910.github.io)

這是我的個人部落格，使用 GitHub Pages 部署，並以 Vue + Nuxt 結合 Markdown 呈現內容。  
CSS framework 採用 **shadcn-vue** 打造現代簡潔的 UI。  
紀錄學習筆記、技術分享與生活點滴。

---

## 🔧 技術棧

- **Vue 3**：用來建構整個前端框架
- **Nuxt 3**：基於 Vue 的全端框架，用於靜態產生與模組化開發
- **shadcn-vue**：基於 Radix UI 的 Vue 組件庫，負責 UI 呈現
- **Markdown-it**：將 Markdown 轉換成 HTML
- **vue-markdown-render**：在 Vue 中渲染 Markdown 的元件
- **highlight.js**：語法高亮工具
- **GitHub Pages**：靜態網站部署平台

---

## 📦 安裝依賴

```bash
npm install markdown-it vue-markdown-render markdown-it-anchor highlight.js --save-dev
```

## 📁 專案結構

```txt
.
├── public/             # markdown 文章存放處
│   └── ...
├── .github/            # GitHub Pages 設定（如 workflows）
│   └── ...
├── assets/             # 圖片
│   └── ...
│   components/         # shadcn-vue 元件
├── pages/              # 頁面
│   └── ...
├── src/
│   ├── components/     # Vue 元件
│   │   └── ...
│   └── utils/
│       └── ...
├── nuxt.config.ts      # Nuxt 設定檔
├── app.vue
└── README.md

```
