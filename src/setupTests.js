import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import casual from 'casual-browserify'
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import 'jest-localstorage-mock'
import React from 'react'
import PropTypes from 'prop-types'

const mockWrapperComponent = props => <div>{props.children}</div>
mockWrapperComponent.propTypes = {
  children: PropTypes.object
}
// Components that break tests
jest.mock('@material-ui/core/Tooltip', () => mockWrapperComponent)
jest.mock('@material-ui/core/SwipeableDrawer', () => mockWrapperComponent)

configure({ adapter: new Adapter() })
initStoryshots({ test: multiSnapshotWithOptions({}) })

beforeEach(() => {
  jest.unmock('@material-ui/core/Tooltip')
  jest.unmock('@material-ui/core/SwipeableDrawer')
  casual.seed(42) // make sure the storyshots don't update because of different random data
})
