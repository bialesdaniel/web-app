import React from 'react'
import { storiesOf } from '@storybook/react'
import { title, username, uuid } from 'casual-browserify'
import AuctionsListItem from './index'

storiesOf('AuctionsListItem', module).add('default', () => <AuctionsListItem name={title} owner={username} id={uuid} />)
