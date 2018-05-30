import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  formRow: {
    paddingBottom: theme.spacing.unit
  },
  formInput: {
    maxWidth: '500px'
  },
  buttonProgress: {
    marginTop: -12,
    marginLeft: -24,
    top: 10,
    right: 34,
    position: 'relative'
  }
})

class CreateAuction extends Component {
  state = {
    name: ''
  }
  handleFieldChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }
  render() {
    const { name } = this.state
    const { classes, loading, error, onSubmit } = this.props
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          if (name) {
            onSubmit({ variables: { name: name } })
          }
        }}
      >
        <Typography align="inherit" gutterBottom variant="headline">
          Create Auction
        </Typography>
        <div className={classes.formRow}>
          <TextField
            id="name"
            label="Name"
            fullWidth
            value={name}
            className={classes.formInput}
            error={Boolean(error)}
            helperText={error ? error.message : ''}
            required
            onChange={this.handleFieldChange('name')}
          />
        </div>
        <Button variant="raised" color="primary" type="submit" disabled={loading}>
          Create
        </Button>
        {loading && <CircularProgress size={32} className={classes.buttonProgress} />}
      </form>
    )
  }
}

CreateAuction.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(CreateAuction)
