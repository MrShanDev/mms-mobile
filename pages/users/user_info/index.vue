<template>
    <view class="user-info-page">
        <!-- 头像 -->
        <view class="info-item" @click="changeAvatar">
            <view class="item-label">头像</view>
            <view class="item-content">
                <view class="avatar-box">
                    <image :src="userInfo.headPortrait || defaultFace" mode="aspectFill"></image>
                </view>
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>

        <!-- 昵称 -->
        <view class="info-item" @click="editNickname">
            <view class="item-label">昵称</view>
            <view class="item-content">
                <text class="item-value">{{ userInfo.nickname || '昵称' }}</text>
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>

        <!-- 性别 -->
        <view class="info-item">
            <view class="item-label">性别</view>
            <view class="item-content">
                <picker @change="bindPickerChange" :value="getGenderIndex(userInfo.sex)" :range="array">
                    <view class="picker-wrapper">
                        <text class="item-value">{{ getGenderText(userInfo.sex) }}</text>
                        <text class="item-arrow iconfont icon-youjiantou"></text>
                    </view>
                </picker>
            </view>
        </view>

        <!-- 手机号 -->
        <view class="info-item" @click="handlePhone">
            <view class="item-label">手机号</view>
            <view class="item-content">
                <text class="item-value">{{ userInfo.mobile || '手机号' }}</text>
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>

        <!-- 个性签名 -->
        <view class="info-item" @click="handleSignature">
            <view class="item-label">个性签名</view>
            <view class="item-content">
                <text class="item-value">{{ userInfo.signature || '个性签名' }}</text>
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>

        <!-- 我的会员码 -->
        <view class="info-item" @click="handleMemberCode">
            <view class="item-label">我的会员码</view>
            <view class="item-content">
                <view class="member-code-icon">
                    <text>码</text>
                </view>
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>

        <!-- 我的发票 -->
        <view class="info-item" @click="handleInvoice">
            <view class="item-label">我的发票</view>
            <view class="item-content">
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>

        <!-- 帮助与反馈 -->
        <view class="info-item" @click="handleFeedback">
            <view class="item-label">帮助与反馈</view>
            <view class="item-content">
                <text class="item-arrow iconfont icon-youjiantou"></text>
            </view>
        </view>
        
        <!-- 修改昵称弹窗 -->
        <view class="modal" v-if="showNicknameModal">
            <view class="modal-mask" @click="closeNicknameModal"></view>
            <view class="modal-content card">
                <view class="modal-header">
                    修改昵称
                </view>
                <view class="modal-body">
                    <input class="nickname-input" v-model="newNickname" placeholder="请输入新的昵称" />
                </view>
                <view class="modal-footer flex flex--row">
                    <view class="modal-btn cancel-btn" @click="closeNicknameModal">取消</view>
                    <view class="modal-btn confirm-btn" @click="confirmNicknameChange">确定</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import {
	updateMemberInfo
} from '@/common/http/api.js'
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		const currentDate = this.getDate({
			format: true
		})
		return {
			array: ['保密', '男', '女'],
			index: 0,
			date: currentDate,
			defaultFace: '/static/img/user/missing-face.png',
			showNicknameModal: false, // 显示修改昵称弹窗
			newNickname: '', // 新昵称
			showEmpty: false // 是否显示空内容组件
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		},
		...mapState(['userInfo'])
	},
	watch: {
		// 监听 userInfo 变化，确保页面及时更新
		userInfo: {
			handler(newVal, oldVal) {
				// 强制更新页面
				this.$forceUpdate();
			},
			deep: true
		}
	},
	onLoad() {
		
	},
	methods: {
		...mapMutations(['login']),
		goBack() {
			uni.navigateBack()
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 10;
			} else if (type === 'end') {
				year = year + 10;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 获取性别显示文本
		getGenderText(sex) {
			if (sex === undefined || sex === null || sex === '') {
				return '请选择性别';
			}
			const index = parseInt(sex);
			return this.array[index] || '保密';
		},
		// 获取性别索引
		getGenderIndex(sex) {
			if (sex === undefined || sex === null || sex === '') {
				return 0;
			}
			const index = parseInt(sex);
			return isNaN(index) ? 0 : index;
		},
		bindDateChange: function(e) {
			this.date = e.detail.value
			//更新用户信息
			updateMemberInfo({ type: 7, birthday: this.date + " 00:00:00" }).then(res => {
					// 构造新的用户信息对象
					const newUserInfo = {
						...this.userInfo,
						birthday: this.date
					};
					this.login(newUserInfo);
					uni.showToast({
						title: '生日修改成功',
						icon: 'success'
					})
			}).catch((e) => {
				console.log(e)
				uni.showToast({
					title: '生日修改失败',
					icon: 'none'
				})
			}).finally(()=>{});
		},
		bindPickerChange: function(e) {
			this.index = parseInt(e.detail.value)
			//更新用户信息
			updateMemberInfo({ type: 5, sex: this.index }).then(res => {
					// 构造新的用户信息对象
					const newUserInfo = {
						...this.userInfo,
						sex: this.index
					};
					this.login(newUserInfo);
					uni.showToast({
						title: '性别修改成功',
						icon: 'success'
					})
			}).catch((e) => {
				console.log(e)
				uni.showToast({
					title: '性别修改失败',
					icon: 'none'
				})
			}).finally(()=>{});
		},
		// 更换头像
		changeAvatar() {
			uni.showActionSheet({
				itemList: ['拍照', '从相册选择'],
				success: (res) => {
					const sourceType = res.tapIndex === 0 ? ['camera'] : ['album']
					uni.chooseImage({
						count: 1,
						sizeType: ['compressed'],
						sourceType: sourceType,
						success: (imageRes) => {
							//更新用户信息
							updateMemberInfo({ type: 4, headPortrait: imageRes.tempFilePaths[0] }).then(res => {
									uni.showToast({
										title: '头像更换成功',
										icon: 'success'
									})
									// 构造新的用户信息对象
									const newUserInfo = {
										...this.userInfo,
										headPortrait: imageRes.tempFilePaths[0]
									};
									this.login(newUserInfo);
							}).catch((e) => {
								console.log(e)
								uni.showToast({
									title: '头像更换失败',
									icon: 'none'
								})
							}).finally(()=>{});
						},
						fail: (err) => {
							uni.showToast({
								title: '选择图片失败',
								icon: 'none'
							})
						}
					})
				}
			})
		},
		
		// 编辑昵称
		editNickname() {
			this.newNickname = this.userInfo.nickname || '';
			this.showNicknameModal = true;
		},
		
		// 关闭昵称修改弹窗
		closeNicknameModal() {
			this.showNicknameModal = false;
			this.newNickname = '';
		},
		
		// 确认修改昵称
		confirmNicknameChange() {
			let that = this
			if (this.newNickname === '') {
				uni.showToast({
					title: '昵称不能为空',
					icon: 'none'
				});
				return;
			}
			//更新用户昵称
			updateMemberInfo({ type: 3, nickname: this.newNickname }).then(res => {
					uni.showToast({
						title: '昵称修改成功',
						icon: 'success'
					})
					// 构造新的用户信息对象
					const newUserInfo = {
						...this.userInfo,
						nickname: this.newNickname
					};
					this.login(newUserInfo);
				
			}).catch((e) => {
				console.log(e)
				uni.showToast({
					title: '昵称修改失败',
					icon: 'none'
				})
			}).finally(()=>{
				// 无论成功还是失败都关闭弹窗
				this.closeNicknameModal();
			});
		},
		
		// 手机号
		handlePhone() {
			uni.showToast({
				title: '手机号',
				icon: 'none'
			});
		},
		
		// 个性签名
		handleSignature() {
			uni.showToast({
				title: '个性签名',
				icon: 'none'
			});
		},
		
		// 我的会员码
		handleMemberCode() {
			uni.showToast({
				title: '我的会员码',
				icon: 'none'
			});
		},
		
		// 我的发票
		handleInvoice() {
			uni.navigateTo({
				url: '/pages/extension/invoice/invoice'
			})
		},
		
		// 帮助与反馈
		handleFeedback() {
			uni.showToast({
				title: '帮助与反馈',
				icon: 'none'
			});
		}
	}
}
</script>

