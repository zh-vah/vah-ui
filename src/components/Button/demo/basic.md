---
order: 0
title: 按钮类型
---

## zh-CN

按钮有四种类型，如下依次为：默认按钮、主按钮、危险按钮、链接按钮。

## en-US

````jsx
import {Button} from '../../../../dist';

ReactDOM.render(
  <div>
    <Button>Default</Button>
    <Button btnType="primary">Primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link" href="http://www.baidu.com">link</Button>
  </div>,
  mountNode);
````

````css
button{
  margin-right: 10px
}
````
