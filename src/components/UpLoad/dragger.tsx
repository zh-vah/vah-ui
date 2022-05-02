/*
 * @Author: your name
 * @Date: 2022-04-28 10:54:43
 * @LastEditTime: 2022-04-28 19:47:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vah-ui/src/components/UpLoad/dragger.tsx
 */
import React, { FC, useState } from "react";
import classNames from "classnames";

interface DraggerProps {
  onFile: (filr: FileList) => void;
}

export const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classes = classNames("viking-uploader-dragger", {
    "is-dragover": dragOver,
  });
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };
  const handleDrag = (e, over: boolean) => {
    e.preventDefault();
    setDragOver(over);
  };
  return (
    <div
      className={classes}
      onDragOver={(e) => {
        handleDrag(e, true);
      }}
      onDragLeave={(e) => {
        handleDrag(e, false);
      }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger