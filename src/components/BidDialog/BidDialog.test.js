import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import { AuctionProvider } from '../../context/AuctionContext'
import BidDialog from './BidDialog'

describe('BidDialog', () => {
  let wrapper
  let mount
  let onClose
  let onSubmit
  let auctionId
  beforeEach(() => {
    onClose = jest.fn()
    onSubmit = jest.fn()
    auctionId = casual.uuid
    mount = createMount()
    wrapper = mount(
      <AuctionProvider auctionId={auctionId}>
        <BidDialog
          isOpen={true}
          onClose={onClose}
          onSubmit={onSubmit}
          school={casual.title}
          currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
          teamId={casual.uuid}
        />
      </AuctionProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    onClose = null
    onSubmit = null
    auctionId = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('if loading buttons are disabled', () => {
    wrapper.unmount()
    wrapper = mount(
      <AuctionProvider auctionId={auctionId}>
        <BidDialog
          isOpen={true}
          onClose={onClose}
          onSubmit={onSubmit}
          school={casual.title}
          currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
          teamId={casual.uuid}
          loading={true}
        />
      </AuctionProvider>
    )
    const CancelButtonNode = wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Cancel')
    const SubmitButtonNode = wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Submit')
    expect(CancelButtonNode).toHaveProp('disabled', true)
    expect(SubmitButtonNode).toHaveProp('disabled', true)
  })
  test('click cancel button calls onClose', () => {
    const CancelButtonNode = wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Cancel')
    CancelButtonNode.simulate('click')
    expect(onClose).toHaveBeenCalled()
  })
  test('click second button calls onSubmit and onClose', async () => {
    const SubmitButtonNode = wrapper.findWhere(node => node.type() === 'button' && node.text() === 'Submit')
    await SubmitButtonNode.simulate('click')
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        variables: { amount: expect.any(Number), auctionId: auctionId, teamId: expect.any(String) }
      })
    )
    expect(onClose).toHaveBeenCalled()
  })
})
