<div align="center">
   <br/>
   <a href="https://mmsadmin.cn">
     <img width="150" src="https://mmsadmin.cn/logo.png" alt="MMS logo">
   </a>
   <h1>Modular Management System (MMS)</h1>
   <p><strong>mms-mobile · Mobile (uni-app)</strong></p>
   <p><a href="https://mmsadmin.cn/">📘 Online Docs · mmsadmin.cn</a> · <a href="https://gitee.com/LumeCode/mms-mobile">Gitee</a> · <a href="https://github.com/MrShanDev/mms-mobile">GitHub</a></p>
   <br/>
</div>

English | [简体中文](README.md)

`mms-mobile` is the **mobile app** of MMS, built with **uni-app (Vue 2)**. One codebase compiles to **App (Android / iOS)**, **WeChat Mini Program**, **Douyin (TikTok) Mini Program**, and more. It is currently a C-end food-ordering / membership app with four tab pages (Home, Order Meal, Orders, Me), WeChat login, and an embedded web container.

- Repository: <https://gitee.com/LumeCode/mms-mobile> (public)
- Backend: open APIs of `mms`; the API endpoint is centralized in `baseUrl` inside `common/utils.js`

---

## Tech Stack

- uni-app (`vueVersion: 2` in `manifest.json`)
- UI components: `uview-ui` / `uv-ui-tools` / `uv-waterfall` (in `uni_modules/`)
- Business components: `mms-login` (WeChat login), `vk-data-goods-sku-popup` (SKU popup)
- In-house component library: `components/sumer-components` (auto-registered via easycom, prefix `sumer-`)

## Requirements

- **HBuilderX** (latest recommended; this is an HBuilderX project — `package.json` has no dependencies, so no `npm install` is needed)
- WeChat DevTools (when debugging the WeChat Mini Program)

## Supported Targets

| Target | Notes |
|--------|-------|
| App (`app-plus`) | Android / iOS via HBuilderX cloud or local packaging |
| WeChat Mini Program (`mp-weixin`) | appid configured (see `manifest.json`) |
| Douyin Mini Program (`mp-toutiao`) | appid configured (see `manifest.json`) |

---

## Quick Start

1. Import this folder into **HBuilderX** (`File → Import → From local directory`)
2. Point `baseUrl` in `common/utils.js` to your backend environment
3. Pick a run target in HBuilderX:
   - **Run → Run to browser / device or emulator** (App / H5)
   - **Run → Run to Mini Program simulator → WeChat DevTools** (enable the service port in WeChat DevTools first)

## Page Structure (`pages.json`)

| Page | Path | Description |
|------|------|-------------|
| Home | `pages/index/index` | Tab page |
| Order Meal | `pages/meal/meal` | Tab page |
| Orders | `pages/order/order` | Tab page |
| Me | `pages/me/me` | Tab page |
| Web container | `pages/webview/webview` | Embedded H5 |
| WeChat login | `pages/login/login/weixinLoging` | WeChat OAuth login |

---

## Release

- **App**: HBuilderX → Publish → Native App - Cloud Package (or local packaging)
- **WeChat Mini Program**: HBuilderX → Publish → Mini Program - WeChat, then upload in WeChat DevTools
- **Douyin Mini Program**: HBuilderX → Publish → Mini Program - Douyin

## License

MIT; see the [LICENSE](LICENSE) file.
