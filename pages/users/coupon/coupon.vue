<template>
	<view class="coupon-page">
		<!-- Tab切换 -->
		<view class="tab-bar">
			<view 
				class="tab-item" 
				v-for="(tab, index) in tabs" 
				:key="index"
				:class="{ active: activeTab === index }"
				@click="switchTab(index)"
			>
				<text>{{ tab }}</text>
			</view>
		</view>

		<!-- 优惠券列表 -->
		<view class="coupon-list">
			<view class="coupon-item" v-for="(coupon, index) in couponList" :key="index">
				<!-- 左侧金额区域 -->
				<view class="coupon-left">
					<view class="amount">
						<text class="value">{{ coupon.amount }}</text>
						<text class="currency">元</text>
					</view>
					<view class="condition">{{ coupon.condition }}</view>
				</view>

				<!-- 中间分隔线 -->
				<view class="coupon-divider">
					<view class="dot dot-top"></view>
					<view class="dashed-line"></view>
					<view class="dot dot-bottom"></view>
				</view>

				<!-- 右侧信息区域 -->
				<view class="coupon-right">
					<view class="coupon-info">
						<view class="title">{{ coupon.title }}</view>
						<view class="expire-date" :class="{ expired: coupon.status === 'expired' }">
							{{ coupon.expireText }}
						</view>
						<view class="usage-rule">{{ coupon.usageRule }}</view>
					</view>
					<view class="coupon-actions">
						<view 
							class="btn btn-use m-b-10" 
							v-if="coupon.status === 'available'"
							@click="useCoupon(coupon)"
						>
							<text>去使用</text>
						</view>
						<view 
							class="btn btn-transfer" 
							@click="transferCoupon(coupon)"
						>
							<text>转赠好友</text>
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
			// Tab标签
			tabs: ['未使用', '已使用', '已过期'],
			// 当前Tab
			activeTab: 0,
			// 优惠券列表
			couponList: [
				{
					amount: '7',
					condition: '满25元可用',
					title: '外卖专享券',
					expireText: '今日到期',
					usageRule: '仅限使用规则',
					status: 'available'
				},
				{
					amount: '7',
					condition: '满25元可用',
					title: '外卖专享券',
					expireText: '今日到期',
					usageRule: '仅限使用规则',
					status: 'available'
				},
				{
					amount: '7',
					condition: '满25元可用',
					title: '外卖专享券',
					expireText: '仅限使用规则',
					usageRule: '仅限使用规则',
					status: 'available'
				},
				{
					amount: '7',
					condition: '满25元可用',
					title: '外卖专享券',
					expireText: '仅限使用规则',
					usageRule: '仅限使用规则',
					status: 'available'
				},
				{
					amount: '7',
					condition: '满25元可用',
					title: '外卖专享券',
					expireText: '仅限使用规则',
					usageRule: '仅限使用规则',
					status: 'available'
				},
				{
					amount: '7',
					condition: '满25元可用',
					title: '外卖专享券',
					expireText: '仅限使用规则',
					usageRule: '仅限使用规则',
					status: 'available'
				}
			]
		};
	},

	onLoad() {
		// 加载优惠券数据
		this.loadCouponData();
	},

	methods: {
		// 切换Tab
		switchTab(index) {
			this.activeTab = index;
			// 加载对应状态的优惠券
			this.loadCouponData();
		},

		// 加载优惠券数据
		loadCouponData() {
			// TODO: 调用API获取优惠券数据
			// const status = ['available', 'used', 'expired'][this.activeTab];
			// this.couponList = response.list;
		},

		// 使用优惠券
		useCoupon(coupon) {
			uni.showToast({
				title: '去使用',
				icon: 'none'
			});
		},

		// 转赠优惠券
		transferCoupon(coupon) {
			uni.showToast({
				title: '转赠好友',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.coupon-page {
	min-height: 100vh;
	background-color: #F5F5F5;
}

// Tab切换栏
.tab-bar {
	background-color: #FFFFFF;
	display: flex;
	height: 88rpx;
	position: sticky;
	top: 0;
	z-index: 100;

	.tab-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #666666;
		position: relative;

		&.active {
			color: #F98425;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: 60rpx;
				height: 4rpx;
				background-color: #F98425;
				border-radius: 2rpx;
			}
		}
	}
}

// 优惠券列表
.coupon-list {
	padding: 20rpx 24rpx;
}

.coupon-item {
	background-color: #FFFFFF;
	border-radius: 12rpx;
	margin-bottom: 20rpx;
	height: 200rpx;
	display: flex;
	overflow: hidden;
	position: relative;
}

// 左侧金额区域
.coupon-left {
	width: 180rpx;
	background: linear-gradient(to right, #F9B781, #fff);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	.amount {
		display: flex;
		align-items: baseline;
		margin-bottom: 8rpx;

		.currency {
			font-size: 32rpx;
			color: #2E2D2D;
		}

		.value {
			font-size: 72rpx;
			color: #2E2D2D;
			line-height: 1;
		}
	}

	.condition {
		font-size: 26rpx;
		color: #D96608;
		opacity: 0.9;
	}
}

// 中间分隔线
.coupon-divider {
	width: 2rpx;
	position: relative;
	background-color: transparent;

	.dashed-line {
		position: absolute;
		top: 24rpx;
		bottom: 24rpx;
		left: 0;
		width: 2rpx;
		background-image: linear-gradient(to bottom, #E5E5E5 50%, transparent 50%);
		background-size: 2rpx 8rpx;
		background-repeat: repeat-y;
	}

	.dot {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 24rpx;
		height: 24rpx;
		background-color: #F5F5F5;
		border-radius: 50%;
		z-index: 1;

		&.dot-top {
			top: -12rpx;
		}

		&.dot-bottom {
			bottom: -12rpx;
		}
	}
}

// 右侧信息区域
.coupon-right {
	flex: 1;
	padding: 24rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.coupon-info {
	.title {
		font-size: 32rpx;
		color: #2E2D2D;
		margin-bottom: 12rpx;
	}

	.expire-date {
		font-size: 27rpx;
		color: #F83332;
		margin-bottom: 8rpx;

		&.expired {
			color: #999999;
		}
	}

	.usage-rule {
		font-size: 27rpx;
		color: #8B8A8A;
	}
}

.coupon-actions {

	.btn {
		padding: 12rpx 32rpx;
		border-radius: 32rpx;
		font-size: 26rpx;
		text-align: center;
		white-space: nowrap;

		&.btn-use {
			background-color: #F92525;
			color: #FFFFFF;
		}

		&.btn-transfer {
			background-color: #F98425;
			color: #FFFFFF;
		}
	}
}
</style>