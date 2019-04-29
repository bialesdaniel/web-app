import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { action } from '@storybook/addon-actions'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../../../test/mock-data/get-tournament'
import { createMocksForTournament } from '../../../../../test/mock-data/get-highest-bid'
import Content from './Content'

storiesOf('Auction|Content', module)
  .add('is not member', () => {
    const date = casual.moment.toISOString()
    return (
      <MockedProvider>
        <Content createdAt={date} isMember={false} updateIsMember={action('updateIsMember called')} />
      </MockedProvider>
    )
  })
  .add('is member', () => {
    const date = casual.moment.toISOString()
    return (
      <MockedProvider
        addTypename={false}
        mocks={[
          {
            request: { query: GET_TOURNAMENT_QUERY, variables: { year: new Date(date).getYear() } },
            result: { data: MockTournament }
          },
          ...createMocksForTournament({ mockTournament: MockTournament })
        ]}
      >
        <Content createdAt={date} isMember={true} updateIsMember={action('updateIsMember called')} />
      </MockedProvider>
    )
  })
