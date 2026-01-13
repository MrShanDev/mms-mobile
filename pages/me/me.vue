<template>
    <view class="me-page">
        <!-- 顶部状态栏占位 -->
        <view class="status-bar"></view>
        
        <!-- 用户信息区 -->
        <view class="user-section">
            <view @click="navTo('/pages/users/user_info/index')" class="user-info">
                <image class="avatar" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/avatar.jpg" mode="aspectFill"></image>
                <view class="user-detail">
                    <view class="user-name-row">
                        <text class="username">燕小乙</text>
                        <view class="vip-tag">V1普通会员</view>
                    </view>
                    <view class="phone">137****0511</view>
                </view>
            </view>
            <view class="action-btns">
                <view @click="navTo('/pages/users/setting/setting')" class="action-item">
                    <text class="iconfont icon-shezhi"></text>
                    <text class="action-text">设置</text>
                </view>
                <!-- <view class="action-item">
                    <text class="iconfont icon-xiaoxi-copy"></text>
                    <text class="action-text">消息</text>
                </view> -->
            </view>
        </view>
        
        <!-- 会员卡片 -->
        <view class="vip-card">
            <view class="vip-content">
                <image class="vip-icon" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%BB%84%201%20%E6%8B%B7%E8%B4%9D%403x.png" mode="aspectFit"></image>
                <view class="vip-text">
                    <view class="vip-title">加入会员</view>
                    <view class="vip-desc">内含价值超过100元无门槛红包</view>
                </view>
            </view>
            <view @click="navTo('/pages/extension/member/member')" class="vip-btn">立即开通</view>
        </view>
        
        <!-- 快捷功能 -->
        <view class="quick-functions">
            <view @click="navTo('/pages/users/points/points')" class="function-item">
                <view class="icon-wrapper">
                    <!-- <text class="iconfont icon-jifen"></text> -->
					<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon1.png" mode=""></image>
                </view>
                <text class="function-text">我的积分</text>
            </view>
            <view @click="navTo('/pages/users/coupon/coupon')" class="function-item">
                <view class="icon-wrapper">
                    <!-- <text class="iconfont icon-youhuiquan"></text> -->
					<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon2.png" mode=""></image>
                </view>
                <text class="function-text">优惠券</text>
            </view>
            <view @click="navTo('/pages/users/storage/storage')" class="function-item">
                <view class="icon-wrapper">
                    <!-- <text class="iconfont icon-chuwuxiang"></text> -->
					<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon3.png" mode=""></image>
                </view>
                <text class="function-text">我的储物</text>
            </view>
            <view @click="navTo('/pages/users/wallet/wallet')" class="function-item">
                <view class="icon-wrapper">
                    <!-- <text class="iconfont icon-qianbao"></text> -->
					<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon4.png" mode=""></image>
                </view>
                <text class="function-text">我的钱包</text>
            </view>
        </view>
        
        <!-- 我的功能 -->
        <view class="my-functions">
            <view class="section-title">我的功能</view>
            <view class="function-grid">
                <view @click="goOrder" class="grid-item">
                    <view class="icon-wrapper">
                        <!-- <text class="iconfont icon-dingdan1"></text> -->
						<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon5.png" mode=""></image>
                    </view>
                    <text class="grid-text">我的订单</text>
                </view>
                <view @click="navTo('/pages/users/user_address/index')"  class="grid-item">
                    <view class="icon-wrapper">
                        <!-- <text class="iconfont icon-dizhi"></text> -->
						<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon6.png" mode=""></image>
                    </view>
                    <text class="grid-text">我的地址</text>
                </view>
                <view @click="navTo('/pages/users/user_collect/user_collect')" class="grid-item">
                    <view class="icon-wrapper">
                        <!-- <text class="iconfont icon-shoucang"></text> -->
						<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon7.png" mode=""></image>
                    </view>
                    <text class="grid-text">我的收藏</text>
                </view>
                <view @click="navTo('/pages/extension/assess/assess')" class="grid-item">
                    <view class="icon-wrapper">
                        <!-- <text class="iconfont icon-pingjiax"></text> -->
						<image class="image" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/icon8.png" mode=""></image>
                    </view>
                    <text class="grid-text">我的评价</text>
                </view>
            </view>
        </view>
        
        <!-- 送餐员申请 -->
        <view class="delivery-banner">
            <image class="delivery-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/360%E6%88%AA%E5%9B%BE20251224172456.png" mode="aspectFit"></image>
            <view @click="navTo('/pages/extension/apply_delivery/apply_delivery')" class="delivery-btn">申请送餐员</view>
        </view>
        
        <!-- 底部功能 -->
        <view class="bottom-functions">
            <view @click="navTo('/pages/extension/help/help')" class="bottom-item">
                <view class="icon-wrapper">
                    <text class="iconfont icon-bangzhu"></text>
                </view>
                <text class="bottom-text">帮助与反馈</text>
            </view>
            <view @click="navTo('/pages/extension/kefu/kefu')" class="bottom-item">
                <view class="icon-wrapper">
                    <text class="iconfont icon-kefu"></text>
                </view>
                <text class="bottom-text">客服中心</text>
            </view>
            <view class="bottom-item">
                <view class="icon-wrapper">
                    <text class="iconfont icon-fenxiangyouli"></text>
                </view>
                <text class="bottom-text">分享有礼</text>
            </view>
            <view class="bottom-item">
                <view class="icon-wrapper">
                    <text class="iconfont icon-hezuo1"></text>
                </view>
                <text class="bottom-text">我要合作</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            navTo(url){
				uni.navigateTo({
					url: url
				})
			},
			goOrder(){
				uni.switchTab({
					url: '/pages/order/order'
				})
			}
        }
    }
