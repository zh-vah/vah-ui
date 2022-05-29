import React from "react";
import classNames from "classnames";
import { Row, Col, Icon, Affix, Tooltip } from "../../../../dist";
import { getChildren } from "jsonml.js/lib/utils";
import Demo from "./Demo";

const ComponentDoc = (props) => {
  const { doc, location } = props;
  const { meta, content } = doc;
  const { title, subtitle, filename } = meta;
  const demoChildren = [];
  const rightChildren = [];
  const demos = Object.keys(props.demos).map((key) => props.demos[key]);
  const showedDemo = demos.some((demo) => demo.meta.only)
    ? demos.filter((demo) => demo.meta.only)
    : demos.filter((demo) => demo.preview);
  console.log(demos, 'demos');
  demos
    .sort((a, b) => a.meta.order - b.meta.order)
    .forEach((demoData, index) => {
      const demoElem = (
        <Demo
          {...demoData}
          key={demoData.meta.filename}
          utils={props.utils}
          location={location}
        />
      );
      demoChildren.push(demoElem);

      // if (index % 2 === 0) {
      //   leftChildren.push(demoElem);
      // } else {
      //   rightChildren.push(demoElem);
      // }
    });
  console.log("leftChildren", demoChildren);

  return (
    <>
      <article>
        <section className="markdown">
          <h1>
            {title}
            {!subtitle ? null : <span className="subtitle">{subtitle}</span>}
          </h1>
          {props.utils.toReactComponent(
            ["section", { className: "markdown" }].concat(getChildren(content))
          )}
          {/* <h2>
              <FormattedMessage id="app.component.examples" />
              <Tooltip
                title={<FormattedMessage id={`app.component.examples.${expandAll ? 'collpse' : 'expand'}`} />}
              >
                <Icon
                  type={`${expandAll ? 'appstore' : 'appstore-o'}`}
                  className={expandTriggerClass}
                  onClick={this.handleExpandToggle}
                />
              </Tooltip>
            </h2> */}
        </section>
        <Row gutter={16}>
          <Col span="24" className={"code-boxes-col-1-1"}>
            {demoChildren}
          </Col>
        </Row>
        {props.utils.toReactComponent(
          [
            "section",
            {
              className: "markdown api-container",
            },
          ].concat(getChildren(doc.api || ["placeholder"]))
        )}
      </article>
    </>
  );
};

export default ComponentDoc;
