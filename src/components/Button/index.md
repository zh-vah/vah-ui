---
category: Components
type: General
title: Button
subtitle: 按钮
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

## API

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| btnType | 设置按钮类型，可选值为 `primary` `default` `danger` `link`或者不设 | string | `default` |
| disabled | 设置失效状态 | boolean | `false` |
| size | 设置按钮大小，可选值为 `lg` `sm` 或者不设 | string | `default` |
| href | 点击跳转的地址，当type设置为link时使用 | string | - |

`<Button href="http://example.com">goto</Button>` 会渲染为 `<a href="http://example.com">goto</a>`。

<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
