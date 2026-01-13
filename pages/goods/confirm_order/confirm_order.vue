<template>
	<view class="confirm-order-page">
		<!-- 顶部导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
			<view class="nav-title">确认订单</view>
		</view>
		
		<view style="background: #FFF; border-top-left-radius: 12rpx;border-top-right-radius: 12rpx; margin: 30rpx 30rpx 0;">
			<!-- 门店信息 -->
			<view class="store-section">
				<view class="store-header">
					<text class="store-name">牛堡堡高新万达店</text>
					<view class="store-badges">
						<view class="badge active">自提</view>
						<view class="badge">外卖</view>
					</view>
				</view>
				<view class="store-address">西安市高新区万达广场</view>
				<view class="store-detail">中心二楼 | 直线距离1.3km</view>
			</view>
			
			<!-- 就餐时间 -->
			<view class="time-section">
				<view class="time-label">就餐时间</view>
				<view class="time-value">12月03日（今日）17:30</view>
			</view>
			
			<!-- 提示信息 -->
			<view class="tips-text">
				当前还有3单/3份商品制作中，预计等待5分钟
			</view>
			
			<!-- 就餐方式选择 -->
			<view class="dine-type-section">
				<view class="type-btn" :class="{ active: dineType === 'dine-in' }" @click="dineType = 'dine-in'">
					<view class="type-icon iconfont icon-mendianxianxing"></view>
					<view class="type-text-group">
						<text class="type-title">店内用餐</text>
						<text class="type-subtitle">Dine In</text>
					</view>
				</view>
				<view class="type-btn active" :class="{ active: dineType === 'take-away' }" @click="dineType = 'take-away'">
					<view class="type-icon iconfont icon-dabaocaiji"></view>
					<view class="type-text-group">
						<text class="type-title">打包带走</text>
						<text class="type-subtitle">Take Away</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 手机号 -->
		<view class="phone-section">
			<view class="phone-prefix">+86</view>
			<input class="phone-input" type="number" placeholder="请输入手机号" value="13709280511" />
			<view class="self-pickup">自动填写</view>
		</view>
		
		
		<!-- 订单信息 -->
		<view class="order-section">
			<view class="section-header">
				<text class="section-title">订单信息</text>
				<view class="contact-btn" @click="contactService">继续点餐</view>
			</view>
			
			<!-- 商品列表 -->
			<view class="goods-list">
				<view class="goods-item">
					<image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food1.png" mode="aspectFill"></image>
					<view class="goods-info">
						<view class="goods-name">牛堡堡双堡</view>
						<view class="goods-spec">双层/生菜/加辣</view>
						<view class="goods-price">¥9.9</view>
					</view>
					<view class="goods-right">
						<text class="goods-count">x1</text>
						<text class="goods-total">¥18</text>
					</view>
				</view>
				
				<view class="goods-item">
					<image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food2.png" mode="aspectFill"></image>
					<view class="goods-info">
						<view class="goods-name">牛堡堡意面</view>
						<view class="goods-spec">番茄/杂蔬</view>
						<view class="goods-price">¥9.9</view>
					</view>
					<view class="goods-right">
						<text class="goods-count">x1</text>
						<text class="goods-total">¥18</text>
					</view>
				</view>
			</view>
			
			<!-- 优惠券 -->
			<view class="coupon-section">
				<view class="coupon-label">优惠券</view>
				<view class="coupon-value" @click="selectCoupon">
					<text class="coupon-text">再买一杯可享受第二杯8折</text>
					<text class="coupon-action">查看详情</text>
				</view>
			</view>
			
			<!-- 总计 -->
			<view class="total-section">
				<text class="total-text m-b-10">共2件，合计 <text style="color: #030303; font-size: 38rpx; font-weight: 600;"> ¥19.8 </text> </text>
				<view class="remark-text">本单预计可得（以实际到账为准）<text style="font-size: 24rpx; color: #E9B44B;">积分19</text></view>
			</view>
			
		</view>
		
		<!-- 底部结算栏 -->
		<view class="footer-bar">
			<view class="price-info">
				<text class="price-label">实付：</text>
				<text class="price-value">¥19.8</text>
			</view>
			<view class="submit-btn" @click="submitOrder">
				<text>去结算(2)</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dineType: 'take-away' // 默认打包带走
		};
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		contactService() {
			uni.showToast({
				title: '自动取餐',
				icon: 'none'
			});
		},
		selectCoupon() {
			uni.showToast({
				title: '选择优惠券',
				icon: 'none'
			});
		},
		submitOrder() {
			uni.showToast({
				title: '提交订单',
				icon: 'success'
			});
			uni.navigateTo({
				url: '/pages/goods/pay_order/pay_order'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.confirm-order-page {
	width: 100%;
	min-height: 100vh;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%9F%A9%E5%BD%A2%207%403x.png);
	background-size: 100% 100%;
	padding-bottom: 200rpx;
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


.store-section {
	padding: 24rpx 30rpx 32rpx;
	
	.store-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16rpx;
		
		.store-name {
			font-size: 32rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
		
		.store-badges {
			overflow: hidden;
			display: flex;
			border-radius: 40rpx;
			background: #F7F2DF;
			color: #292726;
			
			.badge {
				font-size: 24rpx;
				padding: 10rpx 20rpx;
				
				
				&.active {
					background: #FF3B30;
					color: #FFF;
					border-color: #FF3B30;
				}
			}
		}
	}
	
	.store-address {
		font-size: 26rpx;
		color: #2F2F2F;
	}
	
	.store-detail {
		font-size: 26rpx;
		color: #2F2F2F;
	}
}

.time-section {
	padding: 0 32rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #030303;
	font-size: 28rpx;
	font-weight: 600;
}

.tips-text {
	text-align: center;
	margin: 24rpx 30rpx;
	padding: 15rpx 0;
	font-size: 27rpx;
	color: #1F1D1D;
	background-color: #F6F8FA;
	border-radius: 40rpx;
}

.dine-type-section {
	display: flex;
	gap: 24rpx;
	padding: 20rpx 30rpx;
	
	.type-btn {
		flex: 1;
		background: #FFF;
		border: 2rpx solid #F52635;
		border-radius: 16rpx;
		padding: 32rpx;
		display: flex;
		gap: 16rpx;
		color: #2F2F2F;
		&.active {
			background: #FF3B30;
			color: #fff !important;
		}
		
		.type-icon {
			font-size: 64rpx;
		}
		
		.type-text-group {
			display: flex;
			flex-direction: column;
			gap: 8rpx;
			
			.type-title {
				font-size: 28rpx;
				font-weight: 600;
			}
			
			.type-subtitle {
				font-size: 20rpx;
			}
		}
	}
}

.phone-section {
	margin: 0 30rpx 24rpx;
	padding: 24rpx 32rpx;
	display: flex;
	align-items: center;
	gap: 16rpx;
	background: #F7F2DF;
	border-bottom-left-radius: 16rpx;
	border-bottom-right-radius: 16rpx;
	
	.phone-prefix {
		font-size: 28rpx;
		color: #2F2F2F;
	}
	
	.phone-input {
		flex: 1;
		font-size: 28rpx;
		color: #2F2F2F;
	}
	
	.self-pickup {
		font-size: 25rpx;
		color: #1F1D1D;
		border-left: 1rpx solid #1F1D1D;
		padding: 0 16rpx;
	}
}

.order-section {
	background: #FFF;
	margin: 0 30rpx;
	padding: 32rpx;
	
	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24rpx;
		
		.section-title {
			font-size: 32rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
		
		.contact-btn {
			background: #FFF;
			color: #FF3B30;
			font-size: 24rpx;
			padding: 4rpx 20rpx;
			border: 1rpx solid #FF3B30;
			border-radius: 40rpx;
		}
	}
	
	.goods-list {
		margin-bottom: 24rpx;
		
		.goods-item {
			display: flex;
			gap: 24rpx;
			padding: 24rpx 0;
			border-bottom: 1rpx solid #F5F5F5;
			
			&:last-child {
				border-bottom: none;
			}
			
			.goods-img {
				width: 120rpx;
				height: 120rpx;
				border-radius: 12rpx;
				background: #F7F7F7;
				flex-shrink: 0;
			}
			
			.goods-info {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				.goods-name {
					font-size: 28rpx;
					font-weight: 600;
					color: #2F2F2F;
				}
				
				.goods-spec {
					font-size: 24rpx;
					color: #999;
					margin: 8rpx 0;
				}
				
				.goods-price {
					font-weight: 600;
					font-size: 26rpx;
					color: #030303;
				}
			}
			
			.goods-right {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				justify-content: space-between;
				
				.goods-count {
					font-size: 24rpx;
					color: #666;
				}
				
				.goods-total {
					font-size: 28rpx;
					font-weight: 600;
					color: #2F2F2F;
				}
			}
		}
	}
	
	.coupon-section {
		padding: 24rpx 0;
		border-bottom: 1rpx solid #F5F5F5;
		
		.coupon-label {
			font-size: 28rpx;
			color: #787879;
			margin-bottom: 16rpx;
		}
		
		.coupon-value {
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.coupon-text {
				font-size: 24rpx;
				color: #E9B44B;
			}
			
			.coupon-action {
				font-size: 26rpx;
				color: #FF3B30;
			}
		}
	}
	
	.total-section {
		text-align: right;
		padding: 24rpx 0 0;
		.total-text {
			font-size: 25rpx;
			color: #767675;
		}
		.remark-text{
			font-size: 25rpx;
			color: #767675;
		}
	}
}

.footer-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #FEFAFA;
	padding: 30rpx 20rpx;
	box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.price-info {
		display: flex;
		align-items: baseline;
		gap: 8rpx;
		
		.price-label {
			font-size: 28rpx;
			color: #030303;
			font-weight: 600;
		}
		
		.price-value {
			font-size: 40rpx;
			font-weight: 600;
			color: #FF3B30;
		}
	}
	
	.submit-btn {
		background: #FF3B30;
		color: #FFF;
		font-size: 28rpx;
		font-weight: 600;
		padding: 15rpx 40rpx;
		border-radius: 48rpx;
	}
}
</style>