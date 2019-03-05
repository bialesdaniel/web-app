import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '@material-ui/core/List'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import Team from './Team'

storiesOf('Tournaments|Team', module)
  .add('default', () => (
    <MockedProvider>
      <List>
        <Team school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} id={casual.uuid} />
      </List>
    </MockedProvider>
  ))
  .add('with bid', () => (
    <MockedProvider>
      <List>
        <Team
          school={`${casual.city} ${casual.word}`}
          seed={casual.integer(1, 16)}
          id={casual.uuid}
          currentValue={parseFloat(casual.double(0.1, 150).toFixed(2))}
        />
      </List>
    </MockedProvider>
  ))
