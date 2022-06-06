---
category: Components
subtitle: 图标
type: General
title: Icon
toc: false
---


语义化的矢量图形。vah-ui使用的是开源的[FortAwesome](https://github.com/FortAwesome/react-fontawesome)组件库。

## 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

首先需要引入。
```js
import { value library } from "@fortawesome/fontawesome-svg-core";
import { value fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
```

然后就可以在页面中使用了。
```html
<Icon icon="angle-double-down" />
```
其它具体的使用方法请到[FortAwesome使用文档](https://fontawesome.com/v6/docs/web/use-with/react/)中查看

## 图标列表

> 点击图标复制代码。

### 方向性图标

```__react
import IconSet from '../../../site/theme/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="direction" />, mountNode);
```

### 交通运输图标

```__react
import IconSet from '../../../site/theme/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="transport" />, mountNode);
```

### 文件类型图标

```__react
import IconSet from '../../../site/theme/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="fileType" />, mountNode);
```

### 辅助功能图标

```__react
import IconSet from '../../../site/theme/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="accessibility" />, mountNode);
```

### 提示建议性图标

```__react
import IconSet from '../../../site/theme/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="suggestion" />, mountNode);
```

### 网站通用图标

```__react
import IconSet from '../../../site/theme/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="other" />, mountNode);
```

## API

由于图标字体本质上还是文字，可以使用 `style` 和 `className` 设置图标的大小和颜色。

```jsx
<Icon type="question" style={{ fontSize: 16, color: '#08c' }} />
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 fontSize 和 color | object | - |
| type | 图标类型 | string | - |
