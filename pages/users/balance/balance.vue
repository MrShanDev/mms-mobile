<template>
	<view class="balance-page">
		
		<!-- 余额卡片 -->
		<view class="balance-card">
			<view class="card-content">
				<view class="balance-label">可提现余额（元）</view>
				<view class="balance-amount">{{ balance }}</view>
				<view class="card-actions">
					<view class="action-btn" @click="handleRecharge">
						<text>充值</text>
					</view>
					<view class="action-btn" @click="handleWithdraw">
						<text>提现</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 余额明细 -->
		<view class="detail-section">
			<view class="detail-header">
				<text class="detail-title">余额明细</text>
				<view class="view-all" @click="viewAllBalance">
					<text>查看全部</text>
					<text class="arrow iconfont icon-youjiantou"></text>
				</view>
			</view>

			<!-- 余额明细列表 -->
			<view class="balance-list">
				<view class="balance-item" v-for="(item, index) in balanceList" :key="index">
					<view class="item-left">
						<view class="item-title">{{ item.title }}</view>
						<view class="item-date">{{ item.date }}</view>
					</view>
					<view class="item-right">
						<text class="balance-change" :class="item.type === 'income' ? 'income' : 'expense'">{{ item.change }}</text>
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
			// 余额
			balance: '123.00',
			// 余额明细列表
			balanceList: [
				{
					title: '账户充值',
					date: '2025.1.1',
					change: '+50.00',
					type: 'income'
				},
				{
					title: '店内消费',
					date: '2025.1.1',
					change: '-30.00',
					type: 'expense'
				},
				{
					title: '派餐员收入',
					date: '2025.1.1',
					change: '+30.00',
					type: 'income'
				},
				{
					title: '提现',
					date: '2025.1.1',
					change: '-30.00',
					type: 'expense'
				}
			]
		};
	},
	
	onLoad() {
		// 加载余额数据
		this.loadBalanceData();
	},
	
	methods: {
		// 返回
		goBack() {
			uni.navigateBack();
		},
		
		// 加载余额数据
		loadBalanceData() {
			// TODO: 调用API获取余额数据
			// this.balance = response.balance;
			// this.balanceList = response.list;
		},
		
		// 充值
		handleRecharge() {
			uni.showToast({
				title: '充值功能',
				icon: 'none'
			});
		},
		
		// 提现
		handleWithdraw() {
			uni.showToast({
				title: '提现功能',
				icon: 'none'
			});
		},
		
		// 查看全部余额明细
		viewAllBalance() {
			uni.showToast({
				title: '查看全部余额明细',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.balance-page {
	min-height: 100vh;
	background-color: #F5F5F5;
}

// 余额卡片
.balance-card {
	margin: 30rpx;
	border-radius: 16rpx;
	background: url('https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E7%BB%84%205%20%E6%8B%B7%E8%B4%9D%403x%20(2).png') no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
	position: relative;

	.card-content {
		padding: 80rpx 30rpx 40rpx;
		position: relative;
		z-index: 1;

		.balance-label {
			font-size: 28rpx;
			color: #FFFFFF;
			margin-bottom: 20rpx;
			opacity: 0.95;
		}

		.balance-amount {
			font-size: 80rpx;
			color: #FFFFFF;
			margin-bottom: 40rpx;
			line-height: 1;
		}

		.card-actions {
			display: flex;
			gap: 20rpx;
			justify-content: flex-end;

			.action-btn {
				padding: 16rpx 40rpx;
				background-color: #FDFAF1;
				border-radius: 15rpx;
				font-size: 28rpx;
				color: #FF8800;
				font-weight: 500;
				box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
			}
		}
	}
}

// 明细区域
.detail-section {
	background-color: #FFFFFF;
	border-radius: 16rpx;
	overflow: hidden;
	margin: 0 30rpx;
}

.detail-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 32rpx;
	background: linear-gradient(to bottom, #EFC56B, #fff);

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

// 余额明细列表
.balance-list {
	padding: 0 30rpx;

	.balance-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32rpx 0;
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
			.balance-change {
				font-size: 36rpx;
				font-weight: 600;

				&.income {
					color: #FF6347;
				}

				&.expense {
					color: #FF6347;
				}
			}
		}
	}
}
</style>