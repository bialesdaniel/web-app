import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const AuctionListItem = ({ history, id, name, owner }) => {
  const handleClick = () => {
    history.push(`/auctions/${id}`)
  }
  return (
    <ListItem onClick={handleClick} button divider>
      <ListItemText primary={name} secondary={`by ${owner}`} />
    </ListItem>
  )
}

AuctionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(AuctionListItem)
