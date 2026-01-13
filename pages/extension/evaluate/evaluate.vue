<template>
	<view class="evaluate-container">
		<!-- 快捷评价标签 -->
		<view class="quick-tags">
			<view 
				class="tag-item" 
				:class="{ active: selectedTags.includes(tag.id) }"
				v-for="tag in quickTags" 
				:key="tag.id"
				@click="toggleTag(tag.id)"
			>
				<text class="tag-text">{{ tag.name }}</text>
				<text class="tag-count" v-if="tag.count">{{ tag.count }}</text>
			</view>
		</view>

		<!-- 评分区域 -->
		<view class="rating-section">
			<view class="section-title">评分</view>
			<view class="rating-item">
				<text class="rating-label">美食体验</text>
				<view class="stars">
					<u-icon 
						v-for="index in 5" 
						:key="index"
						name="star-fill" 
						:color="index <= foodRating ? '#FFD700' : '#E5E5E5'"
						size="32"
						@click="foodRating = index"
					></u-icon>
				</view>
			</view>
		</view>

		<!-- 评价内容 -->
		<view class="content-section">
			<view class="section-title">评价内容</view>
			<view class="content-input-wrapper">
				<text class="input-placeholder" v-if="!evaluateContent">吃的满意吗？ 请输入您的评价</text>
				<textarea 
					class="content-textarea" 
					v-model="evaluateContent"
					placeholder="请输入您的评价"
					placeholder-class="textarea-placeholder"
					maxlength="500"
				></textarea>
			</view>
		</view>

		<!-- 图片/视频上传 -->
		<view class="upload-section">
			<view class="section-title">图片/视频</view>
			<view class="upload-grid">
				<!-- 已上传的图片 -->
				<view class="upload-item" v-for="(img, index) in imageList" :key="index">
					<image class="upload-image" :src="img" mode="aspectFill"></image>
					<view class="delete-btn" @click="deleteImage(index)">
						<u-icon name="close" color="#fff" size="12"></u-icon>
					</view>
				</view>
				
				<!-- 上传图片按钮 -->
				<view class="upload-btn" @click="chooseImage" v-if="imageList.length < 9">
					<u-icon name="plus" color="#CCCCCC" size="32"></u-icon>
					<text class="upload-text">图片</text>
				</view>
				
				<!-- 上传视频按钮 -->
				<view class="upload-btn" @click="chooseVideo" v-if="!videoPath">
					<u-icon name="plus" color="#CCCCCC" size="32"></u-icon>
					<text class="upload-text">视频</text>
				</view>
			</view>
			<view class="upload-tip">上传评价图片或视频</view>
		</view>

		<!-- 匿名选项 -->
		<view class="anonymous-section" @click="toggleAnonymous">
			<view class="checkbox-wrapper">
				<view class="checkbox" :class="{ checked: isAnonymous }">
					<u-icon v-if="isAnonymous" name="checkmark" color="#999" size="14"></u-icon>
				</view>
				<text class="checkbox-label">匿名</text>
			</view>
			<text class="anonymous-tip">评价发布后展示为匿名评价</text>
		</view>

		<!-- 发布按钮 -->
		<view class="submit-wrapper">
			<view class="submit-btn" @click="handleSubmit">
				<text class="btn-text">发布</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				quickTags: [
					{ id: 1, name: '口味不错', count: 3342 },
					{ id: 2, name: '环境', count: 1233 },
					{ id: 3, name: '好评', count: 665 },
					{ id: 4, name: '味道赞', count: 665 },
					{ id: 5, name: '分量足', count: 665 },
					{ id: 6, name: '价格实惠', count: 665 },
					{ id: 7, name: '食材新鲜', count: 665 },
					{ id: 8, name: '满意', count: 665 },
					{ id: 9, name: '差评', count: 0 }
				],
				selectedTags: [1], // 默认选中第一个
				foodRating: 1, // 美食体验评分
				evaluateContent: '',
				imageList: [],
				videoPath: '',
				isAnonymous: false
			};
		},
		methods: {
			// 切换快捷标签
			toggleTag(tagId) {
				const index = this.selectedTags.indexOf(tagId);
				if (index > -1) {
					this.selectedTags.splice(index, 1);
				} else {
					this.selectedTags.push(tagId);
				}
			},
			
			// 选择图片
			chooseImage() {
				const maxCount = 9 - this.imageList.length;
				uni.chooseImage({
					count: maxCount,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
					}
				});
			},
			
			// 删除图片
			deleteImage(index) {
				this.imageList.splice(index, 1);
			},
			
			// 选择视频
			chooseVideo() {
				uni.chooseVideo({
					sourceType: ['album', 'camera'],
					maxDuration: 60,
					camera: 'back',
					success: (res) => {
						this.videoPath = res.tempFilePath;
					}
				});
			},
			
			// 切换匿名
			toggleAnonymous() {
				this.isAnonymous = !this.isAnonymous;
			},
			
			// 提交评价
			handleSubmit() {
				if (this.foodRating === 0) {
					uni.showToast({
						title: '请选择评分',
						icon: 'none'
					});
					return;
				}
				
				if (!this.evaluateContent.trim()) {
					uni.showToast({
						title: '请输入评价内容',
						icon: 'none'
					});
					return;
				}
				
				// TODO: 提交评价数据到服务器
				const evaluateData = {
					tags: this.selectedTags,
					rating: this.foodRating,
					content: this.evaluateContent,
					images: this.imageList,
					video: this.videoPath,
					isAnonymous: this.isAnonymous
				};
				
				console.log('提交评价数据：', evaluateData);
				
				uni.showToast({
					title: '评价发布成功',
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
.evaluate-container {
	min-height: 100vh;
	background-color: #F5F5F5;
	padding: 30rpx;
	padding-bottom: 160rpx;
}

// 快捷标签
.quick-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 20rpx;
	margin-bottom: 30rpx;
	
	.tag-item {
		background-color: #E5E5E5;
		border-radius: 40rpx;
		padding: 12rpx 24rpx;
		display: flex;
		align-items: center;
		gap: 8rpx;
		
		&.active {
			background-color: #FFF4E6;
			border: 2rpx solid #FFD700;
			
			.tag-text {
				color: #333;
			}
			
			.tag-count {
				color: #FF9500;
			}
		}
		
		.tag-text {
			font-size: 26rpx;
			color: #666;
		}
		
		.tag-count {
			font-size: 24rpx;
			color: #999;
		}
	}
}

// 评分区域
.rating-section {
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
	
	.rating-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		.rating-label {
			font-size: 28rpx;
			color: #333;
		}
		
		.stars {
			display: flex;
			gap: 16rpx;
		}
	}
}

// 评价内容
.content-section {
	background-color: #fff;
	padding: 30rpx;
	border-radius: 16rpx;
	margin-bottom: 20rpx;
	
	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	
	.content-input-wrapper {
		position: relative;
		
		.input-placeholder {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
			font-size: 28rpx;
			color: #CCCCCC;
			z-index: 1;
			pointer-events: none;
		}
		
		.content-textarea {
			width: 100%;
			min-height: 280rpx;
			background-color: #F8F8F8;
			border-radius: 12rpx;
			padding: 20rpx;
			font-size: 28rpx;
			color: #333;
			box-sizing: border-box;
			
			.textarea-placeholder {
				color: #CCCCCC;
			}
		}
	}
}

// 上传区域
.upload-section {
	background-color: #fff;
	padding: 30rpx;
	border-radius: 16rpx;
	margin-bottom: 20rpx;
	
	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	
	.upload-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;
		margin-bottom: 16rpx;
		
		.upload-item {
			position: relative;
			width: 200rpx;
			height: 200rpx;
			
			.upload-image {
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

// 匿名选项
.anonymous-section {
	background-color: #fff;
	padding: 30rpx;
	border-radius: 16rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	.checkbox-wrapper {
		display: flex;
		align-items: center;
		gap: 16rpx;
		
		.checkbox {
			width: 36rpx;
			height: 36rpx;
			border: 2rpx solid #CCCCCC;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			
			&.checked {
				background-color: #F5F5F5;
				border-color: #999;
			}
		}
		
		.checkbox-label {
			font-size: 28rpx;
			color: #333;
			font-weight: 500;
		}
	}
	
	.anonymous-tip {
		font-size: 24rpx;
		color: #999;
	}
}

// 发布按钮
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