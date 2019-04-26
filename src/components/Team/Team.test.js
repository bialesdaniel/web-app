import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import { TeamProvider } from '../../context/TeamContext'
import Team from './Team'

describe('Team', () => {
  let wrapper
  let shallow
  beforeEach(() => {
    shallow = createShallow()
    wrapper = shallow(
      <TeamProvider school={`${casual.city} ${casual.word}`} seed={casual.integer(1, 16)} teamId={casual.uuid}>
        <Team />
      </TeamProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    shallow = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
})
