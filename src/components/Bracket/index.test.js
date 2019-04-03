import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Bracket from './index'
import MockBracket from '../../../test/mock-data/Bracket'

describe('Bracket', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    const { name, teams } = new MockBracket()
    shallow = createShallow({ dive: true })
    wrapper = shallow(<Bracket name={name} teams={teams} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains a list of teams', () => {
    expect(wrapper.find('TeamGQL').length).toBeGreaterThan(0)
  })
})
