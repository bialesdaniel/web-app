import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import MenuItem from '@material-ui/core/MenuItem'
import NavMenu from './index'
import NavMenuItem from '../NavMenuItem'

describe('NavMenu', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(<NavMenu open={true} isLoggedIn={true} toggleMenu={jest.fn()} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('there are 4 NavMenuItems', () => {
    expect(wrapper.find(NavMenuItem)).toHaveLength(4)
  })
  test('Back button calls toggleMenu', () => {
    const MenuItemNode = wrapper.find(MenuItem)
    MenuItemNode.simulate('click')
    expect(wrapper.instance().props.toggleMenu).toHaveBeenCalled()
  })
  test('Home NavMenuItem calls toggleMenu', () => {
    const HomeMenuItemNode = wrapper.findWhere(node => node.type() === NavMenuItem && node.prop('label') === 'Home')
    HomeMenuItemNode.simulate('click')
    expect(wrapper.instance().props.toggleMenu).toHaveBeenCalled()
  })
  test('Create Auction NavMenuItem calls toggleMenu', () => {
    const CreateAuctionMenuItemNode = wrapper.findWhere(
      node => node.type() === NavMenuItem && node.prop('label') === 'Create Auction'
    )
    CreateAuctionMenuItemNode.simulate('click')
    expect(wrapper.instance().props.toggleMenu).toHaveBeenCalled()
  })
  test('Rules NavMenuItem calls toggleMenu', () => {
    const RulesMenuItemNode = wrapper.findWhere(node => node.type() === NavMenuItem && node.prop('label') === 'Rules')
    RulesMenuItemNode.simulate('click')
    expect(wrapper.instance().props.toggleMenu).toHaveBeenCalled()
  })
  test('About NavMenuItem calls toggleMenu', () => {
    const AboutMenuItemNode = wrapper.findWhere(node => node.type() === NavMenuItem && node.prop('label') === 'About')
    AboutMenuItemNode.simulate('click')
    expect(wrapper.instance().props.toggleMenu).toHaveBeenCalled()
  })
  test('clicking protected link changes isMessageOpen in state', () => {
    wrapper.instance().toggleMessage()
    expect(wrapper).toHaveState('isMessageOpen', true)
  })
})
