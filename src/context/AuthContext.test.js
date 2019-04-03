import React, { useContext } from 'react'
import { createMount } from '@material-ui/core/test-utils'
import AuthContext, { AuthProvider } from './AuthContext'

const MockComponent = () => {
  const { auth, handleAuthentication } = useContext(AuthContext)
  auth.isAuthenticated()
  handleAuthentication({ location: { hash: 'access_token' } })
  return <div />
}

describe('AuthContext', () => {
  let wrapper
  let mount
  let isAuthenticated
  let handleAuthentication
  beforeEach(() => {
    isAuthenticated = jest.fn()
    handleAuthentication = jest.fn()
    mount = createMount()
    wrapper = mount(
      <AuthProvider authMethods={{ isAuthenticated, handleAuthentication }}>
        <MockComponent />
      </AuthProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    isAuthenticated = null
    handleAuthentication = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('isAuthenticated can be called from consuming component', () => {
    expect(isAuthenticated).toHaveBeenCalled()
  })
  test('handleAuthentication is called when handleAuthentication is called from consuming component', () => {
    expect(handleAuthentication).toHaveBeenCalled()
  })
})
