---
order: 1
title: 拖拽上传
---

## zh-CN

将文件拖入指定区域完成上传。

## en-US

````jsx
import { Upload, Icon } from '../../../../dist';

const props = {
  action: 'https://jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'vah',
  },
  drag: true,
  onSuccess: (data, file) => {
    alert('文件上传成功')
  },
  onError: (err, file) => {
    console.log(err)
    alert(err.message)
  }
}

ReactDOM.render(
  <Upload {...props}>
    <Icon icon="upload" size="5x" theme="secondary" />
    <br/>
    <p>Drag file over to upload</p>
  </Upload>,
  mountNode);
````
