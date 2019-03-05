import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import casual from 'casual-browserify'
import BidDialog from './BidDialog'

storiesOf('Bids|BidDialog', module)
  .add('default', () => (
    <BidDialog
      isOpen={true}
      onClose={action('close')}
      onSubmit={action('submit')}
      school={`${casual.city} ${casual.word}`}
      currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
      auctionId={casual.uuid}
      teamId={casual.uuid}
    />
  ))
  .add('loading', () => (
    <BidDialog
      isOpen={true}
      onClose={action('close')}
      onSubmit={action('submit')}
      school={`${casual.city} ${casual.word}`}
      currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
      auctionId={casual.uuid}
      teamId={casual.uuid}
      loading={true}
    />
  ))
  .add('closed', () => (
    <BidDialog
      isOpen={false}
      onClose={action('close')}
      onSubmit={action('submit')}
      school={`${casual.city} ${casual.word}`}
      currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
      auctionId={casual.uuid}
      teamId={casual.uuid}
    />
  ))
