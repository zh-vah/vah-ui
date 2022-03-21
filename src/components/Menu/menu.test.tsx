/*
 * @Author: your name
 * @Date: 2022-03-07 12:00:19
 * @LastEditTime: 2022-03-12 18:37:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Menu\menu.test.tsx
 */

import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
  waitFor
} from "@testing-library/react";

import Menu, { MenuProps } from "./menu";
import SubMenu from "./subMenu";
import MenuItem from "./menuItem";

const testProps: MenuProps = {
  defaultIndex: "00",
  onSelect: jest.fn(),
  className: "test",
};
const testVerProps: MenuProps = {
  defaultIndex: "00",
  mode: "vertical",
};

const generateMenu = (props) => {
  return (
    <Menu {...props}>
      <MenuItem>菜单1</MenuItem>
      <MenuItem>菜单2</MenuItem>
      <MenuItem disabled>菜单3</MenuItem>
      <SubMenu title="submenu1">
        <MenuItem>子菜单1</MenuItem>
        <MenuItem>子菜单2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile =() => {
  const cssFile: string = `
    .viking-submenu {
      display: none
    }
    .viking-submenu.menu-opened {
      display: block
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeELment: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId("test-menu");
    activeELment = wrapper.getByText("菜单1");
    disabledElement = wrapper.getByText("菜单3");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("vah-menu test");
    // scope用来选择当前元素下的
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeELment).toHaveClass("menu-item is-active");
  });
  it("click items should change active and call the right callback", () => {
    const secondItem = wrapper.getByText("菜单2");
    fireEvent.click(secondItem);
    expect(secondItem).toHaveClass("is-active");
    expect(activeELment).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("10");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toBeCalledWith("20");
  });
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    const wrapper = render(generateMenu(testVerProps));
    menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("vah-menu");
  });
  it('should show dropdown items when hover on subMenu', () => {
    expect(wrapper.queryByText('子菜单1')).not.toBeVisible();
    const dropdownElemetnt = wrapper.getByText('submenu1')
    fireEvent.mouseEnter(dropdownElemetnt)
    // await waitFor(() => {
      // expect(wrapper.queryByText('子菜单1')).toBeVisible()
    // })
  })
});
