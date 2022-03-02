import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hello from "./hello";
import MouseTranks from "./hookDemo";
import Button, { ButtonSize, ButtonType } from "./components/Button";

// import { ButtonType } from "./components/Button";

const APP: React.FC = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul>
      <Button btnType={ButtonType.Danger} disabled>传给button</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        link组件
      </Button>
      {/* <button
        onClick={() => {
          isShow ? setIsShow(false) : setIsShow(true);
        }}
      >
        展示MouseTranks
      </button>
      <Hello message="sada" />
      {isShow && <MouseTranks></MouseTranks>} */}
    </div>
  );
};

export default APP;

// // show.ts
// // 操作 DOM 元素，把 content 显示到网页上
// // 通过 ES6 模块规范导出 show 函数
// // 给 show 函数增加类型检查
// // import "./index.scss";

// export default function APP(content: string) {
//   window.document.getElementById("app").innerText = "Hello,TS" + content;
// }
