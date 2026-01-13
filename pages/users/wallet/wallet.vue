<template>
	<view class="wallet-page">
		<!-- 钱包卡片区域 -->
		<view class="wallet-cards">
			<!-- 我的积分卡片 -->
			<view class="card-item card-points" @click="goToPoints">
				<view class="card-label">我的积分</view>
				<view class="card-value">{{ points }}</view>
			</view>

			<!-- 我的余额卡片 -->
			<view @click="navTo('/pages/users/balance/balance')" class="card-item card-balance">
				<view class="card-label">我的余额</view>
				<view class="card-value">{{ balance }}</view>
				<view class="card-actions">
					<view class="action-btn" @click.stop="handleRecharge">
						<text>充值</text>
					</view>
					<view class="action-btn" @click.stop="handleWithdraw">
						<text>提现</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 积分明细 -->
		<view class="detail-section">
			<view class="detail-header">
				<text class="detail-title">积分明细</text>
				<view class="view-all" @click="viewAllPoints">
					<text>查看全部</text>
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
			// 积分
			points: 0,
			// 余额
			balance: '0.00',
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
		// 加载钱包数据
		this.loadWalletData();
	},
	
	methods: {
		// 返回
		goBack() {
			uni.navigateBack();
		},
		
		// 加载钱包数据
		loadWalletData() {
			// TODO: 调用API获取钱包数据
			// this.points = response.points;
			// this.balance = response.balance;
		},
		
		// 跳转到积分页面
		goToPoints() {
			uni.navigateTo({
				url: '/pages/users/points/points'
			})
		},
		
		// 充值
		handleRecharge() {
			uni.navigateTo({
				url: '/pages/users/recharge/recharge'
			})
		},
		
		// 提现
		handleWithdraw() {
			uni.navigateTo({
				url: '/pages/users/serves/serves'
			})
		},
		
		// 查看全部积分
		viewAllPoints() {
			uni.showToast({
				title: '查看全部积分',
				icon: 'none'
			});
		},
		navTo(url){
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.wallet-page {
	min-height: 100vh;
	background-color: #fff;
}

// 钱包卡片区域
.wallet-cards {
	padding: 30rpx;
	display: flex;
	gap: 20rpx;
}

.card-item {
	flex: 1;
	height: 200rpx;
	border-radius: 16rpx;
	padding: 32rpx;
	position: relative;
	overflow: hidden;

	.card-label {
		position: relative;
		display: inline-block;
		padding: 8rpx 24rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		z-index: 2;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: -10rpx;
			right: 0;
			bottom: 0;
			background-color: rgba(255, 255, 255, 0.3);
			transform: skewX(-15deg);
			z-index: -1;
		}
	}

	.card-value {
		font-size: 35rpx;
		font-weight: 600;
		color: #FFFFFF;
		margin-top: 40rpx;
	}
}

// 积分卡片
.card-points {
	background: linear-gradient(135deg, #FFB5B5 0%, #FFA8A8 100%);
}

// 余额卡片
.card-balance {
	background: linear-gradient(135deg, #FFE6A0 0%, #FFD670 100%);

	.card-actions {
		position: absolute;
		right: 10rpx;
		bottom: 12rpx;
		display: flex;
		gap: 10rpx;

		.action-btn {
			padding: 5rpx 25rpx;
			background-color: #FFFFFF;
			border-radius: 32rpx;
			font-size: 24rpx;
			color: #FF9500;
			font-weight: 500;
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
	padding: 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: linear-gradient(to bottom, #F3A38D, #fff);
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