import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const AuctionDetailsHeader = ({ name, owner }) => (
  <Fragment>
    <Typography variant="headline" align="center">
      {name}
    </Typography>
    <Typography variant="subheading" align="center">
      by {owner}
    </Typography>
  </Fragment>
)

AuctionDetailsHeader.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired
}

export default AuctionDetailsHeader
