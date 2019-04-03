import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Team from './Team'
import AuctionContext from '../../context/AuctionContext'
import { TeamProvider } from '../../context/TeamContext'

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

const TeamGQL = ({ id, school, seed }) => {
  const { auctionId } = useContext(AuctionContext)
  return (
    <Query query={GET_HIGHEST_BID} variables={{ auctionId, teamId: id }}>
      {({ error, data }) => {
        if (error && error.message !== 'GraphQL error: No bids')
          return (
            <TeamProvider school={school} seed={seed} teamId={id}>
              <Team school={error.message} />
            </TeamProvider>
          )
        return (
          <TeamProvider school={school} seed={seed} teamId={id}>
            <Team owner={get(data, 'highestBid.user.username')} currentValue={get(data, 'highestBid.amount', 0)} />
          </TeamProvider>
        )
      }}
    </Query>
  )
}

TeamGQL.propTypes = {
  id: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  seed: PropTypes.number.isRequired
}

export default TeamGQL
