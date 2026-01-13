<template>
    <view class="page">
        <!-- 顶部背景图 -->
        <view class="header-bg">
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

        <!-- 功能卡片区域 -->
        <view class="function-cards">
            <!-- 进店堂食 -->
            <view class="card-item" @click="showStoreSelector = true">
                <image class="card-icon" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/dine-in.png" mode="aspectFit"></image>
                <view class="card-title">进店堂食</view>
                <view class="card-desc">请于22:00前下单</view>
            </view>
            <!-- 点餐外送 -->
            <view class="card-item" @click="showStoreSelector = true">
                <image class="card-icon" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/delivery.png" mode="aspectFit"></image>
                <view class="card-title">点餐外送</view>
                <view class="card-desc">09:30后开始配送</view>
            </view>
        </view>

        <!-- 用户信息卡片 -->
        <view class="user-info-card">
            <view class="user-left" @click="switchTo">
                <image class="avatar" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/avatar.jpg" mode="aspectFill"></image>
                <view class="user-detail">
                    <view class="username">燕小乙</view>
                    <view class="vip-badge">
						<text class="iconfont icon-zuanshihuiyuan"></text>
						VIP1黄铜会员
					</view>
                </view>
            </view>
            <view class="user-stats">
                <view @click="navTo('/pages/users/coupon/coupon')" class="stat-item">
                    <view class="stat-label">优惠券</view>
                    <view class="stat-value orange">3</view>
                </view>
                <view @click="navTo('/pages/users/points/points')" class="stat-item">
                    <view class="stat-label">账户积分</view>
                    <view class="stat-value orange">123.45</view>
                </view>
            </view>
        </view>

        <!-- 功能模块区域 -->
        <view class="feature-modules">
            <view class="module-row">
                <!-- 会员码 -->
                <view class="module-item">
                    <view class="module-content">
                        <view class="module-title">会员码</view>
                        <view class="module-desc">当前会员等级享 8.8 折</view>
                        <image class="qr-code" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/qrcode.png" mode="aspectFit"></image>
                    </view>
                </view>
                
                <view class="cards">
					<!-- 我要分享 -->
					<view @click="navTo('/pages/users/share/share')" class="card-items">
						<image class="card-icon" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/share-icon.png" mode="aspectFit"></image>
						<view>
							<view class="card-title">我要分享</view>
							<view class="card-desc">分享海报获奖励</view>
						</view>
					</view>
					<!-- 我的储物 -->
                    <view @click="navTo('/pages/users/storage/storage')" class="card-items">
						<image class="card-icon" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/storage-icon.png" mode="aspectFit"></image>
						<view>
							<view class="card-title">我的储物</view>
							<view class="card-desc">酒水可寄存此</view>
						</view>
                    </view>
                </view>
            </view>
            <view @click="navTo('/pages/extension/partnership/partnership')" class="partner-module">
                <!-- 加入合伙人 -->
				<view class="m-b-10" style="font-size: 40rpx; color: #2F2F2F; font-weight: 600;">加入合伙人</view>
				<view class="partner-tags">
					<text class="tag">获得奖励</text>
					<text class="tag">获得奖励</text>
				</view>
				<view class="partner-badge">身份资格</view>
            </view>
        </view>

		<!-- 选择门店弹框 -->
		<store-selector :show="showStoreSelector" @close="showStoreSelector = false" @select="handleSelectStore" @viewAll="goToStoreList"></store-selector>
    </view>
</template>

<script>
import StoreSelector from '@/components/store-selector/store-selector.vue';

export default {
	components: {
		StoreSelector
	},
    data() {
        return {
            showStoreSelector: false
        }
    },
    onLoad() {
        
    },
    methods: {
        handleSelectStore(store) {
			uni.showToast({
				title: '选择门店：' + store.name,
				icon: 'none'
			});
			// 可以跳转到点餐页面
			uni.switchTab({
				url: '/pages/meal/meal'
			});
		},
		goToStoreList() {
			uni.navigateTo({
				url: '/pages/store/store_list/store_list'
			});
		},
		navTo(url){
			uni.navigateTo({
				url: url
			});
		},
		switchTo(){
			uni.switchTab({
				url:'/pages/me/me'
			})
		}
    }
}
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    background: #f5f5f5;
    padding-bottom: 100rpx;
}

