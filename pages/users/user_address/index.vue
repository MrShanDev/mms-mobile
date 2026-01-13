<template>
    <view class="address-page">
        <!-- 顶部按钮区 -->
        <view class="top-actions">
            <view class="action-btn-group">
                <view class="btn-item btn-manage">管理</view>
                <view class="btn-item btn-add" @click="navTo('/pages/users/user_setting_address/user_setting_address')">新增地址</view>
            </view>
        </view>

        <!-- 地址列表 -->
        <view class="address-list">
            <view v-if="addressList && addressList.length > 0">
                <view class="address-item" 
                    v-for="(address, index) in addressList" 
                    :key="index">
                    <view class="address-content">
                        <!-- 左侧地址信息 -->
                        <view class="address-info">
                            <!-- 省市区街道 -->
                            <view class="address-region">{{ address.province }}{{ address.city }}{{ address.district }}{{ address.street || '' }}</view>
                            <!-- 详细地址 -->
                            <view class="address-detail">{{ address.address }}</view>
                            <!-- 联系人信息 -->
                            <view class="contact-info">
                                <text class="contact-name">{{ address.name }}</text>
                                <text class="contact-phone">{{ address.phone }}</text>
                            </view>
                        </view>
                        <!-- 右侧编辑图标 -->
                        <view class="edit-icon-wrapper" @click.stop="editAddress(address.id)">
                            <image class="edit-icon" src="/static/icon-edit.png" mode="aspectFit"></image>
                        </view>
                    </view>
                    <!-- 虚线分隔 -->
                    <view v-if="index < addressList.length - 1" class="dashed-line"></view>
                </view>
            </view>
            <view v-else class="empty-tip">暂无收货地址~~</view>
        </view>
    </view>
</template>

<script>
    import {
        addressList,
        deleteAddress
    } from '@/common/http/api.js'
    export default {
        data() {
            return {
                addressList: []
            };
        },
        onLoad() {
            // this.getAddressList()
        },
        onShow() {
            // this.getAddressList()
        },
        methods: {
            getAddressList(){
                //获取地址列表
                addressList().then((res) => {
                    // 添加对返回数据的检查
                    if (res.code == 200) {
                        this.addressList = res.data.rows
                    } else {
                        // 如果没有返回正确的数据结构，将 addressList 设置为空数组
                        this.addressList = []
                    }
                }).catch((e) => {
                    console.log("获取地址列表失败:", e)
                    // 出错时也将 addressList 设置为空数组
                    this.addressList = []
                })
            },
            goBack() {
                uni.navigateBack()
            },
            editAddress(id) {
                uni.navigateTo({
                    url: `/pages_Me/user_setting_address/user_setting_address?id=${id}`
                })
            },
            deleteAddress(id) {
                uni.showModal({
                    title: '提示',
                    content: '确定要删除该地址吗？',
                    success: (res) => {
                        if (res.confirm) {
                            // 删除地址
                            deleteAddress(id).then((res) => {
                                uni.showToast({
                                    title: '删除成功',
                                    icon: 'success'
                                })
                                this.getAddressList()
                            }).catch((e) => {
                                console.log("删除地址失败:", e)
                                uni.showToast({
                                    title: '删除地址失败',
                                    icon: 'none'
                                })
                            })
                        }
                    }
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

<style scoped lang="scss">

// 顶部操作按钮区
.top-actions {
    background-color: #f5f5f5;
    padding: 20rpx 30rpx;
    
    .action-btn-group {
        display: flex;
        justify-content: flex-end;
        gap: 20rpx;
        
        .btn-item {
            padding: 10rpx 28rpx;
            border-radius: 8rpx;
            font-size: 28rpx;
            border: 1rpx solid #ddd;
            background-color: #fff;
            color: #333;
        }
        
        .btn-manage {
            color: #333;
        }
        
        .btn-add {
            color: #ff6600;
            border-color: #ff6600;
        }
    }
}

// 地址列表
.address-list {
    background-color: #f5f5f5;
    min-height: calc(100vh - 180rpx);
    padding: 0 30rpx;
    
    .address-item {
        background-color: #fff;
        
        &:first-child {
            border-top-left-radius: 12rpx;
            border-top-right-radius: 12rpx;
        }
        
        &:last-child {
            border-bottom-left-radius: 12rpx;
            border-bottom-right-radius: 12rpx;
        }
        
        .address-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 30rpx 24rpx;
            
            .address-info {
                flex: 1;
                
                .address-region {
                    font-size: 26rpx;
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 8rpx;
                }
                
                .address-detail {
                    font-size: 32rpx;
                    color: #333;
                    font-weight: 600;
                    line-height: 1.5;
                    margin-bottom: 12rpx;
                }
                
                .contact-info {
                    display: flex;
                    align-items: center;
                    gap: 16rpx;
                    
                    .contact-name {
                        font-size: 28rpx;
                        color: #333;
                    }
                    
                    .contact-phone {
                        font-size: 28rpx;
                        color: #666;
                    }
                }
            }
            
            .edit-icon-wrapper {
                margin-top: 10rpx;
                padding: 10rpx;
                
                .edit-icon {
                    width: 40rpx;
                    height: 40rpx;
                }
            }
        }
        
        .dashed-line {
            height: 1rpx;
            margin: 0 24rpx;
            background-image: linear-gradient(to right, #ddd 0%, #ddd 50%, transparent 50%);
            background-size: 12rpx 1rpx;
            background-repeat: repeat-x;
        }
    }
    
    .empty-tip {
        text-align: center;
        font-size: 28rpx;
        color: #999;
        padding-top: 100rpx;
    }
}
</style>