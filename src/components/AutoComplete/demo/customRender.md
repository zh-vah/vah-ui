---
order: 2
title: 自定义补全信息栏渲染格式
---

## zh-CN

自定义补全信息栏的渲染格式。

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

const renderOption = (item) => {
    return (
      <>
        <h6>{item.value}</h6>
        <p>id: {item.id}</p>
      </>
    );
  };

ReactDOM.render(
  <div style={{width: '50%'}}>
    <AutoComplete
        fetchSuggestions={handleFetch}
        renderOption={renderOption}
        placeholder='please input'
    ></AutoComplete>
  </div>,
  mountNode
);
```
