---
order: 1
title: 获取promise异步数据
---

## zh-CN

通过传入`fetchSuggestions`一个返回`promise`的函数来给组件传入数据源。

```jsx
import { AutoComplete } from "../../../../dist";

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
    });
};

ReactDOM.render(
  <div style={{width: '50%'}}>
    <AutoComplete 
      fetchSuggestions={handleFetch}
      placeholder='please input'
    ></AutoComplete>
  </div>,
  mountNode
);
```
