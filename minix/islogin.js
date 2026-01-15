export const Mixins = {
	onLoad(){
		let userInfo = uni.getStorageSync('userInfo') || '';
		if (!userInfo.id) {
			uni.$u.route({
				url: '/pages_Me/login/login'
			})
		}
	},
}