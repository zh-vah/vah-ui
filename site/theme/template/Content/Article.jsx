import React, { Children, cloneElement } from "react";
import { getChildren } from "jsonml.js/lib/utils";

const Article = (props) => {
  console.log(props, "article props");
  const { content } = props;
  const { meta, description } = content;
  const { title, subtitle, filename } = meta;
  return (
    <>
      {/* <article
        className="markdown"
        ref={(node) => {
          this.node = node;
        }}
      > */}
      <h1>
        {title}
        {!subtitle ? null : <span className="subtitle">{subtitle}</span>}
      </h1>
      {props.utils.toReactComponent(
        ["section", { className: "markdown" }].concat(
          getChildren(content.content)
        )
      )}
      {/* </article> */}
    </>
  );
};

export default Article;
