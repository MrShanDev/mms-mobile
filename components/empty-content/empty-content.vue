<template>
  <view class="empty-container" v-if="showEmpty">
    <view class="empty-icon">
      <slot name="icon">
        <image :src="iconSrc" mode="aspectFit" v-if="iconSrc"></image>
      </slot>
    </view>
    <view class="empty-text">
      <slot name="text">
        <text class="empty-title">{{ title }}</text>
        <text class="empty-description" v-if="description">{{ description }}</text>
      </slot>
    </view>
    <view class="empty-action" v-if="$slots.action || buttonText">
      <slot name="action">
        <button 
          class="empty-button" 
          v-if="buttonText" 
          @click="handleButtonClick"
          :class="buttonType"
        >
          {{ buttonText }}
        </button>
      </slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'EmptyContent',
  props: {
    // 是否显示空内容
    showEmpty: {
      type: Boolean,
      default: true
    },
    // 标题
    title: {
      type: String,
      default: '暂无内容'
    },
    // 描述
    description: {
      type: String,
      default: ''
    },
    // 按钮文字
    buttonText: {
      type: String,
      default: ''
    },
    // 按钮类型：primary, default, warn
    buttonType: {
      type: String,
      default: 'default'
    },
    // 图标路径
    iconSrc: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleButtonClick() {
      this.$emit('button-click');
    }
  }
}
</script>

<style scoped lang="scss">
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  box-sizing: border-box;
}

.empty-icon {
  margin-bottom: 30rpx;
  
  image {
    width: 200rpx;
    height: 200rpx;
  }
}

.empty-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rpx;
}

.empty-title {
  font-size: 32rpx;
  color: #999;
  margin-bottom: 20rpx;
}

.empty-description {
  font-size: 28rpx;
  color: #ccc;
}

.empty-button {
  padding: 0 60rpx;
  height: 70rpx;
  line-height: 70rpx;
  border-radius: 35rpx;
  font-size: 28rpx;
  border: none;
  outline: none;
}

.empty-button.primary {
  background-color: #ff2727;
  color: #fff;
}

.empty-button.default {
  background-color: #f5f5f5;
  color: #666;
}

.empty-button.warn {
  background-color: #ff6b6b;
  color: #fff;
}
</style>