import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { action } from '@storybook/addon-actions'
import { ADD_PLAYER_QUERY, MockAddPlayer } from '../../../../../test/mock-data/add-player'
import JoinAuction from './index'

storiesOf('Auction|JoinAuction', module).add('gql', () => (
  <MockedProvider
    addTypename={false}
    mocks={[
      {
        request: { query: ADD_PLAYER_QUERY, variables: { auctionId: '123' } },
        result: { data: MockAddPlayer }
      }
    ]}
  >
    <JoinAuction updateIsMember={action('updateIsMember')} />
  </MockedProvider>
))
