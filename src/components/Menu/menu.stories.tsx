import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './index'

export const defaultMenu = () => (
  <Menu defaultIndex='0' onSelect={(index) => {action(`clicked ${index} item`)}} >
    <Menu.Item>
      cool lin
    </Menu.Item>
    <Menu.Item disabled>
      disabled
    </Menu.Item> 
    <Menu.Item>
      cool link 2
    </Menu.Item> 
  </Menu>
)

storiesOf('Menu Component', module)
.add('Menu', defaultMenu )