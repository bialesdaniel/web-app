import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Button from '@material-ui/core/Button'
import BidButton from './index'

describe('BidButton', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(
      <BidButton.WrappedComponent
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
        match={{ params: { auctionId: casual.uuid } }}
        teamId={casual.uuid}
        teamName={casual.title}
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
  test('onClick sets isDialogOpen to true', () => {
    const ButtonNode = wrapper.find(Button)
    ButtonNode.simulate('click')
    expect(wrapper).toHaveState('isDialogOpen', true)
  })
})
