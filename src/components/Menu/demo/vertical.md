---
order: 1
title: 垂直菜单
---

## zh-CN

垂直导航菜单。

## en-US

```jsx
import { Menu } from "../../../../dist";

ReactDOM.render(
  <Menu mode="vertical" style={{width: '20%'}}>
    <Menu.Item>菜单1</Menu.Item>
    <Menu.Item>菜单2</Menu.Item>
    <Menu.SubMenu title="submenu1">
      <Menu.Item>option1</Menu.Item>
      <Menu.Item>option2</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="submenu2">
      <Menu.Item>option1</Menu.Item>
      <Menu.Item>option1</Menu.Item>
    </Menu.SubMenu>
  </Menu>,
  mountNode
);
```
