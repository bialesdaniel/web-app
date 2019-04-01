import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { mockAuth } from '../../../test/mock-context/AuthConsumer'
import { AuthProvider } from '../../context/AuthContext'
import AuthenticateButton from './index'

describe('AuthenticateButton', () => {
  let wrapper
  let mount
  beforeEach(() => {
    mount = createMount()
    wrapper = mount(
      <AuthProvider authMethods={mockAuth}>
        <AuthenticateButton />
      </AuthProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    mockAuth.isAuthenticated.mockReturnValue(false)
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('click button when not authenticated calls login', () => {
    wrapper.find('LoginSignupButton').simulate('click')
    expect(mockAuth.login).toHaveBeenCalled()
  })
  test('click button when authenticated calls logout', () => {
    mockAuth.isAuthenticated.mockReturnValue(true)
    wrapper.unmount()
    wrapper = mount(
      <AuthProvider authMethods={mockAuth}>
        <AuthenticateButton />
      </AuthProvider>
    )
    wrapper.find('LoginSignupButton').simulate('click')
    expect(mockAuth.logout).toHaveBeenCalled()
  })
})
