---
order: 0
title: 基本使用
---

## zh-CN

点击按钮上传文件。设置`multiple`后，可以一次上传多个文件。设置`accept`属性定义可选择的文件类型。

## en-US

````jsx
import { Upload } from '../../../../dist';

const props = {
  action: 'https://jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'vah',
  },
  onSuccess: (data, file) => {
    alert('文件上传成功')
  },
  onError: (err, file) => {
    console.log(err)
    alert(err.message)
  }
}

ReactDOM.render(
  <Upload {...props}></Upload>,
  mountNode);
````
