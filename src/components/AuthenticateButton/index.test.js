import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import { mockAuth, mockAuthConsumer } from '../../../test/mock-context/AuthConsumer'
import AuthenticateButton from './index'

jest.mock('../../context/AuthContext', () => mockAuthConsumer())
describe('AuthenticateButton', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(<AuthenticateButton />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    mockAuth.isAuthenticated.mockReturnValue(false)
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('click button when not authenticated calls login', () => {
    wrapper.simulate('click')
    expect(mockAuth.login).toHaveBeenCalled()
  })
  test('click button when authenticated calls logout', () => {
    mockAuth.isAuthenticated.mockReturnValue(true)
    wrapper = shallow(<AuthenticateButton />)
    wrapper.simulate('click')
    expect(mockAuth.logout).toHaveBeenCalled()
  })
})
