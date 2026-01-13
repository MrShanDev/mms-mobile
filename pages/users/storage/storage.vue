<template>
	<view class="storage-page">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="nav-left" @click="goBack">
				<text class="back-icon iconfont icon-zuojiantou"></text>
			</view>
			<view class="nav-title">我的储物</view>
		</view>

		<!-- 功能卡片 -->
		<view class="function-cards">
			<view class="card-item" @click="addStorage">
				<view class="card-icon">
					<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%2B%403x.png" mode=""></image>
				</view>
				<view class="card-label">我要储物</view>
			</view>
			<view class="card-item" @click="viewRecords">
				<view class="card-icon">
					<image src="https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/71dab3a015aaf8d071ac24860bce57ac0a452f3f1344-BQGwzj%403x.png" mode=""></image>
				</view>
				<view class="card-label">寄存记录</view>
			</view>
		</view>

		<!-- 状态Tab -->
		<view class="status-tabs">
			<view 
				class="tab-item" 
				v-for="(tab, index) in statusTabs" 
				:key="index"
				:class="{ active: activeStatus === index }"
				@click="switchStatus(index)"
			>
				<text>{{ tab.label }}</text>
			</view>
		</view>

		<!-- 搜索框 -->
		<view class="search-box">
			<view class="search-input">
				<text class="search-icon iconfont icon-sousuo1"></text>
				<input 
					type="text" 
					placeholder="输入物品名称或编号" 
					v-model="searchKeyword"
					@confirm="handleSearch"
				/>
			</view>
		</view>

		<!-- 储物列表 -->
		<view class="storage-list">
			<view class="storage-item" v-for="(item, index) in storageList" :key="index">
				<view class="item-info">
					<view class="info-row">
						<text class="label">物品名称：</text>
						<text class="value">{{ item.name }}</text>
					</view>
					<view class="info-row">
						<text class="label">存储编号：</text>
						<text class="value">{{ item.code }}</text>
					</view>
					<view class="info-row time-row">
						<text class="time-text">存入时间：{{ item.inTime }}</text>
					</view>
					<view class="info-row time-row">
						<text class="time-text">到期时间：{{ item.expireTime }}</text>
					</view>
				</view>
				<view class="item-action">
					<view class="quantity">
						<text class="quantity-label">数量：</text>
						<text class="quantity-value">x{{ item.quantity }}</text>
					</view>
					<view class="btn-take-out" @click="takeOut(item)">
						<text>取出</text>
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
			// 搜索关键词
			searchKeyword: '',
			// 状态Tab
			statusTabs: [
				{ label: '已存储（2）', value: 'stored' },
				{ label: '已取出（1）', value: 'taken' },
				{ label: '已过期（0）', value: 'expired' }
			],
			// 当前激活状态
			activeStatus: 0,
			// 储物列表
			storageList: [
				{
					name: '啤酒',
					code: 'A0001',
					inTime: '2025-01-01 12:23',
					expireTime: '2025-03-01 12:23',
					quantity: 8
				},
				{
					name: '百威',
					code: 'A0002',
					inTime: '2025-01-01 12:23',
					expireTime: '2025-03-01 12:23',
					quantity: 8
				}
			]
		};
	},

	onLoad() {
		// 加载储物数据
		this.loadStorageData();
	},

	methods: {
		// 返回
		goBack() {
			uni.navigateBack();
		},

		// 添加储物
		addStorage() {
			uni.navigateTo({
				url: '/pages/extension/add_storage/add_storage'
			})
		},

		// 查看记录
		viewRecords() {
			uni.showToast({
				title: '寄存记录',
				icon: 'none'
			});
		},

		// 切换状态
		switchStatus(index) {
			this.activeStatus = index;
			this.loadStorageData();
		},

		// 搜索
		handleSearch() {
			console.log('搜索：', this.searchKeyword);
			this.loadStorageData();
		},

		// 加载储物数据
		loadStorageData() {
			// TODO: 调用API获取储物数据
			// const status = this.statusTabs[this.activeStatus].value;
			// this.storageList = response.list;
		},

		// 取出物品
		takeOut(item) {
			uni.showModal({
				title: '提示',
				content: `确定要取出${item.name}吗？`,
				success: (res) => {
					if (res.confirm) {
						uni.showToast({
							title: '取出成功',
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
.storage-page {
	overflow: hidden;
	min-height: 100vh;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/bj.png);
	background-size: 100% 100%;
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

// 功能卡片
.function-cards {
	padding: 30rpx 0;
	display: flex;
	gap: 80rpx;
	justify-content: center;

	.card-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16rpx;

		.card-icon {
			width: 200rpx;
			height: 200rpx;
			background-color: #FDFDF5;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
			position: relative;

			image{
				width: 100rpx;
				height: 100rpx;
			}
		}

		.card-label {
			font-size: 28rpx;
			color: #151515;
		}
	}
}

// 状态Tab
.status-tabs {
	display: flex;
	padding: 0 32rpx;
	margin-bottom: 24rpx;

	.tab-item {
		flex: 1;
		text-align: center;
		font-size: 28rpx;
		color: #666666;
		padding: 16rpx 0;

		&.active {
			color: #333333;
			font-weight: 600;
		}
	}
}

// 搜索框
.search-box {
	padding: 0 32rpx 24rpx;

	.search-input {
		background-color: #F2F3F5;
		border-radius: 40rpx;
		height: 72rpx;
		display: flex;
		align-items: center;
		padding: 0 32rpx;
		box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.06);

		.search-icon {
			font-size: 32rpx;
			margin-right: 16rpx;
			color: #858587;
		}

		input {
			flex: 1;
			font-size: 28rpx;
			color: #333333;

			&::placeholder {
				color: #858587;
			}
		}
	}
}

// 储物列表
.storage-list {
	padding: 0 30rpx 30rpx;
}

.storage-item {
	background: #FDFDFD;
	border-radius: 16rpx;
	padding: 32rpx;
	margin-bottom: 20rpx;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	.item-info {
		flex: 1;

		.info-row {
			margin-bottom: 12rpx;

			&:last-child {
				margin-bottom: 0;
			}

			.label {
				font-size: 28rpx;
				color: #333333;
				font-weight: 500;
			}

			.value {
				font-size: 28rpx;
				color: #333333;
			}

			&.time-row {
				.time-text {
					font-size: 24rpx;
					color: #999999;
				}
			}
		}
	}

	.item-action {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 24rpx;

		.quantity {
			display: flex;
			align-items: baseline;

			.quantity-label {
				font-size: 24rpx;
				color: #333333;
			}

			.quantity-value {
				font-size: 48rpx;
				color: #333333;
			}
		}

		.btn-take-out {
			padding: 5rpx 40rpx;
			background-color: #FF6B3B;
			border-radius: 32rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			font-weight: 500;
			box-shadow: 0 4rpx 12rpx rgba(255, 107, 59, 0.3);
		}
	}
}
</style>