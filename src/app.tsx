/*
 * @Author: your name
 * @Date: 2022-02-21 17:18:17
 * @LastEditTime: 2022-03-14 10:38:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\app.tsx
 */
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "./components/Button";
import Menu, { MenuItem, SubMenu } from "./components/Menu";
import Icon from "./components/Icon";

const APP: React.FC = () => {
  return (
    <div>
      <Icon icon="angle-down" theme="primary" />
      <h1>App</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul>
      <Button btnType="danger" disabled size="lg">
        传给button
      </Button>
      <Button btnType="link" href="http://www.baidu.com" name="link">
        link组件
      </Button>
      <Menu defaultOpenSubmenu={[3]}>
        {/* mode="vertical"*/}
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
        <SubMenu title="submenu1">
          <MenuItem>菜单1</MenuItem>
          <MenuItem>菜单2</MenuItem>
        </SubMenu>
        <SubMenu title="submenu2">
          <MenuItem>菜单1</MenuItem>
          <MenuItem>菜单2</MenuItem>
        </SubMenu>
        <MenuItem>菜单4</MenuItem>
      </Menu>
      <i className="fa-solid fa-user"></i>
    </div>
  );
};

export default APP;
