import casual from 'casual-browserify'
import gql from 'graphql-tag'
casual.seed(42)
export const MockAuction = {
  auction: {
    __typename: 'Auction',
    id: casual.uuid,
    name: casual.title,
    createdAt: casual.moment.toISOString(),
    owner: {
      __typename: 'User',
      username: casual.username
    }
  }
}

export const GET_AUCTION_QUERY = gql`
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
