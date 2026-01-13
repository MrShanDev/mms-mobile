<template>
	<view class="apply-delivery-container">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
		</view>

		<!-- 顶部插画区域 -->
		<view class="header-banner">
			<view class="title-text">外送计划</view>
			<image class="delivery-illustration" src="/static/delivery-person.png" mode="aspectFit"></image>
		</view>

		<!-- 加入理由卡片 -->
		<view class="reason-card">
			<view class="card-title">加入理由</view>
			<view class="reason-list">
				<view class="reason-item">
					<view class="icon-wrapper">
						<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E5%9B%BE%E5%B1%82%205%403x%20(1).png" mode=""></image>
					</view>
					<text class="reason-text">优先派单</text>
				</view>
				<view class="reason-item">
					<view class="icon-wrapper">
						<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/qq.png" mode=""></image>
					</view>
					<text class="reason-text">区域固定</text>
				</view>
				<view class="reason-item">
					<view class="icon-wrapper">
						<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/vv.png" mode=""></image>
					</view>
					<text class="reason-text">收入无忧</text>
				</view>
			</view>

			<!-- 报名要求 -->
			<view class="requirement-section">
				<view class="card-title">报名要求</view>
				<view class="requirement-item">
					<text class="requirement-text">1.送餐骑手要求</text>
				</view>
				<view class="requirement-item">
					<text class="requirement-text">1.送餐骑手要求</text>
				</view>
			</view>
		</view>

		<!-- 加入流程 -->
		<view class="process-section">
			<view class="section-title">加入流程</view>
			<view class="process-note">例：</view>
			<view class="process-steps">
				<view class="step-item">
					<text class="step-text">1.点击注册</text>
				</view>
				<view class="step-item">
					<text class="step-text">2.审核通过</text>
				</view>
				<view class="step-item">
					<text class="step-text">3开始送餐</text>
				</view>
			</view>
		</view>

		<!-- 底部注册按钮 -->
		<view class="bottom-action">
			<view class="register-btn" @click="handleRegister">
				<text class="btn-text">立即注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			handleRegister() {
				
				uni.showToast({
					title: '立即注册',
					icon: 'none'
				});
				uni.navigateTo({
					url: '/pages/extension/accept_orders/accept_orders'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.apply-delivery-container {
	min-height: 100vh;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/a154ffa6-fc48-4414-905f-3f6f4f06a5dd.jpg);
	background-size: 100% 100%;
	padding-bottom: 120rpx;
	overflow: hidden;
}
// 导航栏
.nav-bar {
	padding: 120rpx 30rpx 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32rpx;
	z-index: 1000;

	.nav-left {
		.back-icon {
			font-size: 48rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
	}
}
// 顶部插画区域
.header-banner {
	position: relative;
	padding: 40rpx 30rpx;
	height: 400rpx;
	display: flex;
	align-items: center;
	
	.title-text {
		font-size: 64rpx;
		color: #333;
		font-weight: bold;
		z-index: 2;
	}
	
	.delivery-illustration {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 400rpx;
		height: 350rpx;
		z-index: 1;
	}
}

// 加入理由卡片
.reason-card {
	background-color: #fff;
	margin: 0 30rpx;
	padding: 40rpx 30rpx;
	border-radius: 24rpx;
	box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
	
	.card-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
	
	.reason-list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 40rpx;
		
		.reason-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			
			.icon-wrapper {
				width: 80rpx;
				height: 80rpx;
				margin-bottom: 16rpx;
				image{
					width: 100%;
					height: 100%;
				}
				
			}
			
			.reason-text {
				font-size: 28rpx;
				color: #080808;
			}
		}
	}
}

// 报名要求
.requirement-section {
	margin-top: 30rpx;
	
	.requirement-item {
		display: flex;
		align-items: flex-start;
		margin-bottom: 16rpx;
		
		.requirement-text {
			font-size: 26rpx;
			color: #666;
			line-height: 1.6;
		}
	}
}

// 加入流程
.process-section {
	padding: 40rpx 30rpx;
	
	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	
	.process-note {
		font-size: 28rpx;
		color: #6E6E6E;
		margin-bottom: 16rpx;
	}
	
	.process-steps {
		.step-item {
			margin-bottom: 16rpx;
			
			.step-text {
				font-size: 28rpx;
				color: #6E6E6E;
				line-height: 1.8;
			}
		}
	}
}

// 底部操作按钮
.bottom-action {
	padding: 20rpx 30rpx 40rpx;
	display: flex;
	justify-content: center;
	.register-btn {
		background: linear-gradient(90deg, #5B7CFF 0%, #4865E8 100%);
		border-radius: 50rpx;
		width: 50%;
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
		.btn-text {
			font-size: 32rpx;
			color: #fff;
			font-weight: 500;
		}
	}
}
</style>