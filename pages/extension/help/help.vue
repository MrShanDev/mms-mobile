<template>
	<view class="help-page">
		<!-- 问题分类 -->
		<view class="section">
			<view class="section-title">问题分类</view>
			<view class="category-tags">
				<view 
					v-for="(item, index) in categories" 
					:key="index"
					:class="['tag-item', { active: selectedCategory === index }]"
					@click="selectCategory(index)"
				>
					{{ item }}
				</view>
			</view>
		</view>
		
		<!-- 详细描述 -->
		<view class="section">
			<view class="section-title">
				详细描述
				<text class="required">*</text>
			</view>
			<textarea 
				class="description-textarea"
				v-model="description"
				placeholder="您在那个页面，遇到了什么问题，详细描述有助于帮您快速解决"
				placeholder-style="color: #CCCCCC;"
				maxlength="500"
			/>
			
			<!-- 图片上传 -->
			<view class="image-upload-container">
				<view 
					v-for="(item, index) in imageList" 
					:key="index"
					class="upload-item"
					@click="chooseImage"
				>
					<image v-if="item" :src="item" class="upload-image" mode="aspectFill"></image>
					<view v-else class="upload-placeholder">
						<text class="plus-icon">+</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 联系方式 -->
		<view class="section">
			<view class="section-title">联系方式</view>
			<input 
				class="contact-input"
				v-model="contact"
				placeholder="手机号/微信/邮箱"
				placeholder-style="color: #CCCCCC;"
			/>
		</view>
		
		<!-- 提交按钮 -->
		<view class="submit-container">
			<button class="submit-btn" @click="submitFeedback">提交</button>
		</view>
		
		<!-- 客服二维码 -->
		<view class="qrcode-container">
			<view class="qrcode-placeholder">
				<text class="qrcode-text">客服二维码</text>
			</view>
			<view class="qrcode-tip">长按添加客服微信联系我们</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories: ['骑手要求', '怎么合作', '如何提现', '其他'],
				selectedCategory: 0,
				description: '',
				imageList: ['', ''],
				contact: ''
			};
		},
		methods: {
			// 选择分类
			selectCategory(index) {
				this.selectedCategory = index;
			},
			// 选择图片
			chooseImage() {
				uni.chooseImage({
					count: 2 - this.imageList.filter(item => item).length,
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						for (let i = 0; i < this.imageList.length; i++) {
							if (!this.imageList[i] && tempFilePaths.length > 0) {
								this.$set(this.imageList, i, tempFilePaths.shift());
							}
						}
					}
				});
			},
			// 提交反馈
			submitFeedback() {
				if (!this.description.trim()) {
					uni.showToast({
						title: '请填写详细描述',
						icon: 'none'
					});
					return;
				}
				
				// TODO: 这里需要对接后端API提交反馈数据
				uni.showToast({
					title: '提交成功',
					icon: 'success'
				});
				
				// 提交成功后返回上一页
				setTimeout(() => {
					uni.navigateBack();
				}, 1500);
			}
		}
	}
</script>

<style lang="scss" scoped>
.help-page {
	min-height: 100vh;
	background: #fff;
	padding: 30rpx;
}

.section {
	margin-bottom: 40rpx;
	
	.section-title {
		font-size: 28rpx;
		font-weight: 600;
		color: #333333;
		margin-bottom: 24rpx;
		
		.required {
			color: #FF0000;
			margin-left: 4rpx;
		}
	}
}

// 分类标签
.category-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 20rpx;
	
	.tag-item {
		padding: 10rpx 20rpx;
		background: #FFFFFF;
		border-radius: 30rpx;
		font-size: 24rpx;
		color: #666666;
		border: 1rpx solid #E5E5E5;
		transition: all 0.3s;
		
		&.active {
			background: #EEF2FF;
			color: #4D7CFF;
			border-color: #4D7CFF;
		}
	}
}

// 详细描述文本域
.description-textarea {
	width: 100%;
	height: 280rpx;
	background: #F8F8F8;
	padding: 24rpx;
	font-size: 28rpx;
	color: #333333;
	box-sizing: border-box;
	line-height: 1.6;
}

// 图片上传
.image-upload-container {
	display: flex;
	gap: 24rpx;
	margin-top: 24rpx;
	
	.upload-item {
		width: 200rpx;
		height: 200rpx;
		overflow: hidden;
		
		.upload-image {
			width: 100%;
			height: 100%;
		}
		
		.upload-placeholder {
			width: 100%;
			height: 100%;
			background: #F8F8F8;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.plus-icon {
				font-size: 72rpx;
				color: #CCCCCC;
				font-weight: 300;
			}
		}
	}
}

// 联系方式输入框
.contact-input {
	width: 100%;
	height: 88rpx;
	background: #F8F8F8;
	padding: 0 24rpx;
	font-size: 28rpx;
	color: #333333;
	box-sizing: border-box;
}

// 提交按钮
.submit-container {
	margin: 60rpx 0 80rpx;
	
	.submit-btn {
		width: 100%;
		height: 88rpx;
		background: #4D7CFF;
		border-radius: 44rpx;
		font-size: 32rpx;
		font-weight: 600;
		color: #FFFFFF;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		
		&::after {
			border: none;
		}
	}
}

// 客服二维码
.qrcode-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60rpx;
	
	.qrcode-placeholder {
		width: 240rpx;
		height: 240rpx;
		background: #E5E5E5;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24rpx;
		
		.qrcode-text {
			font-size: 28rpx;
			color: #999999;
		}
	}
	
	.qrcode-tip {
		margin-bottom: 30rpx;
		font-size: 28rpx;
		color: #333;
		text-align: center;
	}
}
</style>