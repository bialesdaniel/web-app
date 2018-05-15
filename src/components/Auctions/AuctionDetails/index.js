import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper'

const GET_AUCTION = gql`
  query auction($auctionId: ID!) {
    auction(id: $auctionId) {
      id
      name
      owner {
        username
      }
    }
  }
`

const styles = theme => ({
  auctionContent: {
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit
  }
})

class AuctionDetails extends Component {
  render() {
    const { auctionId } = this.props.match.params
    const { classes } = this.props
    return (
      <Query query={GET_AUCTION} variables={{ auctionId }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress size="40%" />
          if (error) return <Typography variant="subheading">{error}</Typography>
          return (
            <Grid container alignItems="center" direction="column" justify="flex-start">
              <Grid item>
                <Typography variant="headline">{data.auction.name}</Typography>
                <Typography variant="subheading" align="left">
                  by {data.auction.owner.username}
                </Typography>
              </Grid>
              <Grid item>
                <Paper elevation={2} square={true} className={classes.auctionContent}>
                  <div>This is where content will go</div>
                </Paper>
              </Grid>
            </Grid>
          )
        }}
      </Query>
    )
  }
}

AuctionDetails.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(AuctionDetails)
