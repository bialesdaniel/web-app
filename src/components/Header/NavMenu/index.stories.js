import React from 'react'
import { storiesOf } from '@storybook/react'
import NavMenu from './index'
storiesOf('NavMenu', module)
  .add('default', () => <NavMenu open={true} toggleMenu={() => {}} isLoggedIn={false} />)
  .add('logged in', () => <NavMenu open={true} toggleMenu={() => {}} isLoggedIn={true} />)
  .add('closed', () => <NavMenu open={false} toggleMenu={() => {}} isLoggedIn={false} />)
