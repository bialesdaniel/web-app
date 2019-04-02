import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tournament from '../../Tournament'

const AuctionDetails = ({ name, owner, createdAt }) => (
  <Grid container alignItems="stretch" direction="column" justify="flex-start">
    <Grid item>
      <Typography variant="headline" align="center">
        {name}
      </Typography>
      <Typography variant="subheading" align="center">
        by {owner}
      </Typography>
    </Grid>
    <Grid item>
      <Tournament date={new Date(createdAt)} />
    </Grid>
  </Grid>
)

AuctionDetails.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default AuctionDetails
