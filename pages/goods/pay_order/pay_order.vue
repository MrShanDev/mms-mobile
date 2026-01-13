<template>
	<view class="pay-order-page">
		
		<!-- 支付金额区域 -->
		<view class="amount-section">
			<view class="countdown">支付剩余时间 14:35</view>
			<view class="amount">¥69.99</view>
			<view class="order-info">配送地址：天鹅湖公寓</view>
		</view>
		
		<!-- 支付方式列表 -->
		<view class="payment-list">
			<!-- 余额支付 -->
			<view class="payment-item" :class="{ active: paymentMethod === 'balance' }" @click="selectPayment('balance')">
				<view class="payment-left">
					<view class="payment-icon">
						<view class="icon-text">
							<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/1.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="payment-info">
						<text class="payment-name">余额支付</text>
						<text class="payment-desc">当前余额：123.00</text>
					</view>
				</view>
				<view class="payment-check">
					<view class="check-icon" :class="{ checked: paymentMethod === 'balance' }">
						<text v-if="paymentMethod === 'balance'"></text>
					</view>
				</view>
			</view>
			
			<!-- 微信支付 -->
			<view class="payment-item" :class="{ active: paymentMethod === 'wechat' }" @click="selectPayment('wechat')">
				<view class="payment-left">
					<view class="payment-icon">
						<view class="icon-text">
							<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/2.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="payment-info">
						<text class="payment-name">余额支付</text>
						<text class="payment-desc">使用微信支付</text>
					</view>
				</view>
				<view class="payment-check">
					<view class="check-icon" :class="{ checked: paymentMethod === 'wechat' }">
						<text v-if="paymentMethod === 'wechat'"></text>
					</view>
				</view>
			</view>
			
			<!-- 支付宝支付 -->
			<view class="payment-item" :class="{ active: paymentMethod === 'alipay' }" @click="selectPayment('alipay')">
				<view class="payment-left">
					<view class="payment-icon">
						<view class="icon-text">
							<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/3.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="payment-info">
						<text class="payment-name">余额支付</text>
						<text class="payment-desc">使用支付宝支付</text>
					</view>
				</view>
				<view class="payment-check">
					<view class="check-icon" :class="{ checked: paymentMethod === 'alipay' }">
						<text v-if="paymentMethod === 'alipay'"></text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部支付按钮 -->
		<view class="footer-bar">
			<view class="pay-btn" @click="submitPayment">余额支付</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			paymentMethod: 'balance' // 默认选中余额支付
		};
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		selectPayment(method) {
			this.paymentMethod = method;
		},
		submitPayment() {
			let paymentName = '';
			switch(this.paymentMethod) {
				case 'balance':
					paymentName = '余额支付';
					break;
				case 'wechat':
					paymentName = '微信支付';
					break;
				case 'alipay':
					paymentName = '支付宝支付';
					break;
			}
			uni.showToast({
				title: paymentName + '成功',
				icon: 'success'
			});
			uni.navigateTo({
				// url: '/pages/goods/order_info/order_info'
				url: '/pages/goods/pickup_info/pickup_info'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.pay-order-page {
	min-height: 100vh;
	background: #F5F5F5;
}

.amount-section {
	background: #FFF;
	padding: 60rpx 40rpx;
	text-align: center;
	
	.countdown {
		font-size: 26rpx;
		color: #999;
		margin-bottom: 24rpx;
	}
	
	.amount {
		font-size: 88rpx;
		color: #2F2F2F;
		margin-bottom: 24rpx;
		letter-spacing: 2rpx;
	}
	
	.order-info {
		font-size: 26rpx;
		color: #999;
	}
}

.payment-list {
	padding: 32rpx 0;
	
	.payment-item {
		background: #FFF;
		margin: 0 0 24rpx 0;
		padding: 32rpx 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.payment-left {
			display: flex;
			align-items: center;
			gap: 24rpx;
			
			.payment-icon {
				width: 80rpx;
				height: 80rpx;
				border-radius: 12rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.icon-text {
					width: 80rpx;
					height: 80rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			
			.payment-info {
				display: flex;
				flex-direction: column;
				gap: 8rpx;
				
				.payment-name {
					font-size: 32rpx;
					color: #2F2F2F;
				}
				
				.payment-desc {
					font-size: 26rpx;
					color: #999;
				}
			}
		}
		
		.payment-check {
			.check-icon {
				width: 44rpx;
				height: 44rpx;
				border: 2rpx solid #E5E5E5;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #FFF;
				
				&.checked {
					background: #07C160;
					border-color: #07C160;
				}
			}
		}
	}
}

.footer-bar {
	position: fixed;
	bottom: 30rpx;
	left: 0;
	right: 0;
	padding: 24rpx 30rpx;
	
	
	.pay-btn {
		background: #07C160;
		color: #FFF;
		font-size: 30rpx;
		font-weight: 600;
		text-align: center;
		padding: 28rpx 0;
		border-radius: 48rpx;
	}
}
</style>