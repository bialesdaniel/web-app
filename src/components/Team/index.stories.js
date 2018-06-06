import React from 'react'
import { storiesOf } from '@storybook/react'
import { city, word, integer, uuid } from 'casual-browserify'
import Team from './index'

storiesOf('Team', module).add('default', () => <Team school={`${city} ${word}`} seed={integer(1, 16)} id={uuid} />)
