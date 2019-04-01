import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import IconButton from '@material-ui/core/IconButton'
import NavMenu from './index'
import NavMenuItem from '../NavMenuItem'

describe('NavMenu', () => {
  let wrapper
  let shallow
  let toggleMenuMock
  beforeEach(() => {
    toggleMenuMock = jest.fn()
    shallow = createShallow({ dive: true })
    wrapper = shallow(
      <NavMenu open={true} isLoggedIn={true} toggleMenu={toggleMenuMock} isAuthenticated={() => false} />
    )
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    toggleMenuMock = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('there are 4 NavMenuItems', () => {
    expect(wrapper.find(NavMenuItem)).toHaveLength(4)
  })
  test('Back button calls toggleMenu', () => {
    const IconButtonNode = wrapper.find(IconButton)
    IconButtonNode.simulate('click')
    expect(toggleMenuMock).toHaveBeenCalled()
  })
  test('Home NavMenuItem calls toggleMenu', () => {
    const HomeMenuItemNode = wrapper.findWhere(node => node.type() === NavMenuItem && node.prop('label') === 'Home')
    HomeMenuItemNode.simulate('click')
    expect(toggleMenuMock).toHaveBeenCalled()
  })
  test('Create Auction NavMenuItem calls toggleMenu', () => {
    const CreateAuctionMenuItemNode = wrapper.findWhere(
      node => node.type() === NavMenuItem && node.prop('label') === 'Create Auction'
    )
    CreateAuctionMenuItemNode.simulate('click')
    expect(toggleMenuMock).toHaveBeenCalled()
  })
  test('Rules NavMenuItem calls toggleMenu', () => {
    const RulesMenuItemNode = wrapper.findWhere(node => node.type() === NavMenuItem && node.prop('label') === 'Rules')
    RulesMenuItemNode.simulate('click')
    expect(toggleMenuMock).toHaveBeenCalled()
  })
  test('About NavMenuItem calls toggleMenu', () => {
    const AboutMenuItemNode = wrapper.findWhere(node => node.type() === NavMenuItem && node.prop('label') === 'About')
    AboutMenuItemNode.simulate('click')
    expect(toggleMenuMock).toHaveBeenCalled()
  })
})
