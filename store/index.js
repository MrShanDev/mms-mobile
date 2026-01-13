import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 
 使用方法：
 
 第一步：
 import {mapState,mapMutations} from 'vuex';
 
 第二步：
 mutation部分函数调用，需要加载函数，PS：login  支持多个：数组方式
 methods: {
	...mapMutations(['login'])
 },
 
 【调用】 this.login({对象});
  this.login(result.data);
  uni.navigateBack();
 
 第三步：
 state对象的调用
 computed:{
	  ...mapState(['userInfo']),
 },
 
 【调用】 this.userInfo
  console.log(this.userInfo);  
  //可以看做是 data对象内的成员属性 直接调用
 
 */

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {
			"id": "",
			"nickname": "",
			"account": "",
			"sex": 0,
			"phone": "",
			"password": "",
			"headPortrait": "",
			"lastLoginIp": "",
			"token": ""
		},
		historyList: [],
		versionInfo: {},
		prompt: false,
		routeMember: [],
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			console.log('Vuex状态更新 - 用户信息：', provider);
			uni.setStorage({ key: 'userInfo', data: provider })
		},
		// 赋值 this.login(result.data);
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({ key: 'userInfo' })
			uni.getStorageSync("userInfo")
		},
		setTabbar(state, provider) {
			state.tabbarData = provider;
		},
		// 历史搜索
		pushHistoryList(state, data) {
			if (state.historyList.filter(item => item == data).length > 0) {
				return false;
			}
			state.historyList.push(data)
			uni.setStorage({ key: 'historyList', data: state.historyList })
		},
		// 清空
		removeHistory(state) {
			uni.removeStorage({ key: 'historyList' })
			state.historyList = []
		}
	},
	actions: {
		async getVersion(context) {
			const appUpgrade = (params, header) => uni.$u.http.get('/api/appUpgrade/appUpgrade', { "custom": { "auth": true }, params, header })
			let platform = uni.getSystemInfoSync().platform;
			let type = '2';
			if (platform === 'ios') { type = "1" }
			if (platform === 'android') { type = "2" }
			await appUpgrade({ type: type }).then(res => {
				context.commit('setVersion', res.data[0])
			})
		}
	}
})

export default store
