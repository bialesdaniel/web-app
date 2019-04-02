import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'
import AuctionsListItem from '../AuctionsListItem'
import CreateAuctionButton from '../CreateAuctionButton'

const styles = theme => ({
  listHeader: {
    textAlign: 'left',
    backgroundColor: theme.palette.primary.light,
    fontSize: '1.4em'
  },
  emptyListItemText: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }
})

const AuctionsList = ({ auctions, classes, error, loading }) => {
  const errorMessage =
    auctions.length === 0 && !error
      ? 'No auctions available'
      : get(error, 'networkError')
      ? `[NetworkError]: ${error.networkError}`
      : error
      ? JSON.stringify(error.graphQLErrors)
      : '' //TODO: Find a better way to write this / handle error logic
  const { listHeader, emptyListItemText } = classes
  return (
    <List>
      <ListSubheader color="inherit" className={listHeader}>
        <Grid container direction="row" justify="space-between">
          <Grid item>Auctions</Grid>
          <Grid item>
            <CreateAuctionButton />
          </Grid>
        </Grid>
      </ListSubheader>
      <Divider />
      {loading ? (
        <Grid container direction="row" justify="center">
          <CircularProgress />
        </Grid>
      ) : auctions.length > 0 && !error ? (
        auctions.map(auction => (
          <AuctionsListItem key={auction.id} id={auction.id} name={auction.name} owner={auction.owner.username} />
        ))
      ) : (
        <ListItem>
          <ListItemText className={emptyListItemText} primary={errorMessage} />
        </ListItem>
      )}
    </List>
  )
}

AuctionsList.propTypes = {
  auctions: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  classes: PropTypes.object
}

AuctionsList.defaultProps = {
  auctions: []
}

export default withStyles(styles)(AuctionsList)
