---
order: 2
title: 进度条高度以及文本展示
---

## zh-CN

设置进度条高度以及进度百分比数据是否展示

## en-US

```jsx
import { Progress } from "../../../../dist";

ReactDOM.render(
  <div style={{width: '50%'}}>
    <Progress percent={30}styles={{'margin-bottom': '10px'}} ></Progress>
    <Progress percent={60} theme='warning' showText={false} styles={{'margin-bottom': '10px'}}></Progress>
    <Progress percent={80} strokeHeight={30} theme='success'></Progress>
  </div>,
  mountNode
);
```
