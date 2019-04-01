import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const AuctionContext = createContext()
const { Provider, Consumer } = AuctionContext

const AuctionProvider = ({ auctionId, children }) => <Provider value={{ auctionId }}>{children}</Provider>

AuctionProvider.propTypes = {
  auctionId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default AuctionContext
export { Consumer as AuctionConsumer }
export { AuctionProvider }
