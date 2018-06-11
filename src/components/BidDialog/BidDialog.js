import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import CurrencyInputField from '../Inputs/CurrencyInputField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { roundToHundreths } from '../../utils'

const styles = theme => ({
  root: {
    flex: 'none'
  },
  inputRow: {
    display: 'flex'
  },
  currencyInput: {
    maxWidth: '130px'
  },
  inputLabel: {
    paddingRight: theme.spacing.unit * 4,
    flex: 1
  },
  buttonProgress: {
    marginTop: -12,
    marginLeft: -24,
    top: 5,
    right: 34,
    position: 'relative',
    minWidth: 0
  }
})

class BidDialog extends Component {
  calcMinRaiseAmount = currentValue => {
    return roundToHundreths(currentValue * 0.1)
  }
  calcMinBidAmount = currentValue => {
    return currentValue + this.calcMinRaiseAmount(currentValue)
  }
  state = {
    amount: this.calcMinBidAmount(this.props.currentValue),
    errorMessage: ''
  }
  handleAmountChange = e => {
    if (e.target.value >= this.calcMinBidAmount(this.props.currentValue)) {
      this.setState({ amount: roundToHundreths(parseFloat(e.target.value)), errorMessage: '' })
    }
  }
  handleAmountStep = step => {
    const steppedValue = roundToHundreths(this.state.amount + step)
    this.handleAmountChange({ target: { value: steppedValue } })
  }
  handleClose = () => {
    this.props.onClose()
    this.setState({ errorMessage: '' })
  }
  handleSubmit = async () => {
    const { amount } = this.state
    const { auctionId, teamId } = this.props
    try {
      await this.props.onSubmit({ variables: { amount, auctionId, teamId } })
      this.props.onClose()
    } catch ({ message }) {
      this.setState({ errorMessage: message })
    }
  }
  render() {
    const { amount, errorMessage } = this.state
    const { classes, teamName, isOpen, loading } = this.props
    return (
      <Dialog open={isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Submit Bid</DialogTitle>
        <DialogContent className={classes.root}>
          <div className={classes.inputRow}>
            <Typography variant="headline" className={classes.inputLabel}>
              {teamName}
            </Typography>
            <CurrencyInputField
              className={classes.currencyInput}
              id="bid-amount"
              error={Boolean(errorMessage)}
              value={amount}
              onChange={this.handleAmountChange}
              onIncrease={() => this.handleAmountStep(0.1)}
              onDecrease={() => this.handleAmountStep(-0.1)}
            />
          </div>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary" disabled={loading}>
            Submit
          </Button>
          {loading && <CircularProgress size={32} className={classes.buttonProgress} />}
        </DialogActions>
      </Dialog>
    )
  }
}

BidDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  auctionId: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  teamId: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired
}
BidDialog.defaultProps = {
  isOpen: false,
  loading: false
}

export default withStyles(styles)(BidDialog)
