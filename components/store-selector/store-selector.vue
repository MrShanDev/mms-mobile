<template>
	<view class="store-selector">
		<!-- 遮罩层 -->
		<view class="mask" v-if="show" @click="close"></view>
		
		<!-- 弹窗内容 -->
		<view class="popup-content" :class="{ show: show }">
			<view class="store-head">
				<view class="store-title m-b-5">
					请确认就餐门店
				</view>
				<view class="store-desc">
					附近门店较多，请确认就餐门店
				</view>
			</view>
			<!-- 门店列表 -->
			<view class="store-list">
				<view class="store-item" v-for="(item, index) in storeList" :key="index" @click="selectStore(item)">
					<view class="store-info">
						<view class="store-header">
							<text class="store-name">{{ item.name }}</text>
							<view class="store-badge" v-if="item.status === '营业中'">{{ item.status }}</view>
						</view>
						<view class="store-detail">
							<text class="detail-text">{{ item.time }}</text>
						</view>
						<view class="store-detail">
							<text class="detail-text">{{ item.address }}</text>
						</view>
					</view>
					<view class="store-action">
						<text class="action-text">选择门店</text>
						<text class="distance">距离{{ item.distance }}</text>
					</view>
				</view>
			</view>
			
			<!-- 底部按钮 -->
			<view class="footer-btn" @click="viewAllStores">
				<text>选择其他门店 <text class="iconfont icon-youjiantou"></text></text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'StoreSelector',
	props: {
		show: {
			type: Boolean,
			default: false
		},
		stores: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			storeList: [
				{
					id: 1,
					name: '牛堡堡（奥特莱斯店）',
					status: '营业中',
					time: '周一到周日 10:00-22:00',
					address: '直线距离1.3km | 西安市高新区奥特莱斯广场2层',
					distance: '1.3km'
				},
				{
					id: 2,
					name: '牛堡堡（高新万达店）',
					status: '营业中',
					time: '周一到周日 10:00-22:00',
					address: '直线距离1.3km | 西安市高新区万达广场2层',
					distance: '1.3km'
				},
				{
					id: 3,
					name: '牛堡堡（大茂城店）',
					status: '营业中',
					time: '周一到周日 10:00-22:00',
					address: '直线距离1.3km | 西安市高新区万达广场2层',
					distance: '1.3km'
				}
			]
		}
	},
	watch: {
		stores: {
			handler(newVal) {
				if (newVal && newVal.length > 0) {
					this.storeList = newVal;
				}
			},
			immediate: true
		}
	},
	methods: {
		close() {
			this.$emit('close');
		},
		selectStore(store) {
			this.$emit('select', store);
			this.close();
		},
		viewAllStores() {
			this.$emit('viewAll');
			this.close();
		}
	}
}
</script>

<style lang="scss" scoped>
.store-selector {
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
		background: #fff;
		border-radius: 32rpx 32rpx 0 0;
		height: 55vh;
		z-index: 1000;
		transform: translateY(100%);
		transition: transform 0.3s ease;
		overflow: hidden;
		
		&.show {
			transform: translateY(0);
		}
		.store-head{
			padding: 32rpx;
			.store-title{
				font-size: 35rpx;
				font-weight: 600;
				color: #020202;
			}
			.store-desc{
				font-size: 25rpx;
				color: #838383;
			}
		}
		.store-list {
			padding: 0 32rpx 100rpx;
			height: 40vh;
			overflow-y: auto;
			
			.store-item {
				background: #FFF;
				border: 2rpx solid #FFE5CC;
				border-radius: 16rpx;
				padding: 32rpx;
				margin-bottom: 24rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.store-info {
					width: 70%;
					.store-header {
						display: flex;
						align-items: center;
						gap: 16rpx;
						margin-bottom: 12rpx;
						
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
							border-radius: 8rpx;
						}
					}
					
					.store-detail {
						margin-bottom: 8rpx;
						
						.detail-text {
							font-size: 24rpx;
							color: #454444;
							line-height: 1.5;
						}
					}
				}
				
				.store-action {
					width: 25%;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					justify-content: space-between;
					
					.action-text {
						margin-bottom: 10rpx;
						font-size: 28rpx;
						color: #050505;
						font-weight: 600;
					}
					
					.distance {
						font-size: 26rpx;
						color: #454444;
					}
				}
			}
		}
		
		.footer-btn {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			border-top: 1rpx solid #F5F5F5;
			background-color: #fff;
			text {
				font-size: 28rpx;
				color: #050505;
			}
		}
	}
}
</style>
