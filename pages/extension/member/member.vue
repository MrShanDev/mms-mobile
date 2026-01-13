<template>
	<view class="member-page">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
			<view class="nav-title">会员中心</view>
		</view>
		
		<!-- vip领取 -->
		<view class="vip_get">
			<view class="vip">VIP</view>
			<view class="vip_btn">点击领取会员卡</view>
		</view>
		
		<!-- 入会专享 -->
		<view class="join">
			<view class="join-title p-l-5">
				入会专享
			</view>
			<view class="join-image">
				<view class="save">
					赠送菜品
				</view>
			</view>
		</view>
		
		<!-- 优惠券 -->
		<view class="conpon">
			<view class="conpon-title p-l-5">
				专享优惠券
			</view>
			<view class="conpon-content">
				<view class="conpon-box1">
					<text>RMB</text>10
				</view>
				<view class="conpon-box2">
					<view class="m-b-5">
						首次入会专享
					</view>
					<view>
						10元无门槛优惠券>>
					</view>
				</view>
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
		// 返回
		goBack() {
			uni.navigateBack();
		},
	}
}
</script>

<style lang="scss">
.member-page {
	overflow: hidden;
	min-height: 100vh;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/bj.png);
	background-size: 100% 100%;
}

// 导航栏
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


// vip领取
.vip_get{
	margin: 100rpx auto 30rpx; 
	display: flex;
	flex-direction: column;
	align-items: center;
	.vip{
		font-size: 100rpx;
		font-weight: 600;
	}
	.vip_btn{
		margin-top: 30rpx;
		padding: 20rpx 0;
		width: 70%;
		text-align: center;
		color: #232222;
		background-color: #FADCB1;
	}
}

// 入会专享
.join{
	padding: 0 30rpx;
	.join-title{
		font-size: 30rpx;
		color: #0A0A0A;
		font-weight: 600;
		margin-bottom: 15rpx;
	}
	.join-image{
		position: relative;
		width: 100%;
		height: 400rpx;
		background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/member.png);
		background-size: 100% 100%;
		.save{
			position: absolute;
			right: 20rpx;
			bottom: 20rpx;
			padding: 10rpx 80rpx;
			border-radius: 40rpx;
			background-color: #F99204;
			color: #fff;
		}
	}
}
// 优惠券
.conpon{
	padding: 30rpx;
	.conpon-title{
		font-size: 30rpx;
		color: #0A0A0A;
		font-weight: 600;
		margin-bottom: 15rpx;
	}
	.conpon-content{
		width: 100%;
		height: 150rpx;
		border-radius: 16rpx;
		background-color: #FADCB1;
		display: flex;
		align-items: center;
		padding: 50rpx 30rpx;
		.conpon-box1{
			flex: 1;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			font-size: 60rpx;
			font-weight: 600;
			text{
				font-weight: 400;
				font-size: 20rpx;
				margin-right: 10rpx;
			}
		}
		.conpon-box2{
			flex: 1;
		}
	}
}
</style>