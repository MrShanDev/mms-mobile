<template>
	<view class="meal-page">
		<!-- 顶部状态栏占位 -->
		<view class="status-bar"></view>
		<!-- 顶部导航栏 -->
		<view class="top-bar">
			<view class="tab-switch">
				<view class="tab-item active">外卖</view>
				<view class="tab-item">自提</view>
			</view>
			<view class="search-box">
				<text class="search-icon iconfont icon-sousuo"></text>
				<text class="search-text">冰淇淋</text>
			</view>
			<view></view>
		</view>
		
		<!-- 店铺信息 -->
		<view class="store-info">
			<view class="store-header">
				<text class="store-name">牛堡堡高新万达店</text>
				<view class="store-badge">营业中</view>
			</view>
			<view class="store-detail">
				<view class="detail-item">
					<text class="icon iconfont icon-clock"></text>
					<text class="text">周一到周日 10:00-22:00</text>
					<text @click="navToStore" class="link">查看门店信息 <text class="iconfont icon-youjiantou" style="font-size: 20rpx;"></text></text>
				</view>
				<view class="detail-item">
					<text class="icon iconfont icon-dingwei"></text>
					<text class="text">直线距离1.3km | 西安市高新区万达广场</text>
				</view>
			</view>
		</view>
		
		<view class="content-wrapper">
			<!-- 左侧分类菜单 -->
			<view class="category-menu">
				<scroll-view scroll-y class="category-scroll">
					<view class="category-item active">
						<text class="category-text">经典套餐</text>
						<view class="active-line"></view>
					</view>
					<view class="category-item">
						<text class="category-text">本店热销</text>
					</view>
					<view class="category-item">
						<text class="category-text">会员折扣</text>
					</view>
					<view class="category-item">
						<text class="category-text">当季新品</text>
					</view>
					<view class="category-item">
						<text class="category-text">单人套餐</text>
					</view>
					<view class="category-item">
						<text class="category-text">双人套餐</text>
					</view>
					<view class="category-item">
						<text class="category-text">精选饮品</text>
					</view>
					<view class="category-item">
						<text class="category-text">分类</text>
					</view>
					<view class="category-item">
						<text class="category-text">分类</text>
					</view>
					<view class="category-item">
						<text class="category-text">限定套餐</text>
					</view>
				</scroll-view>
			</view>
			
			<!-- 右侧商品列表 -->
			<view class="goods-content">
				<scroll-view scroll-y class="goods-scroll">
					<!-- 经典套餐区域 -->
					<view class="section">
						<view class="section-header">
							<image class="banner-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%BB%84%202%20%E6%8B%B7%E8%B4%9D%403x.png" mode="aspectFill"></image>
						</view>
						
						<!-- 本店热销标题 -->
						<view class="section-title">本店热销</view>
						
						<!-- 商品列表 -->
						<view class="goods-list">
							<view @click="navTo('/pages/goods/goods_info/goods_info')" class="goods-item" v-for="item in 3" :key="item">
								<image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food1.png" mode="aspectFill"></image>
								<view class="goods-info">
									<view class="goods-name-row">
										<text class="goods-name">三仙奇缘</text>
										<view class="hot-badge">经典爆款</view>
									</view>
									<view class="goods-desc">炫炫+粉丁+仙草三三三口味</view>
									<view class="goods-bottom">
										<view class="price-box">
											<text class="price">¥9.9</text>
											<text class="unit">起</text>
											<text class="old-price">¥12.9</text>
										</view>
										<view class="add-btn" @click.stop="addToCart({ id: item, name: '三仙奇缘', price: 9.9, image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food1.png', spec: '炫炫+粉丁+仙草' })">选规格</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 会员折扣区域 -->
					<view class="section">
						<view class="section-title">会员折扣</view>
						<view class="goods-list">
							<view class="goods-item" @click="navTo('/pages/goods/goods_info/goods_info')" v-for="item in 3" :key="item">
								<image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food2.png" mode="aspectFill"></image>
								<view class="goods-info">
									<view class="goods-name-row">
										<text class="goods-name">三仙奇缘</text>
										<view class="hot-badge">经典爆款</view>
									</view>
									<view class="goods-desc">炫炫+粉丁+仙草三三三口味</view>
									<view class="goods-bottom">
										<view class="price-box">
											<text class="price">¥9.9</text>
											<text class="unit">起</text>
											<text class="old-price">¥12.9</text>
										</view>
										<view class="count-control" @click.stop="addToCart({ id: 100 + item, name: '三仙奇缘', price: 9.9, image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food2.png', spec: '炫炫+粉丁' })">
											<view class="minus-btn">−</view>
											<text class="count">1</text>
											<view class="plus-btn">+</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 底部购物车栏 -->
		<view class="cart-bar" v-if="cartGoods.length > 0">
			<view class="cart-left" @click="showPopup = true">
				<view class="cart-icon-box">
					<text class="cart-icon iconfont icon-qiabao"></text>
					<view class="cart-badge">{{ totalCount }}</view>
				</view>
				<view class="cart-info">
					<text class="total-text" style="text-decoration: line-through;">¥{{ totalPrice }}</text>
					<text class="total-text">合计</text>
					<text class="total-price">¥{{ totalPrice }}</text>
				</view>
			</view>
			<view class="cart-btn" @click="goToOrder">去结算</view>
		</view>
		
		<!-- 商品弹框 -->
		<goods-popup :show="showPopup" :goods.sync="cartGoods" @close="showPopup = false"></goods-popup>
	</view>
