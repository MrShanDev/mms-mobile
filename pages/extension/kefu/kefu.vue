<template>
	<view class="kefu-container">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
			<view class="nav-title">客服中心</view>
		</view>

		<!-- 顶部欢迎区域 -->
		<view class="welcome-section">
			<view class="welcome-content">
				<view class="welcome-text-wrapper">
					<text class="welcome-title">HI~,有什么可以帮您!</text>
					<text class="work-time-label">工作时间：</text>
					<text class="work-time-value">工作日9:00-11:30' 14:00-16:00</text>
				</view>
			</view>
		</view>

		<!-- 服务入口卡片 -->
		<view class="service-card">
			<view class="service-item" @click="handleOnlineService">
				<view class="service-icon-wrapper">
					<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E5%9B%BE%E5%B1%82%2053%403x.png" mode=""></image>
				</view>
				<text class="service-name">在线客服</text>
			</view>
			<view class="service-item" @click="handleFeedback">
				<view class="service-icon-wrapper">
					<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E5%9B%BE%E5%B1%82%2053%20%E6%8B%B7%E8%B4%9D%403x.png" mode=""></image>
				</view>
				<text class="service-name">意见反馈</text>
			</view>
		</view>

		<!-- 常见问题列表 -->
		<view class="faq-section">
			<view class="faq-title">常见问题</view>
			<view class="faq-list">
				<view 
					class="faq-item" 
					v-for="(item, index) in faqList" 
					:key="index"
					@click="handleFaqClick(item)"
				>
					<text class="faq-question">{{ item.question }}</text>
					<u-icon name="arrow-right" color="#CCCCCC" size="16"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				faqList: [
					{ id: 1, question: '怎么加入合伙人计划' },
					{ id: 2, question: '怎么加入合伙人计划' },
					{ id: 3, question: '怎么加入合伙人计划' },
					{ id: 4, question: '怎么加入合伙人计划' },
					{ id: 5, question: '怎么加入合伙人计划' },
					{ id: 6, question: '怎么加入合伙人计划' }
				]
			};
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			handleOnlineService() {
				// TODO: 跳转到在线客服或拨打客服电话
				uni.showToast({
					title: '在线客服',
					icon: 'none'
				});
			},
			handleFeedback() {
				// TODO: 跳转到意见反馈页面
				uni.showToast({
					title: '意见反馈',
					icon: 'none'
				});
			},
			handleFaqClick(item) {
				// TODO: 跳转到FAQ详情页面
				console.log('FAQ点击：', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
.kefu-container {
	min-height: 100vh;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/a0ba45c6-8378-43ac-942d-902845715636.jpg);
	background-size: 100% 100%;
	overflow: hidden;
	padding-bottom: 40rpx;
}

.nav-bar {
	padding: 120rpx 30rpx 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	
	.nav-left {
		position: absolute;
		left: 30rpx;
		top: 120rpx;
		.back-icon {
			font-size: 48rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
	}
	.nav-title {
		width: 100%;
		text-align: center;
		font-size: 32rpx;
		font-weight: 600;
		color: #2F2F2F;
	}
}


// 欢迎区域
.welcome-section {
	padding: 30rpx 30rpx 40rpx;
	
	.welcome-content {
		border-radius: 24rpx;
		padding: 40rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		
		.welcome-text-wrapper {
			flex: 1;
			z-index: 2;
			
			.welcome-title {
				font-size: 34rpx;
				color: #232222;
				font-weight: bold;
				display: block;
				margin-bottom: 20rpx;
			}
			
			.work-time-label {
				font-size: 26rpx;
				color: #232222;
				display: block;
				margin-bottom: 8rpx;
			}
			
			.work-time-value {
				font-size: 26rpx;
				color: #232222;
				display: block;
			}
		}
		
	}
	
}

// 服务入口卡片
.service-card {
	background-color: #fff;
	margin: 0 30rpx;
	padding: 30rpx;
	border-radius: 24rpx;
	display: flex;
	justify-content: space-around;
	box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
	
	.service-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		
		.service-icon-wrapper {
			width: 96rpx;
			height: 96rpx;
			margin-bottom: 16rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.service-name {
			font-size: 28rpx;
			color: #0A0A0A;
		}
	}
}

// 常见问题
.faq-section {
	margin: 30rpx;
	background-color: #fff;
	border-radius: 24rpx;
	padding: 20rpx 30rpx;
	
	.faq-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 20rpx;
		padding-left: 10rpx;
	}
	
	.faq-list {
		
		.faq-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 24rpx 0;
			border-bottom: 2rpx dashed #F0F0F0;
			
			&:last-child {
				border-bottom: none;
			}
			
			.faq-question {
				font-size: 28rpx;
				color: #333;
				flex: 1;
			}
		}
	}
}
</style>