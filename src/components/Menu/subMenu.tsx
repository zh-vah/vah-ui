/*
 * @Author: your name
 * @Date: 2022-03-08 10:19:55
 * @LastEditTime: 2022-03-14 10:12:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Menu\subMenu.tsx
 */

import React, { useState, useContext } from "react";
import classNames from "classnames";

import { MenuContext } from "./menu";
import Icon from "../Icon";
import { array } from "yargs";

export interface SubMenuProps {
  title: string;
  index?: string;
  disabled?: boolean;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { title, index, disabled, className, children } = props;
  const context = useContext(MenuContext);
  let isOpen = false
  if(context.defaultOpenSubmenu instanceof Array){
    isOpen = context.defaultOpenSubmenu?.includes(Number(props.index[0]))
  }else {
    isOpen = context.defaultOpenSubmenu
  }
  const [menuOpened, setMenuOpened] = useState(
    context.mode === "vertical" && isOpen
  );
  const [iconChanged, setIconChanged] = useState(menuOpened)

  const classes = classNames("menu-item submenu-item", className, {
    "is-horizontal": context.mode === "horizontal",
    "is-vertical": context.mode === "vertical",
  });

  const iconClasses = classNames("arrow-icon", {
    "icon-arrow-transform": iconChanged,
  });
  
  let timer;
  const changeOpend = (e: React.MouseEvent, isOpened: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => setMenuOpened(isOpened), 250);
  };

  // 设置鼠标进入、离开监听事件
  const moveEvents = {
    onMouseLeave: (e: React.MouseEvent) => {
      changeOpend(e, false);
    },
    onMouseEnter: (e: React.MouseEvent) => {
      changeOpend(e, true);
    },
  };

  // 设置点击监听事件
  const clickEvents = {
    onClick: (e: React.MouseEvent) => {
      if (!disabled) {
        context.handleClick(index);
      }
      setMenuOpened(!menuOpened);
      setIconChanged(!iconChanged);
    },
  };

  const subMenuProps = context.mode === "vertical" ? clickEvents : moveEvents;
  const menuItemProps = context.mode === "vertical" ? {} : moveEvents;

  // 判断渲染子元素
  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", {
      "menu-opened": menuOpened,
    });

    const receivedChildren = React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<SubMenuProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: props.index[0] + (index + 1),
        });
      } else {
        console.error("warning: Menu has a child which is not a MenuItem");
      }
    });
    return (
      <ul className={subMenuClasses} {...menuItemProps}>
        {receivedChildren}
      </ul>
    );
  };

  return (
    <li className={classes} {...subMenuProps}>
      <Icon icon="angle-down" className={iconClasses} />
      <h4 className="submenu-title">{title}</h4>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
