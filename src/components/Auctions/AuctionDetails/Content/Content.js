import React from 'react'
import PropTypes from 'prop-types'
import JoinAuction from '../JoinAuction'
import Tournament from '../../../Tournament'

const AuctionDetailsContent = ({ isMember, updateIsMember, createdAt }) => {
  if (!isMember) {
    return <JoinAuction updateIsMember={updateIsMember} />
  } else {
    return <Tournament date={new Date(createdAt)} />
  }
}

AuctionDetailsContent.propTypes = {
  isMember: PropTypes.bool.isRequired,
  updateIsMember: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default AuctionDetailsContent
