import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../test/mock-data/get-tournament'
import Tournament from './index'
const date = new Date(casual.moment.toISOString())
storiesOf('Tournament', module).add('gql', () => (
  <MockedProvider
    mocks={[
      {
        request: { query: GET_TOURNAMENT_QUERY, variables: { year: date.getYear() } },
        result: { data: MockTournament }
      }
    ]}
  >
    <Tournament date={date} />
  </MockedProvider>
))
