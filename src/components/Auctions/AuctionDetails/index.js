import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import AuctionDetails from './AuctionDetails'
import { AuctionProvider } from '../../../context/AuctionContext'
import { getUserErrorMessage } from '../../../utils'

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

const AuctionDetailsGQL = ({ match }) => {
  const { auctionId } = match.params
  return (
    <Query query={GET_AUCTION} variables={{ auctionId }}>
      {({ loading, error, data }) => {
        if (loading) return <CircularProgress size="40%" />
        if (error) return <Typography variant="subtitle1">{getUserErrorMessage(error.message)}</Typography>
        const { auction } = data
        return (
          <AuctionProvider auctionId={auctionId}>
            <AuctionDetails name={auction.name} createdAt={auction.createdAt} owner={auction.owner.username} />
          </AuctionProvider>
        )
      }}
    </Query>
  )
}

AuctionDetailsGQL.propTypes = {
  match: PropTypes.object.isRequired
}

export default AuctionDetailsGQL
