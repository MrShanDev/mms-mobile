<template>
	<view class="goods-info-page">
		<!-- 顶部导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
		</view>
		
		<!-- 商品图片 -->
		<view class="goods-images">
			<swiper class="swiper" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image class="burger-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/burger.png" mode="aspectFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="burger-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/burger.png" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 商品信息 -->
		<view class="goods-header">
			<view class="goods-title">
				<text class="title-text">牛气冲天堡</text>
				<text class="sales-text">月销量1000+</text>
			</view>
			<view class="goods-desc">牛气冲天堡是牛肉制，围脚等等三层三牛肉</view>
		</view>
		
		<!-- 规格选择 -->
		<view class="spec-section">
			<view class="spec-item">
				<view class="spec-label">规格</view>
				<view class="spec-options">
					<view class="option-btn" :class="{ active: specIndex === 0 }" @click="specIndex = 0">单层</view>
					<view class="option-btn" :class="{ active: specIndex === 1 }" @click="specIndex = 1">双层</view>
					<view class="option-btn" :class="{ active: specIndex === 2 }" @click="specIndex = 2">三层</view>
				</view>
			</view>
			
			<view class="spec-item">
				<view class="spec-label">口味</view>
				<view class="spec-options">
					<view class="option-btn" :class="{ active: tasteIndex1 === 0 }" @click="tasteIndex1 = 0">免辣</view>
					<view class="option-btn" :class="{ active: tasteIndex1 === 1 }" @click="tasteIndex1 = 1">免辣</view>
					<view class="option-btn" :class="{ active: tasteIndex1 === 2 }" @click="tasteIndex1 = 2">免辣</view>
				</view>
			</view>
			
			<view class="spec-item">
				<view class="spec-label">口味</view>
				<view class="spec-options">
					<view class="option-btn" :class="{ active: tasteIndex2 === 0 }" @click="tasteIndex2 = 0">免辣</view>
					<view class="option-btn" :class="{ active: tasteIndex2 === 1 }" @click="tasteIndex2 = 1">免辣</view>
					<view class="option-btn" :class="{ active: tasteIndex2 === 2 }" @click="tasteIndex2 = 2">免辣</view>
				</view>
			</view>
			
			<view class="spec-item">
				<view class="spec-label">加料</view>
				<view class="spec-options">
					<view class="option-btn" :class="{ active: addIndex === 0 }" @click="addIndex = 0">加生菜</view>
					<view class="option-btn" :class="{ active: addIndex === 1 }" @click="addIndex = 1">加辣</view>
					<view class="option-btn" :class="{ active: addIndex === 2 }" @click="addIndex = 2">加辣</view>
				</view>
			</view>
		</view>
		
		<!-- 商品详情 -->
		<view class="detail-section">
			<view class="detail-item">
				<view class="detail-label">制作方法</view>
				<view class="detail-content">新鲜牛肉盐生特后灶至全熟，500m苏米计，白醉糖与水１：1比率至焼糖，配4-6片柠檬，难度介绍阻110%</view>
			</view>
			
			<view class="detail-item">
				<view class="detail-label">口味特点</view>
				<view class="detail-content">酸爽清新，牛肉鲜嫩有味都</view>
			</view>
			
			<view class="detail-item">
				<view class="detail-label">主要原料</view>
				<view class="detail-content">
					<text class="ingredient-tag">配料表</text>
					<text>面粉、牛肉、洋葱、芋士、蜂蜜</text>
				</view>
			</view>
		</view>
		
		<!-- 底部操作栏 -->
		<view class="footer-bar">
			<view class="flex justify--between align--center m-b-15 p-l-10 p-r-10">
				<view class="price-box">
					<text class="price">¥9.9</text>
					<text class="price-label">双层/免辣/加辣</text>
				</view>
				<view class="count-control">
					<view class="minus-btn" @click="decreaseCount">−</view>
					<text class="count">{{ count }}</text>
					<view class="plus-btn" @click="increaseCount">+</view>
				</view>	
			</view>
			<view class="action-btns">
				<view class="add-cart-btn" @click="addToCart">加入购物车</view>
				<view class="buy-now-btn" @click="buyNow">立即下单</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			specIndex: 1, // 默认选中双层
			tasteIndex1: 0,
			tasteIndex2: 1,
			addIndex: 1,
			count: 1
		};
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		increaseCount() {
			this.count++;
		},
		decreaseCount() {
			if (this.count > 1) {
				this.count--;
			}
		},
		addToCart() {
			uni.showToast({
				title: '已加入购物车',
				icon: 'success'
			});
			uni.navigateTo({
				url: '/pages/cart/cart'
			})
		},
		buyNow() {
			uni.showToast({
				title: '立即下单',
				icon: 'none'
			});
			uni.navigateTo({
				url: '/pages/goods/confirm_order/confirm_order'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.goods-info-page {
	min-height: 100vh;
	background: #F5F5F5;
	padding-bottom: 300rpx;
}

.nav-bar {	
	.nav-left {
		.back-icon {
			z-index: 333;
			position: fixed;
			top: 100rpx;
			left: 30rpx;
			font-size: 48rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
	}
}

.goods-images {
	width: 100%;
	height: 600rpx;
	
	.swiper{
		width: 100%;
		height: 600rpx;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
		.burger-img {
			width: 100%;
			height: 100%;
		}
	}
}

.goods-header {
	background: #F9F9F9;
	padding: 32rpx 40rpx;
	border-top-left-radius: 30rpx;
	border-top-right-radius: 30rpx;
	
	.goods-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16rpx;
		
		.title-text {
			font-size: 36rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
		
		.sales-text {
			font-size: 24rpx;
			color: #999;
		}
	}
	
	.goods-desc {
		font-size: 28rpx;
		color: #666;
		line-height: 1.6;
	}
}

.spec-section {
	background: #FFF;
	padding: 32rpx 40rpx;
	margin-bottom: 20rpx;
	
	.spec-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 32rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.spec-label {
			width: 20%;
			font-size: 28rpx;
			color: #2F2F2F;
			font-weight: 600;
			margin-bottom: 20rpx;
		}
		
		.spec-options {
			width: 80%;
			display: flex;
			gap: 35rpx;
			flex-wrap: wrap;
			
			.option-btn {
				background: #EFF0F1;
				color: #030303;
				font-size: 28rpx;
				padding: 16rpx 40rpx;
				border-radius: 8rpx;
				border: 2rpx solid transparent;
				
				&.active {
					background: #F18B31;
				}
			}
		}
	}
}

.detail-section {
	background: #FFF;
	padding: 32rpx 40rpx;
	
	.detail-item {
		margin-bottom: 32rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.detail-label {
			font-size: 28rpx;
			color: #2F2F2F;
			font-weight: 600;
			margin-bottom: 16rpx;
		}
		
		.detail-content {
			font-size: 26rpx;
			color: #666;
			line-height: 1.8;
			
			.ingredient-tag {
				background: #F7F7F7;
				color: #333;
				padding: 6rpx 16rpx;
				border-radius: 6rpx;
				margin-right: 12rpx;
			}
		}
	}
}

.footer-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #FFF;
	padding: 20rpx 30rpx;
	box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
	gap: 24rpx;
	z-index: 100;
	padding-bottom: 40rpx;
	
	.price-box {
		display: flex;
		flex-direction: column;
		
		.price {
			font-size: 42rpx;
			font-weight: 600;
			color: #F6403F;
			margin-bottom: 5rpx;
		}
		
		.price-label {
			font-size: 25rpx;
			color: #5C5B5B;
		}
	}
	
	.count-control {
		display: flex;
		align-items: center;
		gap: 5rpx;
		
		.minus-btn,
		.plus-btn {
			width: 48rpx;
			height: 48rpx;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 36rpx;
		}
		
		.minus-btn {
			border: 2rpx solid #E5E5E5;
			color: #666;
		}
		
		.plus-btn {
			background: #F6403F;
			color: #FFF;
		}
		
		.count {
			font-size: 28rpx;
			color: #2F2F2F;
			min-width: 40rpx;
			text-align: center;
		}
	}
	
	.action-btns {
		flex: 1;
		display: flex;
		gap: 16rpx;
		
		.add-cart-btn,
		.buy-now-btn {
			flex: 1;
			text-align: center;
			padding: 20rpx 0;
			border-radius: 15rpx;
			font-size: 28rpx;
		}
		
		.add-cart-btn {
			background: #FFF;
			color: #F18B31;
			border: 2rpx solid #F18B31;
		}
		
		.buy-now-btn {
			background: #F18B31;
			color: #FFF;
		}
	}
}
</style>