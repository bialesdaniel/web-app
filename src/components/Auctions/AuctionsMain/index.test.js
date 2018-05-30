import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import AuctionsMain from './index'

describe('AuctionsMain', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(<AuctionsMain />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
})
