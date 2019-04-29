import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import JoinAuction from './JoinAuction'

describe('JoinAuction', () => {
  let wrapper
  let mount
  let props
  beforeEach(() => {
    props = {
      classes: {
        buttonProgress: ''
      },
      history: {
        goBack: jest.fn()
      },
      onSubmit: jest.fn()
    }
    mount = createMount({ dive: true })
    wrapper = mount(<JoinAuction.WrappedComponent {...props} />)
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    props = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('click Join calls onSubmit', () => {
    const joinButtonNode = wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Join')
    joinButtonNode.simulate('click')
    expect(props.onSubmit).toHaveBeenCalled()
  })
  test('click Cancel calls history.goBack', () => {
    const cancelButtonNode = wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Cancel')
    cancelButtonNode.simulate('click')
    expect(props.history.goBack).toHaveBeenCalled()
  })
  test('error is displayed', () => {
    props.error = { message: 'This is an error' }
    wrapper.unmount()
    wrapper = mount(<JoinAuction.WrappedComponent {...props} />)
    expect(wrapper.find('Typography')).toHaveText(props.error.message)
  })
  test('loading is displayed', () => {
    props.loading = true
    wrapper.unmount()
    wrapper = mount(<JoinAuction.WrappedComponent {...props} />)
    expect(wrapper.find('CircularProgress')).toExist()
  })
})
