import gql from 'graphql-tag'
import casual from 'casual-browserify'

export const MockAddPlayer = {
  addPlayer: {
    players: Array.from(new Array(casual.integer(1, 64)), () => ({ username: casual.username }))
  }
}

export const ADD_PLAYER_QUERY = gql`
  mutation addPlayer($auctionId: ID!) {
    addPlayer(id: $auctionId) {
      players {
        username
      }
    }
  }
`
