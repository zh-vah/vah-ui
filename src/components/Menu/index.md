---
category: Components
type: General
title: Menu
subtitle: 导航菜单
---

为页面和功能提供导航的菜单。

## 何时使用

导航菜单是一个网站必不可少的部分，一般分为顶部导航菜单和侧边导航菜单。

## 代码演示

## API

```jsx
<Menu>
  <Menu.Item>菜单1</Menu.Item>
  <Menu.SubMenu title="submenu">
    <Menu.Item>菜单2</Menu.Item>
    <Menu.Item>菜单3</Menu.Item>
  </Menu.SubMenu>
</Menu>
```

### Menu
Menu按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultIndex | 默认 active 的菜单项的索引值 | string | - |
| defaultOpenSubmenu | 默认展开。数组需传index值，用于指定需要展开的子菜单。 | `Array<number>` \| `boolean` | false |
| mode | 设置菜单类型横向或者纵向，值为`vertical` \| `horizontal` | string | `horizontal` |
| onSelect |点击菜单项触发的回掉函数 | function | - |

### Menu.SunMenu
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 子菜单标题 | string | - |
| disabled | 设置子菜单为禁用状态。 | `boolean` | false |

### Menu.Item
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用状态。 | `boolean` | false |

<style>
[id^="components-button-demo-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^="components-button-demo-"] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
