---
order: 0
title: 基本使用
---

## zh-CN

通过传入`fetchSuggestions`一个返回`{value: string}`数据格式的数组对象的函数来给组件传入数据源。

```jsx
import { AutoComplete } from "../../../../dist";

const lakersWithNumber = [
  { value: "pope" },
  { value: "pope" },
  { value: "caruso" },
  { value: "cook" },
  { value: "cousins" },
  { value: "james" },
];

const handleFetch = (query: string) => {
  return lakersWithNumber.filter((item, index) => item.value.includes(query));
};

ReactDOM.render(
  <div style={{width: '50%'}}>
    <AutoComplete fetchSuggestions={handleFetch} placeholder='please input'></AutoComplete>
  </div>,
  mountNode
);
```
