import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Info, { LOGIN_REQUIRED_MESSAGE } from './Info'

storiesOf('SnackBars', module)
  .add('Info - open', () => <Info isOpen={true} onClose={action('onClose')} message={LOGIN_REQUIRED_MESSAGE} />)
  .add('Info - closed', () => <Info isOpen={false} onClose={action('onClose')} message={LOGIN_REQUIRED_MESSAGE} />)
