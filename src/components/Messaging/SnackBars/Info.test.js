import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import Info, { LOGIN_REQUIRED_MESSAGE } from './Info'

describe('SnackBars - Info', () => {
  let wrapper
  let mount
  beforeEach(() => {
    mount = createMount({ dive: true })
    wrapper = mount(<Info isOpen={true} onClose={jest.fn()} message={LOGIN_REQUIRED_MESSAGE} />)
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('if isOpen is true Snackbar open prop is true', () => {
    expect(wrapper.find('Snackbar')).toHaveProp('open', true)
  })
  test('if isOpen is false Snackbar open prop is false', () => {
    wrapper.setProps({ isOpen: false })
    expect(wrapper.find('Snackbar')).toHaveProp('open', false)
  })
  test('click IconButton calls onClose', () => {
    const IconButtonNode = wrapper.find('IconButton')
    IconButtonNode.simulate('click')
    expect(wrapper.props().onClose).toHaveBeenCalled()
  })
})
