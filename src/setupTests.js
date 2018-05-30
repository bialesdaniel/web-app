import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import casual from 'casual-browserify'
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'
import 'jest-localstorage-mock'

// Components that break tests
jest.mock('@material-ui/core/Tooltip')

configure({ adapter: new Adapter() })
initStoryshots({ test: multiSnapshotWithOptions({}) })

beforeEach(() => {
  jest.unmock('@material-ui/core/Tooltip')
  casual.seed(42) // make sure the storyshots don't update because of different random data
})
