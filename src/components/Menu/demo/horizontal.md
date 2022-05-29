---
order: 0
title: 顶部导航
---

## zh-CN

水平顶部导航菜单。

## en-US

```jsx
import { Menu } from "../../../../dist";

ReactDOM.render(
  <Menu>
    <Menu.Item>菜单1</Menu.Item>
    <Menu.Item>菜单2</Menu.Item>
    <Menu.Item>菜单3</Menu.Item>
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
