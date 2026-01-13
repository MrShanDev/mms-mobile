<template>
	<view class="invoice-container">
		<!-- 申请开票区域 -->
		<view class="invoice-header">
			<view class="header-title">申请开票</view>
			<view class="header-info">
				<view class="info-row">
					<text class="label">发票金额</text>
					<text class="amount">¥ {{ invoiceAmount }}</text>
				</view>
				<view class="info-row">
					<text class="label">订单编号</text>
					<text class="order-no">{{ orderNo }}</text>
				</view>
			</view>
		</view>

		<!-- 发票详情 -->
		<view class="invoice-detail-section">
			<view class="section-title">发票详情</view>
			
			<!-- 抬头类型选择 -->
			<view class="form-item">
				<text class="item-label">抬头类型</text>
				<view class="tab-group">
					<view 
						class="tab-item" 
						:class="{ active: headerType === 'company' }"
						@click="headerType = 'company'"
					>
						<text class="tab-text">企业</text>
					</view>
					<view 
						class="tab-item" 
						:class="{ active: headerType === 'personal' }"
						@click="headerType = 'personal'"
					>
						<text class="tab-text">个人/非企业单位</text>
					</view>
				</view>
			</view>

			<!-- 发票抬头 -->
			<view class="form-item-input" @click="showHeaderPicker">
				<text class="item-label">发票抬头</text>
				<view class="input-wrapper">
					<input
						class="input-field" 
						v-model="invoiceHeader" 
						placeholder="请输入企业名称（必填）"
						placeholder-class="placeholder"
					/>
				</view>
			</view>

			<!-- 税号 -->
			<view class="form-item-input">
				<text class="item-label">税号</text>
				<view class="input-wrapper">
					<input 
						class="input-field" 
						v-model="taxNumber" 
						placeholder="请输入企业税号（必填）"
						placeholder-class="placeholder"
					/>
				</view>
			</view>

			<!-- 更多内容 -->
			<view class="more-content" @click="toggleMoreContent">
				<text class="more-text">更多内容（选填）</text>
			</view>

			<!-- 展开的更多内容 -->
			<view v-if="showMoreContent" class="extra-content">
				<view class="form-item-input">
					<text class="item-label">注册地址</text>
					<view class="input-wrapper">
						<input 
							class="input-field" 
							v-model="registerAddress" 
							placeholder="请输入注册地址（选填）"
							placeholder-class="placeholder"
						/>
					</view>
				</view>
				<view class="form-item-input">
					<text class="item-label">注册电话</text>
					<view class="input-wrapper">
						<input 
							class="input-field" 
							v-model="registerPhone" 
							placeholder="请输入注册电话（选填）"
							placeholder-class="placeholder"
						/>
					</view>
				</view>
				<view class="form-item-input">
					<text class="item-label">开户银行</text>
					<view class="input-wrapper">
						<input 
							class="input-field" 
							v-model="bankName" 
							placeholder="请输入开户银行（选填）"
							placeholder-class="placeholder"
						/>
					</view>
				</view>
				<view class="form-item-input">
					<text class="item-label">银行账户</text>
					<view class="input-wrapper">
						<input 
							class="input-field" 
							v-model="bankAccount" 
							placeholder="请输入银行账户（选填）"
							placeholder-class="placeholder"
						/>
					</view>
				</view>
			</view>
		</view>

		<!-- 接收方式 -->
		<view class="receive-section">
			<view class="section-title">接收方式</view>
			
			<!-- 电子邮箱 -->
			<view class="form-item-input">
				<text class="item-label">电子邮箱</text>
				<view class="input-wrapper">
					<input 
						class="input-field" 
						v-model="email" 
						placeholder="请输入电子邮箱（必填）"
						placeholder-class="placeholder"
					/>
				</view>
			</view>

			<!-- 手机号码 -->
			<view class="form-item-input">
				<text class="item-label">手机号码</text>
				<view class="input-wrapper">
					<input
						class="input-field" 
						v-model="email" 
						placeholder="请输入手机号码（选填）"
						placeholder-class="placeholder"
					/>
				</view>
			</view>
		</view>

		<!-- 底部提交按钮 -->
		<view class="submit-wrapper">
			<view class="submit-btn" @click="handleSubmit">
				<text class="btn-text">开票</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invoiceAmount: '19.8',
				orderNo: '1033232323232323',
				headerType: 'company', // company: 企业, personal: 个人/非企业单位
				invoiceHeader: '',
				taxNumber: '',
				showMoreContent: false,
				registerAddress: '',
				registerPhone: '',
				bankName: '',
				bankAccount: '',
				email: ''
			};
		},
		methods: {
			showHeaderPicker() {
				// TODO: 显示发票抬头选择器或输入框
				console.log('选择发票抬头');
			},
			toggleMoreContent() {
				this.showMoreContent = !this.showMoreContent;
			},
			handleSubmit() {
				// 验证必填项
				if (!this.invoiceHeader) {
					uni.showToast({
						title: '请输入发票抬头',
						icon: 'none'
					});
					return;
				}
				
				if (!this.taxNumber) {
					uni.showToast({
						title: '请输入税号',
						icon: 'none'
					});
					return;
				}
				
				if (!this.email) {
					uni.showToast({
						title: '请输入电子邮箱',
						icon: 'none'
					});
					return;
				}
				
				// TODO: 提交开票申请
				uni.showToast({
					title: '开票申请已提交',
					icon: 'success'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.invoice-container {
	min-height: 100vh;
	background-color: #F5F5F5;
	padding: 30rpx;
}

// 申请开票区域
.invoice-header {
	background-color: #fff;
	padding: 40rpx 30rpx;
	margin-bottom: 20rpx;
	border-radius: 16rpx;
	
	.header-title {
		font-size: 36rpx;
		color: #333;
		padding-bottom: 15rpx;
		font-weight: bold;
		margin-bottom: 30rpx;
		border-bottom: 1rpx solid #F0F0F0;
	}
	
	.header-info {
		.info-row {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			
			&:last-child {
				margin-bottom: 0;
			}
			
			.label {
				font-size: 28rpx;
				color: #666;
				margin-right: 20rpx;
			}
			
			.amount {
				font-size: 28rpx;
				color: #F60909;
				font-weight: bold;
			}
			
			.order-no {
				font-size: 28rpx;
				color: #333;
			}
		}
	}
}

// 发票详情和接收方式区域
.invoice-detail-section,
.receive-section {
	background-color: #fff;
	padding: 30rpx;
	margin-bottom: 20rpx;
	border-radius: 16rpx;
	
	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
}

// 表单项-标签和tab组合
.form-item {
	margin-bottom: 30rpx;
	
	.item-label {
		font-size: 28rpx;
		color: #333;
		display: block;
		margin-bottom: 20rpx;
	}
	
	.tab-group {
		display: flex;
		gap: 20rpx;
		
		.tab-item {
			flex: 1;
			height: 70rpx;
			background-color: #F5F5F5;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			
			&.active {
				background-color: #FFF8F0;
				border: 2rpx solid #FF9500;
				
				.tab-text {
					color: #FF9500;
				}
			}
			
			.tab-text {
				font-size: 28rpx;
				color: #666;
			}
		}
	}
}

// 表单项-输入框
.form-item-input {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24rpx 0;
	border-bottom: 1rpx solid #F0F0F0;
	
	.item-label {
		font-size: 28rpx;
		color: #333;
		min-width: 140rpx;
	}
	
	.input-wrapper {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		
		.placeholder {
			font-size: 28rpx;
			color: #CCCCCC;
		}
		
		.placeholder-text {
			font-size: 28rpx;
			color: #CCCCCC;
		}
		
		.input-value {
			font-size: 28rpx;
			color: #333;
			margin-right: 10rpx;
		}
		
		.input-field {
			flex: 1;
			font-size: 28rpx;
			color: #333;
			text-align: right;
			
			&::placeholder {
				color: #CCCCCC;
			}
		}
	}
}

// 更多内容
.more-content {
	padding: 24rpx 0;
	text-align: center;
	
	.more-text {
		font-size: 28rpx;
		color: #999;
	}
}

.extra-content {
	margin-top: 10rpx;
}

// 底部提交按钮
.submit-wrapper {

	padding: 20rpx 30rpx 40rpx;
	.submit-btn {
		background: linear-gradient(90deg, #FFB84D 0%, #FF9500 100%);
		border-radius: 50rpx;
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
		.btn-text {
			font-size: 32rpx;
			color: #fff;
			font-weight: 500;
		}
	}
}
</style>