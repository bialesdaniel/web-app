import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

class AuctionListItem extends Component {
  handleClick = () => {
    this.props.history.push(`/auctions/${this.props.id}`)
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
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(AuctionListItem)
