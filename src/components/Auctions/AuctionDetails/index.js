import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import AuctionDetails from './AuctionDetails'

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

class AuctionDetailsGQL extends Component {
  render() {
    const { auctionId } = this.props.match.params
    return (
      <Query query={GET_AUCTION} variables={{ auctionId }}>
        {({ loading, error, data }) => {
          if (loading) return <CircularProgress size="40%" />
          if (error) return <Typography variant="subheading">{error}</Typography>
          const { auction } = data
          return <AuctionDetails name={auction.name} createdAt={auction.createdAt} owner={auction.owner.username} />
        }}
      </Query>
    )
  }
}

AuctionDetailsGQL.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object
}

export default AuctionDetailsGQL
