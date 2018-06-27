import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Team from './Team'

const GET_HIGHEST_BID = gql`
  query highestBid($auctionId: ID!, $teamId: ID!) {
    highestBid(auctionId: $auctionId, teamId: $teamId) {
      user {
        username
      }
      amount
    }
  }
`

class TeamGQL extends Component {
  render() {
    const { auctionId, id, seed } = this.props
    return (
      <Query query={GET_HIGHEST_BID} variables={{ auctionId, teamId: id }}>
        {({ error, data }) => {
          if (error && error.message !== 'GraphQL error: No bids')
            return <Team school={error.message} seed={seed} id={id} auctionId={auctionId} />
          return (
            <Team
              {...this.props}
              owner={get(data, 'highestBid.user.username')}
              currentValue={get(data, 'highestBid.amount', 0)}
            />
          )
        }}
      </Query>
    )
  }
}

TeamGQL.propTypes = {
  auctionId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  seed: PropTypes.number.isRequired
}

export default TeamGQL
