import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import { city, word, integer, uuid } from 'casual-browserify'
import Team from './index'

describe('Team', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(<Team school={`${city} ${word}`} seed={integer(1, 16)} id={uuid} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
})