.header-bg {
    position: relative;
    width: 100%;
    height: 600rpx;
    overflow: hidden;
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
/* 自定义swiper指示点样式 */
::v-deep .swiper .uni-swiper-dots {
  bottom: 100rpx !important; /* 调整指示点距离底部的位置 */
}

.function-cards {
    display: flex;
    gap: 24rpx;
    padding: 0 30rpx;
    margin-top: -80rpx;
    position: relative;
    z-index: 10;
    
    .card-item {
        flex: 1;
        background: #fff;
        padding: 40rpx 32rpx;
        box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .card-icon {
            width: 120rpx;
            height: 120rpx;
            margin-bottom: 24rpx;
        }
        
        .card-title {
            font-size: 32rpx;
            font-weight: 600;
            color: #2F2F2F;
            margin-bottom: 12rpx;
        }
        
        .card-desc {
            font-size: 24rpx;
            color: #BDBCBB;
        }
    }
}

.user-info-card {
    margin: 24rpx 30rpx;
    background: #fff;
    padding: 32rpx;
    box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .user-left {
        display: flex;
        align-items: center;
        gap: 24rpx;
        
        .avatar {
            width: 96rpx;
            height: 96rpx;
            border-radius: 50%;
        }
        
        .user-detail {
            .username {
                font-size: 32rpx;
                color: #333;
                margin-bottom: 12rpx;
            }
            
            .vip-badge {
                background: linear-gradient(90deg, #FEE797 0%, #FFCB5E 100%);
                border-radius: 24rpx;
                padding: 6rpx 16rpx;
                font-size: 22rpx;
                color: #FF6B00;
                display: flex;
				align-items: center;
            }
        }
    }
    
    .user-stats {
        display: flex;
        align-items: center;
        gap: 32rpx;
        
        .stat-item {
            text-align: center;
            
            .stat-label {
                font-size: 29rpx;
                color: #2F2F2F;
                margin-bottom: 15rpx;
            }
            
            .stat-value {
                font-size: 32rpx;
                font-weight: 600;
                
                &.orange {
                    color: #FF6B00;
                }
            }
        }
        
    }
}

.feature-modules {
    padding: 0 30rpx;
    
    .module-row {
        display: flex;
        gap: 24rpx;
        margin-bottom: 24rpx;
        
        .module-item {
			flex: 1;
            background: #fff;
            padding: 32rpx;
            box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.06);
            min-height: 260rpx;
            position: relative;
            
            .module-content {
				display: flex;
				flex-direction: column;
				align-items: center;
                .module-title {
                    font-size: 32rpx;
                    font-weight: 600;
                    color: #2F2F2F;
                    margin-bottom: 12rpx;
                }
                
                .module-desc {
                    font-size: 24rpx;
                    color: #999;
                    margin-bottom: 24rpx;
                }
                
                .qr-code {
                    width: 160rpx;
                    height: 160rpx;
                    margin-top: 20rpx;
                }
                
                .module-icon {
                    width: 80rpx;
                    height: 80rpx;
                    margin-bottom: 16rpx;
                }
            }
		}
    
		.cards{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.card-items{
				background-color: #fff;
				display: flex;
				align-items: center;
				padding: 35rpx 25rpx;
				.card-icon{
					width: 90rpx;
					height: 90rpx;
					margin-right: 20rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.card-title{
					font-size: 30rpx;
					text-align: center;
					color: #2F2F2F;
					font-weight: 600;
				}
				.card-desc{
					margin-top: 15rpx;
					font-size: 22rpx;
					color: #A1A1A1;
				}
			}
		}
		
		
	}
	.partner-module {
		padding: 30rpx;
		height: 300rpx;
		background-image: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/partner.png);
		background-size: 100% 100%;
	
		.partner-tags {
			margin-bottom: 16rpx;
			
			.tag {
				display: inline-block;
				background: #FFF3E6;
				color: #FF6B00;
				font-size: 22rpx;
				padding: 6rpx 12rpx;
				border-radius: 8rpx;
				margin-right: 12rpx;
			}
		}
		
		.partner-badge {
			background: #FF6B00;
			color: #fff;
			font-size: 24rpx;
			padding: 8rpx 20rpx;
			border-radius: 8rpx;
			display: inline-block;
			margin-top: 65rpx;
		}
	}

        
	
}
</style>