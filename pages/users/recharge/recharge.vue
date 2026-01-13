<template>
	<view class="recharge-page">
		<!-- 账户余额卡片 -->
		<view class="balance-card">
			<view class="balance-label">账户余额（元）</view>
			<view class="balance-amount">{{ accountBalance }}</view>
		</view>

		<!-- 充值金额 -->
		<view class="recharge-section">
			<view class="section-title">充值金额</view>
			
			<!-- 金额选项 -->
			<view class="amount-options">
				<view 
					class="amount-item" 
					v-for="(item, index) in amountOptions" 
					:key="index"
					:class="{ active: selectedAmount === item.value }"
					@click="selectAmount(item.value)"
				>
					<view class="amount-value">¥ {{ item.value }}</view>
					<view class="amount-gift" v-if="item.gift">赠{{ item.gift }}</view>
					<view class="check-icon" v-if="selectedAmount === item.value">
						<text>✓</text>
					</view>
				</view>
			</view>

			<!-- 自定义金额输入 -->
			<view class="custom-amount">
				<text class="currency-symbol">¥</text>
				<input 
					type="number" 
					placeholder="输入自定义金额" 
					v-model="customAmount"
					@input="handleCustomInput"
				/>
			</view>
		</view>

		<!-- 充值说明 -->
		<view class="recharge-notice">
			<view class="notice-title">充值说明</view>
			<view class="notice-item">
				<text class="dot">•</text>
				<text class="notice-text">充值金额永久有效</text>
			</view>
			<view class="notice-item">
				<text class="dot">•</text>
				<text class="notice-text">若遇充值问题，请<text class="link" @click="contactService">联系客服</text></text>
			</view>
		</view>

		<!-- 确认充值按钮 -->
		<view class="submit-btn" @click="confirmRecharge">
			<text>确认充值</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 账户余额
			accountBalance: '123.00',
			// 充值金额选项
			amountOptions: [
				{ value: 50, gift: 0 },
				{ value: 100, gift: 10 },
				{ value: 200, gift: 10 }
			],
			// 选中的金额
			selectedAmount: 50,
			// 自定义金额
			customAmount: ''
		};
	},

	onLoad() {
		// 加载账户余额
		this.loadAccountBalance();
	},

	methods: {
		// 加载账户余额
		loadAccountBalance() {
			// TODO: 调用API获取账户余额
			// this.accountBalance = response.balance;
		},

		// 选择充值金额
		selectAmount(amount) {
			this.selectedAmount = amount;
			this.customAmount = '';
		},

		// 处理自定义金额输入
		handleCustomInput(e) {
			this.selectedAmount = null;
			this.customAmount = e.detail.value;
		},

		// 联系客服
		contactService() {
			uni.showToast({
				title: '联系客服',
				icon: 'none'
			});
		},

		// 确认充值
		confirmRecharge() {
			const amount = this.customAmount || this.selectedAmount;
			
			if (!amount || amount <= 0) {
				uni.showToast({
					title: '请选择或输入充值金额',
					icon: 'none'
				});
				return;
			}

			uni.showModal({
				title: '确认充值',
				content: `确认充值 ¥${amount} 元？`,
				success: (res) => {
					if (res.confirm) {
						// TODO: 调用充值接口
						uni.showToast({
							title: '充值成功',
							icon: 'success'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.recharge-page {
	min-height: 100vh;
	background-color: #fff;
	padding: 32rpx;
}

// 账户余额卡片
.balance-card {
	background: linear-gradient(to bottom, #55F36B, #0ECB28);
	border-radius: 24rpx;
	padding: 48rpx 30rpx;
	margin-bottom: 48rpx;

	.balance-label {
		font-size: 30rpx;
		color: #FFFFFF;
		opacity: 0.9;
		margin-bottom: 16rpx;
	}

	.balance-amount {
		font-size: 88rpx;
		color: #FFFFFF;
	}
}

// 充值金额区域
.recharge-section {
	margin-bottom: 48rpx;

	.section-title {
		font-size: 32rpx;
		color: #333333;
		font-weight: 600;
		margin-bottom: 32rpx;
	}
}

// 金额选项
.amount-options {
	display: flex;
	gap: 24rpx;
	margin-bottom: 24rpx;
}

.amount-item {
	flex: 1;
	background-color: #F7F8FA;
	border-radius: 16rpx;
	padding: 40rpx 24rpx;
	text-align: center;
	position: relative;
	border: 2rpx solid transparent;
	transition: all 0.3s;

	&.active {
		background: linear-gradient(#FFFFFF, #FFFFFF) padding-box,
					linear-gradient(135deg, #00D66C, #00C853) border-box;
		border: 2rpx solid transparent;
		box-shadow: 0 4rpx 16rpx rgba(0, 214, 108, 0.2);

		.amount-value {
			color: #00C853;
		}
	}

	.amount-value {
		font-size: 48rpx;
		color: #333333;
		font-weight: 600;
		margin-bottom: 8rpx;
	}

	.amount-gift {
		font-size: 26rpx;
		color: #929392;
	}

	.check-icon {
		position: absolute;
		bottom: 8rpx;
		right: 8rpx;
		width: 40rpx;
		height: 40rpx;
		background-color: #00C853;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		text {
			font-size: 24rpx;
			color: #FFFFFF;
			font-weight: 600;
		}
	}
}

// 自定义金额输入
.custom-amount {
	background-color: #F7F8FA;
	border-radius: 16rpx;
	height: 96rpx;
	display: flex;
	align-items: center;
	padding: 0 32rpx;

	.currency-symbol {
		font-size: 40rpx;
		color: #333333;
		font-weight: 600;
		margin-right: 16rpx;
	}

	input {
		flex: 1;
		font-size: 32rpx;
		color: #333333;

		&::placeholder {
			color: #CCCCCC;
			font-size: 28rpx;
		}
	}
}

// 充值说明
.recharge-notice {
	margin-bottom: 64rpx;

	.notice-title {
		font-size: 32rpx;
		color: #333333;
		font-weight: 600;
		margin-bottom: 24rpx;
	}

	.notice-item {
		display: flex;
		align-items: flex-start;
		margin-bottom: 16rpx;

		.dot {
			font-size: 28rpx;
			color: #999999;
			margin-right: 12rpx;
			line-height: 44rpx;
		}

		.notice-text {
			flex: 1;
			font-size: 28rpx;
			color: #999999;
			line-height: 44rpx;

			.link {
				color: #26349C;
			}
		}
	}
}

// 确认充值按钮
.submit-btn {
	height: 96rpx;
	background: #0ECB28;
	border-radius: 48rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 8rpx 24rpx rgba(0, 214, 108, 0.3);

	text {
		font-size: 34rpx;
		color: #FFFFFF;
	}
}
</style>