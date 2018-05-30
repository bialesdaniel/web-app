import React, { Component } from 'react'
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

class CreateAuctionGQL extends Component {
  handleCreate = data => {
    this.props.history.replace(`/auctions/${data.createAuction.id}`)
  }
  handleError = error => {
    console.log(error)
  }
  render() {
    return (
      <Mutation mutation={CREATE_AUCTION} onCompleted={this.handleCreate} onError={this.handleError}>
        {(createAuction, { loading, error }) => (
          <CreateAuction loading={loading} error={error} onSubmit={createAuction} />
        )}
      </Mutation>
    )
  }
}

CreateAuctionGQL.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
}

export default CreateAuctionGQL
