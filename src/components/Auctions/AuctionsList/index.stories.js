import React from 'react'
import { storiesOf } from '@storybook/react'
import casual from 'casual-browserify'
import AuctionsList from './index'
import MockAuction from '../../../../test/mock-data/Auction'

storiesOf('Auctions|AuctionsList', module)
  .add('default', () => {
    const auctions = Array.from(new Array(casual.integer(1, 10)), () => new MockAuction())
    return <AuctionsList auctions={auctions} />
  })
  .add('loading', () => <AuctionsList loading={true} />)
  .add('no auctions', () => <AuctionsList />)
