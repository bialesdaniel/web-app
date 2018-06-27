import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import { BrowserRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { mockAuth } from '../../../test/mock-context/AuthConsumer'
import Header from './index'

describe('Header', () => {
  let wrapper
  let mount
  beforeEach(() => {
    mount = createMount()
    /* TODO: waiting to be able to mock context provider or consumer
    wrapper = mount(<AuthProvider authMethods={auth}>
      <BrowserRouter>
      <Header.WrappedComponent
        location={{ pathname: `/${casual.word}` }}
        classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
      />
    </BrowserRouter>
    </AuthProvider>
    )*/
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    mockAuth.isAuthenticated.mockReturnValue(false)
  })
  test('renders', () => {
    wrapper = mount(
      <BrowserRouter>
        <Header.WrappedComponent
          location={{ pathname: `/${casual.word}` }}
          classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
        />
      </BrowserRouter>
    )
    expect(wrapper).toExist()
  })
  test('title link does not replace', () => {
    wrapper = mount(
      <BrowserRouter>
        <Header.WrappedComponent
          location={{ pathname: `/${casual.word}` }}
          classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
        />
      </BrowserRouter>
    )
    expect(
      wrapper
        .findWhere(node => node.props().children === 'The Bid' && node.parent().type() === 'a')
        .parents()
        .at(1)
    ).toHaveProp('replace', false)
  })
  test('title link replaces if pathname is /', () => {
    wrapper = mount(
      <BrowserRouter>
        <Header.WrappedComponent
          location={{ pathname: '/' }}
          classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
        />
      </BrowserRouter>
    )
    expect(
      wrapper
        .findWhere(node => node.props().children === 'The Bid' && node.parent().type() === 'a')
        .parents()
        .at(1)
    ).toHaveProp('replace', true)
  })
  test('account icon is displayed if logged in', () => {
    mockAuth.isAuthenticated.mockReturnValue(true)
    wrapper = mount(
      <BrowserRouter>
        <Header.WrappedComponent
          location={{ pathname: `/${casual.word}` }}
          classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
        />
      </BrowserRouter>
    )
    expect(wrapper.find(AccountCircle)).toExist()
  })
  test('click menu set NavMenu open prop', () => {
    wrapper = mount(
      <BrowserRouter>
        <Header.WrappedComponent
          location={{ pathname: `/${casual.word}` }}
          classes={{ root: casual.uuid, menuButton: casual.uuid, headerLink: casual.uuid }}
        />
      </BrowserRouter>
    )
    const MenuIconNode = wrapper.find(MenuIcon)
    MenuIconNode.simulate('click')
    expect(wrapper.find('NavMenu')).toHaveProp('open', true)
  })
})
