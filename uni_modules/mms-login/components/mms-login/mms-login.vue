<template>
	<view>
		<u-popup :show="show" @close="close" @open="open" :closeable="true" :closeOnClickOverlay="false" >
			<view class="content-4 f-y p-t-20 p-b-20">
				<view class="login_policy">
					<text class="iconfont select" style="color:#43ad47;vertical-align: middle;font-weight: 700;"
						@click="isArgee = false" v-if="isArgee"></text>
					<text class="iconfont noSelect" style="color:#B3BBC0;vertical-align: middle;"
						@click="isArgee = true" v-else></text>
					<text class="login_policy_desc">
						未注册 {{appConfig.name}} 的手机号，登陆时将自动注册，且代表 您已同意并阅读
						<text @tap="$ut.jumpTo('/pages_Me/article/article','to',{id:4,title:'用户协议'})">《用户协议》</text>与
						<text
							@tap="$ut.jumpTo('/pages_Me/article/article','to',{id:2,title:'隐私协议'})">《隐私协议》</text></text>
				</view>
				<view class="" style="width: 80%;margin:auto;">
					<u-button v-if="isArgee" type="primary" open-type="getPhoneNumber" @getphonenumber="getPhone"
						color="#43ad47" shape="circle" text="手机号快捷登录"></u-button>
					<u-button v-if="!isArgee" type="primary" color="#959595" shape="circle" text="手机号快捷登录"
						@click="goLogin"></u-button>
				</view>
			</view>
		</u-popup>
	</view>

</template>
<script>
	import {
		weixinLogin
	} from '@/common/http/api.js'
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				show:true,
				appConfig: {},
				logo: '/static/img/logo.jpg',
				isArgee: false,
				iisOk: 0,
				weixinInfo: {
					encryptedData: '',
					code: '',
					iv: ''
				}
			}
		},
		props: {
            isJump:{
				type: Boolean,
				default: true
			}
		},
		watch: {

		},
		computed: {},
		created() {
			this.appConfig = this.$ut.configInfo;
		},
		methods: {
			...mapMutations(['login']),
			getPhone(e) {
				this.weixinInfo.iv = e.detail.iv;
				this.weixinInfo.encryptedData = e.detail.encryptedData;
				let mid = this.$ut.get("mId");
				this.weixinInfo.mId = (mid==undefined||mid==null||mid=='')? 0:mid;
				weixinLogin(this.weixinInfo).then(result1 => {
					this.login(result1.data)
					this.$ut.msg("登录成功!");
					this.close();
					if(this.isJump){
						setTimeout(() => {
							uni.$u.route({
								url: 'pages/index/index',
								type: 'switchTab'
							})
						}, 1200)
					}
					
				})
			},
			goLogin() {
				this.$ut.msg("请阅读并同意《用户协议》再登录！")
			},
			open() {
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						this.weixinInfo.code = loginRes.code;
					}
				})
			},
			close() {
				this.show = false
				// console.log('close');
			}
		},

	}
</script>

<style lang="scss" scoped>
	.logo-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 34rpx;
		justify-content: center;
		height: 30vh;

		.logo {
			width: 281rpx;
			height: 277rpx;
			margin-left: auto;
			margin-right: auto;
			margin-top: 100px;

		}
	}

	.weixinlogin_content {
		margin-top: 100rpx;
	}

	.login_policy {
		text-align: center;
		// margin-top: 90rpx;
		padding: 10rpx 0;
		width: 90%;
		margin: 0 auto 34rpx;

		.login_policy_desc {
			font-size: 24rpx;
			color: #B3BBC0;
			margin-left: 8rpx;
			vertical-align: middle;

			text {
				color: #43ad47;
				margin: 0 8rpx;
			}
		}
	}
</style>