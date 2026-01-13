<template>
	<view class="address-setting-page">
		<!-- 顶部导航栏 -->
		<!-- <view class="header">
			<view class="navBar flex">
				<view @click="goBack" class="icon iconfont icon-fanhui1 nav-icon"></view>
				<view class="header-title m-l-20">{{ formData.id ? '编辑地址' : '新建地址' }}</view>
			</view>
		</view> -->
		<view>
			<!-- 表单区域 -->
			<view class="form-container">
				<!-- 收货人 -->
				<view class="form-item">
					<view class="form-row">
						<text class="label">收货人</text>
						<input 
							class="input" 
							v-model="formData.name" 
							placeholder="姓名" 
							placeholder-style="color: #CBCBCB"
						/>
					</view>
				</view>
				
				<!-- 手机号码 -->
				<view class="form-item">
					<view class="form-row">
						<text class="label">手机号码</text>
						<input 
							class="input" 
							v-model="formData.phone" 
							placeholder="联系电话" 
							placeholder-style="color: #CBCBCB"
							type="number"
						/>
					</view>
				</view>
				
				<!-- 所在地区 -->
				<view class="form-item">
					<view class="form-row" @click="selectRegion">
						<text class="label">所在地区</text>
						<text class="input" :class="{placeholder: !formData.province}" >{{ formData.province ? `${formData.province} ${formData.city} ${formData.district}` : '请选择所在地区' }}</text>
					</view>
				</view>
				
				<!-- 详细地址 -->
				<view class="form-item">
					<view class="form-row">
						<text class="label">详细地址</text>
						<input 
							class="input" 
							v-model="formData.address" 
							placeholder="门牌号" 
							placeholder-style="color: #CBCBCB"
						/>
					</view>
				</view>
				
				<!-- 设为默认地址 -->
				<view class="form-item">
					<view class="form-row">
						<view class="w-100" style="display: flex; justify-content: space-between;">
							<text class="label" style="color: #333;">设为默认地址</text>
							<switch 
								:checked="formData.tolerant == '0' ? false : true" 
								@change="switchChange" 
								color="#ff2727"
							/>
						</view>
					</view>
				</view>
				
				<!-- 智能贴站 -->
				<!-- <view class="smart-section">
					<view class="smart-header">
						<text class="smart-title">智能粘贴</text>
					</view>
					<view class="smart-content">
						<text class="smart-description">粘贴剪贴板收货信息进行识别，系统会自动识别收货人、手机号、地址等信息</text>
					</view>
				</view> -->
				
				<!-- 底部占位 -->
				<view class="bottom-placeholder"></view>
			</view>
		</view>
	
		<!-- 底部保存按钮 -->
		<view class="bottom-bar">
			<button class="save-btn" @click="saveAddress">保存并使用</button>
		</view>
		
		<!-- 地址选择器 -->
		<RegionPicker 
			ref="regionPicker"
			:visible="showRegionPicker"
			@confirm="onRegionConfirm"
			@cancel="onRegionCancel"
		/>
		
		<!-- 智能识别弹窗 -->
		<!-- <view class="modal-overlay" v-if="showRecognitionModal" @click="hideRecognitionModal">
			<view class="modal-content">
				<view class="modal-header">
					<text class="modal-title">识别到收货信息，是否填入？</text>
				</view>
				<view class="modal-body">
					<view class="info-item">
						<text class="info-label">收货人</text>
						<text class="info-value">{{ recognitionData.name }}</text>
					</view>
					<view class="info-item">
						<text class="info-label">手机号码</text>
						<text class="info-value">{{ recognitionData.phone }}</text>
					</view>
					<view class="info-item">
						<text class="info-label">所在地区</text>
						<text class="info-value">{{ recognitionData.region }}</text>
					</view>
					<view class="info-item">
						<text class="info-label">详细地址</text>
						<text class="info-value">{{ recognitionData.detail }}</text>
					</view>
				</view>
				<view class="modal-footer flex flex--row justify--between">
					<button class="modal-btn cancel-btn flex-grow--1" @click="hideRecognitionModal">取消</button>
					<button class="modal-btn confirm-btn flex-grow--1" @click="confirmRecognition">确认</button>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
