import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import Typography from '@material-ui/core/Typography'
import AuctionDetails from './AuctionDetails'

describe('AuctionDetails', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(
      <AuctionDetails name={casual.title} owner={casual.username} createdAt={casual.moment.toISOString()} />
    )
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains title', () => {
    const titleNode = wrapper.findWhere(node => node.type() === Typography && node.prop('variant') === 'headline')
    expect(titleNode.children()).toHaveText(wrapper.instance().props.name)
  })
  test('contains a Tournament', () => {
    expect(wrapper.find('TournamentGQL')).toExist()
  })
  test('Tournament receives createdAt as a prop', () => {
    const tournamentNode = wrapper.find('TournamentGQL')
    expect(tournamentNode).toHaveProp('date', new Date(wrapper.instance().props.createdAt))
  })
})
