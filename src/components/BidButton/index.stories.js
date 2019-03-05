import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import { AuthProvider } from '../../context/AuthContext'
import casual from 'casual-browserify'
import BidButton from './index'

storiesOf('Bids|BidButton', module)
  .add('default', () => (
    <MockedProvider>
      <AuthProvider authMethods={{ isAuthenticated: () => true }}>
        <BidButton
          currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
          school={`${casual.city} ${casual.word}`}
          teamId={casual.uuid}
          auctionId={casual.uuid}
        />
      </AuthProvider>
    </MockedProvider>
  ))
  .add('disabled', () => (
    <MockedProvider>
      <BidButton
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
        school={`${casual.city} ${casual.word}`}
        teamId={casual.uuid}
        auctionId={casual.uuid}
      />
    </MockedProvider>
  ))
