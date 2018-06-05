import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AuthenticateButton from './index'

storiesOf('AuthenticateButton', module)
  .add('not logged in', () => (
    <AuthenticateButton login={action('login')} logout={action('logout')} isAuthenticated={false} />
  ))
  .add('logged in', () => (
    <AuthenticateButton login={action('login')} logout={action('logout')} isAuthenticated={true} />
  ))
