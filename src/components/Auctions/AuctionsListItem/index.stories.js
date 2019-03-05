import React from 'react'
import { storiesOf } from '@storybook/react'
import casual from 'casual-browserify'
import AuctionsListItem from './index'

storiesOf('Auctions|AuctionsListItem', module).add('default', () => (
  <AuctionsListItem name={casual.title} owner={casual.username} id={casual.uuid} />
))
