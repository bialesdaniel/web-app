import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import AuctionsList from '../AuctionsList'

const QUERY_ALL_AUCTIONS = gql`
  query {
    auctions {
      id
      name
      owner {
        username
      }
    }
  }
`

const styles = theme => ({})

class AuctionsMain extends Component {
  render() {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Query query={QUERY_ALL_AUCTIONS}>
            {({ loading, error, data }) => {
              return <AuctionsList loading={loading} error={error} auctions={data.auctions} />
            }}
          </Query>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    )
  }
}

export default withStyles(styles)(AuctionsMain)
