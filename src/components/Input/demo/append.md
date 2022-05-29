---
order: 2
title: 前置/后置标签
---

## zh-CN

用于配置一些固定组合。

## en-US

````jsx

import { Input } from '../../../../dist';

ReactDOM.render(
  <div style={{width: '50%'}}>
    <Input placeholder='输入网址' prepend="www." append=".com"></Input>
    <Input placeholder='交出来' prepend="你的微信:" icon="fa-beer"></Input>
  </div>,
  mountNode);
````

````css
button{
  margin-right: 10px
}
````
