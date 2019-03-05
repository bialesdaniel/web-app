import React from 'react'
import { storiesOf } from '@storybook/react'
import { MockedProvider } from 'react-apollo/test-utils'
import Bracket from './index'
import MockBracket from '../../../test/mock-data/Bracket'
import { createMocksForTournament } from '../../../test/mock-data/get-highest-bid'

storiesOf('Tournaments|Bracket', module).add('default', () => {
  const { name, teams } = new MockBracket()
  return (
    <MockedProvider
      addTypename={false}
      mocks={createMocksForTournament({ mockTournament: { tournament: { brackets: [{ teams }] } } })}
    >
      <Bracket name={name} teams={teams} />
    </MockedProvider>
  )
})
