import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import Tournament from './Tournament'
import Bracket from '../Bracket'
import MockTournament from '../../../test/mock-data/Tournament'

describe('Tournment', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    const { brackets } = new MockTournament()
    shallow = createShallow({ dive: true })
    wrapper = shallow(<Tournament brackets={brackets} />)
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('contains multiple brackets', () => {
    expect(wrapper.find(Bracket).length).toBeGreaterThan(0)
  })
})
