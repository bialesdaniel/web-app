import gql from 'graphql-tag'

export const MockIsMember = {
  isMember:true
}

export const IS_MEMBER_QUERY = gql`
  query isMember($auctionId: ID!) {
    isMember(id: $auctionId)
  }
`
