import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import useInput from '../../../hooks/input'

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

const CreateAuction = ({ classes, error, loading, onSubmit }) => {
  const { value: name, handleChange: handleNameChange } = useInput('')
  const { formRow, formInput, buttonProgress } = classes
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (name) {
          onSubmit({ variables: { name } })
        }
      }}
    >
      <Typography align="inherit" gutterBottom variant="headline">
        Create Auction
      </Typography>
      <div className={formRow}>
        <TextField
          id="name"
          label="Name"
          fullWidth
          value={name}
          className={formInput}
          error={Boolean(error)}
          helperText={error ? error.message : ''}
          required
          onChange={handleNameChange}
        />
      </div>
      <Button variant="contained" color="primary" type="submit" disabled={loading}>
        Create
      </Button>
      {loading && <CircularProgress size={32} className={buttonProgress} />}
    </form>
  )
}

CreateAuction.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(CreateAuction)
