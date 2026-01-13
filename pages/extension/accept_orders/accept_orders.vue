<template>
	<view class="apply-delivery-page">
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

		<!-- 订单列表 -->
		<view class="order-list">
			<view class="order-item" v-for="(order, index) in orderList" :key="index">
				<!-- 订单头部 -->
				<view class="order-header">
					<view class="flex justify--between align--center">
						<view class="order-number">#{{ order.orderNo }}</view>
						<view class="m-l-15" style="color: #575656; font-size: 25rpx;">顾客已等11分钟（9:15前送达）</view>
					</view>
					<view class="order-time">
						<text class="status-tag">
							订单信息 <text class="iconfont icon-youjiantou"></text>
						</text>
					</view>
				</view>

				<!-- 起点信息 -->
				<view class="location-item">
					<view>
						<view class="location-icon location-icon-start">
							<text>取</text>
						</view>
						<view class="location-distance">{{ order.endDistance }}km</view>
					</view>
					<view class="location-info">
						<view class="location-label">牛堡堡</view>
						<view class="location-address">{{ order.startAddress }}</view>
					</view>
				</view>

				<!-- 终点信息 -->
				<view class="location-item">
					<view>
						<view class="location-icon location-icon-end">
							<text>收</text>
						</view>
						<view class="location-distance">{{ order.endDistance }}km</view>
					</view>
					
					<view class="location-info">
						<view class="location-label">{{ order.recipientName }}</view>
						<view class="location-address">{{ order.endAddress }}</view>
					</view>
				</view>

				<!-- 操作按钮 -->
				<view class="order-actions">
					<view class="action-btn action-btn-outline" @click="handleContact(order)">
						<text>{{ order.contactText }}</text>
					</view>
					<view class="action-btn action-btn-outline" @click="handleNavigate(order)">
						<text>{{ order.navigateText }}</text>
					</view>
				</view>

				<!-- 底部按钮 -->
				<view class="order-footer">
					<view 
						class="footer-btn" 
						:class="order.footerBtn1Class"
						@click="handleFooterBtn1(order)"
					>
						<text>{{ order.footerBtn1Text }}</text>
					</view>
					<view 
						class="footer-btn" 
						:class="order.footerBtn2Class"
						@click="handleFooterBtn2(order)"
					>
						<text>{{ order.footerBtn2Text }}</text>
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
			tabs: ['新任务', '待取货', '配送中', '已送达'],
			// 当前Tab
			activeTab: 0,
			// 订单列表
			orderList: [
				{
					orderNo: '001',
					startTime: '12:19分',
					duration: '0-15分送达',
					statusText: '计单休息 >',
					startDistance: '0.7',
					startAddress: '高新区万达广场一号楼',
					recipientName: '刘先生',
					endDistance: '0.3',
					endAddress: '高新区创业广场B座1803',
					contactText: '联系门店',
					navigateText: '导航到门店',
					footerBtn1Text: '抢单',
					footerBtn1Class: 'footer-btn-primary',
					footerBtn2Text: '',
					footerBtn2Class: '',
					status: 'new'
				},
				{
					orderNo: '001',
					startTime: '12:19分',
					duration: '0-15分送达',
					statusText: '计单休息 >',
					startDistance: '0.7',
					startAddress: '高新区万达广场一号楼',
					recipientName: '刘先生',
					endDistance: '0.3',
					endAddress: '高新区创业广场B座1803',
					contactText: '联系门店',
					navigateText: '导航到门店',
					footerBtn1Text: '扣费取货',
					footerBtn1Class: 'footer-btn-yellow',
					footerBtn2Text: '确认取货',
					footerBtn2Class: 'footer-btn-primary',
					status: 'pickup'
				},
				{
					orderNo: '001',
					startTime: '12:19分',
					duration: '0-13分送达',
					statusText: '计单休息 >',
					startDistance: '0.7',
					startAddress: '高新区万达广场一号楼',
					recipientName: '刘先生',
					endDistance: '0.3',
					endAddress: '高新区创业广场B座1803',
					contactText: '联系客户',
					navigateText: '路线',
					footerBtn1Text: '配送中',
					footerBtn1Class: 'footer-btn-yellow',
					footerBtn2Text: '点击送达',
					footerBtn2Class: 'footer-btn-primary',
					status: 'delivering'
				}
			]
		};
	},

	onLoad() {
		// 加载订单数据
		this.loadOrderData();
	},

	methods: {
		// 切换Tab
		switchTab(index) {
			this.activeTab = index;
			this.loadOrderData();
		},

		// 加载订单数据
		loadOrderData() {
			// TODO: 调用API获取对应状态的订单
			// const status = ['new', 'pickup', 'delivering', 'delivered'][this.activeTab];
			// this.orderList = response.list;
		},

		// 联系
		handleContact(order) {
			uni.showToast({
				title: order.contactText,
				icon: 'none'
			});
		},

		// 导航
		handleNavigate(order) {
			uni.showToast({
				title: order.navigateText,
				icon: 'none'
			});
		},

		// 底部按钮1
		handleFooterBtn1(order) {
			if (order.status === 'new') {
				uni.showModal({
					title: '提示',
					content: '确定要抢该订单吗？',
					success: (res) => {
						if (res.confirm) {
							uni.showToast({
								title: '抢单成功',
								icon: 'success'
							});
						}
					}
				});
			} else {
				uni.showToast({
					title: order.footerBtn1Text,
					icon: 'none'
				});
			}
		},

		// 底部按钮2
		handleFooterBtn2(order) {
			if (order.footerBtn2Text) {
				uni.showToast({
					title: order.footerBtn2Text,
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.apply-delivery-page {
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
		font-size: 28rpx;
		color: #3C3B3B;
		position: relative;

		&.active {
			color: #F98425;
			font-weight: 600;

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

// 订单列表
.order-list {
	padding: 20rpx 30rpx;
}

.order-item {
	background-color: #FFFFFF;
	border-radius: 16rpx;
	margin-bottom: 24rpx;
	overflow: hidden;
}

// 订单头部
.order-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24rpx 30rpx;
	border-bottom: 1rpx solid #F0F0F0;

	.order-number {
		font-size: 36rpx;
		color: #333333;
		font-weight: 700;
		margin-bottom: 12rpx;
	}

	.order-time {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		color: #999999;

		.status-tag {
			color: #666666;
			.iconfont{
				font-size: 25rpx;
			}
		}
	}
}

// 地点信息
.location-item {
	display: flex;
	padding: 24rpx 32rpx;
	align-items: flex-start;
	border-bottom: 1rpx solid #F0F0F0;

	&:last-of-type {
		border-bottom: none;
	}
}

.location-icon {
	width: 56rpx;
	height: 56rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 16rpx;
	flex-shrink: 0;

	text {
		font-size: 28rpx;
		color: #FFFFFF;
		font-weight: 600;
	}

	&.location-icon-start {
		background-color: #999999;
	}

	&.location-icon-end {
		background-color: #FF6B3B;
	}
}
.location-distance {
	font-size: 25rpx;
	color: #706F6E;
	margin-top: 10rpx;
}


.location-info {
	margin-left: 20rpx;
	flex: 1;

	.location-label {
		font-size: 26rpx;
		color: #161615;
		margin-bottom: 8rpx;
	}

	.location-address {
		font-size: 28rpx;
		font-weight: 600;
		color: #161615;
		line-height: 1.5;
	}
}

// 操作按钮
.order-actions {
	display: flex;
	gap: 24rpx;
	padding: 24rpx 32rpx;
	border-bottom: 1rpx solid #F0F0F0;
}

.action-btn {
	flex: 1;
	height: 64rpx;
	border-radius: 32rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;

	&.action-btn-outline {
		border: 1rpx solid #DDDDDD;
		color: #666666;
		background-color: #FFFFFF;
	}
}

// 底部按钮
.order-footer {
	display: flex;
	gap: 24rpx;
	padding: 24rpx 32rpx;
}

.footer-btn {
	flex: 1;
	height: 60rpx;
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;

	&.footer-btn-primary {
		background-color: #FF6B3B;
		color: #FFFFFF;
		box-shadow: 0 4rpx 12rpx rgba(255, 107, 59, 0.3);
	}

	&.footer-btn-yellow {
		background-color: #FFE500;
		color: #333333;
		box-shadow: 0 4rpx 12rpx rgba(255, 229, 0, 0.3);
	}

	&.footer-btn-outline {
		border: 2rpx solid #DDDDDD;
		color: #666666;
		background-color: #FFFFFF;
	}
}
</style>