---
order: 0
title: 不同大小
---

## zh-CN

控件大小分为三种，默认是`middle`，可以设置大一号`large`，和小一号`small`。

## en-US

````jsx
import { Input } from '../../../../dist';

ReactDOM.render(
  <div style={{width: '50%'}}>
    <Input size='sm' placeholder='small input'></Input>
    <Input placeholder='deafult input'></Input>
    <Input size='lg' placeholder='large input'></Input>
  </div>,
  mountNode);
````

````css
button{
  margin-right: 10px
}
````
