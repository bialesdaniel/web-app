import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import AuthenticateButton from './index'

describe('AuthenticateButton', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(<AuthenticateButton login={jest.fn()} logout={jest.fn()} isAuthenticated={false} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('click button when not authenticated calls login', () => {
    wrapper.simulate('click')
    expect(wrapper.instance().props.login).toHaveBeenCalled()
  })
  test('click button when authenticated calls logout', () => {
    wrapper.setProps({ isAuthenticated: true })
    wrapper.simulate('click')
    expect(wrapper.instance().props.logout).toHaveBeenCalled()
  })
})
