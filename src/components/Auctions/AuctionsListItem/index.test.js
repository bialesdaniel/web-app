import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import AuctionListItem from './index'

describe('AuctionListItem', () => {
  let wrapper
  let shallow
  let historyMock
  let auctionId
  beforeEach(() => {
    auctionId = casual.uuid
    historyMock = { push: jest.fn() }
    shallow = createShallow({ dive: true })
    wrapper = shallow(
      <AuctionListItem.WrappedComponent
        name={casual.title}
        owner={casual.username}
        id={auctionId}
        history={historyMock}
      />
    )
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    historyMock = null
    auctionId = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('onClick push auctions details location to history', () => {
    const auctionListItemNode = wrapper.find('ListItem')
    auctionListItemNode.simulate('click')
    expect(historyMock.push).toHaveBeenCalledWith(`/auctions/${auctionId}`)
  })
})
