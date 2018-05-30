import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { title, username, moment } from 'casual-browserify'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../../test/mock-data/get-tournament'
import AuctionDetails from './AuctionDetails'

storiesOf('AuctionDetails', module).add('default', () => {
  const date = moment.toISOString()
  return (
    <MockedProvider
      mocks={[
        {
          request: { query: GET_TOURNAMENT_QUERY, variables: { year: new Date(date).getYear() } },
          result: { data: MockTournament }
        }
      ]}
    >
      <AuctionDetails name={title} owner={username} createdAt={date} />
    </MockedProvider>
  )
})
