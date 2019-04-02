import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import IconButton from '@material-ui/core/IconButton'
import { AuthProvider } from '../../../context/AuthContext'
import CreateAuctionButton from './index'

describe('CreateAuctionButton', () => {
  let wrapper
  let mount
  let history
  beforeEach(() => {
    history = { push: jest.fn() }
    mount = createMount()
    wrapper = mount(
      <AuthProvider authMethods={{ isAuthenticated: () => true }}>
        <CreateAuctionButton.WrappedComponent history={history} />
      </AuthProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    history = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('navigates to /auctions/new when button clicked and user is logged in', () => {
    const IconButtonNode = wrapper.find(IconButton)
    IconButtonNode.simulate('click')
    expect(history.push).toHaveBeenCalledWith('/auctions/new')
  })
  test('InfoSnackBar opens when button clicked and user is not logged in', () => {
    wrapper.unmount()
    wrapper = mount(
      <AuthProvider authMethods={{ isAuthenticated: () => false }}>
        <CreateAuctionButton.WrappedComponent history={history} />
      </AuthProvider>
    )
    const IconButtonNode = wrapper.find(IconButton)
    IconButtonNode.simulate('click')
    expect(wrapper.find('Info')).toHaveProp('isOpen', true)
  })
})
