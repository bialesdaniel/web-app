import React from 'react'
import { storiesOf } from '@storybook/react'
import casual from 'casual-browserify'
import Team from './index'

storiesOf('Team', module).add('default', () => (
  <Team school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} id={casual.uuid} />
))
