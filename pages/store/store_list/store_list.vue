<template>
	<view class="store-list-page">
		<!-- 分类标签 -->
		<view class="tabs">
			<view class="tab-item" :class="{ active: activeTab === 0 }" @click="activeTab = 0">
				<text>附近门店</text>
			</view>
			<view class="tab-item" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
				<text>常去门店</text>
			</view>
			<view class="tab-item" :class="{ active: activeTab === 2 }" @click="activeTab = 2">
				<text>收藏门店</text>
			</view>
			<view class="search-box">
				<text class="search-icon iconfont icon-sousuo"></text>
				<text class="search-text">搜索门店</text>
			</view>
		</view>
		
		<!-- 地图区域 -->
		<view class="map-container">
			<image class="map-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/map-demo.png" mode="aspectFill"></image>
			<view class="location-marker">
				<view class="marker-icon iconfont icon-address"></view>
				<view class="marker-info">
					<text class="location-name">万达广场(西安高新店)</text>
				</view>
			</view>
		</view>
		
		<!-- 门店列表 -->
		<view class="list-container">
			<view class="list-title">附近门店</view>
			<view class="store-list">
				<view class="store-card" v-for="(item, index) in storeList" :key="index">
					<view class="card-content">
						<view style="width: 70%;">
							<view class="store-header">
								<view class="name-row">
									<text class="store-name">{{ item.name }}</text>
									<view class="store-badge" v-if="item.status === '营业中'">{{ item.status }}</view>
								</view>
								
							</view>
							<view class="store-info">
								<text class="info-text">{{ item.time }}</text>
							</view>
							<view class="store-info">
								<text class="info-text">{{ item.address }}</text>
							</view>
						</view>
						<view style="width: 25%;">
							<view class="store-footer">
								<view class="action-btn" @click="selectStore(item)">
									<text>去下单</text>
								</view>
								<text class="distance">距离{{ item.distance }}</text>
								<view class="icon-group">
									<view class="icons">
										<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/m1.png" mode=""></image>
									</view>
									<view class="icons">
										<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/m2.png" mode=""></image>
									</view>
									<view class="icons">
										<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E4%B9%88.png" mode=""></image>
									</view>
								</view>
							</view>
						</view>
						
						
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
			activeTab: 0,
			storeList: [
				{
					id: 1,
					name: '牛堡堡（奥特莱斯店）',
					status: '营业中',
					time: '周一到周日 10:00-22:00',
					address: '直线距离1.3km | 西安市高新区奥特莱斯广场2层',
					distance: '1.3km',
					favorite: false,
					phone: '029-12345678'
				},
				{
					id: 2,
					name: '牛堡堡（高新万达店）',
					status: '营业中',
					time: '周一到周日 10:00-22:00',
					address: '直线距离1.3km | 西安市高新区万达广场2层',
					distance: '1.3km',
					favorite: false,
					phone: '029-12345679'
				},
				{
					id: 3,
					name: '牛堡堡（大茂城店）',
					status: '营业中',
					time: '周一到周日 10:00-22:00',
					address: '直线距离1.3km | 西安市高新区万达广场2层',
					distance: '1.3km',
					favorite: false,
					phone: '029-12345680'
				}
			]
		};
	},
	methods: {
		goBack() {
			uni.navigateBack();
		},
		selectStore(store) {
			uni.showToast({
				title: '选择门店：' + store.name,
				icon: 'none'
			});
			// 可以跳转到点餐页面
			// uni.navigateTo({
			// 	url: '/pages/meal/meal?storeId=' + store.id
			// });
		},
		toggleFavorite(index) {
			this.storeList[index].favorite = !this.storeList[index].favorite;
		},
		callStore(store) {
			uni.makePhoneCall({
				phoneNumber: store.phone
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.store-list-page {
	min-height: 100vh;
	background: #F5F5F5;
}

.tabs {
	background: #FFF;
	padding: 24rpx 40rpx;
	display: flex;
	align-items: center;
	gap: 40rpx;
	
	.tab-item {
		font-size: 28rpx;
		color: #666;
		padding-bottom: 10rpx;
		position: relative;
		
		&.active {
			color: #FF6B35;
			font-weight: 600;
			
			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 4rpx;
				background: #FF6B35;
				border-radius: 2rpx;
			}
		}
	}
	
	.search-box {
		flex: 1;
		background: #F7F7F7;
		border-radius: 40rpx;
		padding: 12rpx 24rpx;
		display: flex;
		align-items: center;
		gap: 12rpx;
		margin-left: auto;
		
		.search-icon {
			font-size: 28rpx;
		}
		
		.search-text {
			font-size: 26rpx;
			color: #999;
		}
	}
}

.map-container {
	width: 100%;
	height: 400rpx;
	position: relative;
	
	.map-img {
		width: 100%;
		height: 100%;
	}
	
	.location-marker {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.marker-icon {
			font-size: 56rpx;
		}
		
		.marker-info {
			background: #FFF;
			border-radius: 8rpx;
			padding: 8rpx 16rpx;
			margin-top: -10rpx;
			box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
			
			.location-name {
				font-size: 24rpx;
				color: #333;
				white-space: nowrap;
			}
		}
	}
}

.list-container {
	padding: 32rpx 30rpx;
	background-color: #fff;
	.list-title {
		font-size: 32rpx;
		font-weight: 600;
		color: #2F2F2F;
		margin-bottom: 24rpx;
	}
	
	.store-list {
		.store-card {
			background: #FFF;
			border: 2rpx solid #FFE5CC;
			border-radius: 16rpx;
			margin-bottom: 24rpx;
			overflow: hidden;
			
			.card-content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 32rpx 20rpx;
				
				.store-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 16rpx;
					
					.name-row {
						display: flex;
						align-items: center;
						gap: 16rpx;
						
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
				}
				
				.store-info {
					margin-bottom: 8rpx;
					
					.info-text {
						font-size: 24rpx;
						color: #666;
						line-height: 1.5;
					}
				}
				
				.store-footer {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 16rpx;
						
					.action-btn{
						color: #050505;
						font-weight: 600;
					}
					.distance {
						margin-top: 10rpx;
						font-size: 26rpx;
						color: #737070;
					}
					
					.icon-group {
						margin-top: 15rpx;
						display: flex;
						gap: 10rpx;
						.icons{
							width: 35rpx;
							height: 35rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}
					}
				}
			}
		}
	}
}
</style>