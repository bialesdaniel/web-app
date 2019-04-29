import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import CircularProgress from '@material-ui/core/CircularProgress'
import ListItemText from '@material-ui/core/ListItemText'
import AuctionsList from './index'
import AuctionListItem from '../AuctionsListItem'
import MockAuction from '../../../../test/mock-data/Auction'

describe('AuctionsList', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow({ dive: true })
    wrapper = shallow(<AuctionsList />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains a circular progress bar if loading', () => {
    wrapper.setProps({ loading: true })
    expect(wrapper.find(CircularProgress)).toExist()
  })
  test('display message if no auctions in list', () => {
    expect(wrapper.find(ListItemText)).toHaveProp('primary', 'No auctions available')
  })
  test('ListItems are created per auction', () => {
    const auctions = Array.from(new Array(casual.integer(1, 10)), () => new MockAuction())
    wrapper.setProps({ auctions })
    expect(wrapper.find(AuctionListItem)).toHaveLength(auctions.length)
  })
  test('network error', () => {
    const error = { networkError: 'error', graphQLErrors: [], message: 'error' }
    wrapper.setProps({ error })
    expect(wrapper.find(ListItemText)).toHaveProp('primary', 'error')
  })
  test('graphQLErrors', () => {
    expect.assertions(1)
    const error = { graphQLErrors: [{ message: 'error' }, { message: 'error' }], message: 'error' }
    wrapper.setProps({ error })
    expect(wrapper.find(ListItemText)).toHaveProp('primary', 'error')
  })
})
