import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import IconButton from '@material-ui/core/IconButton'
import { BrowserRouter } from 'react-router-dom'
import NavMenu from './index'
import NavMenuItem from '../NavMenuItem'
import { AuthProvider } from '../../../context/AuthContext'

describe('NavMenu', () => {
  let wrapper
  let mount
  let toggleMenuMock
  let isAuthenticated
  beforeEach(() => {
    toggleMenuMock = jest.fn()
    isAuthenticated = jest.fn(false)
    mount = createMount()
    wrapper = mount(
      <BrowserRouter>
        <AuthProvider authMethods={{ isAuthenticated }}>
          <NavMenu open={true} toggleMenu={toggleMenuMock} />
        </AuthProvider>
      </BrowserRouter>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    toggleMenuMock = null
    isAuthenticated = null
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
    wrapper.unmount()
    isAuthenticated.mockReturnValue(true)
    wrapper = mount(
      <BrowserRouter>
        <AuthProvider authMethods={{ isAuthenticated }}>
          <NavMenu open={true} toggleMenu={toggleMenuMock} />
        </AuthProvider>
      </BrowserRouter>
    )
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
