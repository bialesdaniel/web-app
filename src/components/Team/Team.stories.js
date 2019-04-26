import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '@material-ui/core/List'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import { TeamProvider } from '../../context/TeamContext'
import Team from './Team'

storiesOf('Tournaments|Team', module)
  .add('default', () => (
    <MockedProvider>
      <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
        <List>
          <Team />
        </List>
      </TeamProvider>
    </MockedProvider>
  ))
  .add('with bid', () => (
    <MockedProvider>
      <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
        <List>
          <Team currentValue={parseFloat(casual.double(0.1, 150).toFixed(2))} owner={casual.username} />
        </List>
      </TeamProvider>
    </MockedProvider>
  ))
