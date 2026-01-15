<script>
	/**
	 * vuex管理登陆状态，具体可以参考官方登陆模板示例
	 */
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				amapPlugin: null,
				key: '88b5d9ae0cec3f6c102a0c7a1a616f80'
			}
		},
		methods: {
			...mapMutations(['login']),
			// 打开App没有网络提示
			isHaveNetwork() {
				uni.getNetworkType({
					success: (res) => {
						if (res.networkType == 'none') {
							uni.showModal({
								title: '没有网络',
								content: '是否重新连接？',
								success: (res) => {
									if (res.confirm) {
										this.isHaveNetwork()
									}
								}
							})
						}
					}
				})
			},
			//获取位置信息
			async getLocationInfo() {
				return new Promise((resolve) => {
					//位置信息默认数据
					let location = {
						longitude: 0,
						latitude: 0,
						province: "",
						city: "",
						area: "",
						street: "",
						address: "",
					};
					uni.getLocation({
						type: "gcj02",
						success(res) {
							location.longitude = res.longitude;
							location.latitude = res.latitude;
							// 腾讯地图Api
							//import QQMapWX from "common/qqmap-wx-jssdk.min.js"
							// const qqmapsdk = new QQMapWX({
							// 	key: 'TDXBZ-ELKYX-OQJ4D-ZTJ4V-K7CR5-TLFN7' //这里填写自己申请的key
							// });
							// qqmapsdk.reverseGeocoder({
							// 	location,
							// 	success(response) {
							// 		let info = response.result;
							// 		console.log(info);
							// 		location.province = info.address_component.province;
							// 		location.city = info.address_component.city;
							// 		location.area = info.address_component.district;
							// 		location.street = info.address_component.street;
							// 		location.address = info.address;
							// 		resolve(location);
							// 	},
							// });
						},
						fail(err) {
							console.log(err)
							resolve(location);
						},
					});
				});
			}
		},
		//全局对象
		globalData: {
			//获取方式：getApp().globalData.qq
			qq: '联系方式:942879858',
			customBar: 45, // 获取设备顶部导航栏，状态栏高度
			startBg: null
		},
		computed: {
			...mapState(['userInfo']),
		},
		onLaunch: function() {
			// ========== 初始化 ====================
			// uni.hideTabBar()
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); //竖屏正方向锁定
			// #endif
			var _self = this;
			// const location =  this.getLocationInfo();
			// console.log(this.position)
			// 获取设备顶部导航栏，状态栏高度
			uni.getSystemInfo({
				success: (e) => {
					// this.compareVersion(e.SDKVersion, '2.5.0')
					let statusBar = 0 //状态栏高度
					let customBar = 0 // 状态栏高度 + 导航栏高度  
					let navbar = 0 // 自定义标题与胶囊对齐高度


					// #ifdef MP
					statusBar = e.statusBarHeight
					customBar = e.statusBarHeight + 45
					if (e.platform === 'android') {
						this.$store.commit('SET_SYSTEM_IOSANDROID', false)
						customBar = e.statusBarHeight + 50
					}
					// #endif


					// #ifdef MP-WEIXIN



					statusBar = e.statusBarHeight
					const custom = wx.getMenuButtonBoundingClientRect()
					customBar = custom.bottom + custom.top - e.statusBarHeight

					navbar = (custom.top - e.statusBarHeight) * 2 + custom.height
					// #endif


					// #ifdef MP-ALIPAY
					statusBar = e.statusBarHeight
					customBar = e.statusBarHeight + e.titleBarHeight
					// #endif


					// #ifdef APP-PLUS
					console.log('app-plus', e)
					statusBar = e.statusBarHeight
					customBar = e.statusBarHeight + 45
					// #endif


					// #ifdef H5
					statusBar = 0
					customBar = e.statusBarHeight + 45
					// #endif
					// console.log(statusBar)
					// console.log(customBar)
					_self.globalData.statusBar = statusBar;
					_self.globalData.customBar = customBar;


				}
			})
			
			
			autoUpdate();

			function autoUpdate() {
				// 获取小程序更新机制兼容 
				if (uni.canIUse('getUpdateManager')) {
					const updateManager = uni.getUpdateManager()
					// 检查是否有新版本发布
					updateManager.onCheckForUpdate(function(res) {
						if (res.hasUpdate) {
							//小程序有新版本，则静默下载新版本，做好更新准备
							updateManager.onUpdateReady(function() {
								uni.showModal({
									title: '更新提示',
									content: '新版本已经准备好，是否重启应用？',
									success: function(res) {
										if (res.confirm) {
											//新的版本已经下载好，调用 applyUpdate 应用新版本并重启
											updateManager.applyUpdate()
										} else if (res.cancel) {
											//如果需要强制更新，则给出二次弹窗，如果不需要，则这里的代码都可以删掉了
											uni.showModal({
												title: '温馨提示',
												content: '我们已经做了新的优化，请及时更新哦~',
												showCancel: false, //隐藏取消按钮，也可显示，取消会走res.cancel，然后从新开始提示
												success: function(res) {
													//第二次提示后，强制更新           
													if (res.confirm) {
														// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
														updateManager
															.applyUpdate()
													} else if (res.cancel) {
														//重新回到版本更新提示
														autoUpdate()
													}
												}
											})
										}
									}
								})
							})
							// 新的版本下载失败
							updateManager.onUpdateFailed(function() {
								uni.showModal({
									title: '温馨提示',
									content: '新版本已经上线，请您删除当前小程序，重新搜索打开',
								})
							})
						}
					})
				} else {
					// 提示用户在最新版本的客户端上体验
					uni.showModal({
						title: '温馨提示',
						content: '当前微信版本过低，可能无法使用该功能，请升级到最新版本后重试'
					})
				}
			}


		},
		onLoad() {
			
		}
	}
</script>

<style lang="scss">
	/*
		全局公共样式和字体图标
	*/
	@import "@/uni_modules/uview-ui/index.scss";
	@import "common/utils.css";
	@import "static/iconfont/iconfont.css";
	// @import "common/event.css";

	page {
		background: $page-color-base;
	}

	.password {
		position: absolute;
		right: 20rpx;
		top: 18rpx;
		font-size: 38rpx;
		color: #89BAFC;
		z-index: 10;
	}

	view {
		box-sizing: border-box;
	}

	.card {
		background-color: #fff;
		padding: 26rpx;
		margin: 26rpx 0;
		border-radius: 8rpx;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.status {
		height: var(--status-bar-height);
		// background-color: #ffffff;
	}
	::v-deep .u-safe-bottom{
		padding: 0rpx !important;
	}
</style>