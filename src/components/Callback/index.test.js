import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Callback from './index'

describe('Callback', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(<Callback />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
})
