<template>
	<view class="withdraw-container">
		<!-- 提现方式 -->
		<view class="withdraw-method" @click="showMethodPicker">
			<text class="label">提现至：</text>
			<view class="method-content">
				<image class="icon" src="/static/wechat-icon.png" mode="aspectFit"></image>
				<text class="method-name">{{ currentMethod }}</text>
			</view>
			<u-icon name="arrow-right" color="#999" size="16"></u-icon>
		</view>
		
		<view>
			<!-- 可提现金额 -->
			<view class="available-amount">
				<text class="label">可提现金额：</text>
				<text class="amount">{{ availableAmount }}</text>
			</view>
			
			<!-- 提现金额输入 -->
			<view class="amount-input-wrapper">
				<text class="rmb-symbol">¥</text>
				<input 
					class="amount-input" 
					type="digit" 
					v-model="withdrawAmount" 
					placeholder="请输入提现金额"
					placeholder-class="placeholder"
				/>
			</view>
		</view>
		

		<!-- 提现费用 -->
		<view class="withdraw-fee">
			<text class="label">提现费用</text>
			<view class="fee-options">
				<text 
					class="fee-option" 
					:class="{ active: feeType === 'predict' }"
					@click="feeType = 'predict'"
				>
					预计到账时间
				</text>
				<text 
					class="fee-option" 
					:class="{ active: feeType === 'instant' }"
					@click="feeType = 'instant'"
				>
					当日到账
				</text>
			</view>
		</view>

		<!-- 确认提现按钮 -->
		<view class="submit-btn" @click="handleWithdraw">
			<text class="btn-text">确认提现</text>
		</view>

		<!-- 提现说明 -->
		<view class="withdraw-tips">
			<text class="tips-title">提现说明</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentMethod: '微信',
				availableAmount: '123.00',
				withdrawAmount: '',
				feeType: 'predict' // predict: 预计到账时间, instant: 当日到账
			};
		},
		methods: {
			showMethodPicker() {
				// 显示提现方式选择器
				uni.showActionSheet({
					itemList: ['微信', '支付宝'],
					success: (res) => {
						if (res.tapIndex === 0) {
							this.currentMethod = '微信';
						} else if (res.tapIndex === 1) {
							this.currentMethod = '支付宝';
						}
					}
				});
			},
			handleWithdraw() {
				if (!this.withdrawAmount) {
					uni.showToast({
						title: '请输入提现金额',
						icon: 'none'
					});
					return;
				}
				
				const amount = parseFloat(this.withdrawAmount);
				const available = parseFloat(this.availableAmount);
				
				if (amount <= 0) {
					uni.showToast({
						title: '请输入有效金额',
						icon: 'none'
					});
					return;
				}
				
				if (amount > available) {
					uni.showToast({
						title: '提现金额不能大于可提现金额',
						icon: 'none'
					});
					return;
				}
				
				// TODO: 调用提现接口
				uni.showToast({
					title: '提现申请已提交',
					icon: 'success'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.withdraw-container {
	min-height: 100vh;
	background-color: #F3F5F3;
}

.withdraw-method {
	background-color: #fff;
	padding: 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20rpx;
	
	.label {
		font-size: 28rpx;
		color: #333;
	}
	
	.method-content {
		flex: 1;
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		
		.icon {
			width: 55rpx;
			height: 55rpx;
			margin-right: 16rpx;
			background-color: #09bb07;
			border-radius: 50%;
		}
		
		.method-name {
			font-size: 28rpx;
			color: #333;
		}
	}
}

.available-amount {
	background-color: #fff;
	padding: 30rpx 20rpx;
	margin-top: 20rpx;
	
	.label {
		font-size: 28rpx;
		color: #333;
	}
	
	.amount {
		font-size: 28rpx;
		color: #333;
		margin-left: 10rpx;
	}
}

.amount-input-wrapper {
	background-color: #fff;
	padding: 20rpx 30rpx;
	display: flex;
	align-items: center;
	
	.rmb-symbol {
		font-size: 48rpx;
		color: #333;
		font-weight: 600;
		margin-right: 15rpx;
	}
	
	.amount-input {
		flex: 1;
		font-size: 30rpx;
		color: #333;
		height: 60rpx;
		line-height: 60rpx;
		
		.placeholder {
			color: #ccc;
			font-size: 30rpx;
		}
	}
}

.withdraw-fee {
	background-color: #fff;
	padding: 30rpx;
	margin-top: 20rpx;
	
	.label {
		font-size: 28rpx;
		color: #333;
		margin-bottom: 20rpx;
		display: block;
	}
	
	.fee-options {
		display: flex;
		justify-content: space-between;
		
		.fee-option {
			padding: 20rpx 0;
			font-size: 28rpx;
			color: #999;
			position: relative;
			
			&.active {
				color: #333;
				font-weight: 500;
			}
		}
	}
}

.submit-btn {
	margin: 80rpx 40rpx 40rpx;
	background: linear-gradient(90deg, #FF9B7D 0%, #FF7954 100%);
	border-radius: 50rpx;
	padding: 20rpx 0;
	text-align: center;
	
	.btn-text {
		font-size: 32rpx;
		color: #fff;
		font-weight: 500;
	}
}

.withdraw-tips {
	position: fixed;
	bottom: 150rpx;
	left: 0;
	width: 100%;
	text-align: center;
	.tips-title {
		font-size: 28rpx;
		color: #ccc;
	}
}
</style>