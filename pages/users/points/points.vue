<template>
	<view class="points-page">

		<!-- 积分卡片 -->
		<view class="points-card">
			<view class="card-content">
				<view class="points-label">可用积分</view>
				<view class="points-amount">{{ availablePoints }}</view>
				<view class="card-action">
					<view class="action-btn" @click="exchangePoints">
						<text>积分兑换</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 积分明细 -->
		<view class="detail-section">
			<view class="detail-header">
				<text class="detail-title">积分明细</text>
				<view class="view-all" @click="viewAllPoints">
					<text>积分规则</text>
					<text class="arrow iconfont icon-youjiantou"></text>
				</view>
			</view>

			<!-- 积分列表 -->
			<view class="points-list">
				<view class="points-item" v-for="(item, index) in pointsList" :key="index">
					<view class="item-left">
						<view class="item-title">{{ item.title }}</view>
						<view class="item-date">{{ item.date }}</view>
					</view>
					<view class="item-right">
						<text class="points-change" :class="item.type === 'add' ? 'add' : 'reduce'">{{ item.change }}</text>
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
			// 可用积分
			availablePoints: '6.00',
			// 积分明细列表
			pointsList: [
				{
					title: '账户积分',
					date: '2025.1.1',
					change: '+30',
					type: 'add'
				},
				{
					title: '账户积分',
					date: '2025.1.1',
					change: '+30',
					type: 'add'
				},
				{
					title: '账户积分',
					date: '2025.1.1',
					change: '+30',
					type: 'add'
				},
				{
					title: '账户积分',
					date: '2025.1.1',
					change: '+30',
					type: 'add'
				}
			]
		};
	},

	onLoad() {
		// 加载积分数据
		this.loadPointsData();
	},

	methods: {
		// 返回
		goBack() {
			uni.navigateBack();
		},

		// 加载积分数据
		loadPointsData() {
			// TODO: 调用API获取积分数据
			// this.availablePoints = response.points;
			// this.pointsList = response.list;
		},

		// 积分兑换
		exchangePoints() {
			uni.showToast({
				title: '积分兑换',
				icon: 'none'
			});
		},

		// 查看积分规则
		viewAllPoints() {
			uni.showToast({
				title: '积分规则',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.points-page {
	min-height: 100vh;
	background-color: #F5F5F5;
}

// 积分卡片
.points-card {
	margin: 30rpx;
	border-radius: 16rpx;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%BB%84%205%20%E6%8B%B7%E8%B4%9D%403x.png) no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
	position: relative;

	.card-content {
		padding: 80rpx 30rpx 40rpx;
		position: relative;
		z-index: 1;

		.points-label {
			font-size: 30rpx;
			color: #FFFFFF;
			margin-bottom: 20rpx;
			opacity: 0.95;
		}

		.points-amount {
			font-size: 80rpx;
			color: #FFFFFF;
			margin-bottom: 40rpx;
			line-height: 1;
		}

		.card-action {
			display: flex;
			justify-content: flex-end;

			.action-btn {
				padding: 16rpx 40rpx;
				background-color: #FFFFFF;
				border-radius: 32rpx;
				font-size: 28rpx;
				color: #FF6B6B;
				font-weight: 500;
				box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
			}
		}
	}
}

// 明细区域
.detail-section {
	margin: 30rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	overflow: hidden;
}

.detail-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32rpx;
	background: linear-gradient(to bottom, rgba(255, 182, 182, 0.3) 0%, rgba(255, 255, 255, 0) 100%);

	.detail-title {
		font-size: 32rpx;
		font-weight: 600;
		color: #0A0A0A;
	}

	.view-all {
		display: flex;
		align-items: center;
		font-size: 26rpx;
		color: #5F5D5D;

		.arrow {
			margin-left: 8rpx;
			font-size: 24rpx;
		}
	}
}

// 积分列表
.points-list {
	padding: 0 30rpx;
	.points-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 0;
		border-bottom: 1rpx solid #F5F5F5;

		&:last-child {
			border-bottom: none;
		}

		.item-left {
			flex: 1;

			.item-title {
				font-size: 30rpx;
				color: #333333;
				margin-bottom: 8rpx;
			}

			.item-date {
				font-size: 24rpx;
				color: #999999;
			}
		}

		.item-right {
			.points-change {
				font-size: 36rpx;
				font-weight: 600;

				&.add {
					color: #FF6347;
				}

				&.reduce {
					color: #333333;
				}
			}
		}
	}
}
</style>