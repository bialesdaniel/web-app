import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import CircularProgress from '@material-ui/core/CircularProgress'
import CreateAuction from './CreateAuction'

describe('CreateAuction', () => {
  let wrapper
  let mount
  let event
  const handleSubmit = jest.fn()
  beforeEach(() => {
    event = { preventDefault: jest.fn() }
    mount = createMount()
    wrapper = mount(<CreateAuction onSubmit={handleSubmit} />)
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    event = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('changing the name input changes the state', () => {
    const event = { target: { value: casual.word } }
    const textFieldNode = wrapper.find('input')
    textFieldNode.simulate('change', event)
    expect(wrapper.find('input')).toHaveValue(event.target.value)
  })
  test('form submit prevents defaults', () => {
    const formNode = wrapper.find('form')
    formNode.simulate('submit', event)
    expect(event.preventDefault).toHaveBeenCalled()
  })
  test('form submit does not call onSubmit if name is null', () => {
    const formNode = wrapper.find('form')
    formNode.simulate('submit', event)
    expect(handleSubmit).not.toHaveBeenCalled()
  })
  test('form submit calls onSubmit if name is provided', () => {
    const event = { target: { value: casual.word } }
    const textFieldNode = wrapper.find('input')
    textFieldNode.simulate('change', event)
    const formNode = wrapper.find('form')
    formNode.simulate('submit', event)
    expect(handleSubmit).toHaveBeenCalled()
  })
  test('loading displays CircularProgress', () => {
    wrapper.setProps({ loading: true })
    const progessNode = wrapper.find(CircularProgress)
    expect(progessNode).toExist()
  })
  test('error displays in the input error message', () => {
    const error = { message: casual.short_description }
    wrapper.setProps({ error })
    const textFieldNode = wrapper.find('TextField')
    expect(textFieldNode).toHaveProp('error', true)
    expect(textFieldNode).toHaveProp('helperText', error.message)
  })
})
