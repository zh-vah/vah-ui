/*
 * @Author: your name
 * @Date: 2022-03-04 15:08:47
 * @LastEditTime: 2022-03-14 09:25:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Menu\menu.tsx
 */

import React, { useState, createContext } from "react";
import classNames from "classnames";

import { MenuItemProps } from "./menuItem";

type menuMode = "vertical" | "horizontal";

export interface MenuProps {
  /**菜单类型 横向或者纵向 */
  mode?: menuMode;
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: string;
  className?: string;
  children?: React.ReactNode;
  /**默认展开 传true全部展开 传数组指定展开项 */
  defaultOpenSubmenu?: Array<number>;
  /**点击菜单项触发的回掉函数 */
  onSelect?: (parmas) => void;
}

interface IMenuContext {
  index: string;
  handleClick?: (selectedIndex: string) => void;
  mode?: menuMode;
  // 子菜单默认打开
  defaultOpenSubmenu?: Array<number>;
}
// const handleClick = (index: string) => {
//   setActive(index)
//   if (onSelect) {
//     onSelect(index)
//   }
// }
export const MenuContext = createContext<IMenuContext>({ index: "0" });

export const Menu: React.FC<MenuProps> = (props) => {
  const { mode, defaultIndex, className, children, defaultOpenSubmenu, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  // 定义context传值数据
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "00",
    handleClick: handleClick,
    mode,
    defaultOpenSubmenu,
  };

  const classes = classNames("vah-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode === "horizontal",
  });

  // 操作判断子元素渲染
  const rendererChildren = () => {
    // index为字符串 x-x格式
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;

      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index + "0" });
      } else {
        console.error("warning: Menu has a child which is not a MenuItem");
      }
    });
  };

  return (
    <ul className={classes} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {rendererChildren()}
        {/* {children} */}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  mode: "horizontal",
  defaultIndex: "00",
};
export default Menu;
