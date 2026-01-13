<template>
	<view class="share-page">
		<!-- Tab切换 -->
		<view class="tab-bar">
			<view class="tab-item" :class="{ active: activeTab === 'record' }" @click="switchTab('record')">
				<text>分享记录</text>
			</view>
			<view class="tab-item" :class="{ active: activeTab === 'reward' }" @click="switchTab('reward')">
				<text>获得奖励</text>
			</view>
		</view>

		<!-- 分享记录区域 -->
		<view class="content-section">
			<view class="section-header">
				<text class="section-title">分享记录</text>
				<view class="view-all" @click="viewAll">
					<text>查看全部</text>
					<text class="arrow iconfont icon-youjiantou"></text>
				</view>
			</view>

			<!-- 记录列表 -->
			<view class="record-list">
				<view class="record-item" v-for="(item, index) in recordList" :key="index">
					<view class="item-left">
						<view class="item-title">{{ item.title }}</view>
						<view class="item-date">{{ item.date }}</view>
					</view>
					<view class="item-right">
						<text class="item-points">{{ item.points }}</text>
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
			// 当前激活的tab
			activeTab: 'record',
			// 分享记录列表
			recordList: [
				{
					title: '转发10人',
					date: '2025.1.1',
					points: '+30'
				},
				{
					title: '账户积分',
					date: '2025.1.1',
					points: '+30'
				},
				{
					title: '账户积分',
					date: '2025.1.1',
					points: '+30'
				},
				{
					title: '账户积分',
					date: '2025.1.1',
					points: '+30'
				}
			]
		};
	},

	onLoad() {
		// 加载分享数据
		this.loadShareData();
	},

	methods: {
		// 返回
		goBack() {
			uni.navigateBack();
		},

		// 切换Tab
		switchTab(tab) {
			this.activeTab = tab;
			if (tab === 'reward') {
				uni.showToast({
					title: '获得奖励',
					icon: 'none'
				});
			}
		},

		// 加载分享数据
		loadShareData() {
			// TODO: 调用API获取分享数据
			// this.recordList = response.list;
		},

		// 查看全部
		viewAll() {
			uni.showToast({
				title: '查看全部记录',
				icon: 'none'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.share-page {
	min-height: 100vh;
	background-color: #F5F5F5;
}

// Tab切换栏
.tab-bar {
	margin-top: 30rpx;
	display: flex;
	justify-content: center;
	gap: 30rpx;
	.tab-item {
		padding: 10rpx 0;
		border-radius: 10rpx;
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #3E3C38;
		font-weight: 600;
		position: relative;

		&.active {
			background: #FAD1C5;

		}
	}
}

// 内容区域
.content-section {
	background-color: #FFFFFF;
	margin: 20rpx 30rpx;
	border-radius: 16rpx;
	overflow: hidden;
}

.section-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30rpx;
	background: linear-gradient(to bottom, #FAD1C5, #FFF);

	.section-title {
		font-size: 30rpx;
		font-weight: 600;
		color: #333333;
	}

	.view-all {
		display: flex;
		align-items: center;
		font-size: 26rpx;
		color: #666666;

		.arrow {
			margin-left: 8rpx;
			font-size: 24rpx;
		}
	}
}

// 记录列表
.record-list {
	padding: 0 35rpx;

	.record-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32rpx 10rpx;
		border-bottom: 1rpx solid #F5F5F5;

		&:last-child {
			border-bottom: none;
		}

		.item-left {
			flex: 1;

			.item-title {
				font-size: 28rpx;
				color: #0A0A0A;
				margin-bottom: 8rpx;
				font-weight: 600;
			}

			.item-date {
				font-size: 25rpx;
				color: #999999;
			}
		}

		.item-right {
			.item-points {
				font-size: 36rpx;
				font-weight: 600;
				color: #FF6347;
			}
		}
	}
}
</style>