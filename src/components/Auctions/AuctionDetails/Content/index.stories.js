import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { IS_MEMBER_QUERY, MockIsMember } from '../../../../../test/mock-data/is-member'
import { GET_TOURNAMENT_QUERY, MockTournament } from '../../../../../test/mock-data/get-tournament'
import { createMocksForTournament } from '../../../../../test/mock-data/get-highest-bid'
import Content from './index'

storiesOf('Auction|Content', module)
  .add('gql - is member', () => {
    const createdAt = casual.moment.toISOString()
    const date = new Date(createdAt)
    const year = date.getMonth() <= 3 ? date.getYear() - 1 : date.getYear()
    return (
      <MockedProvider
        addTypename={false}
        mocks={[
          {
            request: { query: IS_MEMBER_QUERY, variables: { auctionId: '123' } },
            result: { data: MockIsMember }
          },
          {
            request: { query: GET_TOURNAMENT_QUERY, variables: { year } },
            result: { data: MockTournament }
          },
          ...createMocksForTournament({ mockTournament: MockTournament })
        ]}
      >
        <Content createdAt={createdAt} />
      </MockedProvider>
    )
  })
  .add('gql - is not member', () => {
    const createdAt = casual.moment.toISOString()
    const date = new Date(createdAt)
    const year = date.getMonth() <= 3 ? date.getYear() - 1 : date.getYear()
    return (
      <MockedProvider
        addTypename={false}
        mocks={[
          {
            request: { query: IS_MEMBER_QUERY, variables: { auctionId: '123' } },
            result: { data: { isMember: false } }
          },
          {
            request: { query: GET_TOURNAMENT_QUERY, variables: { year } },
            result: { data: MockTournament }
          },
          ...createMocksForTournament({ mockTournament: MockTournament })
        ]}
      >
        <Content createdAt={createdAt} />
      </MockedProvider>
    )
  })
