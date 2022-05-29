---
category: Components
type: General
title: AutoComplete
---

用于输入框的自动完成功能。

## 何时使用

当输入框需要提示和自动完成时使用

## 代码演示

## API

```jsx
const dataSource = [{value: '12345', value: '23456', value: '34567'}];
<AutoComplete fetchSuggestions={() => dataSource} />
```

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fetchSuggestions | 获取自动填充的数据源。返回数组对象的格式为[{value: string}] | (str?: string) => DataSourceObject[] \| Promise<DataSourceObject[]> | - |
| OnSelect | `select` 事件的 handler | function | - |
| renderOption | 补全信息栏渲染格式 | (item) => ReactElement | - |

<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
