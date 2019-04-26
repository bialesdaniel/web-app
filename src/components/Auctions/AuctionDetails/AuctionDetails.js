import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AuctionDetailsHeader from './Header'
import Content from './Content'

const styles = theme => ({
  content: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }
})

const AuctionDetails = ({ classes, createdAt, name, owner }) => (
  <Grid container wrap="nowrap" alignItems="stretch" direction="column" justify="flex-start">
    <Grid item>
      <AuctionDetailsHeader name={name} owner={owner} />
    </Grid>
    <Grid item className={classes.content}>
      <Content createdAt={createdAt} />
    </Grid>
  </Grid>
)

AuctionDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired
}

export default withStyles(styles)(AuctionDetails)
