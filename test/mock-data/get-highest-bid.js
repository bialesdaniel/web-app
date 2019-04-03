import casual from 'casual-browserify'
import gql from 'graphql-tag'
casual.seed(42)
export const MockBid = {
  highestBid: {
    user: {
      username: casual.username
    },
    amount: casual.double(0, 150)
  }
}

export const GET_HIGHEST_BID_QUERY = gql`
  query highestBid($auctionId: ID!, $teamId: ID!) {
    highestBid(auctionId: $auctionId, teamId: $teamId) {
      user {
        username
      }
      amount
    }
  }
`

export function createMocksForTournament({ mockTournament, auctionId = '123' }) {
  const teams = mockTournament.tournament.brackets.reduce((teams, bracket) => teams.concat(bracket.teams), [])
  return teams.map(team => ({
    request: {
      query: GET_HIGHEST_BID_QUERY,
      variables: { auctionId, teamId: team.id }
    },
    result: { data: MockBid }
  }))
}
