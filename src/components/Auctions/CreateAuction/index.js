import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress'

const CREATE_AUCTION = gql`
  mutation createAuction($name: String!) {
    createAuction(name: $name) {
      id
    }
  }
`

const styles = theme => ({
  root: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
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
  handleCreate = () => {
    this.props.history.replace('/')
  }
  handleError = error => {
    console.log(error)
  }
  render() {
    const { name } = this.state
    const { classes } = this.props
    return (
      <Mutation mutation={CREATE_AUCTION} onCompleted={this.handleCreate} onError={this.handleError}>
        {(createAuction, { loading, error, data }) => (
          <form
            className={classes.root}
            onSubmit={e => {
              e.preventDefault()
              if (name) {
                createAuction({ variables: { name: name } })
              }
            }}
          >
            <Typography align="center" gutterBottom variant="headline">
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
        )}
      </Mutation>
    )
  }
}

CreateAuction.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
}

export default withStyles(styles)(CreateAuction)
