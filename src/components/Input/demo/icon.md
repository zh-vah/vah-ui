---
order: 1
title: 带图标
---

## zh-CN

控件大小分为三种，默认是`middle`，可以设置大一号`large`，和小一号`small`。

## en-US

````jsx

import { Input } from '../../../../dist';

ReactDOM.render(
  <div style={{width: '50%'}}>
    <Input placeholder='为你心动' icon="fa-heartbeat"></Input>
    <Input placeholder='search icon' icon="search"></Input>
    <Input placeholder='iphone icon' icon="fa-phone"></Input>
  </div>,
  mountNode);
````

````css
button{
  margin-right: 10px
}
````
