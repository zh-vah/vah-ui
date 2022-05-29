---
order: 2
title: 自定义文件上传元素
---

## zh-CN

使用childrenEle来自定义用来上传的标签。

## en-US

````jsx
import { Upload, Icon } from '../../../../dist';

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
  <Upload {...props} childrenEle={<Icon icon="cloud-upload" size="2x" theme="success" />}>
  </Upload>,
  mountNode);
````
