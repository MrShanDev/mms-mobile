<template>
	<view class="region-picker">
		<!-- 遮罩层 -->
		<view class="mask" :class="{ show: visible }" @click="closePicker"></view>
		
		<!-- 选择器主体 -->
		<view class="picker-container" :class="{ show: visible }">
			<!-- 顶部操作栏 -->
			<view class="picker-header flex flex--row justify--between align--center">
				<text class="cancel-btn" @click="closePicker">取消</text>
				<text class="confirm-btn" @click="confirm">确定</text>
			</view>
			
			<!-- 选择器内容 -->
			<view class="picker-content">
				<picker-view 
					:value="selectedIndexes" 
					@change="onPickerChange" 
					class="picker-view"
					indicator-style="height: 50rpx;"
				>
					<!-- 省份选择 -->
					<picker-view-column>
						<view class="picker-item" v-for="(province, index) in provinces" :key="index">
							{{ province }}
						</view>
					</picker-view-column>
					
					<!-- 城市选择 -->
					<picker-view-column>
						<view class="picker-item" v-for="(city, index) in cities" :key="index">
							{{ city }}
						</view>
					</picker-view-column>
					
					<!-- 区县选择 -->
					<picker-view-column>
						<view class="picker-item" v-for="(district, index) in districts" :key="index">
							{{ district }}
						</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
import {
	storeToolAreaList
} from '@/common/http/api.js'
export default {
	name: "RegionPicker",
	props: {
		// 是否显示选择器
		visible: {
			type: Boolean,
			default: false
		},
		// 默认选中的地区编码
		defaultRegionCode: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			provinces: [],
			cities: [],
			districts: [],
			selectedIndexes: [0, 0, 0],
			selectedRegion: {
				province: null,
				city: null,
				district: null
			}
		};
	},
	watch: {
		visible(newVal) {
			if (newVal) {
				// 显示时初始化数据
				this.initData();
			}
		}
	},
	mounted() {
		// 初始化数据
		this.initData();
	},
	methods: {
		// 初始化数据
		initData() {
			// 获取省份数据
			storeToolAreaList({}).then((res) => {
				this.provinces = res.data[0] || [];
				// 初始化城市数据（默认选中第一个省份）
				if (this.provinces.length > 0) {
					const defaultProvince = this.provinces[0];
					this.selectedRegion.province = defaultProvince;
					this.loadCities(defaultProvince);
				}
			}).catch((e) => {
				uni.showToast({
					title: '获取地区数据失败',
					icon: 'none'
				});
			});
		},
		
		// 加载城市数据
		loadCities(province) {
			if (!province) return;
			// 显示加载提示
			uni.showLoading({
				title: '加载中...'
			});
			storeToolAreaList({provincialName: province}).then((res) => {
				uni.hideLoading();
				this.cities = res.data[1] || [];
				// 默认选中第一个城市
				if (this.cities.length > 0) {
					const defaultCity = this.cities[0];
					this.selectedRegion.city = defaultCity;
					// 加载第一个城市的区县数据
					this.loadDistricts(province, defaultCity);
				} else {
					this.districts = [];
				}
			}).catch((e) => {
				uni.hideLoading();
				console.log("获取城市数据失败:", e);
				uni.showToast({
					title: '获取城市数据失败',
					icon: 'none'
				});
				this.cities = [];
				this.districts = [];
			});
		},
		
		// 加载区县数据
		loadDistricts(province, city) {
			if (!city) return;
			
			// 显示加载提示
			uni.showLoading({
				title: '加载中...'
			});
			
			storeToolAreaList({
				provincialName: province,
				cityName: city
			}).then((res) => {
				uni.hideLoading();
				// 检查返回的数据结构
				this.districts = res.data[2] || [];
				// 默认选中第一个区县
				if (this.districts.length > 0) {
					this.selectedRegion.district = this.districts[0];
				}
			}).catch((e) => {
				uni.hideLoading();
				uni.showToast({
					title: '获取区县数据失败',
					icon: 'none'
				});
				this.districts = [];
			});
		},
		
		// 设置默认地区
		setDefaultRegion() {
			// 这里可以根据默认地区编码来设置默认选中项
			// 为了简化示例，我们默认选中第一个
			this.selectedIndexes = [0, 0, 0];
		},
		
		// 选择器变化事件
		onPickerChange(e) {
			const values = e.detail.value;
			const oldIndexes = [...this.selectedIndexes];
			this.selectedIndexes = values;
			
			// 检查省份是否发生变化
			if (values[0] !== oldIndexes[0]) {
				// 省份变化，重新加载城市数据
				const selectedProvince = this.provinces[values[0]];
				if (selectedProvince) {
					this.selectedRegion.province = selectedProvince;
					this.loadCities(selectedProvince);
				}
				return;
			}
			
			// 检查城市是否发生变化
			if (values[1] !== oldIndexes[1]) {
				// 城市变化，重新加载区县数据
				const selectedProvince = this.provinces[values[0]];
				const selectedCity = this.cities[values[1]];
				if (selectedCity && selectedProvince) {
					this.selectedRegion.city = selectedCity;
					this.loadDistricts(selectedProvince, selectedCity);
				}
				return;
			}
			
			// 区县变化
			if (values[2] !== oldIndexes[2]) {
				const selectedDistrict = this.districts[values[2]];
				if (selectedDistrict) {
					this.selectedRegion.district = selectedDistrict;
				}
			}
		},
		
		// 关闭选择器
		closePicker() {
			// 重置选中索引
			this.selectedIndexes = [0, 0, 0];
			// 清空已选数据
			this.selectedRegion = {
				province: null,
				city: null,
				district: null
			};
			this.$emit("cancel");
		},
		
		// 确认选择
		confirm() {
			const regionText = `${this.selectedRegion.province || ''} ${this.selectedRegion.city || ''} ${this.selectedRegion.district || ''}`;
			const regionData = {
				text: regionText.trim(),
				province: this.selectedRegion.province,
				city: this.selectedRegion.city,
				district: this.selectedRegion.district
			};
			this.$emit("confirm", regionData);
		}
	}
};
</script>

<style lang="scss" scoped>
.region-picker {
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 998;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
		
		&.show {
			opacity: 1;
			visibility: visible;
		}
	}
	
	.picker-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 999;
		transform: translateY(100%);
		transition: transform 0.3s ease;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		
		&.show {
			transform: translateY(0);
		}
		
		.picker-header {
			padding: 20rpx 30rpx;
			border-bottom: 1rpx solid #eee;
			
			.cancel-btn,
			.confirm-btn {
				font-size: 32rpx;
				padding: 10rpx 20rpx;
			}
			
			.cancel-btn {
				color: #999;
			}
			
			.confirm-btn {
				color: #ff6600;
			}
		}
		
		.picker-content {
			height: 400rpx;
			overflow: hidden;
			
			.picker-view {
				height: 100%;
				
				.picker-item {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
					color: #333;
					height: 50rpx;
					line-height: 50rpx;
				}
			}
		}
	}
}

</style>