import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import AuctionContext from '../../../../context/AuctionContext'
import JoinAuction from './JoinAuction'

const JOIN_AUCTION = gql`
  mutation addPlayer($auctionId: ID!) {
    addPlayer(id: $auctionId) {
      players {
        username
      }
    }
  }
`

const JoinAuctionGQL = ({ updateIsMember }) => {
  const { auctionId } = useContext(AuctionContext)
  return (
    <Mutation mutation={JOIN_AUCTION}>
      {(joinAuction, { error, loading }) => {
        const handleSubmit = async () => {
          await joinAuction({ variables: { auctionId } })
          await updateIsMember()
        }
        return <JoinAuction error={error} loading={loading} onSubmit={handleSubmit} />
      }}
    </Mutation>
  )
}

JoinAuctionGQL.propTypes = {
  updateIsMember: PropTypes.func.isRequired
}

export default JoinAuctionGQL