<style scoped lang="scss">
.user-info-page {
	min-height: 100vh;
	background-color: #F5F5F5;
}

// 信息项
.info-item {
	background-color: #FFFFFF;
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 35rpx;
	border-bottom: 1rpx solid #F0F0F0;

	.item-label {
		font-size: 28rpx;
		color: #232222;
	}

	.item-content {
		display: flex;
		align-items: center;
		gap: 16rpx;

		.avatar-box {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			overflow: hidden;
			border: 2rpx solid #F0F0F0;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.member-code-icon {
			width: 56rpx;
			height: 56rpx;
			background-color: #FF8C42;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;

			text {
				font-size: 28rpx;
				color: #FFFFFF;
				font-weight: 600;
			}
		}

		.item-value {
			font-size: 28rpx;
			color: #999999;
		}

		.item-arrow {
			font-size: 28rpx;
			color: #454444;
		}

		.picker-wrapper {
			display: flex;
			align-items: center;
			gap: 16rpx;
		}
	}
}

// 修改昵称弹窗样式
.modal {
	.modal-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 999;
	}

	.modal-content {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		background: #fff;
		border-radius: 16rpx;
		z-index: 1000;
		padding: 0;

		.modal-header {
			padding: 30rpx;
			text-align: center;
			font-size: 32rpx;
			color: #303133;
			border-bottom: 1rpx solid #eee;
		}

		.modal-body {
			padding: 40rpx 30rpx;

			.nickname-input {
				width: 100%;
				height: 80rpx;
				padding: 0 20rpx;
				border: 1rpx solid #dadbde;
				border-radius: 12rpx;
				font-size: 32rpx;
				color: #303133;
				box-sizing: border-box;
			}
		}

		.modal-footer {
			border-top: 1rpx solid #eee;

			.modal-btn {
				flex: 1;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				font-size: 32rpx;
			}

			.cancel-btn {
				color: #909193;
				border-right: 1rpx solid #eee;
			}

			.confirm-btn {
				color: #ff2727;
				font-weight: 500;
			}
		}
	}
}
</style>