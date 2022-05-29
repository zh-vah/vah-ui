---
order: 2
title: 指定展开子菜单以及默认active的菜单项
---

## zh-CN

用于指定初始的子菜单展开项，和指定默认的active菜单项。

## en-US

```jsx
import { Menu } from "../../../../dist";

ReactDOM.render(
  <Menu mode="vertical" defaultOpenSubmenu={[3]} defaultIndex='32' style={{width: '20%'}}>
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
