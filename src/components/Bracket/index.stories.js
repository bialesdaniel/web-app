import React from 'react'
import { storiesOf } from '@storybook/react'
import Bracket from './index'
import MockBracket from '../../../test/mock-data/Bracket'

storiesOf('Bracket', module).add('default', () => {
  const { name, teams } = new MockBracket()
  return <Bracket name={name} teams={teams} />
})
