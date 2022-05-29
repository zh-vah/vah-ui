/*
 * @Author: your name
 * @Date: 2022-04-24 10:48:30
 * @LastEditTime: 2022-04-27 17:38:53
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vah-ui/src/components/Progress/progress.tsx
 */
import React, { FC } from 'react'
import { Themeprops } from '../Icon/icon'
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  style?: React.CSSProperties;
  theme?: Themeprops;
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    style,
    theme,
  } = props
  return (
    <div className="viking-progress-bar" style={style}>
      <div className="viking-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div 
          className={`viking-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
}
export default Progress;
