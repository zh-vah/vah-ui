---
order: 2
title: 按钮大小
---

## zh-CN

按钮大小分为三种，默认是`middle`，可以设置大一号`large`，和小一号`small`。

## en-US

````jsx
import {Button} from '../../../../dist';

ReactDOM.render(
  <div>
    <Button size='sm'>Small</Button>
    <Button>Default</Button>
    <Button size='lg'>Large</Button>
  </div>,
  mountNode);
````

````css
button{
  margin-right: 10px
}
````
