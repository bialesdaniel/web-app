import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import InfoSnackBar, { LOGIN_REQUIRED_MESSAGE } from '../../Messaging/SnackBars/Info'
import { withRouter } from 'react-router'

class CreateAuctionButton extends Component {
  state = {
    isOpen: false
  }

  handleClick = () => {
    if (localStorage.getItem('access_token')) {
      this.props.history.push('/auctions/new')
    } else {
      this.setState({ isOpen: true })
    }
  }
  render() {
    return (
      <div>
        <Tooltip id="tooltip-create-auction" title="Create Auction" placement="left" enterDelay={400}>
          <IconButton aria-label="Create Auction" color="inherit" onClick={this.handleClick}>
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
        <InfoSnackBar
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
          message={LOGIN_REQUIRED_MESSAGE}
        />
      </div>
    )
  }
}

CreateAuctionButton.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(CreateAuctionButton)
