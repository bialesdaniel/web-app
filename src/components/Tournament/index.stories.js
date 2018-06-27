import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../test/mock-data/get-tournament'
import { createMocksForTournament } from '../../../test/mock-data/get-highest-bid'
import Tournament from './index'

const date = new Date(casual.moment.toISOString())
const year = date.getMonth() <= 3 ? date.getYear() - 1 : date.getYear()
storiesOf('Tournament', module).add('gql', () => (
  <MockedProvider
    mocks={[
      {
        request: { query: GET_TOURNAMENT_QUERY, variables: { year } },
        result: { data: MockTournament }
      },
      ...createMocksForTournament({ mockTournament: MockTournament })
    ]}
  >
    <Tournament date={date} />
  </MockedProvider>
))
