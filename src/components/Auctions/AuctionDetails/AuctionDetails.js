import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Tournament from '../../Tournament'

class AuctionDetails extends Component {
  render() {
    const { name, owner, createdAt } = this.props
    return (
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
  }
}

AuctionDetails.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default AuctionDetails
