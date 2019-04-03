import React, { Fragment, useContext } from 'react'
import { createMount } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import TeamContext, { TeamProvider } from './TeamContext.js'

const MockComponent = () => {
  const { school, seed, teamId } = useContext(TeamContext)
  return (
    <Fragment>
      <div>{school}</div>
      <div>{seed}</div>
      <div>{teamId}</div>
    </Fragment>
  )
}

describe('TeamContext', () => {
  let wrapper
  let mount
  let school
  let seed
  let teamId
  beforeEach(() => {
    teamId = casual.uuid
    seed = casual.integer(1, 16)
    school = casual.title
    mount = createMount()
    wrapper = mount(
      <TeamProvider school={school} seed={seed} teamId={teamId}>
        <MockComponent />
      </TeamProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
    school = null
    seed = null
    teamId = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('consuming component has school', () => {
    expect(wrapper.find('div').at(0)).toHaveText(school)
  })
  test('consuming component has seed', () => {
    expect(wrapper.find('div').at(1)).toHaveText(seed.toString())
  })
  test('consuming component has teamId', () => {
    expect(wrapper.find('div').at(2)).toHaveText(teamId)
  })
})
