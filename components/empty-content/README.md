# EmptyContent 空内容组件

## 介绍
EmptyContent 是一个用于在页面中显示空状态的通用组件，当页面没有内容时可以使用该组件来提升用户体验。

## 使用方式

### 1. 引入组件
```vue
import EmptyContent from '@/components/empty-content/empty-content.vue'

export default {
  components: {
    EmptyContent
  }
}
```

### 2. 基础用法
```vue
<empty-content 
  :show-empty="showEmpty" 
  title="暂无数据" 
  description="当前没有相关内容">
</empty-content>
```

### 3. 带按钮的空状态
```vue
<empty-content 
  :show-empty="showEmpty" 
  title="暂无数据" 
  description="当前没有相关内容"
  button-text="刷新试试"
  button-type="primary"
  @button-click="handleRefresh">
</empty-content>
```

### 4. 自定义图标
```vue
<empty-content 
  :show-empty="showEmpty" 
  title="暂无数据" 
  description="当前没有相关内容"
  icon-src="/static/images/empty.png">
</empty-content>
```

### 5. 使用插槽自定义内容
```vue
<empty-content :show-empty="showEmpty">
  <template #icon>
    <image src="/static/images/empty.png" mode="aspectFit"></image>
  </template>
  <template #text>
    <text>自定义标题</text>
    <text>这是自定义的描述内容</text>
  </template>
  <template #action>
    <button @click="handleCustomAction">自定义操作</button>
  </template>
</empty-content>
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| showEmpty | Boolean | true | 是否显示空内容 |
| title | String | '暂无内容' | 标题文字 |
| description | String | '' | 描述文字 |
| buttonText | String | '' | 按钮文字 |
| buttonType | String | 'default' | 按钮类型：primary/default/warn |
| iconSrc | String | '' | 图标图片路径 |

## 事件说明

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| button-click | 点击按钮时触发 | - |

## 插槽说明

| 插槽名 | 说明 |
| --- | --- |
| icon | 自定义图标区域 |
| text | 自定义文字区域 |
| action | 自定义操作区域 |