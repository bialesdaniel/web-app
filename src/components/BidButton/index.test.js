import React from 'react'
import { createMount } from '@material-ui/core/test-utils'
import { MockedProvider } from 'react-apollo/test-utils'
import casual from 'casual-browserify'
import Button from '@material-ui/core/Button'
import { mockAuth } from '../../../test/mock-context/AuthConsumer'
import { AuthProvider } from '../../context/AuthContext'
import BidButton from './index'

describe('BidButton', () => {
  let wrapper
  let mount
  beforeEach(() => {
    mockAuth.isAuthenticated.mockReturnValue(true)
    mount = createMount()
    wrapper = mount(
      <MockedProvider>
        <AuthProvider authMethods={mockAuth}>
          <BidButton
            currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
            teamId={casual.uuid}
            school={casual.title}
            auctionId={casual.uuid}
          />
        </AuthProvider>
      </MockedProvider>
    )
  })
  afterEach(() => {
    mockAuth.isAuthenticated.mockReturnValue(false)
    wrapper.unmount()
    mount = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('button is disabled when not logged in', () => {
    mockAuth.isAuthenticated.mockReturnValue(false)
    wrapper.unmount()
    wrapper = mount(
      <MockedProvider>
        <AuthProvider authMethods={mockAuth}>
          <BidButton
            currentValue={parseFloat(casual.double(0, 150).toFixed(2))}
            teamId={casual.uuid}
            school={casual.title}
            auctionId={casual.uuid}
          />
        </AuthProvider>
      </MockedProvider>
    )
    const ButtonNode = wrapper.find(Button)
    expect(ButtonNode).toHaveProp('disabled', true)
  })
  test('onClick sets isDialogOpen to true', () => {
    const ButtonNode = wrapper.find(Button)
    ButtonNode.simulate('click')
    expect(wrapper.find('BidDialogGQL')).toHaveProp('isOpen', true)
  })
})
