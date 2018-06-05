import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Header from './index'

storiesOf('Header', module)
  .add('default', () => (
    <Header
      location={{ pathname: '/' }}
      login={action('login')}
      logout={action('logout')}
      isAuthenticated={() => false}
    />
  ))
  .add('logged in', () => (
    <Header
      location={{ pathname: '/' }}
      login={action('login')}
      logout={action('logout')}
      isAuthenticated={() => true}
    />
  ))
