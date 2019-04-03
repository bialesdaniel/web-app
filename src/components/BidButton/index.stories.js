import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { AuthProvider } from '../../context/AuthContext'
import { TeamProvider } from '../../context/TeamContext'
import BidButton from './index'

storiesOf('Bids|BidButton', module)
  .add('default', () => (
    <MockedProvider>
      <AuthProvider authMethods={{ isAuthenticated: () => true }}>
        <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
          <BidButton currentValue={parseFloat(casual.double(0, 150).toFixed(2))} />
        </TeamProvider>
      </AuthProvider>
    </MockedProvider>
  ))
  .add('disabled', () => (
    <MockedProvider>
      <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
        <BidButton
          currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
          school={`${casual.city} ${casual.word}`}
          teamId={casual.uuid}
        />
      </TeamProvider>
    </MockedProvider>
  ))
