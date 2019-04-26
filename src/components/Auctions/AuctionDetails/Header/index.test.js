import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Typography from '@material-ui/core/Typography'
import AuctionDetailsHeader from './index'

describe('AuctionDetailsHeader', () => {
  let wrapper
  let shallow
  let props
  beforeEach(() => {
    props = {
      name: casual.title,
      owner: casual.username
    }
    shallow = createShallow()
    wrapper = shallow(<AuctionDetailsHeader {...props} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
    props = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains title', () => {
    const titleNode = wrapper.findWhere(node => node.type() === Typography && node.prop('variant') === 'headline')
    expect(titleNode.children()).toHaveText(props.title)
  })
  test('contains username', () => {
    const titleNode = wrapper.findWhere(node => node.type() === Typography && node.prop('variant') === 'subheading')
    expect(titleNode.childAt(1)).toIncludeText(props.owner)
  })
})
