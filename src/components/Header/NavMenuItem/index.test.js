import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import { word, uuid } from 'casual-browserify'
import NavMenuItem from './index'

describe('NavMenuItem', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(
      <NavMenuItem.WrappedComponent
        classes={{ nav: uuid, activeNav: uuid }}
        location={{}}
        to={`/${word}`}
        label={word}
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
  test('onClick function is called when NavMenuItem clicked', () => {
    const handleClick = jest.fn()
    wrapper.setProps({ onClick: handleClick })
    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })
  test('if disabled, onClick is not called', () => {
    const handleClick = jest.fn()
    const event = { preventDefault: jest.fn() }
    wrapper.setProps({ onClick: handleClick, disabled: true })
    wrapper.simulate('click', event)
    expect(handleClick).not.toHaveBeenCalled()
    expect(event.preventDefault).toHaveBeenCalled()
  })
  test('if disabled and onDisabledClick provided, it is called when clicked', () => {
    const handleDisabledClick = jest.fn()
    const event = { preventDefault: jest.fn() }
    wrapper.setProps({ disabled: true, onDisabledClick: handleDisabledClick })
    wrapper.simulate('click', event)
    expect(handleDisabledClick).toHaveBeenCalled()
  })
})
