<template>
	<view class="weixinlogin_content">
		<u-navbar :autoBack="true" title="微信登录"></u-navbar>
		<view class="logo-view">
			<u-image :src="appConfig.logo" width="350rpx" height="70rpx" radius="8"></u-image>
		</view>
		<view class="login_policy">
			<view class="radio-container">
				<u-radio-group v-model="isArgee" placement="row">
					<u-radio :name="true" activeColor="#ff2727">
						<text class="login_policy_desc">
							未注册 {{appConfig.name}} 的手机号，登陆时将自动注册，且代表 您已同意并阅读
							<text @tap.stop="$ut.jumpTo('/pages_Article/articleDetails/articleDetails?id=1980815793850224641')">《用户协议》</text>与
							<text @tap.stop="$ut.jumpTo('/pages_Article/articleDetails/articleDetails?id=1980815938721484801')">《隐私协议》</text>
							
						</text>
					</u-radio>
				</u-radio-group>
			</view>
		</view>
		<view class=""  style="width: 80%;margin:auto;">
			<u-button v-if="isArgee"  type="primary" open-type="getPhoneNumber" @getphonenumber="getPhone" color="#ff2727" shape="circle" text="手机号快捷登录"></u-button>
			<u-button v-if="!isArgee"  type="primary" color="#959595" shape="circle" text="手机号快捷登录" @click="goLogin" ></u-button>
		</view>
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
				appConfig:{},
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
		onLoad() {
			this.appConfig=this.$ut.configInfo;
			uni.login({
				provider: 'weixin',
				success: (loginRes) => {
					this.weixinInfo.code = loginRes.code;
				}
			})
			console.log(this.$ut.get("mId"))
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
					setTimeout(() => {
						uni.$u.route({
							url: 'pages/index/index',
							type: 'switchTab'
						})
					}, 1200)
				})
			},
			goLogin(){
				this.$ut.msg("请阅读并同意《用户协议》再登录！")
			}
		},
		
	}
</script>

<style scoped lang="scss">
	.logo-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 34rpx;
		justify-content: center;
		height: 30vh;

		.logo {
			width: 350rpx;
			height: 70rpx;
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
		padding: 10rpx 0;
		width: 90%;
		margin: 0 auto 34rpx;

		.radio-container {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			
			::v-deep .u-radio {
				width: 100%;
				
				.u-radio__label {
					width: calc(100% - 40rpx);
					word-break: break-all;
					word-wrap: break-word;
					white-space: normal;
					line-height: 1.5;
				}
			}
		}

		.login_policy_desc {
			font-size: 24rpx;
			color: #B3BBC0;
			margin-left: 8rpx;
			vertical-align: middle;
			word-break: break-all;
			word-wrap: break-word;
			white-space: normal;

			text {
				color: #ff2727;
				margin: 0 8rpx;
			}
		}
	}
</style>