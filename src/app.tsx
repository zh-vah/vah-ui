/*
 * @Author: your name
 * @Date: 2022-02-21 17:18:17
 * @LastEditTime: 2022-04-11 11:47:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\app.tsx
 */
import React, { Component, useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import Button from "./components/Button";
import Menu from "./components/Menu";
import Icon from "./components/Icon";
import Input from "./components/Input";
import AutoComplete from "./components/AutoComplete";
import Col from "./components/Col";
import Row from "./components/Row";
import Progress from "./components/Progress";
import Upload from "./components/Upload";

// import './utils/bind&apply.js'
// import './utils/new.js'
import "./utils/promise.js";

const APP: React.FC = () => {
  // bind是用来改变this指向
  const dataSource = [
    "wangming",
    "liming",
    "zhanghui",
    "lihao",
    "xixi",
    "xiaoyu",
    "airen",
    "abiao",
    "huange",
    "yangyang",
  ];

  const lakersWithNumber = [
    { value: "pope", name: "sd" },
    { value: "pope", number: 1 },
    { value: "caruso", number: 4 },
    { value: "cook", number: 2 },
    { value: "cousins", number: 15 },
    { value: "james", number: 23 },
    { value: "AD", number: 3 },
    { value: "green", number: 14 },
    { value: "howard", number: 39 },
    { value: "kuzma", number: 0 },
  ];

  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter((item, index) => item.value.includes(query));
  // };

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };

  const renderOption = (item) => {
    return (
      <>
        <h6>{item.value}</h6> <p>id: {item.id}</p>
      </>
    );
  };
  const style = { background: "#0092ff", padding: "8px 0" };

  return (
    <div>
      <Upload action='https://jsonplaceholder.typicode.com/posts/' childrenEle={<Icon icon="cloud-upload" size="2x" theme="success" />} accept='.doc'></Upload>
      <Upload action="https://jsonplaceholder.typicode.com/posts/" drag={true} accept='.doc'>
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
      <Progress percent={40} strokeHeight={30} ></Progress>
      <Icon icon="angle-down" theme="primary"/>
      <h1>App</h1>
      {/* <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul> */}
      <Button btnType="danger" disabled size="lg">
        传给button
      </Button>
      <Button btnType="link" href="http://www.baidu.com" name="link" disabled>
        link组件
      </Button>
      <Menu defaultOpenSubmenu={[3]} mode="vertical">
      {/* mode="vertical"*/}
      <Menu.Item>菜单1</Menu.Item>
        <Menu.Item>菜单2</Menu.Item>
        <Menu.Item>菜单3</Menu.Item>
        <Menu.SubMenu title="submenu1">
          <Menu.Item>菜单1</Menu.Item>
          <Menu.Item>菜单2</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="submenu2">
          <Menu.Item>菜单1</Menu.Item>
          <Menu.Item>菜单2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>菜单4</Menu.Item>
      </Menu>
      <Input
        size="sm"
        prepend="sads"
        icon="angle-down"
        onChange={() => console.log("sdfd")}
      ></Input>
      <AutoComplete
        fetchSuggestions={handleFetch}
        renderOption={renderOption}
        placeholder='please input'
      ></AutoComplete>
      <div style={{ width: "400px" }}>
        <Row gutter={16} justify="center">
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div style={style}>col-8</div>
          </Col>
          <Col span={8} offset={8}>
            <div style={style}>col-8</div>
          </Col>
        </Row>
        <Row>
          <Col flex={2}><div style={style}>2 / 5</div></Col>
          <Col flex={3}><div style={style}>3 / 5</div></Col>
        </Row>
      </div>
    </div>
  );
};

export default APP;
