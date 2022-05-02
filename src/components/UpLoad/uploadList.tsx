/*
 * @Author: your name
 * @Date: 2022-04-23 21:51:57
 * @LastEditTime: 2022-04-24 10:49:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vah-ui/src/components/UpLoad/uploadList.tsx
 */
import React, { FC } from 'react'
import { UploadFile } from './upload'
import Icon from '../Icon/icon'
import Progress from '../Progress/progress'
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
    <ul className="viking-upload-list">
      {fileList.map(item => {
        return (
          <li className="viking-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
              {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => { onRemove(item)}}/>
            </span>
            {item.status === 'uploading' && 
              <Progress 
                percent={item.percent || 0}
              />
            }
          </li>
        )
      })}
    </ul>
  )

}

export default UploadList;