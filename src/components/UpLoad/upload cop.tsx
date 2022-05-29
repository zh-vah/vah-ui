/*
 * @Author: your name
 * @Date: 2022-04-20 08:48:44
 * @LastEditTime: 2022-05-08 12:42:59
 * @LastEditors: vah 1991249027@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vah-ui/src/components/UpLoad/upload.tsx
 */

import React, {
  ChangeEvent,
  useRef,
  useState,
  ReactElement,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Button from "../Button";
import UploadList from "./uploadList";
import Dragger from "./dragger";

export type UploadFileStatus = "ready" | "uploading" | "success" | "error";
export interface UploadProps {
  /**上传路径 */
  action: string;
  /**文件上传前回调 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**文件上传过程回调 */
  onProgress?: (percentage: number, file: File) => void;
  /**文件上传成功回调 */
  onSuccess?: (data: any, file: File) => void;
  /**文件上传失败回调 */
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  /**问价移除回调 */
  onRemove?: (file: UploadFile) => void;
  /**配置请求头 */
  headers?: object;
  /**发到后台的文件参数名 */
  name?: string;
  /**添加上传所需要的额外参数 */
  data?: object;
  /**可以接收的文件类型 */
  accept?: string;
  /**是否支持多选文件 */
  multiple?: boolean;
  /**自定义触发元素 */
  childrenEle?: React.ReactNode;
  /**是否可拖拽上传 */
  drag?: boolean;
}

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  // 原文件
  raw?: File;
  response?: any;
  error?: any;
}

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    headers,
    name,
    data,
    accept,
    multiple,
    childrenEle,
    drag,
    children,
    onProgress,
    onSuccess,
    onError,
    onChange,
    beforeUpload,
    onRemove,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8081/getVideo").then((res) => {
      let blob = new Blob([res.data], { type: "wav/audio" });
      const url = URL.createObjectURL(blob);
      console.log(url, "urlurl");

      setVideoUrl(url);
    });
  }, []);
  // 更新文件列表
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid == updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  // 上传文件处理
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processFile) => {
            post(processFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };

  //  生成文件切片
  const createFileChunk = (file) => {
    const size = 10 * 1024 * 1024; // 切片大小
    const chunkList = [];
    let cur = 0;

    while (cur < file.size) {
      chunkList.push({ file: file.slice(cur, cur + size) });
      cur += size;
    }
    return chunkList;
  };

  // 文件上传请求
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList([_file, ...fileList]);

    const chunkList = createFileChunk(file);

    const filedata = chunkList.map(({ file }, index) => ({
      chunk: file,
      hash: _file.name + "-" + index, // 文件名 + 数组下标
      index,
    }));
    console.log(filedata, "filedata");
    // 分片文件上传进度数组
    let percentageList = [];
    let totalPercentage
    const requestList = filedata
      .map(({ chunk, hash, index }) => {
        const formData = new FormData();
        // formData.append(name ? name : "file", file);
        formData.append("filename", file.name);
        formData.append("chunk", chunk);
        formData.append("hash", hash);
        console.log(formData, "formData");

        return { formData, hash, index };
      })
      .map(({ formData, hash, index }) => {
        return axios.post(action, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            ...headers,
          },
          onUploadProgress: (e) => {
            let percentage = Math.round((e.loaded * 100) / e.total) || 0;
            percentageList[index] = percentage;
            totalPercentage = percentageList.reduce((toPercentage, percentage) => {
              return toPercentage + percentage
            })/14
            if (totalPercentage <= 100) {
              updateFileList(_file, {
                percent: totalPercentage,
                status: "uploading",
              });
            }
            console.log(totalPercentage, hash);
          },
        });
      });
    console.log(requestList, "requestList");

    Promise.all(requestList)
      .then((res) => {
        updateFileList(_file, { status: "success", response: res });
        console.log(res, "all res");
      })
      .catch((err) => {
        console.log(err, "all err");
      });

    // const formData = new FormData();
    // formData.append(name ? name : "file", file);

    // if (data) {
    //   for (let item in data) {
    //     formData.append(item, data[item]);
    //   }
    // }
    // axios
    //   .post(action, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       ...headers,
    //     },
    //     onUploadProgress: (e) => {
    //       let percentage = Math.round((e.loaded * 100) / e.total) || 0;
    //       if (percentage < 100) {
    //         updateFileList(_file, { percent: percentage, status: "uploading" });
    //         if (onProgress) {
    //           onProgress(percentage, file);
    //         }
    //       }
    //     },
    //   })
    //   .then((resp) => {
    //     updateFileList(_file, { status: "success", response: resp.data });
    //     if (onSuccess) {
    //       onSuccess(resp.data, file);
    //     }
    //     if (onChange) {
    //       onChange(file);
    //     }
    //   })
    //   .catch((err) => {
    //     updateFileList(_file, { status: "error", error: err });
    //     if (onError) {
    //       onError(err, file);
    //     }
    //     if (onChange) {
    //       onChange(file);
    //     }
    //   });
  };

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };
  console.log(videoUrl, "videoUrl");

  return (
    <div>
      {/* {childrenEle ? (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {childrenEle}
        </div>
      ) : (
        <Button btnType="primary" onClick={handleClick}>
          Upload File
        </Button>
      )} */}
      {drag ? (
        <Dragger
          onFile={(files) => {
            uploadFiles(files);
          }}
        >
          {children}
        </Dragger>
      ) : childrenEle ? (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {childrenEle}
        </div>
      ) : (
        <Button btnType="primary" onClick={handleClick}>
          Upload File
        </Button>
      )}
      {/* <Button btnType="primary" onClick={handleClick}>
        Upload File
      </Button> */}
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
      ></input>
      <UploadList fileList={fileList} onRemove={handleRemove} />
      {/* <video controls width="320" height="240">
        <source src={videoUrl} type="video/mp4" />
      </video> */}
    </div>
  );
};
