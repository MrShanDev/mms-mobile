<template>
	<view class="partnership-page">
		<view class="tab">
			<view class="tab-item active">
				成为合伙人
			</view>
			<view @click="navTo('/pages/extension/partner/partner')" class="tab-item">
				我的合伙人
			</view>
		</view>
		<view @click="navTo('/pages/extension/partner/partner')" class="apply">
			申请成为合伙人
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		};
	},
	methods: {
		navTo(url){
			uni.navigateTo({
				url:url
			})
		}
	}
}
</script>

<style lang="scss">
.partnership-page{
	overflow: hidden;
	min-height: 170vh;
	height: auto;
	background: url(https://sxpcwlkj.oss-cn-beijing.aliyuncs.com/ordermeal/%E5%9B%BE%E5%B1%82%200%403x.png);
	background-size: 100% 100%;
}
.tab{
	width: 100%;
	padding: 30rpx 0;
	background-color: #fff;
	display: flex;
	.tab-item{
		flex: 1;
		text-align: center;
	}
	.active{
		color: #F1A12C;
		font-weight: 600;
	}
}
.apply{
	width: 50%;
	padding: 20rpx;
	background-color: #002FA7;
	color: #fff;
	font-weight: 600;
	text-align: center;
	border-radius: 40rpx;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 105vh;
}
</style>