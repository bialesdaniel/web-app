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

const BidDialogGQL = ({ currentValue, isOpen, onClose }) => (
  <Mutation mutation={CREATE_BID}>
    {(createBid, { loading }) => {
      return (
        <BidDialog
          onClose={onClose}
          isOpen={isOpen}
          currentValue={currentValue}
          onSubmit={createBid}
          loading={loading}
        />
      )
    }}
  </Mutation>
)

BidDialogGQL.propTypes = {
  currentValue: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
BidDialogGQL.defaultProps = {
  isOpen: false
}

export default BidDialogGQL
