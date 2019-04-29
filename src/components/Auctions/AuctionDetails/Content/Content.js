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
  createdAt: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
  updateIsMember: PropTypes.func.isRequired
}

export default AuctionDetailsContent
