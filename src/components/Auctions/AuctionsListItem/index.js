import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { ListItem, ListItemText } from 'material-ui/List'

class AuctionListItem extends Component {
  handleClick = () => {
    this.props.history.push(`/auctions/${this.props.auctionId}`)
  }
  render() {
    return (
      <ListItem onClick={this.handleClick} button divider>
        <ListItemText primary={this.props.name} secondary={`by ${this.props.owner}`} />
      </ListItem>
    )
  }
}

AuctionListItem.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  auctionId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(AuctionListItem)
