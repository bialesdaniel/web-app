import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import useInput from './input'
import HookWrapper from '../../test/HookWrapper'

describe('useInput', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(<HookWrapper hook={() => useInput('')} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('takes initial value', () => {
    const { hook } = wrapper.find('div').props()
    expect(hook.value).toEqual('')
  })
  test('calling handleChange with event changes the value', () => {
    const event = { target: { value: casual.word } }
    let { hook } = wrapper.find('div').props()
    hook.handleChange(event)
    hook = wrapper.find('div').props().hook
    expect(hook.value).toEqual(event.target.value)
  })
})
