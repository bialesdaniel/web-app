import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import BidButton from './index'

storiesOf('BidButton', module).add('default', () => (
  <MockedProvider>
    <BidButton.WrappedComponent
      currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
      teamName={`${casual.city} ${casual.word}`}
      teamId={casual.uuid}
      match={{ params: { auctionId: casual.uuid } }}
    />
  </MockedProvider>
))
