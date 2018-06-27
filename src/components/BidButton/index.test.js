import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
//import Button from '@material-ui/core/Button'
import { mockAuthConsumer } from '../../../test/mock-context/AuthConsumer'
import BidButton from './index'

jest.mock('../../context/AuthContext', () => mockAuthConsumer())
describe('BidButton', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(
      <BidButton
        currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
        teamId={casual.uuid}
        school={casual.title}
        auctionId={casual.uuid}
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
  /*FIXME: this test isn't working because to shallow render requires diving into component
  test('onClick sets isDialogOpen to true', () => {
    const ButtonNode = wrapper.find(Button)
    ButtonNode.simulate('click')
    wrapper = wrapper.update()
    expect(wrapper.find('BidDialogGQL')).toHaveProp('isOpen', true)
  })*/
})
