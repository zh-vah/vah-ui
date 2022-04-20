/*
 * @Author: your name
 * @Date: 2022-03-04 15:08:34
 * @LastEditTime: 2022-03-04 15:08:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack-test\src\components\Menu\index.tsx
 */
import {FC} from 'react'
import Menu, {MenuProps} from "./menu";
import MenuItem, {MenuItemProps} from "./menuItem";
import SubMenu, {SubMenuProps} from './subMenu'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent
TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu
