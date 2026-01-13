import { tokenAout } from '@/common/http/api.js'
export const Mixins = {
	data(){
		return {
			isBack: 1,
		}
	},
	mounted(){
		// console.log(this.isBack, '///')
	},
	// #ifdef APP-PLUS
	onBackPress(event){
		console.log(event, 'event退出',this.isBack)
		if(event.from == 'backbutton'){
			if(this.isBack == 0){
				plus.runtime.quit();
			}
			plus.nativeUI.toast('再滑一次退出应用');
			this.isBack = 0;
			return true;
			// if (uni.getSystemInfoSync().platform === 'ios') { 
			// 	plus.runtime.launchApplication({ action: 'QUIT' }); 
			// }
		}
	},
	// #endif
	onLoad(){
		let userInfo = uni.getStorageSync('userInfo') || '';
		if (!userInfo.id) {
			this.$ut.isClick({
				"type": 1,
				"url": '/pages_Me/login/login'
			})
		}
	},
	// onShow(){
	// 	this.tokenAoutHttp();
	// },
	methods:{
		// 自动登录
		async tokenAoutHttp() {
			await tokenAout({}).then(res => {
				this.login(res.data)
			}).catch(e => {
				this.$ut.msg(e.msg)
				this.$ut.isClick({
					"type": 1,
					"url": '/pages_Me/login/login'
				})
			});
		},
	}
}