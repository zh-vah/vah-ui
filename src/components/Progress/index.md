---
category: Components
type: General
title: Progress
subtitle: 进度条
---

进度条用于展示某个事件的进度。

## 何时使用

当一个操作会在后台运行或打断当前操作，而需要像用户展示才做进度时使用。

## 代码演示

## API

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度百分比 | number | - |
| strokeHeight | 进度条高度 | number | 15 |
| showText | 是否显示进度数值 | boolean | `true` |
| theme | 主题颜色。可选值为`primary` \| `secondary` \| `success` \| `info` \| `warning` \| `danger` \| `light` \| `dark` | string | `primary` |

<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
