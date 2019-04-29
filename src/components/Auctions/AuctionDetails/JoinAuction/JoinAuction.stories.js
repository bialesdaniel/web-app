import React from 'react'
import { storiesOf } from '@storybook/react'
import casual from 'casual-browserify'
import { action } from '@storybook/addon-actions'
import JoinAuction from './JoinAuction'

storiesOf('Auction|JoinAuction', module)
  .add('default', () => <JoinAuction onSubmit={action('onSubmit')} />)
  .add('loading', () => <JoinAuction onSubmit={action('onSubmit')} loading={true} />)
  .add('error', () => <JoinAuction onSubmit={action('onSubmit')} error={{ message: casual.sentence }} />)
