import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import AuctionDetails from './AuctionDetails'
import ContentGQL from './Content'

describe('AuctionDetails', () => {
  let wrapper
  let shallow
  let props
  beforeEach(() => {
    props = {
      name: casual.title,
      owner: casual.username,
      createdAt: casual.moment.toISOString()
    }
    shallow = createShallow({ dive: true })
    wrapper = shallow(<AuctionDetails {...props} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    props = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains AuctionDetailsHeader', () => {
    expect(wrapper.find('AuctionDetailsHeader')).toExist()
  })
  test('AuctionDetailsHeader has name prop', () => {
    const auctionDetailsHeaderNode = wrapper.find('AuctionDetailsHeader')
    expect(auctionDetailsHeaderNode).toHaveProp('name', props.name)
  })
  test('AuctionDetailsHeader has owner prop', () => {
    const auctionDetailsHeaderNode = wrapper.find('AuctionDetailsHeader')
    expect(auctionDetailsHeaderNode).toHaveProp('owner', props.owner)
  })
  test('contains a ContentGQL', () => {
    expect(wrapper.find(ContentGQL)).toExist()
  })
  test('Content receives createdAt as a prop', () => {
    const contentNode = wrapper.find(ContentGQL)
    expect(contentNode).toHaveProp('createdAt', props.createdAt)
  })
})
