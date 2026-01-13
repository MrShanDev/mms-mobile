<template>
	<view class="setting-page">
		<!-- 基本信息分组 -->
		<view class="setting-group">
			<view class="group-title">基本信息</view>
			<view class="setting-item" @click="navigateTo('/pages/users/user_info/index')">
				<text class="item-label">个人资料</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-item" @click="handleGeneral">
				<text class="item-label">通用</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
		</view>

		<!-- 账户分组 -->
		<view class="setting-group">
			<view class="group-title">账户</view>
			<view class="setting-item" @click="handleChangePhone">
				<text class="item-label">更换手机号</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-item" @click="handleChangePassword">
				<text class="item-label">修改密码</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-item" @click="handleChangeEmail">
				<text class="item-label">更换邮箱</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
		</view>

		<!-- 其他分组 -->
		<view class="setting-group">
			<view class="group-title">其他</view>
			<view class="setting-item" @click="handleFeedback">
				<text class="item-label">意见反馈</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-item" @click="handleAboutUs">
				<text class="item-label">关于我们</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-item" @click="handleUserAgreement">
				<text class="item-label">用户协议</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
			<view class="setting-item" @click="handlePrivacyPolicy">
				<text class="item-label">隐私协议</text>
				<text class="item-arrow iconfont icon-youjiantou"></text>
			</view>
		</view>

		<view class="setting-group">
			<!-- 切换账号按钮 -->
			<view class="action-btn" @click="switchAccount">
				<text>切换账号</text>
			</view>
			<!-- 退出按钮 -->
			<view class="action-btn" @click="logout">
				<text>退出</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},

	methods: {
		// 导航到指定页面
		navigateTo(url) {
			uni.navigateTo({
				url: url
			});
		},

		// 通用设置
		handleGeneral() {
			uni.showToast({
				title: '通用设置',
				icon: 'none'
			});
		},

		// 更换手机号
		handleChangePhone() {
			uni.showToast({
				title: '更换手机号',
				icon: 'none'
			});
		},

		// 修改密码
		handleChangePassword() {
			uni.showToast({
				title: '修改密码',
				icon: 'none'
			});
		},

		// 更换邮箱
		handleChangeEmail() {
			uni.showToast({
				title: '更换邮箱',
				icon: 'none'
			});
		},

		// 意见反馈
		handleFeedback() {
			uni.showToast({
				title: '意见反馈',
				icon: 'none'
			});
		},

		// 关于我们
		handleAboutUs() {
			uni.showToast({
				title: '关于我们',
				icon: 'none'
			});
		},

		// 用户协议
		handleUserAgreement() {
			uni.showToast({
				title: '用户协议',
				icon: 'none'
			});
		},

		// 隐私协议
		handlePrivacyPolicy() {
			uni.showToast({
				title: '隐私协议',
				icon: 'none'
			});
		},

		// 切换账号
		switchAccount() {
			uni.showModal({
				title: '提示',
				content: '确定要切换账号吗？',
				success: (res) => {
					if (res.confirm) {
						// TODO: 清除当前登录状态，跳转到登录页
						uni.reLaunch({
							url: '/pages_Me/login/weixinLoging'
						});
					}
				}
			});
		},

		// 退出登录
		logout() {
			uni.showModal({
				title: '提示',
				content: '确定要退出登录吗？',
				success: (res) => {
					if (res.confirm) {
						// TODO: 清除登录状态
						uni.reLaunch({
							url: '/pages/index/index'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.setting-page {
	min-height: 100vh;
	background-color: #F5F5F5;
	padding-bottom: 40rpx;
}

// 设置分组
.setting-group {
	margin: 20rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	overflow: hidden;
	.group-title {
		font-size: 24rpx;
		color: #999999;
		padding: 24rpx 32rpx 16rpx;
	}
}

// 设置项
.setting-item {
	background-color: #FFFFFF;
	height: 96rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32rpx;
	border-bottom: 1rpx solid #F0F0F0;

	&:last-child {
		border-bottom: none;
	}

	.item-label {
		font-size: 28rpx;
		color: #333333;
	}

	.item-arrow {
		font-size: 32rpx;
		color: #454444;
	}
}

.action-btn{
	height: 96rpx;
	border-bottom: 1rpx solid #F0F0F0;
	font-size: 28rpx;
	color: #333333;
	display: flex;
	align-items: center;
	justify-content: center;
	&:last-child {
		border-bottom: none;
	}
}
</style>