import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import Tournament from './Tournament'
import MockTournament from '../../../test/mock-data/Tournament'
import { createMocksForTournament } from '../../../test/mock-data/get-highest-bid'

storiesOf('Tournament', module).add('default', () => {
  const { brackets } = new MockTournament()
  return (
    <MockedProvider
      addTypename={false}
      mocks={createMocksForTournament({ mockTournament: { tournament: { brackets } } })}
    >
      <Tournament brackets={brackets} />
    </MockedProvider>
  )
})
