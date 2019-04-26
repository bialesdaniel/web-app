import React from 'react'
import { storiesOf } from '@storybook/react'
import casual from 'casual-browserify'
import AuctionDetailsHeader from './index'

storiesOf('Auctions|AuctionDetailsHeader', module).add('default', () => (
  <AuctionDetailsHeader name={casual.title} owner={casual.username} />
))
