import React from 'react'
import { storiesOf } from '@storybook/react'
import NavMenu from './index'
storiesOf('NavMenu', module)
  .add('not logged in', () => <NavMenu open={true} toggleMenu={() => {}} isAuthenticated={() => false} />)
  .add('logged in', () => <NavMenu open={true} toggleMenu={() => {}} isAuthenticated={() => true} />)
  .add('closed', () => <NavMenu open={false} toggleMenu={() => {}} isAuthenticated={() => false} />)
