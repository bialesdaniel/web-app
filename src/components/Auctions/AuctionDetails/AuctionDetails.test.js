import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Typography from '@material-ui/core/Typography'
import AuctionDetails from './AuctionDetails'

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
    shallow = createShallow()
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
  test('contains title', () => {
    const titleNode = wrapper.findWhere(node => node.type() === Typography && node.prop('variant') === 'headline')
    expect(titleNode.children()).toHaveText(props.title)
  })
  test('contains a Tournament', () => {
    expect(wrapper.find('TournamentGQL')).toExist()
  })
  test('Tournament receives createdAt as a prop', () => {
    const tournamentNode = wrapper.find('TournamentGQL')
    expect(tournamentNode).toHaveProp('date', new Date(props.createdAt))
  })
})
