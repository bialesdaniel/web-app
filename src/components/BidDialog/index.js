import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import BidDialog from './BidDialog'

const CREATE_BID = gql`
  mutation createBid($auctionId: ID!, $teamId: ID!, $amount: Float!) {
    createBid(auctionId: $auctionId, teamId: $teamId, amount: $amount) {
      id
    }
  }
`

const BidDialogGQL = props => (
  <Mutation mutation={CREATE_BID}>
    {(createBid, { loading }) => {
      return <BidDialog {...props} onSubmit={createBid} loading={loading} />
    }}
  </Mutation>
)

BidDialogGQL.propTypes = {
  auctionId: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired
}
BidDialogGQL.defaultProps = {
  isOpen: false
}

export default BidDialogGQL
