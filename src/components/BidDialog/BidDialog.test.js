import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Button from '@material-ui/core/Button'
import BidDialog from './BidDialog'

describe('BidDialog', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(
      <BidDialog
        isOpen={true}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
        teamName={casual.title}
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
        auctionId={casual.uuid}
        teamId={casual.uuid}
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
  test('if loading buttons are disabled', () => {
    wrapper.setProps({ loading: true })
    const ButtonNodes = wrapper.find(Button)
    ButtonNodes.forEach(node => {
      expect(node).toHaveProp('disabled', true)
    })
  })
  test('click first button calls onClose', () => {
    const ButtonNodes = wrapper.find(Button)
    ButtonNodes.at(0).simulate('click')
    expect(wrapper.instance().props.onClose).toHaveBeenCalled()
  })
  test('click second button calls onSubmit and onClose', async () => {
    const ButtonNodes = wrapper.find(Button)
    await ButtonNodes.at(1).simulate('click')
    expect(wrapper.instance().props.onSubmit).toBeCalledWith(
      expect.objectContaining({
        variables: { amount: expect.any(Number), auctionId: expect.any(String), teamId: expect.any(String) }
      })
    )
    expect(wrapper.instance().props.onClose).toHaveBeenCalled()
  })
})
