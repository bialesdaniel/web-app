import React, { useContext } from 'react'
import { createMount } from '@material-ui/core/test-utils'
import casual from 'casual-browserify'
import AuctionContext, { AuctionProvider } from './AuctionContext.js'

const MockComponent = () => {
  const { auctionId } = useContext(AuctionContext)
  return <div>{auctionId}</div>
}

describe('AuctionContext', () => {
  let wrapper
  let mount
  let auctionId
  beforeEach(() => {
    auctionId = casual.uuid
    mount = createMount()
    wrapper = mount(
      <AuctionProvider auctionId={auctionId}>
        <MockComponent />
      </AuctionProvider>
    )
  })
  afterEach(() => {
    wrapper.unmount()
    mount = null
  })
  test('renders', () => {
    expect(wrapper).toExist()
  })
  test('consuming component has auctionId', () => {
    expect(wrapper.find(MockComponent)).toHaveText(auctionId)
  })
})
