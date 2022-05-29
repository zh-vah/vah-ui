import React from "react";
import PropTypes from "prop-types";
import collect from "bisheng/collect";
import { Link } from "bisheng/router";
import classNames from "classnames";

import { Row, Col, Menu, Icon } from "../../../../dist";
import Article from "./Article";
import ComponentDoc from "./ComponentDoc";
export const MainContent = (props) => {
  console.log(props, "MainContent props");
  const { pageData } = props;
  const mainContainerClass = classNames("main-container", {
    "main-container-component": true,
  });
  return (
    <div className="main-wrapper">
      <Row>
        <Col className="main-menu" span={4}>
          <Menu
            defaultOpenSubmenu
            defaultIndex="01"
            mode="vertical"
          >
            <Menu.SubMenu title="开发指南">
              <Menu.Item>
                <Link to="/docs/introduce">介绍</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/docs/install">安装</Link>
              </Menu.Item>
              <Menu.Item><Link to="/docs/quickStart">快速开始</Link></Menu.Item>
            </Menu.SubMenu>
            {/* <Menu.Item>
              <Link
                to='/src/components/button-cn/'
              >
                按钮
              </Link>
            </Menu.Item>
            <Menu.Item>菜单2</Menu.Item>
            <Menu.Item>菜单3</Menu.Item> */}
            <Menu.SubMenu title="组件">
              <Menu.Item><Link
                to='/components/Button'
              >
                按钮
              </Link></Menu.Item>
              <Menu.Item>菜单</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="submenu2">
              <Menu.Item>菜单1</Menu.Item>
              <Menu.Item>菜单2</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>菜单4</Menu.Item>
          </Menu>
        </Col>
        <Col className={mainContainerClass} span={20}>
          {/* <ComponentDoc {...props} doc={pageData} /> */}
          {/* <Article {...props} content={pageData} /> */}
          {props.demos ? (
            <ComponentDoc
              {...props}
              doc={pageData}
            />
          ) : (
            <Article {...props} content={pageData} />
          )}
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <section className="prev-next-nav">
            {prev
              ? React.cloneElement(prev.props.children || prev.children[0], {
                  className: "prev-page",
                })
              : null}
            {next
              ? React.cloneElement(next.props.children || next.children[0], {
                  className: "next-page",
                })
              : null}
          </section>
        </Col>
      </Row> */}
    </div>
  );
};

export default collect(async (nextProps) => {
  console.log(nextProps, nextProps.data, '...pageDataPath, demo');
  if (!nextProps.pageData) {
    throw 404;
  }
  const pageData = await nextProps.pageData();
  return { pageData };
})(MainContent);
