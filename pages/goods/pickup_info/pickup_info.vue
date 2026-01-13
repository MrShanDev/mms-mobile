<template>
	<view class="pickup-page">
		<!-- 顶部导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
			<view class="nav-title">牛堡堡</view>
		</view>
		
		<!-- 订单类型切换 -->
		<view class="order-tabs">
			<view class="tab-item active">
				<text class="tab-text">当前订单</text>
				<view class="tab-line"></view>
			</view>
			<view class="tab-item">
				<text class="tab-text">历史订单</text>
			</view>
		</view>
		
		<!-- 取餐码区域 -->
		<view class="pickup-code-section">
			<view class="code-left">
				<view class="code-number">
					<view class="code-label">取餐码</view>
					<text class="code-text">7058</text>
				</view>
				<view class="code-tip">稍后请凭取餐码前往取餐</view>
			</view>
			<view class="code-right">
				<image class="qrcode" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E5%9B%BE%E5%B1%82%2024%403x%20(1).png" mode="aspectFit"></image>
			</view>
		</view>
		
		<!-- 订单状态流程 -->
		<view class="process">
			<view class="order-status">
				<view class="status-item">
					<view class="status-icon iconfont icon-xiadan"></view>
					<view class="status-line"></view>
					<text class="status-text">已下单</text>
				</view>
				<view class="status-item">
					<view class="status-icon iconfont icon-peicanguanli"></view>
					<view class="status-line"></view>
					<text class="status-text">配餐中</text>
				</view>
				<view class="status-item active">
					<view class="status-icon iconfont icon-querenqucan active"></view>
					<view class="status-line"></view>
					<text class="status-text active">待取餐</text>
				</view>
				<view class="status-item">
					<view class="status-icon iconfont icon-wancheng"></view>
					<text class="status-text">已完成</text>
				</view>
			</view>
			<!-- 等待提示 -->
			<view class="wait-tip">
				当前还有3单/3份商品制作中，预计等待5分钟
			</view>
		</view>
		
		
		<!-- 门店信息 -->
		<view style="background: #FFF; margin: 0 30rpx 24rpx; padding: 30rpx;">
			<view class="store-card m-b-20">
				<view class="store-header">
					<view class="store-icon">牛</view>
					<text class="store-name">牛堡堡高新万达店</text>
					<view class="store-action">进店 <text class="arrow iconfont icon-youjiantou"></text></view>
				</view>
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
				
			</view>
			
			<!-- 总计 -->
			<view class="total-section">
				<text class="total-text">共2件商品，实付 <text style="font-size: 35rpx; color: #030303; font-weight: 600;">¥19.8</text></text>
			</view>
		</view>
		
		<!-- 订单信息 -->
		<view class="order-info-section">
			<view class="section-title">订单信息</view>
			<view class="info-list">
				<view class="info-item">
					<text class="info-label">订单编号</text>
					<view class="info-value">
						<text>100000019333123934788</text>
						<text class="copy-btn" @click="copyOrderNo">复制</text>
					</view>
				</view>
				<view class="info-item">
					<text class="info-label">下单时间</text>
					<text class="info-value">2025-01-01 12:23:45</text>
				</view>
				<view class="info-item">
					<text class="info-label">付款时间</text>
					<text class="info-value">2025-01-01 12:23:45</text>
				</view>
				<view class="info-item">
					<text class="info-label">支付方式</text>
					<text class="info-value">在线支付</text>
				</view>
				<view class="info-item">
					<text class="info-label">订单备注</text>
					<text class="info-value">多加一份餐具</text>
				</view>
			</view>
		</view>
		
		<!-- 底部按钮 -->
		<view class="footer-btns">
			<view class="btn" @click="contactService">联系客服</view>
			<view class="btn" @click="cancelOrder">取消订单</view>
			<view class="btn" @click="complain">催单</view>
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
		copyOrderNo() {
			uni.setClipboardData({
				data: '100000019333123934788',
				success: () => {
					uni.showToast({
						title: '已复制',
						icon: 'success'
					});
				}
			});
		},
		contactService() {
			uni.showToast({
				title: '联系客服',
				icon: 'none'
			});
		},
		cancelOrder() {
			uni.showModal({
				title: '提示',
				content: '确定取消订单吗？',
				success: (res) => {
					if (res.confirm) {
						uni.showToast({
							title: '订单已取消',
							icon: 'success'
						});
					}
				}
			});
		},
		complain() {
			uni.showToast({
				title: '已催单',
				icon: 'success'
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.pickup-page {
	min-height: 100vh;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%BB%84%206%20%E6%8B%B7%E8%B4%9D%403x.png);
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

.order-tabs {
	display: flex;
	justify-content: space-around;
	padding: 0 40rpx;
	
	.tab-item {
		padding: 30rpx 0;
		position: relative;
		
		.tab-text {
			font-size: 28rpx;
			color: #666;
		}
		
		&.active {
			.tab-text {
				color: #2F2F2F;
				font-weight: 600;
			}
			
			.tab-line {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 6rpx;
				background: #FE7D0A;
				border-radius: 6rpx;
			}
		}
	}
}

.pickup-code-section {
	margin: 24rpx 30rpx 0;
	padding: 40rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.code-left {
		flex: 1;
		
		.code-number {
			display: flex;
			align-items: baseline;
			gap: 16rpx;
			margin-bottom: 24rpx;
			
			.code-label {
				background: #FE7D0A;
				color: #FFF;
				font-size: 24rpx;
				padding: 6rpx 16rpx;
				border-radius: 6rpx;
			}
			
			.code-text {
				font-size: 88rpx;
				font-weight: 600;
				color: #3E3C38;
				letter-spacing: 5rpx;
			}
		}
		
		.code-tip {
			font-size: 26rpx;
			color: #3E3C38;
		}
	}
	
	.code-right {
		.qrcode {
			width: 220rpx;
			height: 220rpx;

		}
	}
}

.process{
	background: #FFF;
	margin: 0 30rpx 24rpx;
	border-radius: 16rpx;
	padding: 30rpx;
}
.order-status {
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.status-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		
		.status-icon {
			font-size: 48rpx;
			filter: grayscale(100%);
			margin-bottom: 12rpx;
			
			&.active {
				filter: none;
				color: #FF3B30;
			}
		}
		
		.status-line {
			position: absolute;
			top: 24rpx;
			left: 80%;
			width: 40%;
			height: 2rpx;
			background: #E5E5E5;
		}
		
		.status-text {
			font-size: 24rpx;
			color: #999;
			
			&.active {
				color: #FF3B30;
				font-weight: 600;
			}
		}
		
		&:last-child {
			.status-line {
				display: none;
			}
		}
	}
}

.wait-tip {
	margin-top: 30rpx;
	text-align: center;
	padding: 15rpx 0;
	font-size: 26rpx;
	color: #1F1D1D;
	border-radius: 40rpx;
	background-color: #F6F8FA;
}

.store-card {
	.store-header {
		display: flex;
		align-items: center;
		gap: 16rpx;
		
		.store-icon {
			width: 48rpx;
			height: 48rpx;
			background: #FF3B30;
			color: #FFF;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			font-weight: 600;
		}
		
		.store-name {
			flex: 1;
			font-size: 32rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
		
		.store-action {
			display: flex;
			align-items: center;
			font-size: 28rpx;
			color: #666;
			.arrow {
			    font-size: 32rpx;
			    color: #999;
			    font-weight: 300;
			}
		}
	}
}

.goods-list {
	.goods-item {
		display: flex;
		gap: 24rpx;
		padding: 24rpx 0;
		border-bottom: 1rpx solid #F5F5F5;
		
		&:first-child {
			padding-top: 0;
		}
		
		&:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}
		
		.goods-img {
			width: 140rpx;
			height: 140rpx;
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
				margin-bottom: 8rpx;
			}
			
			.goods-spec {
				font-size: 24rpx;
				color: #999;
				margin-bottom: 8rpx;
			}
			
			.goods-price {
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

.total-section {
	margin-top: 15rpx;
	text-align: right;
	padding: 24rpx 5rpx;
	
	.total-text {
		font-size: 26rpx;
		color: #787879;
	}
}

.order-info-section {
	margin: 0 30rpx 24rpx;
	padding: 30rpx;
	background-color: #fff;
	.section-title {
		font-size: 32rpx;
		font-weight: 600;
		color: #2F2F2F;
		margin-bottom: 24rpx;
	}
	
	.info-list {
		.info-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			
			.info-label {
				font-size: 28rpx;
				color: #666;
			}
			
			.info-value {
				font-size: 28rpx;
				color: #2F2F2F;
				display: flex;
				align-items: center;
				gap: 16rpx;
				
				.copy-btn {
					color: #FF6B35;
					font-size: 26rpx;
				}
			}
		}
	}
}

.footer-btns {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #FFF;
	padding: 24rpx 30rpx;
	box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: flex-end;
	gap: 24rpx;
	padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
	
	.btn {
		text-align: center;
		padding: 10rpx 15rpx;
		border-radius: 48rpx;
		font-size: 25rpx;
		color: #3E3C38;
		border: 1rpx solid #B8B7B7;
	}
}
</style>