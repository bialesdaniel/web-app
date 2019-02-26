import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import Adapter from 'enzyme-react-adapter-future'
import 'jest-enzyme'
import casual from 'casual-browserify'
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import 'jest-localstorage-mock'
import React from 'react'
import PropTypes from 'prop-types'
import { createMount } from '@material-ui/core/test-utils'
import { createSerializer } from 'enzyme-to-json'
import { addSerializer } from 'jest-specific-snapshot'
import { mockAuthConsumer } from '../test/mock-context/AuthConsumer'

const mockWrapperComponent = props => <div>{props.children}</div>
mockWrapperComponent.propTypes = {
  children: PropTypes.object
}
// Components that break tests
jest.mock('@material-ui/core/Tooltip', () => mockWrapperComponent)
jest.mock('@material-ui/core/SwipeableDrawer', () => mockWrapperComponent)
jest.mock('@material-ui/core/Slide', () => mockWrapperComponent)
jest.mock('./context/AuthContext', () => mockAuthConsumer())

configure({ adapter: new Adapter() })
addSerializer(createSerializer({ mode: 'deep' }))
initStoryshots({
  test: multiSnapshotWithOptions({
    renderer: createMount()
  })
})

beforeEach(() => {
  jest.unmock('@material-ui/core/Tooltip')
  jest.unmock('@material-ui/core/SwipeableDrawer')
  jest.unmock('@material-ui/core/Slide')
  casual.seed(42) // make sure the storyshots don't update because of different random data
})
