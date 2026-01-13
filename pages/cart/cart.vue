<template>
    <view class="cart-page">
        
        <!-- 购物车内容 -->
        <view class="cart-content" v-if="cartList.length > 0">
            <scroll-view scroll-y class="cart-scroll">
                <!-- 按店铺分组 -->
                <view class="store-group" v-for="(store, storeIndex) in cartList" :key="storeIndex">
                    <!-- 店铺头部 -->
                    <view class="store-header">
                        <view class="store-left" @click="toggleStoreSelect(storeIndex)">
                            <view class="checkbox" :class="{ checked: store.selected }">
                                <text class="iconfont icon-duihao" v-if="store.selected"></text>
                            </view>
                            <view class="store-icon">
                                <text class="icon-text">牛</text>
                            </view>
                            <text class="store-name">{{ store.storeName }}</text>
                            <text class="iconfont icon-youjiantou arrow-icon"></text>
                        </view>
                        <view class="action-btns">
                            <text class="delete-btn iconfont icon-shanchu" @click="clearStore(storeIndex)"></text>
                            <text class="clear-text" @click="clearStore(storeIndex)">清空</text>
                        </view>
                    </view>
                    
                    <!-- 商品列表 -->
                    <view class="goods-list">
                        <view class="goods-item" v-for="(item, index) in store.goodsList" :key="index">
                            <!-- 复选框 -->
                            <view class="checkbox" :class="{ checked: item.selected }" @click="toggleGoodsSelect(storeIndex, index)">
                                <text class="iconfont icon-duihao" v-if="item.selected"></text>
                            </view>
                            
                            <!-- 商品图片 -->
                            <image class="goods-img" :src="item.image" mode="aspectFill"></image>
                            
                            <!-- 商品信息 -->
                            <view class="goods-info">
                                <view class="goods-name">{{ item.name }}</view>
                                <view class="goods-spec">{{ item.spec }}</view>
                                <view class="goods-bottom">
                                    <text class="price">¥ {{ item.price }}</text>
                                    <view class="count-control">
                                        <view class="minus-btn" @click="decreaseCount(storeIndex, index)">−</view>
                                        <input class="count-input" type="number" :value="item.count" disabled />
                                        <view class="plus-btn" @click="increaseCount(storeIndex, index)">+</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
        
        <!-- 空状态 -->
        <view class="empty-cart" v-else>
            <image class="empty-img" src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/empty-cart.png" mode="aspectFit"></image>
            <text class="empty-text">购物车空空如也~</text>
            <view class="go-shopping-btn" @click="goShopping">去逛逛</view>
        </view>
        
        <!-- 底部结算栏 -->
        <view class="bottom-bar" v-if="cartList.length > 0">
            <view class="bar-left">
                <view class="checkbox" :class="{ checked: allSelected }" @click="toggleAllSelect"> 
                    <text class="iconfont icon-duihao" v-if="allSelected"></text>
                </view>
                <view class="select-info">
					<view>
						<text class="total-label">合计</text>
						<text class="free-delivery">(不含运费)</text>
						<text class="total-price p-l-10">¥ {{ totalPrice }}</text>
					</view>
                    
                    <view class="detail-toggle" @click="showDetail = !showDetail">
                        <text class="free-text">免运费</text>
                        <text class="detail-text">明细</text>
                        <text class="iconfont" :class="showDetail ? 'icon-shangjiantou' : 'icon-xiajiantou'"></text>
                    </view>
                </view>
            </view>
            <view class="checkout-btn" :class="{ disabled: selectedCount === 0 }" @click="goCheckout">
                去下单({{ selectedCount }})
            </view>
        </view>
        
        <!-- 价格明细弹窗 -->
        <view class="detail-modal" v-if="showDetail" @click="showDetail = false">
            <view class="detail-content" @click.stop>
                <view class="detail-row">
                    <text class="label">商品金额</text>
                    <text class="value">¥{{ totalPrice }}</text>
                </view>
                <view class="detail-row">
                    <text class="label">配送费</text>
                    <text class="value">¥0.00</text>
                </view>
                <view class="detail-row total">
                    <text class="label">合计</text>
                    <text class="value">¥{{ totalPrice }}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            showDetail: false,
            cartList: [
                {
                    storeId: 1,
                    storeName: '牛堡堡高新万达店',
                    selected: true,
                    goodsList: [
                        {
                            id: 1,
                            name: '牛堡堡汉堡',
                            spec: '双层/去蒜/加菜',
                            price: 9.9,
                            count: 1,
                            image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food1.png',
                            selected: true
                        },
                        {
                            id: 2,
                            name: '牛堡堡汉堡',
                            spec: '双层/去蒜/加菜',
                            price: 9.9,
                            count: 2,
                            image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food2.png',
                            selected: true
                        }
                    ]
                },
                {
                    storeId: 2,
                    storeName: '牛堡堡奥莱广场店',
                    selected: false,
                    goodsList: [
                        {
                            id: 3,
                            name: '牛堡堡汉堡',
                            spec: '双层/去蒜/加菜',
                            price: 9.9,
                            count: 1,
                            image: 'https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/food1.png',
                            selected: false
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        // 全选状态
        allSelected() {
            if (this.cartList.length === 0) return false;
            return this.cartList.every(store => store.selected);
        },
        // 已选商品数量
        selectedCount() {
            let count = 0;
            this.cartList.forEach(store => {
                store.goodsList.forEach(goods => {
                    if (goods.selected) {
                        count += goods.count;
                    }
                });
            });
            return count;
        },
        // 总价
        totalPrice() {
            let total = 0;
            this.cartList.forEach(store => {
                store.goodsList.forEach(goods => {
                    if (goods.selected) {
                        total += goods.price * goods.count;
                    }
                });
            });
            return total.toFixed(1);
        }
    },
    methods: {
        // 切换店铺选中状态
        toggleStoreSelect(storeIndex) {
            const store = this.cartList[storeIndex];
            store.selected = !store.selected;
            // 同步更新该店铺所有商品的选中状态
            store.goodsList.forEach(goods => {
                goods.selected = store.selected;
            });
        },
        // 切换商品选中状态
        toggleGoodsSelect(storeIndex, goodsIndex) {
            const store = this.cartList[storeIndex];
            const goods = store.goodsList[goodsIndex];
            goods.selected = !goods.selected;
            // 检查该店铺是否所有商品都已选中
            store.selected = store.goodsList.every(item => item.selected);
        },
        // 全选/取消全选
        toggleAllSelect() {
            const selectAll = !this.allSelected;
            this.cartList.forEach(store => {
                store.selected = selectAll;
                store.goodsList.forEach(goods => {
                    goods.selected = selectAll;
                });
            });
        },
        // 增加数量
        increaseCount(storeIndex, goodsIndex) {
            this.cartList[storeIndex].goodsList[goodsIndex].count++;
        },
        // 减少数量
        decreaseCount(storeIndex, goodsIndex) {
            const goods = this.cartList[storeIndex].goodsList[goodsIndex];
            if (goods.count > 1) {
                goods.count--;
            } else {
                // 数量为1时，删除商品
                uni.showModal({
                    title: '提示',
                    content: '确定删除该商品吗？',
                    success: (res) => {
                        if (res.confirm) {
                            this.cartList[storeIndex].goodsList.splice(goodsIndex, 1);
                            // 如果店铺商品为空，删除店铺
                            if (this.cartList[storeIndex].goodsList.length === 0) {
                                this.cartList.splice(storeIndex, 1);
                            }
                        }
                    }
                });
            }
        },
        // 清空店铺
        clearStore(storeIndex) {
            uni.showModal({
                title: '提示',
                content: '确定清空该店铺的商品吗？',
                success: (res) => {
                    if (res.confirm) {
                        this.cartList.splice(storeIndex, 1);
                    }
                }
            });
        },
        // 去购物
        goShopping() {
            uni.switchTab({
                url: '/pages/index/index'
            });
        },
        // 去结算
        goCheckout() {
            if (this.selectedCount === 0) {
                uni.showToast({
                    title: '请选择商品',
                    icon: 'none'
                });
                return;
            }
            uni.navigateTo({
                url: '/pages/goods/confirm_order/confirm_order'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-page {
    min-height: 100vh;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
}

.cart-content {
	margin: 20rpx;
    flex: 1;
    padding-bottom: 120rpx;
    
    .cart-scroll {
        height: calc(100vh - 232rpx);
    }
}

.store-group {
    margin-bottom: 20rpx;
    background: #FFF;
	border-radius: 16rpx;
    
    .store-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24rpx 30rpx;
        border-bottom: 1rpx solid #F5F5F5;
        
        .store-left {
            display: flex;
            align-items: center;
            gap: 16rpx;
            flex: 1;
            
            .store-icon {
                width: 44rpx;
                height: 44rpx;
                background: #F52635;
                border-radius: 8rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                
                .icon-text {
                    font-size: 24rpx;
                    color: #FFF;
                    font-weight: 600;
                }
            }
            
            .store-name {
                font-size: 28rpx;
                font-weight: 600;
                color: #2F2F2F;
            }
            
            .arrow-icon {
                font-size: 24rpx;
                color: #999;
            }
        }
        
        .action-btns {
            display: flex;
            align-items: center;
            gap: 8rpx;
            
            .delete-btn {
                font-size: 32rpx;
                color: #999;
            }
            
            .clear-text {
                font-size: 26rpx;
                color: #999;
            }
        }
    }
}

.goods-list {
	
    .goods-item {
        display: flex;
        align-items: center;
        gap: 20rpx;
        padding: 24rpx 30rpx;
        border-bottom: 1rpx solid #F5F5F5;
        
        .goods-img {
            width: 160rpx;
            height: 160rpx;
            border-radius: 12rpx;
            background: #F7F7F7;
            flex-shrink: 0;
        }
        
        .goods-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 160rpx;
            
            .goods-name {
                font-size: 32rpx;
                font-weight: 600;
                color: #2F2F2F;
            }
            
            .goods-spec {
                font-size: 24rpx;
                color: #999;
                margin-top: 8rpx;
            }
            
            .goods-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: auto;
                
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
                        width: 44rpx;
                        height: 44rpx;
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
                    
                    .count-input {
                        width: 60rpx;
                        height: 44rpx;
                        text-align: center;
                        font-size: 28rpx;
                        color: #2F2F2F;
                    }
                }
            }
        }
    }
}

.checkbox {
    width: 40rpx;
    height: 40rpx;
    border: 1rpx solid #E5E5E5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    &.checked {
        background: #F52635;
        border-color: #F52635;
        
        .iconfont {
            font-size: 24rpx;
            color: #FFF;
        }
    }
}

.empty-cart {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 200rpx 0;
    
    .empty-img {
        width: 400rpx;
        height: 400rpx;
        margin-bottom: 40rpx;
    }
    
    .empty-text {
        font-size: 28rpx;
        color: #999;
        margin-bottom: 60rpx;
    }
    
    .go-shopping-btn {
        background: #F52635;
        color: #FFF;
        font-size: 28rpx;
        padding: 20rpx 60rpx;
        border-radius: 40rpx;
    }
}

.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFF;
    padding: 20rpx 30rpx 40rpx;
    box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    
    .bar-left {
        display: flex;
		justify-content: space-between;
        align-items: center;
        gap: 20rpx;
        flex: 1;
		margin-right: 20rpx;
        
        .select-info {
            display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-end;
            .total-label {
                font-size: 26rpx;
                color: #010101;
            }
            
            .free-delivery {
                font-size: 20rpx;
                color: #797979;
            }
            
            .total-price {
                font-size: 36rpx;
                font-weight: 600;
                color: #F52635;
            }
            
            .detail-toggle {
                display: flex;
                align-items: center;
                gap: 8rpx;
                
                .free-text {
                    font-size: 20rpx;
                    color: #8E8D8D;
                }
                
                .detail-text {
                    font-size: 24rpx;
                    color: #F52635;
                }
                
                .iconfont {
                    font-size: 20rpx;
                    color: #F52635;
                }
            }
        }
    }
    
    .checkout-btn {
        background: #F52635;
        color: #FFF;
        font-size: 28rpx;
        padding: 20rpx 40rpx;
        border-radius: 40rpx;
        white-space: nowrap;
        
        &.disabled {
            background: #CCC;
        }
    }
}

.detail-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    display: flex;
    align-items: flex-end;
    
    .detail-content {
        width: 100%;
        background: #FFF;
        border-radius: 32rpx 32rpx 0 0;
        padding: 40rpx 30rpx;
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20rpx 0;
            
            .label {
                font-size: 28rpx;
                color: #666;
            }
            
            .value {
                font-size: 28rpx;
                color: #2F2F2F;
            }
            
            &.total {
                border-top: 1rpx solid #F5F5F5;
                margin-top: 20rpx;
                padding-top: 30rpx;
                
                .label,
                .value {
                    font-size: 32rpx;
                    font-weight: 600;
                    color: #F52635;
                }
            }
        }
    }
}
</style>