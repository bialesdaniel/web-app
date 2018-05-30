import React from 'react'
import { storiesOf } from '@storybook/react'
import CreateAuction from './CreateAuction'

storiesOf('CreateAuction', module)
  .add('default', () => <CreateAuction onSubmit={() => {}} />)
  .add('loading', () => <CreateAuction onSubmit={() => {}} loading={true} />)
  .add('error', () => <CreateAuction onSubmit={() => {}} error={{ message: 'there was an error' }} />)
