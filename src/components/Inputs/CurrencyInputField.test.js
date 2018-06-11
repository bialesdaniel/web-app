import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Button from '@material-ui/core/Button'
import CurrencyInputField from './CurrencyInputField'

describe('CurrencyInputField', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createMount()
    wrapper = shallow(
      <CurrencyInputField
        value={parseFloat(casual.double(0, 1000).toFixed(2))}
        onChange={jest.fn()}
        onIncrease={jest.fn()}
        onDecrease={jest.fn()}
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
  test('click first button calls onDecrease', () => {
    const ButtonNodes = wrapper.find(Button)
    ButtonNodes.at(0).simulate('click')
    expect(wrapper.instance().props.onDecrease).toHaveBeenCalled()
  })
  test('click second button calls onIncrease', () => {
    const ButtonNodes = wrapper.find(Button)
    ButtonNodes.at(1).simulate('click')
    expect(wrapper.instance().props.onIncrease).toHaveBeenCalled()
  })
})
