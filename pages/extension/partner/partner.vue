<template>
	<view class="partner-container">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
			<view class="nav-title">我的合伙人</view>
		</view>

		<!-- 页面内容 -->
		<view class="content-wrapper">
			<!-- 标题和按钮 -->
			<view class="header-section">
				<text class="page-title">我的合伙人</text>
				<view class="partner-detail-btn" @click="handlePartnerDetail">
					<text class="btn-text">合伙人审批</text>
					<view class="red-dot"></view>
				</view>
			</view>

			<!-- 搜索框 -->
			<view class="search-wrapper">
				<u-search 
					v-model="searchKeyword" 
					placeholder="输入电话搜索合伙人"
					shape="round"
					:show-action="false"
					bg-color="#F5F5F5"
				></u-search>
			</view>

			<!-- 合伙人收益卡片 -->
			<view class="income-card">
				<view class="income-header">
					<text class="income-title">合伙人收益</text>
					<text class="income-amount">123.00</text>
				</view>
				<view class="stats-grid">
					<view class="stat-item">
						<text class="stat-label">我的合伙人</text>
						<text class="stat-value">12</text>
					</view>
					<view class="stat-item">
						<text class="stat-label">我的合伙人发展人数</text>
						<text class="stat-value">1222</text>
					</view>
				</view>
				<view class="stats-grid">
					<view class="stat-item">
						<text class="stat-label">我的合伙人收入（元）</text>
						<text class="stat-value">12</text>
					</view>
					<view class="stat-item">
						<text class="stat-label">合伙人待分配收入（元）</text>
						<text class="stat-value">1222</text>
					</view>
				</view>
			</view>

			<!-- 待审批列表 -->
			<view class="section-title">待审批</view>
			<view class="partner-list">
				<view class="partner-item" v-for="(item, index) in pendingList" :key="index">
					<view class="partner-header">
						<view class="avatar-wrapper">
							<view class="avatar">{{ item.name.charAt(0) }}</view>
							<view class="partner-info">
								<text class="partner-name">{{ item.name }}</text>
								<text class="partner-date">{{ item.applyDate }}</text>
							</view>
						</view>
					</view>
					<view class="stats-row">
						<view class="stat-col">
							<text class="stat-num">{{ item.developCount }}</text>
							<text class="stat-desc">发展人数</text>
						</view>
						<view class="stat-col">
							<text class="stat-num">{{ item.totalIncome }}</text>
							<text class="stat-desc">累计收入</text>
						</view>
						<view class="stat-col">
							<text class="stat-num">{{ item.waitIncome }}</text>
							<text class="stat-desc">待分配收入</text>
						</view>
					</view>
					<view class="action-buttons">
						<view class="btn-outline" @click="handleCancelPartner(item)">
							<text class="btn-outline-text">申请解除合伙人</text>
						</view>
						<view class="btn-primary" @click="handleAllocateIncome(item)">
							<text class="btn-primary-text">结算待分配收入</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 已审批列表 -->
			<view class="section-title">已审批</view>
			<view class="partner-list">
				<view class="partner-item" v-for="(item, index) in approvedList" :key="index">
					<view class="partner-header">
						<view class="avatar-wrapper">
							<view class="avatar">{{ item.name.charAt(0) }}</view>
							<view class="partner-info">
								<text class="partner-name">{{ item.name }}</text>
								<text class="partner-date">{{ item.applyDate }}</text>
							</view>
						</view>
					</view>
					<view class="stats-row">
						<view class="stat-col">
							<text class="stat-num">{{ item.developCount }}</text>
							<text class="stat-desc">发展人数</text>
						</view>
						<view class="stat-col">
							<text class="stat-num">{{ item.totalIncome }}</text>
							<text class="stat-desc">累计收入</text>
						</view>
						<view class="stat-col">
							<text class="stat-num">{{ item.waitIncome }}</text>
							<text class="stat-desc">待分配收入</text>
						</view>
					</view>
					<view class="action-buttons">
						<view class="btn-outline" @click="handleCancelPartner(item)">
							<text class="btn-outline-text">申请解除合伙人</text>
						</view>
						<view class="btn-primary" @click="handleSettlement(item)">
							<text class="btn-primary-text">结算</text>
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
				searchKeyword: '',
				pendingList: [
					{
						name: '大月亮',
						applyDate: '于2025-03-19申请合伙人',
						developCount: 300,
						totalIncome: 300,
						waitIncome: 300
					}
				],
				approvedList: [
					{
						name: '大月亮',
						applyDate: '于2025-03-19申请合伙人',
						developCount: 300,
						totalIncome: 300,
						waitIncome: 300
					}
				]
			};
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			handlePartnerDetail() {
				// TODO: 跳转到合伙人详情页面
				console.log('合伙人详情');
			},
			handleCancelPartner(item) {
				// TODO: 申请解除合伙人
				uni.showModal({
					title: '提示',
					content: '确认申请解除合伙人？',
					success: (res) => {
						if (res.confirm) {
							console.log('解除合伙人', item);
						}
					}
				});
			},
			handleAllocateIncome(item) {
				// TODO: 结算待分配收入
				console.log('结算待分配收入', item);
			},
			handleSettlement(item) {
				// TODO: 结算
				console.log('结算', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
.partner-container {
	overflow: hidden;
	min-height: 100vh;
	background: linear-gradient(to bottom, #DEEBFF, #fff);
	padding-bottom: 40rpx;
}

// 导航栏
.nav-bar {
	padding: 120rpx 30rpx 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	
	.nav-left {
		position: absolute;
		left: 30rpx;
		top: 120rpx;
		.back-icon {
			font-size: 48rpx;
			font-weight: 600;
			color: #2F2F2F;
		}
	}
	.nav-title {
		width: 100%;
		text-align: center;
		font-size: 32rpx;
		font-weight: 600;
		color: #2F2F2F;
	}
}



.content-wrapper {
	padding: 0 30rpx;
}

// 页面头部
.header-section {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40rpx 0 20rpx;
	
	.page-title {
		font-size: 34rpx;
		font-weight: 600;
		color: #050505;
	}
	
	.partner-detail-btn {
		position: relative;
		background-color: #FFD700;
		padding: 12rpx 24rpx;
		border-radius: 20rpx;
		
		.btn-text {
			font-size: 24rpx;
			color: #333;
		}
		
		.red-dot {
			position: absolute;
			top: 0;
			right: 0;
			width: 16rpx;
			height: 16rpx;
			background-color: #FF3B30;
			border-radius: 50%;
			border: 2rpx solid #fff;
		}
	}
}

// 搜索框
.search-wrapper {
	margin-bottom: 20rpx;
}

// 收益卡片
.income-card {
	background: #FAFBFD;
	border-radius: 24rpx;
	padding: 30rpx;
	margin-bottom: 30rpx;
	
	.income-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 30rpx;
		background-color: #002FA7;
		padding: 20rpx 25rpx;
		border-radius: 50rpx;
		
		.income-title {
			font-size: 30rpx;
			color: #fff;
		}
		
		.income-amount {
			font-size: 28rpx;
			color: #fff;
		}
	}
	
	.stats-grid {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.stat-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			
			.stat-label {
				font-size: 24rpx;
				color: #676767;
				margin-bottom: 8rpx;
			}
			
			.stat-value {
				font-size: 32rpx;
				color: #000000;
				font-weight: bold;
			}
		}
	}
}

// 区域标题
.section-title {
	font-size: 32rpx;
	color: #181818;
	margin: 30rpx 0 20rpx;
	font-weight: 600;
}

// 合伙人列表
.partner-list {
	.partner-item {
		background-color: #F8F8F8;
		border-radius: 24rpx;
		padding: 30rpx;
		margin-bottom: 20rpx;
		
		.partner-header {
			margin-bottom: 24rpx;
			
			.avatar-wrapper {
				display: flex;
				align-items: center;
				
				.avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					background-color: #FFD700;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
					color: #333;
					font-weight: bold;
					margin-right: 20rpx;
				}
				
				.partner-info {
					display: flex;
					flex-direction: column;
					
					.partner-name {
						font-size: 28rpx;
						color: #181818;
						font-weight: bold;
						margin-bottom: 8rpx;
					}
					
					.partner-date {
						font-size: 24rpx;
						color: #181818;
					}
				}
			}
		}
		
		.stats-row {
			display: flex;
			justify-content: space-between;
			margin: 50rpx 0 50rpx;
			
			.stat-col {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				
				.stat-num {
					font-size: 32rpx;
					color: #333;
					font-weight: bold;
					margin-bottom: 8rpx;
				}
				
				.stat-desc {
					font-size: 24rpx;
					color: #999;
				}
			}
		}
		
		.action-buttons {
			display: flex;
			justify-content: space-between;
			gap: 20rpx;
			
			.btn-outline {
				flex: 1;
				height: 72rpx;
				border: 2rpx solid #FFD700;
				border-radius: 36rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.btn-outline-text {
					font-size: 26rpx;
					color: #333;
				}
			}
			
			.btn-primary {
				flex: 1;
				height: 72rpx;
				background-color: #FFD700;
				border-radius: 36rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.btn-primary-text {
					font-size: 26rpx;
					color: #333;
				}
			}
		}
	}
}
</style>