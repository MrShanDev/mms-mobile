<template>
	<view class="goods-popup">
		<!-- 遮罩层 -->
		<view class="mask" v-if="show" @click="handleMaskClick"></view>
		
		<!-- 弹窗内容 -->
		<view class="popup-content" :class="{ show: show }">
			<!-- 顶部提示 -->
			<view class="popup-header">
				<text class="tip-text">再来一份，可享受超值加购</text>
				<view class="close-btn" @click="handleClose">去抢购</view>
			</view>
			
			<!-- 已选商品列表 -->
			<view class="selected-goods">
				<view class="section-title-row">
					<text class="section-title">已选商品</text>
					<view class="action-btns">
						<text class="icon-btn" @click="clearAll">
							<text class="iconfont icon-shanchu" style="font-size: 26rpx;"></text>清空
						</text>
					</view>
				</view>
				
				<scroll-view scroll-y class="goods-scroll">
					<view class="goods-item" v-for="(item, index) in selectedGoods" :key="index">
						<image class="goods-img" :src="item.image" mode="aspectFill"></image>
						<view class="goods-info">
							<view class="goods-name">{{ item.name }}</view>
							<view class="goods-spec">{{ item.spec }}</view>
							<view class="goods-bottom">
								<text class="price">¥{{ item.price }}</text>
								<view class="count-control">
									<view class="minus-btn" @click="decreaseCount(index)">−</view>
									<text class="count">{{ item.count }}</text>
									<view class="plus-btn" @click="increaseCount(index)">+</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'GoodsPopup',
	props: {
		show: {
			type: Boolean,
			default: false
		},
		goods: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			selectedGoods: []
		}
	},
	watch: {
		goods: {
			handler(newVal) {
				this.selectedGoods = JSON.parse(JSON.stringify(newVal));
			},
			immediate: true,
			deep: true
		}
	},
	methods: {
		handleMaskClick() {
			// 点击遮罩层关闭弹窗
			this.$emit('close');
		},
		handleClose() {
			this.$emit('close');
		},
		increaseCount(index) {
			this.selectedGoods[index].count++;
			this.$emit('update:goods', this.selectedGoods);
		},
		decreaseCount(index) {
			if (this.selectedGoods[index].count > 1) {
				this.selectedGoods[index].count--;
			} else {
				// 如果数量为1，删除该商品
				this.selectedGoods.splice(index, 1);
			}
			this.$emit('update:goods', this.selectedGoods);
			
			// 如果商品为空，关闭弹窗
			if (this.selectedGoods.length === 0) {
				this.$emit('close');
			}
		},
		// 清空所有商品
		clearAll() {
			uni.showModal({
				title: '提示',
				content: '确定清空购物车吗？',
				success: (res) => {
					if (res.confirm) {
						this.selectedGoods = [];
						this.$emit('update:goods', this.selectedGoods);
						this.$emit('close');
					}
				}
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.goods-popup {
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}
	
	.popup-content {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #FFF;
		border-radius: 32rpx 32rpx 0 0;
		overflow: hidden;
		max-height: 70vh;
		z-index: 1000;
		transform: translateY(100%);
		transition: transform 0.3s ease;
		
		&.show {
			transform: translateY(0);
		}
		
		.popup-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15rpx 40rpx;
			border-bottom: 1rpx solid #F5F5F5;
			background-color: #FEF0E7;
			
			.tip-text {
				font-size: 26rpx;
				color: #333;
			}
			
			.close-btn {
				color: #FF3B30;
				font-size: 24rpx;
				padding: 8rpx 24rpx;
				border: 1rpx solid #FF3B30;
				border-radius: 40rpx;
			}
		}
		
		.selected-goods {
			padding: 20rpx 30rpx;
			
			.section-title-row {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 24rpx;
				
				.section-title {
					font-size: 32rpx;
					font-weight: 600;
					color: #2F2F2F;
				}
				
				.action-btns {
					display: flex;
					gap: 24rpx;
					
					.icon-btn {
						font-size: 25rpx;
						color: #999;
					}
				}
			}
			
			.goods-scroll {
				max-height: 400rpx;
			}
			
			.goods-item {
				display: flex;
				gap: 24rpx;
				padding: 24rpx 0;
				border-bottom: 1rpx solid #F5F5F5;
				
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
					}
					
					.goods-bottom {
						display: flex;
						justify-content: space-between;
						align-items: center;
						
						.price {
							font-size: 32rpx;
							font-weight: 600;
							color: #2F2F2F;
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
	}
}
</style>
