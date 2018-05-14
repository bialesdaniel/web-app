import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import List, {ListItem,ListItemText} from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider'
import { CircularProgress } from 'material-ui/Progress'
import AuctionsListItem from '../AuctionsListItem'
import CreateAuctionButton from '../CreateAuctionButton'

const styles = (theme)=>({
  listHeader:{
    textAlign: 'left',
    backgroundColor: theme.palette.primary.light,
    fontSize:'1.4em'
  },
  emptyListItemText:{
    textAlign:'center',
    paddingTop:theme.spacing.unit*3,
    paddingBottom: theme.spacing.unit*3
  }
})

class AuctionsList extends Component{
  render(){
    const {classes, loading, error, auctions} = this.props
    return (
      <List>
        <ListSubheader color='inherit' className={classes.listHeader}>
          <Grid
            container
            direction='row'
            justify='space-between'>
            <Grid item>Auctions</Grid>
            <Grid item><CreateAuctionButton/></Grid>
          </Grid>
        </ListSubheader>
        <Divider/>
        {loading && <CircularProgress />}
        {(!loading && auctions.length >0) ?
          auctions.map((auction)=>{
            return <AuctionsListItem
              key={auction.id}
              name={auction.name}
              auctionId={auction.id}
              owner={auction.owner.username}
            />
        }):
          <ListItem>
            <ListItemText className={classes.emptyListItemText} primary='No auctions available'/>
          </ListItem>
        }
      </List>
    )
  }
}

AuctionsList.propTypes = {
  auctions: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
}

AuctionsList.defaultProps = {
  auctions: []
}

export default withStyles(styles)(AuctionsList)
