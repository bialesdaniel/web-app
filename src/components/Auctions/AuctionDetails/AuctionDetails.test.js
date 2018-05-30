import React from 'react'
import { shallow } from 'enzyme'
import { title, username, moment } from 'casual-browserify'
import Typography from '@material-ui/core/Typography'
import AuctionDetails from './AuctionDetails'
import Tournament from '../../Tournament'

describe('AuctionDetails', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AuctionDetails name={title} owner={username} createdAt={moment.toISOString()} />)
  })
  afterEach(() => {
    wrapper.unmount()
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains title', () => {
    const titleNode = wrapper.findWhere(node => node.type() === Typography && node.prop('variant') === 'headline')
    expect(titleNode).toExist()
    expect(titleNode.children()).toHaveText(wrapper.instance().props.name)
  })
  test('contains a Tournament', () => {
    expect(wrapper.find(Tournament)).toExist()
  })
  test('Tournament receives createdAt as a prop', () => {
    const tournamentNode = wrapper.find(Tournament)
    expect(tournamentNode).toExist()
    expect(tournamentNode).toHaveProp('date', new Date(wrapper.instance().props.createdAt))
  })
})
