import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

class Info extends Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.props.onClose()
  }
  render() {
    const { isOpen, message } = this.props
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        autoHideDuration={5000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={message}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    )
  }
}
export const LOGIN_REQUIRED_MESSAGE = <span id="please-login">Don&apos;t forget to login!</span>

Info.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.oneOf([LOGIN_REQUIRED_MESSAGE])
}

export default Info