import RegionPicker from '@/components/region-picker/region-picker.vue';
import {
	addressDetail,
	addressEdit,
	addressInsert
} from '@/common/http/api.js'
export default {
	components: {
		RegionPicker
	},
	data() {
		return {
			formData: {
				id: '',
				name: '',
				phone: '',
				province: '',
				city: '',
				district: '',
				address: '',
				tolerant: '0'
			},
			showRegionPicker: false, // 控制地址选择器显示
			showRecognitionModal: false,
			recognitionData: {
				name: 'Dream',
				phone: '177****7986',
				region: '陕西省 西安市 雁塔区',
				detail: '科技二路 恒永宋元环球中心 3栋1单元 303室'
			}
		};
	},
	onLoad(options) {
		// 如果有ID参数，表示编辑模式
		if (options && options.id) {
			this.formData.id = options.id
			this.loadAddressData(options.id)
		}
		
		// 检查剪贴板内容
		// this.checkClipboard()
	},
	methods: {
		goBack() {
			uni.navigateBack()
		},
		
		selectRegion() {
			// 打开地区选择器
			this.showRegionPicker = true;
		},
		
		// 地址选择确认
		onRegionConfirm(regionData) {
			this.formData.province = regionData.province
			this.formData.city = regionData.city
			this.formData.district = regionData.district
			this.showRegionPicker = false;
		},
		
		// 地址选择取消
		onRegionCancel() {
			this.showRegionPicker = false;
		},
		
		switchChange(e) {
			if(e.detail.value){
				this.formData.tolerant = '1'
			}else{
				this.formData.tolerant = '0'
			}
		},
		
		// checkClipboard() {
		// 	// 检查剪贴板内容，如果包含地址信息则显示识别弹窗
		// 	// 这里模拟检测到剪贴板有地址信息
		// 	setTimeout(() => {
		// 		this.showRecognitionModal = true
		// 	}, 1000)
		// },
		
		hideRecognitionModal() {
			this.showRecognitionModal = false
		},
		
		// confirmRecognition() {
		// 	// 将识别的数据填入表单
		// 	this.formData.name = this.recognitionData.name
		// 	this.formData.phone = this.recognitionData.phone
		// 	this.formData.region = this.recognitionData.region
		// 	this.formData.detail = this.recognitionData.detail
		// 	this.hideRecognitionModal()
			
		// 	uni.showToast({
		// 		title: '信息已填入',
		// 		icon: 'success'
		// 	})
		// },
		
		loadAddressData(id) {
			// 加载地址数据用于编辑 获取地址详情
			addressDetail(id).then((res) => {
				// 填充表单数据
				this.formData = res.data
			}).catch((e) => {
				console.log('获取地址信息失败:', e)
				uni.showToast({
					title: '获取地址信息失败',
					icon: 'none'
				})
			})
		},
		
		validateForm() {
			if (!this.formData.name.trim()) {
				uni.showToast({
					title: '请输入收货人姓名',
					icon: 'none'
				})
				return false
			}
			
			if (!this.formData.phone.trim()) {
				uni.showToast({
					title: '请输入手机号码',
					icon: 'none'
				})
				return false
			}
			
			// 验证手机号格式
			const phoneRegex = /^1[3-9]\d{9}$/
			if (!phoneRegex.test(this.formData.phone)) {
				uni.showToast({
					title: '请输入正确的手机号码',
					icon: 'none'
				})
				return false
			}
			
			if (!this.formData.province || !this.formData.city || !this.formData.district) {
				uni.showToast({
					title: '请选择所在地区',
					icon: 'none'
				})
				return false
			}
			
			if (!this.formData.address.trim()) {
				uni.showToast({
					title: '请输入详细地址',
					icon: 'none'
				})
				return false
			}
			
			// 验证详细地址长度
			if (this.formData.address.trim().length < 5) {
				uni.showToast({
					title: '详细地址至少输入5个字符',
					icon: 'none'
				})
				return false
			}
			
			return true
		},
		
		saveAddress() {
			if (!this.validateForm()) {
				return
			}
			// 判断是新增还是编辑
			if (this.formData.id) {
				// 编辑地址
				addressEdit(this.formData).then((res) => {
					uni.showToast({
						title: '更新成功',
						icon: 'success'
					})
					// 返回上一页
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}).catch((e) => {
					console.log('更新地址失败:', e)
					uni.showToast({
						title: '更新地址失败',
						icon: 'none'
					})
				})
			} else {
				// 新增地址
				addressInsert(this.formData).then((res) => {
					if(res.code == 200){
						uni.showToast({
							title: '保存成功',
							icon: 'success'
						})
					}
					// 返回上一页
					setTimeout(() => {
						uni.navigateBack()
					}, 1500)
				}).catch((e) => {
					console.log('保存地址失败:', e)
					uni.showToast({
						title: '保存地址失败',
						icon: 'none'
					})
				})
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.address-setting-page {
	background: #fff;
	min-height: 100vh;
}

// 顶部导航栏
.header{
	position: relative;
	width: 100%;
	height: 100px;
	background-color: #ff2727;
	.navBar{
		position: absolute;
		left: 25rpx;
		bottom: 25rpx;
		font-size: 35rpx;
		color: #fff;
		.icon{
			font-size: 30rpx;
		}
	}
}

// 表单容器
.form-container {
	padding: 30rpx;
}

// 表单项
.form-item {
	.form-row {
		display: flex;
		padding: 20rpx 30rpx;
		gap: 20rpx;
		
		.label {
			font-size: 30rpx;
			color: #333;
			font-weight: 500;
			min-width: 160rpx;
		}
		
		.input {
			font-size: 28rpx;
			color: #333;
			line-height: 1.5;
			
			&.placeholder {
				color: #CBCBCB;
			}
		}
		
		.placeholder {
			color: #CBCBCB;
		}
		
		.icon {
			font-size: 40rpx;
			color: #999;
			padding: 10rpx;
			
			&.icon-dingwei {
				color: #ff6600;
			}
		}
		
		.tip-text {
			color: #999;
		}
	}
}

// 智能贴站区域
.smart-section {
	padding: 40rpx 20rpx;
	
	.smart-header {
		margin-bottom: 20rpx;
		
		.smart-title {
			font-size: 30rpx;
			color: #333;
		}
	}
	
	.smart-content {
		background-color: #F6F6F696;
		padding: 25rpx;
		border-radius: 10rpx;
		.smart-description {
			font-size: 25rpx;
			color: #999;
			line-height: 1.6;
		}
	}
}

// 底部占位
.bottom-placeholder {
	height: 140rpx;
}

// 底部保存按钮
.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;
	border-top: 1rpx solid #f0f0f0;
	padding: 30rpx;
	z-index: 100;
	box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.08);
	
	.save-btn {
		width: 100%;
		height: 88rpx;
		background-color: #ff6600;
		color: #fff;
		border: none;
		border-radius: 50rpx;
		font-size: 32rpx;
		font-weight: 600;
		box-shadow: 0 8rpx 24rpx rgba(255, 71, 87, 0.3);
		transition: all 0.3s ease;
		
		&:active {
			transform: translateY(2rpx);
			box-shadow: 0 4rpx 12rpx rgba(255, 71, 87, 0.2);
		}
	}
}

// 智能识别弹窗
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	
	.modal-content {
		background: #fff;
		border-radius: 24rpx;
		width: 600rpx;
		max-width: 90vw;
		overflow: hidden;
		
		.modal-header {
			padding: 50rpx 50rpx 20rpx;
			text-align: center;
			
			.modal-title {
				font-size: 30rpx;
				color: #313131;
			}
		}
		
		.modal-body {
			padding: 20rpx 30rpx;
			
			.info-item {
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				padding: 20rpx 0;
				&:last-child {
					border-bottom: none;
				}
				
				.info-label {
					font-size: 28rpx;
					color: #666;
					min-width: 120rpx;
					margin-right: 20rpx;
				}
				
				.info-value {
					flex: 1;
					font-size: 28rpx;
					color: #333;
					line-height: 1.5;
				}
			}
		}
		
		.modal-footer {
			gap: 20rpx;
			padding: 20rpx 30rpx 40rpx;
			
			.modal-btn {
				width: 30%;
				height: 80rpx;
				border-radius: 40rpx;
				font-size: 30rpx;
				font-weight: 500;
				border: none;
				
				&.cancel-btn {
					border: 1rpx solid #ff2727;
					color: #ff2727;
					background-color: #fff;
				}
				
				&.confirm-btn {
					background-color: #ff2727;
					color: #fff;
					box-shadow: 0 4rpx 16rpx rgba(255, 71, 87, 0.3);
				}
				
				&:active {
					transform: scale(0.98);
				}
			}
		}
	}
}
</style>
