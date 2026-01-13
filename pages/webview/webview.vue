<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="wwwUrl" @message="handleMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wwwUrl: '',
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		onLoad(options) {
			this.wwwUrl = options.url;
			console.log(this.url)
		},
		methods: {
			handleMessage(evt) {
				console.log('接收到的消息：' + JSON.stringify(evt.detail.data));
				uni.redirectTo({
					url: '/pages/index/index'
				});
			}

		}
	}
</script>

<style>

</style>