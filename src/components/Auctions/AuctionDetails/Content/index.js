import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import AuctionContext from '../../../../context/AuctionContext'
import { getUserErrorMessage } from '../../../../utils'
import Content from './Content'

const styles = theme => ({
  errorMessage: {
    paddingTop: theme.spacing.unit * 3,
    whiteSpace: 'pre-line'
  }
})

const IS_MEMBER = gql`
  query isMember($auctionId: ID!) {
    isMember(id: $auctionId)
  }
`

const ContentGQL = ({ classes, createdAt }) => {
  const { auctionId } = useContext(AuctionContext)
  const { errorMessage } = classes
  return (
    <Query query={IS_MEMBER} variables={{ auctionId }}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <CircularProgress size="40%" />
        if (error)
          return (
            <Typography className={errorMessage} variant="subtitle1">
              {getUserErrorMessage(error.message)}
            </Typography>
          )
        const { isMember } = data
        return <Content isMember={isMember} createdAt={createdAt} updateIsMember={refetch} />
      }}
    </Query>
  )
}

ContentGQL.propTypes = {
  classes: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default withStyles(styles)(ContentGQL)
