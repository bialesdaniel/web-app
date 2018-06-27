import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../../test/mock-data/get-tournament'
import { createMocksForTournament } from '../../../../test/mock-data/get-highest-bid'
import AuctionDetails from './AuctionDetails'

storiesOf('AuctionDetails', module).add('default', () => {
  const date = casual.moment.toISOString()
  return (
    <MockedProvider
      mocks={[
        {
          request: { query: GET_TOURNAMENT_QUERY, variables: { year: new Date(date).getYear() } },
          result: { data: MockTournament }
        },
        ...createMocksForTournament({ mockTournament: MockTournament })
      ]}
    >
      <AuctionDetails name={casual.title} owner={casual.username} createdAt={date} />
    </MockedProvider>
  )
})
