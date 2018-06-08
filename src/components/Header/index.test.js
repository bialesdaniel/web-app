import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import Header from './index'

describe('Header', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(
      <Header.WrappedComponent
        location={{ pathname: `/${casual.word}` }}
        classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
        login={jest.fn()}
        logout={jest.fn()}
        isAuthenticated={jest.fn(() => false)}
      />
    )
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('title link does not replace', () => {
    expect(wrapper.findWhere(node => node.prop('variant') === 'title').parent()).toHaveProp('replace', false)
  })
  test('title link replaces if pathname is /', () => {
    wrapper.setProps({ location: { pathname: '/' } })
    expect(wrapper.findWhere(node => node.prop('variant') === 'title').parent()).toHaveProp('replace', true)
  })
  test('account icon is displayed if logged in', () => {
    wrapper.setProps({ isAuthenticated: jest.fn(() => true) })
    expect(wrapper.find(AccountCircle)).toExist()
  })
  test('click menu changes isMenuOpen state', () => {
    const MenuIconNode = wrapper.find(MenuIcon)
    MenuIconNode.simulate('click')
    expect(wrapper).toHaveState('isMenuOpen', true)
  })
})
