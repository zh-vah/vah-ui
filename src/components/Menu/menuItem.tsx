/*
 * @Author: your name
 * @Date: 2022-03-04 15:34:29
 * @LastEditTime: 2022-03-14 10:34:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Menu\menuItem.tsx
 */
import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className } = props;
  const context = useContext(MenuContext);
  const classes = classNames("menu-item", className, {
    "is-active": context.index === index,
    "is-disabled": disabled,
  });

  const handClick = (e: React.MouseEvent) => {
    // 防止点击事件冒泡到submenu上
    e.stopPropagation();
    if (!disabled) {
      context.handleClick(index);
    }
  };

  return (
    <li className={classes} onClick={handClick}>
      {props.children}
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;
