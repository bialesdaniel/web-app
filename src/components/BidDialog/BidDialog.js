import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import CurrencyInputField from '../Inputs/CurrencyInputField'
import AuctionContext from '../../context/AuctionContext'
import TeamContext from '../../context/TeamContext'
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
    top: 7,
    right: 28,
    position: 'relative',
    minWidth: 0
  }
})
function calcMinRaiseAmount(currentValue) {
  return currentValue !== 0 ? roundToHundreths(currentValue * 0.1) : 0.1
}

function calcMinBidAmount(currentValue) {
  return currentValue + calcMinRaiseAmount(currentValue)
}

const BidDialog = ({ currentValue, onClose, onSubmit, classes, isOpen, loading }) => {
  const [amount, setAmount] = useState(calcMinBidAmount(currentValue))
  const [errorMessage, setErrorMessage] = useState('')
  const { auctionId } = useContext(AuctionContext)
  const { school, teamId } = useContext(TeamContext)

  if (currentValue >= amount) {
    setAmount(calcMinBidAmount(currentValue))
  }

  const handleAmountChange = event => {
    if (event.target.value >= calcMinBidAmount(currentValue)) {
      setAmount(roundToHundreths(parseFloat(event.target.value)))
    }
  }
  const handleAmountStep = step => {
    const steppedValue = roundToHundreths(amount + step)
    handleAmountChange({ target: { value: steppedValue } })
  }
  const handleCancel = () => {
    onClose()
    setErrorMessage('')
  }
  const handleSubmit = async () => {
    try {
      await onSubmit({ variables: { amount, auctionId, teamId } })
      await onClose(amount)
    } catch ({ message }) {
      setErrorMessage(message)
    }
  }
  const { root, inputRow, inputLabel, currencyInput, buttonProgress } = classes
  return (
    <Dialog open={isOpen} onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Submit Bid</DialogTitle>
      <DialogContent className={root}>
        <div className={inputRow}>
          <Typography variant="headline" className={inputLabel}>
            {school}
          </Typography>
          <CurrencyInputField
            className={currencyInput}
            id="bid-amount"
            error={Boolean(errorMessage)}
            value={amount}
            onChange={handleAmountChange}
            onIncrease={() => handleAmountStep(0.1)}
            onDecrease={() => handleAmountStep(-0.1)}
          />
        </div>
        <DialogContentText>{errorMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={loading}>
          Submit
        </Button>
        {loading && <CircularProgress size={32} className={buttonProgress} />}
      </DialogActions>
    </Dialog>
  )
}

BidDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  currentValue: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
BidDialog.defaultProps = {
  isOpen: false,
  loading: false
}

export default withStyles(styles)(BidDialog)