</template>

<script>
import GoodsPopup from '@/components/goods-popup/goods-popup.vue';

export default {
	components: {
		GoodsPopup
	},
	data() {
		return {
			showPopup: false,
			cartGoods: []
		};
	},
	computed: {
		// 计算总数量
		totalCount() {
			return this.cartGoods.reduce((total, item) => total + item.count, 0);
		},
		// 计算总价格
		totalPrice() {
			const total = this.cartGoods.reduce((sum, item) => sum + item.price * item.count, 0);
			return total.toFixed(1);
		}
	},
	methods: {
		// 添加商品到购物车
		addToCart(goods) {
			const existIndex = this.cartGoods.findIndex(item => item.id === goods.id);
			if (existIndex > -1) {
				this.cartGoods[existIndex].count++;
			} else {
				this.cartGoods.push({
					...goods,
					count: 1
				});
			}
			// 打开弹框
			this.showPopup = true;
		},
		// 去下单
		goToOrder() {
			uni.showToast({
				title: '去结算',
				icon: 'none'
			});
			uni.navigateTo({
				url: '/pages/goods/confirm_order/confirm_order'
			})
		},
		// 查看门店列表
		navToStore(){
			uni.navigateTo({
				url: '/pages/store/store_list/store_list'
			})
		},
		navTo(url){
			uni.navigateTo({
				url: url
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.meal-page {
	min-height: 100vh;
	background: #F5F5F5;
	display: flex;
	flex-direction: column;
}

.status-bar {
    height: 100rpx;
	background-color: #fff;
}

.top-bar {
	background: #FFF;
	padding: 20rpx 40rpx;
	display: flex;
	align-items: center;
	gap: 24rpx;
	
	.tab-switch {
		display: flex;
		border-radius: 40rpx;
		overflow: hidden;
		.tab-item {
			padding: 10rpx 20rpx;
			font-size: 26rpx;
			color: #060606;
			background: #F2F3F5;
	
			&.active {
				background: #FB7D02;
				color: #FFF;
			}
		}
	}
	
	.search-box {
		width: 45%;
		background: #F7F7F7;
		border-radius: 40rpx;
		padding: 12rpx 24rpx;
		display: flex;
		align-items: center;
		gap: 12rpx;
		
		.search-icon {
			font-size: 28rpx;
			color: #999;
		}
		
		.search-text {
			font-size: 26rpx;
			color: #999;
		}
	}
}

.store-info {
	background: #FFF;
	padding: 24rpx 40rpx;
	margin-bottom: 2rpx;
	
	.store-header {
		display: flex;
		align-items: center;
		gap: 16rpx;
		margin-bottom: 16rpx;
		
		.store-name {
			font-size: 32rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
		
		.store-badge {
			background: #FFF8E8;
			color: #FB0A0A;
			border: 1rpx solid #FB0A0A;
			font-size: 20rpx;
			padding: 4rpx 12rpx;
			border-radius: 10rpx;
		}
	}
	
	.store-detail {
		display: flex;
		flex-direction: column;
		gap: 8rpx;
		
		.detail-item {
			display: flex;
			align-items: center;
			gap: 8rpx;
			font-size: 25rpx;
			color: #454444;
			
			.icon {
				font-size: 25rpx;
			}
			
			.link {
				margin-left: 10rpx;
				color: #666;
			}
		}
	}
}

.content-wrapper {
	flex: 1;
	display: flex;
	overflow: hidden;
}

.category-menu {
	width: 180rpx;
	background: #F7F7F7;
	
	.category-scroll {
		height: 100vh;
	}
	
	.category-item {
		padding: 32rpx 0;
		text-align: center;
		position: relative;
		
		.category-text {
			font-size: 28rpx;
			color: #454444;
		}
		
		&.active {
			background: #FFF;
			
			.category-text {
				color: #FB7D02;
				font-weight: 600;
			}
			
			.active-line {
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 6rpx;
				height: 32rpx;
				background: #FF6B35;
				border-radius: 0 3rpx 3rpx 0;
			}
		}
		
		&.hot {
			.category-text {
				color: #FF6B35;
			}
		}
	}
}

.goods-content {
	flex: 1;
	background: #FFF;
	
	.goods-scroll {
		height: 100vh;
	}
}

.section {
	padding: 0 24rpx;
	
	.section-header {
		margin-top: 20rpx;
		
		.banner-img {
			width: 100%;
			height: 180rpx;
		}
	}
	
	.section-title {
		font-size: 30rpx;
		font-weight: 600;
		color: #020202;
		padding: 10rpx 0;
	}
}

.goods-list {
	.goods-item {
		display: flex;
		gap: 24rpx;
		padding: 24rpx 0;
		border-bottom: 1rpx solid #F5F5F5;
		
		.goods-img {
			width: 180rpx;
			height: 180rpx;
			border-radius: 12rpx;
			background: #F7F7F7;
			flex-shrink: 0;
		}
		
		.goods-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			.goods-name-row {
				display: flex;
				align-items: center;
				gap: 12rpx;
				margin-bottom: 8rpx;
				
				.goods-name {
					font-size: 32rpx;
					font-weight: 600;
					color: #2F2F2F;
				}
				
				.hot-badge {
					background: #FF3B30;
					color: #FFF;
					font-size: 20rpx;
					padding: 4rpx 12rpx;
					border-radius: 8rpx;
				}
			}
			
			.goods-desc {
				font-size: 24rpx;
				color: #999;
				margin-bottom: 16rpx;
			}
			
			.goods-bottom {
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.price-box {
					display: flex;
					align-items: baseline;
					gap: 4rpx;
					
					.price {
						font-size: 36rpx;
						font-weight: 600;
						color: #FF3B30;
					}
					
					.unit {
						font-size: 24rpx;
						color: #FF3B30;
					}
					
					.old-price {
						margin-left: 5rpx;
						font-size: 24rpx;
						color: #999;
						text-decoration: line-through;
					}
				}
				
				.add-btn {
					background: #F18B31;
					color: #FFF;
					font-size: 20rpx;
					padding: 10rpx 15rpx;
					border-radius: 40rpx;
				}
				
				.count-control {
					display: flex;
					align-items: center;
					gap: 5rpx;
					
					.minus-btn,
					.plus-btn {
						width: 40rpx;
						height: 40rpx;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 32rpx;
					}
					
					.minus-btn {
						border: 1rpx solid #E5E5E5;
						color: #666;
					}
					
					.plus-btn {
						background: #FF3B30;
						color: #FFF;
					}
					
					.count {
						font-size: 28rpx;
						color: #2F2F2F;
						min-width: 40rpx;
						text-align: center;
					}
				}
			}
		}
	}
}

/* 底部购物车栏 */
.cart-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #FFF;
	padding: 20rpx 40rpx;
	box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	
	.cart-left {
		padding-right: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24rpx;
		flex: 1;
		
		.cart-icon-box {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.cart-icon {
				font-size: 60rpx;
				color: #F52635;
			}
			
			.cart-badge {
				position: absolute;
				top: -15rpx;
				right: -15rpx;
				background: #F18B31;
				color: #FFF;
				font-size: 20rpx;
				padding: 4rpx 12rpx;
				border-radius: 20rpx;
				min-width: 32rpx;
				text-align: center;
				border: 2rpx solid #FFF;
			}
		}
		
		.cart-info {
			display: flex;
			align-items: baseline;
			gap: 8rpx;
			
			.total-price {
				font-size: 40rpx;
				font-weight: 600;
				color: #2F2F2F;
			}
			
			.total-text {
				font-size: 24rpx;
				color: #999;
			}
		}
	}
	
	.cart-btn {
		background: #F52635;
		color: #FFF;
		font-size: 32rpx;
		padding: 15rpx 50rpx;
		border-radius: 24rpx;
	}
}
</style>