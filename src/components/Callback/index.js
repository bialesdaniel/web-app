import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const Callback = () => <CircularProgress size="50%" color="secondary" />

Callback.propTypes = {
  classes: PropTypes.object
}

export default Callback
