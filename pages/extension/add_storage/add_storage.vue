<template>
	<view class="add-storage-container">
		<!-- 添加储物信息区域 -->
		<view class="storage-info-section">
			<view class="section-title">添加储物信息</view>
			
			<!-- 物品名称输入 -->
			<view class="input-wrapper">
				<input 
					class="input-field" 
					v-model="itemName"
					placeholder="请输入物品名称"
					placeholder-class="placeholder"
				/>
			</view>
			
			<!-- 物品数量输入 -->
			<view class="input-wrapper">
				<input 
					class="input-field" 
					v-model="itemQuantity"
					type="number"
					placeholder="请输入物品数量"
					placeholder-class="placeholder"
				/>
			</view>
		</view>

		<!-- 添加物品照片区域 -->
		<view class="photo-section">
			<view class="section-title">添加物品照片</view>
			
			<view class="photo-upload-area">
				<!-- 已上传的照片列表 -->
				<view class="photo-item" v-for="(photo, index) in photoList" :key="index">
					<image class="photo-image" :src="photo" mode="aspectFill"></image>
					<view class="delete-btn" @click="deletePhoto(index)">
						<u-icon name="close" color="#fff" size="12"></u-icon>
					</view>
				</view>
				
				<!-- 上传按钮 -->
				<view class="upload-btn" @click="choosePhoto" v-if="photoList.length < 9">
					<u-icon name="plus" color="#CCCCCC" size="40"></u-icon>
					<text class="upload-text">图片</text>
				</view>
			</view>
			
			<view class="upload-tip">上传评价图片或视频</view>
		</view>

		<!-- 底部提交按钮 -->
		<view class="submit-wrapper">
			<view class="submit-btn" @click="handleSubmit">
				<text class="btn-text">储物</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemName: '',
				itemQuantity: '',
				photoList: []
			};
		},
		methods: {
			// 选择照片
			choosePhoto() {
				const maxCount = 9 - this.photoList.length;
				uni.chooseImage({
					count: maxCount,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						this.photoList = this.photoList.concat(res.tempFilePaths);
					}
				});
			},
			
			// 删除照片
			deletePhoto(index) {
				this.photoList.splice(index, 1);
			},
			
			// 提交储物信息
			handleSubmit() {
				if (!this.itemName.trim()) {
					uni.showToast({
						title: '请输入物品名称',
						icon: 'none'
					});
					return;
				}
				
				if (!this.itemQuantity) {
					uni.showToast({
						title: '请输入物品数量',
						icon: 'none'
					});
					return;
				}
				
				if (this.photoList.length === 0) {
					uni.showToast({
						title: '请至少上传一张照片',
						icon: 'none'
					});
					return;
				}
				
				// TODO: 提交储物数据到服务器
				const storageData = {
					itemName: this.itemName,
					itemQuantity: this.itemQuantity,
					photoList: this.photoList
				};
				
				console.log('提交储物数据：', storageData);
				
				uni.showToast({
					title: '储物信息添加成功',
					icon: 'success'
				});
				
				setTimeout(() => {
					uni.navigateBack();
				}, 1500);
			}
		}
	}
</script>

<style lang="scss" scoped>
.add-storage-container {
	min-height: 100vh;
	background-color: #F5F5F5;
	padding: 30rpx;
	padding-bottom: 160rpx;
}

// 储物信息区域
.storage-info-section {
	background-color: #fff;
	padding: 30rpx;
	border-radius: 16rpx;
	margin-bottom: 20rpx;
	
	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
	
	.input-wrapper {
		margin-bottom: 30rpx;
		
		&:last-child {
			margin-bottom: 0;
		}
		
		.input-field {
			width: 100%;
			height: 88rpx;
			background-color: #F8F8F8;
			border-radius: 12rpx;
			padding: 0 24rpx;
			font-size: 28rpx;
			color: #333;
			box-sizing: border-box;
			
			.placeholder {
				color: #CCCCCC;
			}
		}
	}
}

// 照片上传区域
.photo-section {
	background-color: #fff;
	padding: 30rpx;
	border-radius: 16rpx;
	
	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 30rpx;
	}
	
	.photo-upload-area {
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;
		margin-bottom: 20rpx;
		
		.photo-item {
			position: relative;
			width: 200rpx;
			height: 200rpx;
			
			.photo-image {
				width: 100%;
				height: 100%;
				border-radius: 12rpx;
			}
			
			.delete-btn {
				position: absolute;
				top: 8rpx;
				right: 8rpx;
				width: 40rpx;
				height: 40rpx;
				background-color: rgba(0, 0, 0, 0.5);
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		
		.upload-btn {
			width: 200rpx;
			height: 200rpx;
			background-color: #F5F5F5;
			border-radius: 12rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 16rpx;
			
			.upload-text {
				font-size: 24rpx;
				color: #CCCCCC;
			}
		}
	}
	
	.upload-tip {
		font-size: 24rpx;
		color: #999;
	}
}

// 提交按钮
.submit-wrapper {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 20rpx 30rpx 40rpx;
	background-color: #fff;
	box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.05);
	
	.submit-btn {
		background: linear-gradient(90deg, #FFD700 0%, #FFC700 100%);
		border-radius: 50rpx;
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
		.btn-text {
			font-size: 32rpx;
			color: #333;
			font-weight: 500;
		}
	}
}
</style>