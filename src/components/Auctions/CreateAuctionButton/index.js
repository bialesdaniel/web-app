import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
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

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ isOpen: false })
  }
  render() {
    return (
      <div>
        <Tooltip id="tooltip-create-auction" title="Create Auction" placement="left" enterDelay={400}>
          <IconButton aria-label="Create Auction" color="inherit" onClick={this.handleClick}>
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={this.state.isOpen}
          autoHideDuration={5000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="please-login">Don&apos;t forget to login!</span>}
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

CreateAuctionButton.propTypes = {
  history: PropTypes.object
}

export default withRouter(CreateAuctionButton)
