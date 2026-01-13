<template>
    <view class="order-page">
        <!-- 顶部导航栏 -->
        <view class="nav-bar">
            <view class="nav-center">
                <view class="tab-switch">
                    <view class="tab-item active">当前订单</view>
                    <view class="tab-item">历史订单</view>
					<view @click="goCart" class="tab-item">购物车</view>
                </view>
            </view>
        </view>
        
        <!-- 搜索栏 -->
        <view class="search-bar">
            <view class="search-input">
                <text class="search-icon iconfont icon-sousuo"></text>
                <text class="placeholder">输入商品名称</text>
            </view>
        </view>
        
        <!-- 订单状态筛选 -->
        <view class="status-tabs">
            <view class="status-item active">
                <text class="status-text">全部</text>
                <view class="status-line"></view>
            </view>
            <view class="status-item">
                <text class="status-text">待支付</text>
            </view>
            <view class="status-item">
                <text class="status-text">待收货</text>
            </view>
            <view class="status-item">
                <text class="status-text">已取消</text>
            </view>
        </view>
        
        <!-- 订单列表 -->
        <view class="order-list">
            <!-- 待收货订单 -->
            <view class="order-item" @click.stop="goPickupInfo">
                <view class="order-header">
                    <view class="store-info">
                        <view class="store-icon">牛</view>
                        <text class="store-name">牛堡堡高新万达店</text>
                        <text class="arrow iconfont icon-youjiantou"></text>
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
                
                <view class="order-actions">
					<view @click.stop="goPickupInfo" class="action-btn outline">订单跟踪</view>
                    <view @click.stop="navTo" class="action-btn outline">去评价</view>
                    <view class="action-btn primary">再来一单</view>
                </view>
            </view>
            
            <!-- 已完成订单 -->
            <view class="order-item">
                <view class="order-header">
                    <view class="store-info">
                        <view class="store-icon">牛</view>
                        <text class="store-name">牛堡堡高新万达店</text>
                        <text class="arrow iconfont icon-youjiantou"></text>
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
                
                <view class="order-actions">
                    <view class="action-btn outline">去评价</view>
                    <view class="action-btn primary">再来一单</view>
                </view>
            </view>
            
            <!-- 待支付订单 -->
            <view class="order-item">
                <view class="order-header">
                    <view class="store-info">
                        <view class="store-icon">牛</view>
                        <text class="store-name">牛堡堡高新万达店</text>
                        <text class="arrow iconfont icon-youjiantou">›</text>
                    </view>
                    <text class="order-status wait-pay">待支付</text>
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
                
                <view class="order-actions">
                    <view class="action-btn outline">添加商品</view>
                    <view class="action-btn primary">付款结算</view>
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
			},
			goCart(){
				uni.navigateTo({
					url: '/pages/cart/cart'
				})
			}
		}
    }
</script>

<style lang="scss" scoped>
.order-page {
    min-height: 100vh;
    background: #F5F5F5;
    padding-bottom: 100rpx;
}
.nav-bar {
    background: #FFF;
    padding: 120rpx 0 20rpx; 
    display: flex;
    align-items: center;
    justify-content: center;
    
    .nav-center {
        flex: 1;
        display: flex;
        justify-content: center;
        
        .tab-switch {
			margin-bottom: 15rpx;
            display: flex;
			justify-content: center;
            background: #FFF;
            border: 2rpx solid #FF3B30;
            border-radius: 8rpx;
            overflow: hidden;
            
            .tab-item {
                padding: 12rpx 20rpx;
                font-size: 28rpx;
                color: #313131;
				text-align: center;
                
                &.active {
                    background: #FF3B30;
                    color: #FFF;
                }
            }
        }
    }
}

.search-bar {
    background: #FFF;
    padding: 0 40rpx 20rpx;
    
    .search-input {
        background: #F7F7F7;
        border-radius: 40rpx;
        padding: 20rpx 32rpx;
        display: flex;
        align-items: center;
        gap: 16rpx;
        
        .search-icon {
            font-size: 32rpx;
            color: #999;
        }
        
        .placeholder {
            font-size: 28rpx;
            color: #999;
        }
    }
}

.status-tabs {
    background: #FFF;
    display: flex;
    padding: 0 40rpx;
    margin-bottom: 24rpx;
    
    .status-item {
        flex: 1;
        padding: 10rpx 0 30rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        
        .status-text {
            font-size: 28rpx;
            color: #333;
        }
        
        .status-line {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 64rpx;
            height: 6rpx;
            background: #FF3B30;
            border-radius: 3rpx;
        }
        
        &.active {
            .status-text {
                color: #FF3B30;
                font-weight: 600;
            }
        }
    }
}

.order-list {
    .order-item {
        background: #FFF;
        margin-bottom: 24rpx;
        padding: 32rpx;
        
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