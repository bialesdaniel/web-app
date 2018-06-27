import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { GET_AUCTION_QUERY, MockAuction } from '../../../../test/mock-data/get-auction'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../../test/mock-data/get-tournament'
import { createMocksForTournament } from '../../../../test/mock-data/get-highest-bid'
import AuctionDetails from './index'

storiesOf('AuctionDetails', module).add('gql', () => {
  const auctionId = casual.uuid
  const date = new Date(MockAuction.auction.createdAt)
  const year = date.getMonth() <= 3 ? date.getYear() - 1 : date.getYear()
  return (
    <MockedProvider
      mocks={[
        {
          request: { query: GET_TOURNAMENT_QUERY, variables: { year } },
          result: { data: MockTournament }
        },
        {
          request: { query: GET_AUCTION_QUERY, variables: { auctionId: auctionId } },
          result: { data: MockAuction }
        },
        ...createMocksForTournament({ auctionId, mockTournament: MockTournament })
      ]}
    >
      <AuctionDetails match={{ params: { auctionId: auctionId } }} />
    </MockedProvider>
  )
})
