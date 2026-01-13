<template>
	<view class="order-info-page">
		<!-- 导航栏 -->
		<view v-if="orderStatus !== 'picking'" class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="iconfont icon-back icon-zuojiantou"></text>
			</view>
			<view class="nav-title">当前订单</view>
		</view>

		<!-- 订单状态区域 -->
		<view class="status-section">
			<!-- 状态1: 支付成功 -->
			<view v-if="orderStatus === 'paying'" class="status-paying">
				<view class="status-title p-l-10">支付成功</view>
				<view class="status-desc p-l-10">
					支付成功，等待商家接单中
				</view>
				<view class="paying-info">
					<view class="paying-item m-b-10">
						<view style="color: #898988;">
							订单类型：
						</view>
						<view style="color: #343434;">
							堂食
						</view>
						<view style="color: #898988;">
							（自提 | 外送）
						</view>
					</view>
					<view class="paying-item">
						<view style="color: #898988;">
							发票类型：
						</view>
						<view style="color: #343434;">
							已开票
						</view>
						<view style="color: #898988;">
							（未开票）
						</view>
					</view>
				</view>
			</view>
			
			<!-- 状态2: 呼叫骑手中 -->
			<view v-if="orderStatus === 'calling'" class="status-calling">
				<view class="status-title p-l-10">呼叫骑手中</view>
				<view class="status-desc p-l-10">
					商家已出餐，已安排骑手，预计将于今天
					<text class="highlight">09:44-10:44</text>
					送达
				</view>
				
			</view>

			<!-- 状态3: 正在取货(含地图) -->
			<view v-else-if="orderStatus === 'picking'" class="status-picking">
				<!-- 地图区域 -->
				<view class="map-container">
					<map 
						:latitude="mapCenter.latitude" 
						:longitude="mapCenter.longitude"
						:markers="markers"
						:scale="15"
						style="width: 100%; height: 100%;"
					></map>
					<view class="map-refresh">
						<text class="iconfont icon-refresh"></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 地址信息 -->
		<view class="address-info">
			<view class="address-text">西安市创业广场B座1803</view>
			<view class="address-detail">刘安士 13709280511</view>
			<view class="delivery-time">尽快送达（预计10:44之前）</view>
		</view>

		<!-- 商家信息 -->
		<view class="store-info">
			<view class="store-logo">
				<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%89%9B%403x.png" mode="aspectFill"></image>
			</view>
			<view class="store-name">牛堡堡高新万达店</view>
			<view class="store-arrow">
				进店
				<text class="iconfont icon-youjiantou"></text>
			</view>
		</view>

		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="goods-item" v-for="(item, index) in goodsList" :key="index">
				<view class="goods-image">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<view class="goods-info">
					<view class="goods-name">{{ item.name }}</view>
					<view class="goods-spec">{{ item.spec }}</view>
					<view class="goods-price">¥ {{ item.price }}</view>
				</view>
				<view class="goods-quantity">x{{ item.quantity }}</view>
				<view class="goods-total">¥{{ item.total }}</view>
			</view>
		</view>

		<!-- 价格明细 -->
		<view class="price-detail">
			<view class="price-header" @click="togglePriceDetail">
				<view>
					<text style="font-size: 28rpx; font-weight: 600;">价格明细</text>
					<text class="arrow iconfont icon-xiajiantou m-l-10" :class="{ 'arrow-up': showPriceDetail }"></text>
				</view>
				<view class="price-summary">
					<text class="summary-text">共2件商品，实付 </text>
					<text class="summary-price">¥{{ totalPrice }}</text>
				</view>
			</view>
			<view v-if="showPriceDetail" class="price-content">
				<view class="price-row">
					<text class="price-label">商品金额</text>
					<text class="price-value">¥ {{ priceDetail.goodsAmount }}</text>
				</view>
				<view class="price-row">
					<text class="price-label">包装服务费</text>
					<text class="price-value">¥ {{ priceDetail.packFee }}</text>
				</view>
				<view class="price-row discount">
					<text class="price-label">优惠券</text>
					<text class="price-value">-¥ {{ priceDetail.coupon }}</text>
				</view>
				<view class="price-row">
					<text class="price-label">配送费</text>
					<text class="price-value">¥ {{ priceDetail.deliveryFee }}</text>
				</view>
				<view class="price-summary">
					<text class="summary-text">已优惠¥{{ priceDetail.coupon }}，实付 </text>
					<text class="summary-price">¥{{ totalPrice }}</text>
				</view>
			</view>
			
		</view>

		<!-- 订单信息 -->
		<view class="order-detail">
			<view class="detail-title">订单信息</view>
			<view class="detail-row">
				<text class="detail-label">订单编号</text>
				<text class="detail-value">{{ orderInfo.orderNo }}</text>
				<text class="copy-btn" @click="copyOrderNo">复制</text>
			</view>
			<view class="detail-row">
				<text class="detail-label">下单时间</text>
				<text class="detail-value">{{ orderInfo.createTime }}</text>
			</view>
			<view class="detail-row">
				<text class="detail-label">付款时间</text>
				<text class="detail-value">{{ orderInfo.payTime }}</text>
			</view>
			<view class="detail-row">
				<text class="detail-label">支付方式</text>
				<text class="detail-value">{{ orderInfo.payType }}</text>
			</view>
			<view class="detail-row">
				<text class="detail-label">{{ orderStatus === 'picking' ? '订单备注' : '税    分' }}</text>
				<text class="detail-value">{{ orderStatus === 'picking' ? orderInfo.remark : orderInfo.tax }}</text>
			</view>
			<view v-if="orderStatus === 'calling'" class="detail-row">
				<text class="detail-label">金    额</text>
				<text class="detail-value">{{ orderInfo.amount }}</text>
			</view>
			<view v-if="orderStatus === 'calling'" class="detail-row">
				<text class="detail-label">实付金额</text>
				<text class="detail-value">{{ orderInfo.actualAmount }}</text>
			</view>
			<view v-if="orderStatus === 'calling'" class="detail-row">
				<text class="detail-label">支付金额</text>
				<text class="detail-value">{{ orderInfo.payAmount }}</text>
			</view>
			<view v-if="orderStatus === 'calling'" class="detail-row">
				<text class="detail-label">订单备型</text>
				<text class="detail-value">{{ orderInfo.orderType }}</text>
			</view>
			<view v-if="orderStatus === 'calling'" class="detail-row">
				<text class="detail-label">订单备注</text>
				<text class="detail-value">{{ orderInfo.remark }}</text>
			</view>
		</view>

		<!-- 订单跟踪 -->
		<view class="order-track">
			<view class="track-header" @click="toggleTrack">
				<view>
					<text style="font-size: 28rpx; font-weight: 600;">订单跟踪</text>
					<text class="arrow iconfont icon-xiajiantou m-l-10" :class="{ 'arrow-up': showTrack }"></text>
				</view>
				<view class="bottom-btns">
					<view class="btn btn-outline" @click="cancelOrder">取消订单</view>
					<view class="btn btn-outline" @click="buyAgain">再来一单</view>
					<view class="btn btn-outline" @click="applyRefund">申请发票</view>
				</view>
			</view>
			<view v-if="showTrack" class="track-list">
				<view class="track-item" v-for="(track, index) in trackList" :key="index">
					<view class="track-dot"></view>
					<view class="track-content">{{ track.content }}</view>
					<view class="track-time">{{ track.time }}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			// 订单状态: 'paying'-支付成功, 'calling'-呼叫骑手中, 'picking'-正在取货
			orderStatus: 'paying',
			showPriceDetail: false,
			showTrack: false,
			
			// 地图相关
			mapCenter: {
				latitude: 34.2317,
				longitude: 108.9283
			},
			markers: [
				{
					id: 1,
					latitude: 34.2317,
					longitude: 108.9283,
					iconPath: '/static/marker-rider.png',
					width: 30,
					height: 30
				},
				{
					id: 2,
					latitude: 34.2327,
					longitude: 108.9293,
					iconPath: '/static/marker-destination.png',
					width: 30,
					height: 30
				}
			],
			
			// 商品列表
			goodsList: [
				{
					image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%89%9B%403x.png',
					name: '牛堡堡汉堡',
					spec: '双层/去生菜',
					price: '9.9',
					quantity: 1,
					total: '18'
				},
				{
					image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%89%9B%403x.png',
					name: '牛堡堡意面',
					spec: '香肠/去辣',
					price: '9.9',
					quantity: 1,
					total: '18'
				}
			],
			
			// 价格明细
			priceDetail: {
				goodsAmount: 36,
				packFee: 1,
				coupon: 17.2,
				deliveryFee: 0
			},
			
			// 订单信息
			orderInfo: {
				orderNo: '100000019333123393478',
				createTime: '2025-01-01 12:23:45',
				payTime: '2025-01-01 12:23:45',
				payType: '在线支付',
				tax: '-0',
				amount: '-0',
				actualAmount: '¥19.8',
				payAmount: '¥19.8',
				orderType: '外送',
				remark: '多加一份餐具'
			},
			
			// 订单跟踪
			trackList: [
				{ content: '订单已提交', time: '12:23' },
				{ content: '支付成功', time: '12:23' },
				{ content: '商家已接单', time: '12:25' },
				{ content: '商家已接单', time: '12:30' },
				{ content: '骑手已到店', time: '12:35' },
				{ content: '骑手已取餐', time: '12:38' },
				{ content: '商品已送达', time: '12:56' },
				{ content: '订单已完成', time: '12:56' }
			]
		};
	},
	
	computed: {
		totalPrice() {
			const total = this.priceDetail.goodsAmount + this.priceDetail.packFee + 
						  this.priceDetail.deliveryFee - this.priceDetail.coupon;
			return total.toFixed(1);
		}
	},
	
	onLoad(options) {
		// 从参数获取订单状态
		if (options.status) {
			this.orderStatus = options.status;
		}
		// 这里可以根据订单ID加载订单详情
	},
	
	methods: {
		goBack() {
			uni.navigateBack();
		},
		
		togglePriceDetail() {
			this.showPriceDetail = !this.showPriceDetail;
		},
		
		toggleTrack() {
			this.showTrack = !this.showTrack;
		},
		
		copyOrderNo() {
			uni.setClipboardData({
				data: this.orderInfo.orderNo,
				success: () => {
					uni.showToast({
						title: '复制成功',
						icon: 'success'
					});
				}
			});
		},
		
		cancelOrder() {
			uni.showModal({
				title: '提示',
				content: '确定要取消订单吗？',
				success: (res) => {
					if (res.confirm) {
						// 取消订单逻辑
					}
				}
			});
		},
		
		buyAgain() {
			// 再来一单逻辑
			uni.showToast({
				title: '再来一单',
				icon: 'none'
			});
		},
		
		applyRefund() {
			// 申请发票逻辑
			uni.showToast({
				title: '申请发票',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.order-info-page {
	min-height: 100vh;
	background-color: #F6F8FA;
	padding-bottom: 120rpx;
}

// 导航栏
.nav-bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 120rpx 30rpx 50rpx;
	
	.nav-left{
		.iconfont{
			font-size: 48rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
	}
	
	.nav-title {
		flex: 1;
		text-align: center;
		font-size: 30rpx;
		color: #3E3C38;
	}
}

// 支付成功状态
.status-paying {
	margin: 0 20rpx;
	.status-title {
		font-size: 45rpx;
		font-weight: 600;
		color: #333333;
		margin-bottom: 16rpx;
	}
	
	.status-desc {
		font-size: 26rpx;
		color: #3E3C38;
		line-height: 40rpx;
		margin-bottom: 32rpx;
	}
	.paying-info{
		padding: 20rpx 30rpx;
		background-color: #fff;
		border-radius: 16rpx;
		.paying-item{
			display: flex;
			font-size: 26rpx;
		}
	}
}


// 呼叫骑手状态
.status-calling {
	margin: 0 20rpx;
	.status-title {
		font-size: 45rpx;
		font-weight: 600;
		color: #333333;
		margin-bottom: 16rpx;
	}
	
	.status-desc {
		font-size: 26rpx;
		color: #3E3C38;
		line-height: 40rpx;
		margin-bottom: 32rpx;
		
		.highlight {
			color: #FF8C00;
		}
	}
}

// 正在取货状态
.status-picking {
	.map-container {
		width: 100%;
		height: 600rpx;
		overflow: hidden;
		position: relative;
		.map-refresh {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			width: 60rpx;
			height: 60rpx;
			background-color: #FFFFFF;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
			font-size: 32rpx;
		}
	}
	
	.picking-info {
		margin-bottom: 24rpx;
		
		.picking-title {
			font-size: 48rpx;
			font-weight: 600;
			color: #333333;
			margin-bottom: 8rpx;
		}
		
		.picking-desc {
			font-size: 28rpx;
			color: #666666;
			margin-bottom: 4rpx;
		}
		
		.picking-detail {
			font-size: 24rpx;
			color: #999999;
		}
	}
}

// 地址信息
.address-info {
	padding: 20rpx 25rpx;
	margin: 20rpx 20rpx 0;
	border-radius: 16rpx;
	background-color: #fff;
	.address-text {
		font-size: 28rpx;
		font-weight: 500;
		color: #030303;
		margin-bottom: 12rpx;
	}
	
	.address-detail {
		font-size: 26rpx;
		color: #585555;
		margin-bottom: 12rpx;
	}
	
	.delivery-time {
		font-size: 26rpx;
		color: #3E3C38;
	}
}

// 商家信息
.store-info {
	background-color: #FFFFFF;
	margin: 20rpx 20rpx 0;
	padding: 20rpx;
	border-radius: 16rpx;
	display: flex;
	align-items: center;
	
	.store-logo {
		width: 72rpx;
		height: 72rpx;
		border-radius: 12rpx;
		overflow: hidden;
		margin-right: 16rpx;
		background-color: #FF0000;
		display: flex;
		align-items: center;
		justify-content: center;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.store-name {
		flex: 1;
		font-size: 32rpx;
		font-weight: 600;
		color: #333333;
	}
	
	.store-arrow {
		font-size: 26rpx;
		color: #3A3939;
		.iconfont{
			font-size: 25rpx;
		}
	}
}

// 商品列表
.goods-list {
	margin: 0 20rpx;
	background-color: #FFFFFF;
	padding: 0 20rpx;
	border-radius: 16rpx;
}

.goods-item {
	display: flex;
	align-items: center;
	padding: 24rpx 0;
	border-bottom: 1rpx solid #F0F0F0;
	
	&:last-child {
		border-bottom: none;
	}
	
	.goods-image {
		width: 120rpx;
		height: 120rpx;
		border-radius: 12rpx;
		overflow: hidden;
		margin-right: 20rpx;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.goods-info {
		flex: 1;
		
		.goods-name {
			font-size: 32rpx;
			color: #333333;
			margin-bottom: 8rpx;
		}
		
		.goods-spec {
			font-size: 24rpx;
			color: #999999;
			margin-bottom: 8rpx;
		}
		
		.goods-price {
			font-size: 28rpx;
			color: #333333;
		}
	}
	
	.goods-quantity {
		font-size: 28rpx;
		color: #666666;
		margin-right: 40rpx;
	}
	
	.goods-total {
		font-size: 32rpx;
		color: #333333;
		font-weight: 500;
	}
}

// 价格明细
.price-detail {
	background-color: #FFFFFF;
	margin: 20rpx 20rpx 0;
	border-radius: 16rpx;
	padding: 0 32rpx;
	
	.price-header {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		color: #333333;
		border-bottom: 1rpx solid #F0F0F0;
		
		.arrow {
			font-size: 24rpx;
			color: #999999;
			transition: transform 0.3s;
			
			&.arrow-up {
				transform: rotate(180deg);
			}
		}
	}
	
	.price-content {
		padding: 24rpx 0;
	}
	
	.price-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.price-label {
			font-size: 28rpx;
			color: #666666;
		}
		
		.price-value {
			font-size: 28rpx;
			color: #333333;
		}
		
		&.discount .price-value {
			color: #FF0000;
		}
	}
	
	.price-summary {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		border-top: 1rpx solid #F0F0F0;
		
		.summary-text {
			font-size: 26rpx;
			color: #787879;
		}
		
		.summary-price {
			margin-left: 5rpx;
			font-size: 34rpx;
			color: #030303;
		}
	}
}

// 订单信息
.order-detail {
	background-color: #FFFFFF;
	margin: 20rpx 20rpx 0;
	border-radius: 16rpx;
	padding: 32rpx;
	
	.detail-title {
		font-size: 30rpx;
		font-weight: 600;
		color: #3E3C38;
		margin-bottom: 24rpx;
	}
	
	.detail-row {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.detail-label {
			width: 180rpx;
			font-size: 28rpx;
			color: #666666;
		}
		
		.detail-value {
			flex: 1;
			font-size: 28rpx;
			color: #333333;
		}
		
		.copy-btn {
			padding: 8rpx 24rpx;
			background-color: #F5F5F5;
			border-radius: 8rpx;
			font-size: 24rpx;
			color: #3A7EFF;
		}
	}
}

// 订单跟踪
.order-track {
	background-color: #FFFFFF;
	margin-top: 20rpx;
	padding: 0 32rpx;
	
	.track-header {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 32rpx;
		color: #333333;
		border-bottom: 1rpx solid #F0F0F0;
		
		.arrow {
			font-size: 24rpx;
			color: #999999;
			transition: transform 0.3s;
			
			&.arrow-up {
				transform: rotate(180deg);
			}
		}
		
		// 底部按钮
		.bottom-btns {
			display: flex;
			align-items: center;
			gap: 20rpx;
			
			.btn {
				flex: 1;
				padding: 5rpx 10rpx;
				border-radius: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 25rpx;
				
				&.btn-outline {
					border: 1rpx solid #DDDDDD;
					color: #333333;
					background-color: #FFFFFF;
				}
				
				&.btn-primary {
					background-color: #3A7EFF;
					color: #FFFFFF;
				}
			}
		}
	}
	
	.track-list {
		padding: 32rpx 0;
	}
	
	.track-item {
		display: flex;
		align-items: center;
		margin-bottom: 32rpx;
		position: relative;
		
		&:last-child {
			margin-bottom: 0;
			
			.track-dot::after {
				display: none;
			}
		}
		
		.track-dot {
			width: 16rpx;
			height: 16rpx;
			border-radius: 50%;
			background-color: #CCCCCC;
			margin-right: 20rpx;
			position: relative;
			
			&::after {
				content: '';
				position: absolute;
				top: 16rpx;
				left: 50%;
				transform: translateX(-50%);
				width: 2rpx;
				height: 48rpx;
				background-color: #E5E5E5;
			}
		}
		
		&:first-child .track-dot {
			background-color: #FF0000;
		}
		
		.track-content {
			flex: 1;
			font-size: 28rpx;
			color: #333333;
		}
		
		.track-time {
			font-size: 24rpx;
			color: #999999;
		}
	}
}


</style>