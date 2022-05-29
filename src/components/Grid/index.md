---
category: Components
type: General
title: Grid
subtitle: 栅格
---

24 栅格系统。

## 何时使用

栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 12栅格 系统，也有采用 8栅格 系统的，但是随着设备屏幕越来越大，传统的 12栅格 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 24栅格 系统。也就是将页面区域 24 等分。

我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

## 代码演示

## API
### Row

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间隔，按照总24栅格来划分 | number | 0 |
| wrap | 是否自动换行 | boolean | true |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` | `top` |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` \| `space-evenly` | `start` |

### Col
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| flex | flex 布局属性 | string \| number | - |
| span | 栅格占位格数,为 0 时相当于 `display: none` | number | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | `number` | 0 |
