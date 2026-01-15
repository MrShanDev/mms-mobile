<template>
	<view class="load-page" :style="{ backgroundImage: 'url(' +imgURL + ')' }">
		<view class="skip" @click="toPage">跳过{{times/1000}}S</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import {
		tokenLogin,
		storeAdvertisingList,
		indexTabbar
	} from '@/common/http/api.js'
	export default {
		data() {
			return {
				imgURL: '',
				showPopup: false,
				isUpdate: false,
				updateUrl: '',
				updateDesc: '',
				schedule: 0,
				times: 3000,
				isEnter: false, // 是否进入，点击跳过按钮后依然执行倒计时进入首页，点击之后就不执行倒计时进入首页
			}
		},
		computed: {
			...mapState(['userInfo', 'hasLogin']),
			dynamicStyle() {
				return {
					'--mybg': `url(${this.paragraphStyle})`, // 将动态值设置给 --mybg
				};
			},
		},
		onLoad() {
			this.storeAdvertisingListHttp();
			this.countDown();
			this.tokenAoutHttp();
		},
		onShow: function() {
			console.log('load show')
		},
		methods: {
			...mapMutations(['login', 'logout', 'setTabbar']),
			toPage() {
				let userInfo = uni.getStorageSync('userInfo') || '';
				// console.log(this.hasLogin,'load',userInfo.id)
				// this.$ut.isClick({
				// 	"type": 1,
				// 	"url": '/pages_Me/login/login'
				// })
				// 进入主页
				uni.$u.route({
					type: 'switchTab',
					url: '/pages/index/index',
				})
				this.isEnter = true;
			},
			// 倒计时
			async countDown() {
				let timer = setInterval(() => {
					this.times -= 1000;
					if (this.times == 0) {
						clearInterval(timer);
						if (!this.isEnter) {
							this.toPage();
						}
					}
				}, 1000);
			},
			//刷新登陆
			async tokenAoutHttp() {
				await tokenLogin({}).then(res => {
					this.login(res.data)
				}).catch(e => {
					this.logout();
				});

			},
			//启动图
			async storeAdvertisingListHttp() {
				await storeAdvertisingList({
					"code": "MOBILESTARTIMG"
				}).then(res => {
					console.log(res)
					if (res.code == 200 && res.data.storeAdvertisingList.length > 0) {
						this.imgURL = res.data.storeAdvertisingList[0].image;
					} else {
						this.toPage();
					}
				}).catch(e => {
					this.toPage();
				})
			},
		}

	}
</script>

<style lang="scss" scope>
	.box {
		width: var(--width);
		height: var(--height);
	}

	.load-page {
		min-height: 100vh;
		// background: var(--mybg);
		/* 使用动态的 CSS 变量 */
		;
		background-size: 100% 100%;
		position: relative;

		.skip {
			width: 126rpx;
			height: 54rpx;
			text-align: center;
			line-height: 54rpx;
			;
			border-radius: 54px 54px 54px 54px;
			border: 3rpx solid rgba(255, 255, 255, 0.5);
			color: #cac8c8;
			position: absolute;
			left: 48rpx;
			top: 120rpx;
		}
	}

	.progressBox {
		padding: 40rpx;
	}
</style>