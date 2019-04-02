import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import CreateAuction from './CreateAuction'

const CREATE_AUCTION = gql`
  mutation createAuction($name: String!) {
    createAuction(name: $name) {
      id
    }
  }
`

const CreateAuctionGQL = ({ history }) => {
  const handleCreate = data => history.replace(`/auctions/${data.createAuction.id}`)
  const handleError = error => console.log(error)
  return (
    <Mutation mutation={CREATE_AUCTION} onCompleted={handleCreate} onError={handleError}>
      {(createAuction, { loading, error }) => (
        <CreateAuction loading={loading} error={error} onSubmit={createAuction} />
      )}
    </Mutation>
  )
}

CreateAuctionGQL.propTypes = {
  history: PropTypes.object
}

export default CreateAuctionGQL
