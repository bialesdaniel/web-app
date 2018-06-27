import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import List from '@material-ui/core/List'
import { GET_HIGHEST_BID_QUERY, MockBid } from '../../../test/mock-data/get-highest-bid'
import Team from './index'

storiesOf('Team', module).add('gql', () => {
  const teamId = casual.uuid
  const auctionId = casual.uuid
  return (
    <MockedProvider
      mocks={[
        {
          request: { query: GET_HIGHEST_BID_QUERY, variables: { auctionId, teamId } },
          result: { data: MockBid }
        }
      ]}
    >
      <List>
        <Team auctionId={auctionId} id={teamId} school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} />
      </List>
    </MockedProvider>
  )
})
