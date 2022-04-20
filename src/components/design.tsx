// // 组件设计 伪代码

// <Menu>
//   <Menu.item>首页</Menu.item>
//   <Menu.item>商城</Menu.item>
//   <Menu.item>我的</Menu.item>
// </Menu>;


// interface menuProps {
//   mode: string;
//   activeIndex: number;
//   className: string;
//   Onselect: () => {};
// }

// interface menuItemProps {
//   index: number;
//   disabled: boolean;
//   className: string;
// }

// // submenu组件
// interface SubmenuProps {
//   title: string;
//   index: number;
//   disabled: boolean;
//   className: string;
// }

// <Menu>
//   <Menu.Item>应用</Menu.Item>
//   <Submenu>
//     <Menu.Item>子菜单1</Menu.Item>
//     <Menu.Item>子菜单2</Menu.Item>
//     <Menu.Item>子菜单3</Menu.Item>
//   </Submenu>
// </Menu>


// // input组件
// interface inputProps {
//   size: string,
//   disabled: boolean,
//   icon: string,
//   frontString: string,
// }

// // autocomplete
// interface AutocompleteProps {
//   fetchSuggestions: (str: string) => {value: string}
//   OnSelect: () => void
  
// }

