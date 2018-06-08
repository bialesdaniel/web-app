import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { GET_AUCTION_QUERY, MockAuction } from '../../../../test/mock-data/get-auction'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../../test/mock-data/get-tournament'
import AuctionDetails from './index'

storiesOf('AuctionDetails', module).add('gql', () => {
  const auctionId = casual.uuid
  const date = new Date(MockAuction.auction.createdAt)
  return (
    <MockedProvider
      mocks={[
        {
          request: { query: GET_TOURNAMENT_QUERY, variables: { year: date.getYear() } },
          result: { data: MockTournament }
        },
        {
          request: { query: GET_AUCTION_QUERY, variables: { auctionId: auctionId } },
          result: { data: MockAuction }
        }
      ]}
    >
      <AuctionDetails match={{ params: { auctionId: auctionId } }} />
    </MockedProvider>
  )
})
