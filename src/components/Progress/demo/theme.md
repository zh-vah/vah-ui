---
order: 1
title: 不同主题颜色
---

## zh-CN

不同主题颜色的进度条

## en-US

```jsx
import { Progress } from "../../../../dist";

ReactDOM.render(
  <div style={{width: '50%'}}>
    <Progress percent={10} theme='danger' styles={{'margin-bottom': '10px'}}></Progress>
    <Progress percent={20} theme='warning' styles={{'margin-bottom': '10px'}}></Progress>
    <Progress percent={40} theme='secondary' styles={{'margin-bottom': '10px'}}></Progress>
    <Progress percent={60} styles={{'margin-bottom': '10px'}}></Progress>
    <Progress percent={100} theme='success'></Progress>
  </div>,
  mountNode
);
```

````css
.progressGroup{
  margin-bottom: 10px
}
````
