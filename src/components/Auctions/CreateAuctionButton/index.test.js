import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import { uuid } from 'casual-browserify'
import IconButton from '@material-ui/core/IconButton'
import CreateAuctionButton from './index'

describe('CreateAuctionButton', () => {
  let wrapper
  let shallow
  let history
  beforeEach(() => {
    history = { push: jest.fn() }
    shallow = createShallow()
    wrapper = shallow(<CreateAuctionButton.WrappedComponent history={history} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    history = null
    localStorage.clear()
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('navigates to /auctions/new when button clicked and user is not logged in', () => {
    localStorage.setItem('access_token', uuid)
    const IconButtonNode = wrapper.find(IconButton)
    IconButtonNode.simulate('click')
    expect(history.push).toHaveBeenCalledWith('/auctions/new')
  })
  test('InfoSnackBar opens when button clicked and user is not logged in', () => {
    const IconButtonNode = wrapper.find(IconButton)
    IconButtonNode.simulate('click')
    expect(wrapper.find('Info')).toHaveProp('isOpen', true)
  })
})
