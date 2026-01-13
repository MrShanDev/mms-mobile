<template>
    <view class="access-page">
		<view class="list-title">待评价</view>
        <!-- 订单列表 -->
        <view class="order-list">
            <!-- 待收货订单 -->
            <view class="order-item" @click.stop="goPickupInfo">
                <view class="order-header">
                    <view class="store-info">
                        <view class="store-icon">牛</view>
                        <text class="store-name">牛堡堡高新万达店</text>
                        <text class="arrow">›</text>
                    </view>
                    <text class="order-status pending">待收货</text>
                </view>
                
                <view class="order-content">
                    <view class="goods-list">
                        <view class="goods-item">
                            <image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/burger1.png" mode="aspectFill"></image>
                            <text class="goods-name">牛堡堡双堡</text>
                        </view>
                        <view class="goods-item">
                            <image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/burger2.png" mode="aspectFill"></image>
                            <text class="goods-name">牛堡堡意面</text>
                        </view>
                    </view>
                    <view class="order-price">
                        <text class="price">¥ 19.8</text>
                        <text class="count">共2件</text>
                    </view>
                </view>
                
                <view @click.stop="navTo" class="order-actions">
                    <view class="action-btn primary">去评价</view>
                </view>
            </view>
            
            <!-- 已完成订单 -->
            <view class="order-item" @click.stop="goPickupInfo">
                <view class="order-header">
                    <view class="store-info">
                        <view class="store-icon">牛</view>
                        <text class="store-name">牛堡堡高新万达店</text>
                        <text class="arrow">›</text>
                    </view>
                    <text class="order-status completed">已完成</text>
                </view>
                
                <view class="order-content">
                    <view class="goods-list">
                        <view class="goods-item">
                            <image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/burger1.png" mode="aspectFill"></image>
                            <text class="goods-name">牛堡堡双堡</text>
                        </view>
                        <view class="goods-item">
                            <image class="goods-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/burger2.png" mode="aspectFill"></image>
                            <text class="goods-name">牛堡堡意面</text>
                        </view>
                    </view>
                    <view class="order-price">
                        <text class="price">¥ 19.8</text>
                        <text class="count">共2件</text>
                    </view>
                </view>
                
                <view @click.stop="navTo" class="order-actions">
                    <view class="action-btn primary">去评价</view>
                </view>
            </view>
            
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
		goPickupInfo(){
			uni.navigateTo({
				url: '/pages/goods/pickup_info/pickup_info'
			})
		},
		navTo(){
			uni.navigateTo({
				url: '/pages/extension/evaluate/evaluate'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.access-page {
    min-height: 100vh;
    background: #FBF9FD;
    padding-bottom: 100rpx;
	overflow: hidden;
}
.list-title {
	margin-top: 30rpx;
	padding-left: 50rpx;
	font-size: 34rpx;
	font-weight: 600;
	color: #2F2F2F;
}

.order-list {
	padding: 15rpx 30rpx;
	background-color: #FBF9FD;
    .order-item {
        background: #FFF;
        margin-bottom: 24rpx;
        padding: 32rpx;
		border-radius: 16rpx;
        
        .order-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32rpx;
            
            .store-info {
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
                    font-size: 32rpx;
                    font-weight: 600;
                    color: #2F2F2F;
                }
                
                .arrow {
                    font-size: 36rpx;
                    color: #999;
                    font-weight: 300;
                }
            }
            
            .order-status {
                font-size: 28rpx;
                font-weight: 600;
                
                &.pending {
                    color: #FF3B30;
                }
                
                &.completed {
                    color: #999;
                }
                
                &.wait-pay {
                    color: #FF3B30;
                }
            }
        }
        
        .order-content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32rpx;
            
            .goods-list {
                display: flex;
                gap: 24rpx;
                
                .goods-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12rpx;
                    
                    .goods-img {
                        width: 140rpx;
                        height: 140rpx;
                        border-radius: 12rpx;
                        background: #F7F7F7;
                    }
                    
                    .goods-name {
                        font-size: 24rpx;
                        color: #333;
                    }
                }
            }
            
            .order-price {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                gap: 12rpx;
                
                .price {
                    font-size: 40rpx;
                    font-weight: 600;
                    color: #2F2F2F;
                }
                
                .count {
                    font-size: 24rpx;
                    color: #999;
                }
            }
        }
        
        .order-actions {
            display: flex;
            justify-content: flex-end;
            gap: 24rpx;
            
            .action-btn {
                padding: 5rpx 20rpx;
                border-radius: 40rpx;
                font-size: 26rpx;
                
                &.outline {
                    border: 2rpx solid #E5E5E5;
                    color: #333;
                }
                
                &.primary {
                    background: #FF3B30;
                    color: #FFF;
                }
            }
        }
    }
}
</style>