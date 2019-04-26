import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withRouter } from 'react-router'
import { getUserErrorMessage } from '../../../../utils'

const styles = () => ({
  buttonProgress: {
    marginTop: -10,
    marginLeft: -20,
    top: 12,
    right: 28,
    position: 'relative',
    minWidth: 0
  }
})

const JoinAuction = ({ classes, error, history, loading, onSubmit }) => {
  const handleSubmit = async () => {
    await onSubmit()
  }
  const handleCancel = () => {
    history.goBack()
  }
  const { buttonProgress } = classes
  return (
    <Fragment>
      {error && <Typography variant="subtitle1">{getUserErrorMessage(error.message)}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
        Join
      </Button>
      {loading && <CircularProgress size={32} className={buttonProgress} />}
      <Button onClick={handleCancel}>Cancel</Button>
    </Fragment>
  )
}

JoinAuction.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.object,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(withRouter(JoinAuction))
