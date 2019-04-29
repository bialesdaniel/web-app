import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Content from './Content'

describe('AuctionDetailsContent', () => {
  let wrapper
  let shallow
  let props
  beforeEach(() => {
    props = {
      createdAt: casual.moment.toISOString(),
      isMember: true,
      updateIsMember: jest.fn()
    }
    shallow = createShallow()
    wrapper = shallow(<Content {...props} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    props = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains Tournament if isMember', () => {
    expect(wrapper.find('TournamentGQL')).toExist()
  })
  test('contains JoinAuction if not isMember', () => {
    wrapper.unmount()
    props.isMember = false
    wrapper = shallow(<Content {...props} />)
    expect(wrapper.find('JoinAuctionGQL')).toExist()
  })
})
