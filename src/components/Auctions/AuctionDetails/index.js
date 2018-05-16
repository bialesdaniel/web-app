import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Tournament from '../../Tournament'

const GET_AUCTION = gql`
  query auction($auctionId: ID!) {
    auction(id: $auctionId) {
      id
      name
      createdAt
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
            <Grid container alignItems="stretch" direction="column" justify="flex-start">
              <Grid item>
                <Typography variant="headline">{data.auction.name}</Typography>
                <Typography variant="subheading" align="center">
                  by {data.auction.owner.username}
                </Typography>
              </Grid>
              <Grid item>
                <Tournament year={new Date(data.auction.createdAt)} />
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