</script>

<style lang="scss" scoped>
.me-page {
    min-height: 100vh;
    padding-bottom: 100rpx;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/bj.png);
	background-size: 100% 100%;
}

.status-bar {
    height: 150rpx;
}

.user-section {
    padding: 40rpx 30rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .user-info {
        display: flex;
        gap: 24rpx;
        
        .avatar {
            width: 120rpx;
            height: 120rpx;
            border-radius: 120rpx;
        }
        
        .user-detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12rpx;
            
            .user-name-row {
                display: flex;
                align-items: center;
                gap: 16rpx;
                
                .username {
                    font-size: 36rpx;
                    font-weight: 600;
                    color: #2F2F2F;
                }
                
                .vip-tag {
                    background: linear-gradient(90deg, #FEE797 0%, #FFCB5E 100%);
                    color: #FF6B00;
                    font-size: 20rpx;
                    padding: 6rpx 16rpx;
                    border-radius: 8rpx;
                }
            }
            
            .phone {
                font-size: 28rpx;
                color: #999;
            }
        }
    }
    
    .action-btns {
        display: flex;
        gap: 32rpx;
        
        .action-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8rpx;
            
            .iconfont {
                font-size: 40rpx;
            }
            
            .action-text {
                font-size: 22rpx;
                color: #666;
            }
        }
    }
}

.vip-card {
    margin: 0 30rpx ;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E5%9B%BE%E5%B1%82%2031%403x.png);
	background-size: 100% 100%;
    border-top-left-radius: 16rpx;
	border-top-right-radius: 16rpx;
    padding: 32rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .vip-content {
        display: flex;
        align-items: center;
        gap: 24rpx;
        
        .vip-icon {
            width: 80rpx;
            height: 80rpx;
        }
        
        .vip-text {
			color: #E5B961;
            .vip-title {
                font-size: 32rpx;
                font-weight: 600;
                margin-bottom: 8rpx;
            }
            
            .vip-desc {
                font-size: 22rpx;
            }
        }
    }
    
    .vip-btn {
        background: #E5B961;
        color: #3E3C38;
        font-size: 25rpx;
        padding: 8rpx 20rpx;
        border-radius: 40rpx;
        white-space: nowrap;
    }
}

.quick-functions {
    background: #FFF;
    margin: 0 30rpx 24rpx;
    padding: 20rpx 30rpx;
    display: flex;
    justify-content: space-between;
    
    .function-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16rpx;
        
        .icon-wrapper {            
            display: flex;
            align-items: center;
            justify-content: center;
			width: 45rpx;
			height: 45rpx;
			.iconfont{
				font-size: 50rpx;
				color: #FE4F35;
				font-weight: 600;
			}
			image{
				width: 100%;
				height: 100%;
			}
        }
        
        .function-text {
            font-size: 28rpx;
			font-weight: 600;
            color: #5B5A5A;
        }
    }
}

.my-functions {
    background: #FFF;
    margin: 0 30rpx 24rpx;
    padding: 32rpx;
    
    .section-title {
        font-size: 32rpx;
        font-weight: 600;
        color: #2F2F2F;
        margin-bottom: 32rpx;
    }
    
    .function-grid {
        display: flex;
        justify-content: space-between;
        
        .grid-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16rpx;
			
            .icon-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
				width: 45rpx;
				height: 45rpx;
				
				.iconfont{
					font-size: 48rpx;
					font-weight: 600;
					color: #FE4F35;
				}
				image{
					width: 100%;
					height: 100%;
				}
            }
            
            .grid-text {
                font-size: 28rpx;
				font-weight: 600;
			    color: #5B5A5A;
            }
        }
    }
}

.delivery-banner {
    background: #FFF;
    margin: 0 30rpx 24rpx;
    padding: 40rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .delivery-img {
        width: 360rpx;
        height: 200rpx;
    }
    
    .delivery-btn {
        background: #FF6B35;
        color: #FFF;
        font-size: 28rpx;
        padding: 20rpx 40rpx;
        border-radius: 40rpx;
        white-space: nowrap;
    }
}

.bottom-functions {
    background: #FFF;
    margin: 0 30rpx;
    padding: 32rpx;
    display: flex;
    justify-content: space-between;
    
    .bottom-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16rpx;
        
        .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            .iconfont{
				font-size: 48rpx;
				font-weight: 600;
			}
        }
        
        .bottom-text {
            font-size: 28rpx;
            color: #151515;
        }
    }
}
</style>