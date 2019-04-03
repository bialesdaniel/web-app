import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import casual from 'casual-browserify'
import { TeamProvider } from '../../context/TeamContext'
import BidDialog from './BidDialog'

storiesOf('Bids|BidDialog', module)
  .add('default', () => (
    <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
      <BidDialog
        isOpen={true}
        onClose={action('close')}
        onSubmit={action('submit')}
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
      />
    </TeamProvider>
  ))
  .add('loading', () => (
    <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
      <BidDialog
        isOpen={true}
        onClose={action('close')}
        onSubmit={action('submit')}
        school={`${casual.city} ${casual.word}`}
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
        teamId={casual.uuid}
        loading={true}
      />
    </TeamProvider>
  ))
  .add('closed', () => (
    <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
      <BidDialog
        isOpen={false}
        onClose={action('close')}
        onSubmit={action('submit')}
        school={`${casual.city} ${casual.word}`}
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
        teamId={casual.uuid}
      />
    </TeamProvider>
  ))
