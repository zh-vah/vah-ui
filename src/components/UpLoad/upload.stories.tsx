/*
 * @Author: your name
 * @Date: 2022-04-20 09:21:46
 * @LastEditTime: 2022-04-28 19:48:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vah-ui/src/components/UpLoad/upload.stories.tsx
 */
import React  from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'
//import Button from '../Button/button'
import Icon from '../Icon/icon'
// const defaultFileList: UploadFile[] = [
//   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
//   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
//   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
// ]
// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024) > 50) {
//     alert('file too big')
//     return false;
//   }
//   return true;
// }
// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }
const SimpleUpload = () => {
  const checkFileSize = (file: File) => {
    if(Math.round(file.size / 1024) > 100){
      alert('file too big')
      return false
    }
    return true
  }

  const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.docx', {type: file.type})
    return Promise.resolve(newFile)
  }

  return (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts/"
      onProgress={(percentage, file) => { console.log(percentage, 'percentage');
      }}
      // onSuccess={action('success')}
      // onChange={action('changed')}
      // beforeUpload={filePromise}
      headers={{"name": "vah"}}
      name='filename'
      data={{token: 'token'}}
      accept='.txt'
      multiple={true}
      childrenEle={<span>上传</span>}
      drag={true}
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/>
      <p>Drag file over to upload</p>
    </Upload>
  )
}

storiesOf('Upload component', module)
  .add('Upload', SimpleUpload)