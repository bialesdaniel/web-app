import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

class Callback extends Component {
  render() {
    return <CircularProgress size="50%" color="secondary" />
  }
}

Callback.propTypes = {
  classes: PropTypes.object
}

export default Callback
