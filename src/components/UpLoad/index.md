---
category: Components
type: General
title: Upload
subtitle: 文件上传
---

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

## API

文件上传的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) | `string` | - |
| action | 必选参数, 上传的地址 | `string` | - |
| childrenEle | 自定义触发元素 |` React.ReactNode` | `Button` |
| data | 添加上传所需要的额外参数 | `object` | - |
| drag | 是否可拖拽上传 | `boolean` | false |
| headers | 配置请求头 | `object` | - |
| multiple | 是否支持多选文件 | `boolean` | false |
| name | 发到后台的文件参数名 | `string` | 上传文件名 |
| beforeUpload | 文件上传前回调 | `(file: File) => boolean | Promise<File>` | - |
| onProgress | 文件上传过程回调，接收两个参数：上传百分比和当前文件 | `(percentage: number, file: File) => void` | - |
| onSuccess | 文件上传成功回调 | `(data: any, file: File) => void` | - |
| onError | 文件上传失败回调 | `(err: any, file: File) => void` | - |
| onChange | 文件状态改变回调 | `(file: File) => void` | - |
| onRemove | 文件移除回调 | `(file: UploadFile) => void` | - |

### 一些说明
uploadFile类型是在File类型的基础上进行了封装
```js
   {
      uid: 'uid',      // 文件唯一标识
      name: 'xx.png'   // 文件名
      size: '文件大小', 
      status: 'ready', // 文件状态。有ready、uploading、success、error值
      percent: 'xx%', // 文件上传进度
      raw: 'file', // 原文件
      response: {}, // 服务端响应内容
      error: {}, // 错误信息
   }
```