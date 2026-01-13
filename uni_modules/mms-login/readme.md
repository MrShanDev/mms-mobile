# mms-login

### 【开箱即用】微信小程序手机号授权
### 插件名称：`mms-login`
### 插件类型：`通用组件`
### 作者：`XiJue`

### 介绍

> 一款简单的手机授权组件，可以用来注册，登录使用.

### 使用

```html
<!-- 微信登录 -->
<mms-login v-if="loginShow" ></mms-login>
```

```js
export default {
	data() {
		return {
			loginShow:false,
		}
	}
}			
```

## API

- 组件内有一个登录接口 ： `import {weixinLogin} from '@/common/http/api.js'`
- 全局状态使用的是：Vuex

### Props

| 参数                   | 说明                                                | 类型      | 默认值    | 可选值        |
|------------------------|----------------------------------------------------|---------|--------|------------|
| isJump                | 登录/注册结束后是否跳转到首页             | Boolean | false  | true、false |

