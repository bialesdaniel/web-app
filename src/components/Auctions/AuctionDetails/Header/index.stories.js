import React from 'react'
import { storiesOf } from '@storybook/react'
import casual from 'casual-browserify'
import AuctionDetailsHeader from './index'

storiesOf('Auction|Header', module).add('default', () => (
  <AuctionDetailsHeader name={casual.title} owner={casual.username} />
))
