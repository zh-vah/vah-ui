---
order: 1
title: 不可用状态
---

## zh-CN

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

## en-US

````jsx
import {Button} from '../../../../dist';

ReactDOM.render(
  <div>
    <div className='buttonGroupDiv'>
      <Button>Default</Button>
      <Button disabled={true}>Default</Button>
    </div>
    <div className='buttonGroupDiv'>
      <Button btnType="primary">Primary</Button>
      <Button btnType="primary" disabled={true}>Primary</Button>
    </div>
    <div className='buttonGroupDiv'>
      <Button btnType="danger">danger</Button>
      <Button btnType="danger" disabled={true}>danger</Button>
    </div>
    <div className='buttonGroupDiv'>
      <Button btnType="link" href="http://www.baidu.com">link</Button>
      <Button btnType="link" href="http://www.baidu.com" disabled={true}>link</Button>
    </div>
  </div>,
  mountNode
);
````

````css
.buttonGroupDiv{
  margin-bottom: 10px
}
````
