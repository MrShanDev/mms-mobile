import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import mixin from './common/mixin'
import './uni.promisify.adaptor'
//设置为 false ，可以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
//设置为app类型，一个整体的项目而不是单个页面或组件
App.mpType = 'app'

const app = new Vue({
	...App
})

// ============================ 自定义 =======================
// uView 挂载
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// 挂载一个全局对象
Vue.prototype.$author = "开发团队:品创网络"
// Vuex 挂载
import store from './store'
Vue.prototype.$store = store;

//挂载工具类
import {utils} from '@/common/utils.js'
Vue.prototype.$ut = utils;

//引入请求封装，将app参数传递到配置中
require('@/common/http/request.js')(app)
// #ifdef MP
// 引入uView对小程序分享的mixin封装
// const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
// Vue.mixin(mpShare)
// #endif
Vue.mixin(mixin)
// ============================ 自定义 =======================

app.$mount()

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif