import React, { useState } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import BrowserFrame from "../../BrowserFrame";

const Demo = (props) => {
  console.log(props, "props");
  const [codeExpand, setCodeExpand] = useState(false);
  const {
    meta,
    src,
    content,
    preview,
    highlightedCode,
    style,
    highlightedStyle,
    expand,
  } = props;
  console.log(liveDemo, "liveDemo before");
  const liveDemo = preview(React, ReactDOM);
  console.log(liveDemo, "liveDemo");
  // if (liveDemo) {
  //   var liveDemo = meta.iframe ? (
  //     <BrowserFrame>
  //       <iframe src={src} height={meta.iframe} title="demo" />
  //     </BrowserFrame>
  //   ) : (
  //     preview(React, ReactDOM)
  //   );
  // }
  const localizedTitle = meta.title;
  const locale = "zh-CN";
  const localizeIntro = content[locale] || content;
  const introChildren = props.utils.toReactComponent(
    ["div"].concat(localizeIntro)
  );
  const highlightClass = classNames({
    "highlight-wrapper": !codeExpand,
    "highlight-wrapper-expand": codeExpand,
  });

  const handleCodeExpand = () => {
    setCodeExpand(!codeExpand);
  };
  return (
    <section className="code-box">
      <section className="code-box-demo">
        <React.StrictMode>{liveDemo}</React.StrictMode>
        {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
      </section>
      <section className="code-box-meta markdown">
        <div className="code-box-title">
          <a>{localizedTitle}</a>
        </div>
        {introChildren}
        <span className="code-expand-icon">
          <img
            alt="expand code"
            src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
            className={
              codeExpand ? "code-expand-icon-hide" : "code-expand-icon-show"
            }
            onClick={handleCodeExpand}
          />
          <img
            alt="expand code"
            src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
            className={
              codeExpand ? "code-expand-icon-show" : "code-expand-icon-hide"
            }
            onClick={handleCodeExpand}
          />
        </span>
      </section>
      <section className={highlightClass} key="code">
        <div className="highlight">
          {props.utils.toReactComponent(highlightedCode)}
        </div>
        {highlightedStyle ? (
          <div key="style" className="highlight">
            <pre>
              <code
                className="css"
                dangerouslySetInnerHTML={{ __html: highlightedStyle }}
              />
            </pre>
          </div>
        ) : null}
      </section>
    </section>
  );
};

export default Demo;
