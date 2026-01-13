<template>
	<view class="user-collect-page">
		<!-- 门店列表 -->
		<view class="list-container">
			<view class="list-title p-l-20">收藏店铺</view>
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
									<!-- <view class="icons">
										<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/m2.png" mode=""></image>
									</view> -->
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
	}
}
</script>

<style lang="scss">
.user-collect-page {
	min-height: 100vh;
	background: #FBF9FD;
}
.list-container {
	padding: 32rpx 30rpx;
	background-color: #FBF9FD;
	.list-title {
		font-size: 34rpx;
		font-weight: 600;
		color: #2F2F2F;
		margin-bottom: 24rpx;
	}
	
	.store-list {
		.store-card {
			background: #FFF;
			border: 2rpx solid #E6E7E9;
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
						justify-content: space-between;
						gap: 20rpx;
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