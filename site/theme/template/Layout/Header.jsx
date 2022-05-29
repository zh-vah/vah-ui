import React from "react";
import { Link } from "bisheng/router";
import classNames from "classnames";
import { Row, Col, Input, Button } from "../../../../dist";

const Header = (props) => {
  const headerClassName = classNames({
    clearfix: true,
  });
  return (
    <header id="header" className={headerClassName}>
      <Row>
        <Col span={4}>
          <Link id="logo">
            <h2>Vah-UI</h2>
          </Link>
        </Col>
        <Col span={20}>
          <div id="search-box">
            <Input placeholder="请输入"/>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
