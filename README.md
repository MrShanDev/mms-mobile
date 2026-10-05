# mms-mobile（移动端 / uni-app）

[English](README.en.md) | 简体中文

`mms-mobile` 是 **MMS 的移动端应用**，基于 **uni-app（Vue 2）** 开发，一套代码编译到 **App（Android / iOS）**、**微信小程序**、**抖音小程序** 等多端。当前是一个 C 端点餐/会员类应用：首页、点餐、订单、我的四个 Tab 页，含微信登录与网页容器。

- 仓库：<https://gitee.com/LumeCode/mms-mobile>（公开）
- 后端对接：`mms` 开放接口，API 地址集中在 `common/utils.js` 的 `baseUrl`

---

## 技术栈

- uni-app（`manifest.json` 中 `vueVersion: 2`）
- UI 组件：`uview-ui` / `uv-ui-tools` / `uv-waterfall`（`uni_modules/`）
- 业务组件：`mms-login`（微信登录）、`vk-data-goods-sku-popup`（SKU 弹窗）
- 自研组件库：`components/sumer-components`（easycom 自动注册，前缀 `sumer-`）

## 环境要求

- **HBuilderX**（推荐最新版；本项目为 HBuilderX 工程，`package.json` 不含依赖，无需 npm install）
- 微信开发者工具（调试微信小程序时）

## 支持的运行端

| 端 | 说明 |
|----|------|
| App（`app-plus`） | Android / iOS，HBuilderX 云打包或本地打包 |
| 微信小程序（`mp-weixin`） | 已配置 appid（见 `manifest.json`） |
| 抖音小程序（`mp-toutiao`） | 已配置 appid（见 `manifest.json`） |

---

## 快速开始

1. 用 **HBuilderX** 导入本目录（`文件 → 导入 → 从本地目录导入`）
2. 修改 `common/utils.js` 中的 `baseUrl` 指向你的后端环境
3. 在 HBuilderX 中选择运行目标：
   - **运行 → 运行到浏览器 / 手机或模拟器**（App / H5）
   - **运行 → 运行到小程序模拟器 → 微信开发者工具**（需先在微信开发者工具中开启服务端口）

## 页面结构（`pages.json`）

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `pages/index/index` | TabBar 页 |
| 点餐 | `pages/meal/meal` | TabBar 页 |
| 订单 | `pages/order/order` | TabBar 页 |
| 我的 | `pages/me/me` | TabBar 页 |
| 网页容器 | `pages/webview/webview` | 内嵌 H5 |
| 微信登录 | `pages/login/login/weixinLoging` | 微信授权登录 |

---

## 发布

- **App**：HBuilderX → 发行 → 原生 App-云打包（或本地打包）
- **微信小程序**：HBuilderX → 发行 → 小程序-微信，然后在微信开发者工具中上传
- **抖音小程序**：HBuilderX → 发行 → 小程序-抖音

## License

MIT；详见 [LICENSE](LICENSE) 文件。
