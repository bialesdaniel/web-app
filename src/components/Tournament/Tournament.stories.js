import React from 'react'
import { storiesOf } from '@storybook/react'
import Tournament from './Tournament'
import MockTournament from '../../../test/mock-data/Tournament'

storiesOf('Tournament', module).add('default', () => {
  const { brackets } = new MockTournament()
  return <Tournament brackets={brackets} />
})
