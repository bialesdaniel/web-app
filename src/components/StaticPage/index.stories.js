import React from 'react'
import { storiesOf } from '@storybook/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import casual from 'casual-browserify'
import StaticPage from './index'

storiesOf('StaticPage', module).add('default', () => {
  const mock = new MockAdapter(axios)
  const readmeURL = casual.url
  mock.onGet(readmeURL).reply(200, '# This is Markdown\n* it\n- has\n+ ~~many~~\n- uses\n\n*thanks*')
  return <StaticPage markdownSource={readmeURL} />
})
