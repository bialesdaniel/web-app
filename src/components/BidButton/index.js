import React, { Fragment, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import AuthContext from '../../context/AuthContext'
import BidDialog from '../BidDialog'
import { roundToHundreths } from '../../utils'

const BidButton = ({ currentValue }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [amount, setAmount] = useState(currentValue)
  const { auth } = useContext(AuthContext)

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
  }
  const handleDialogClose = newAmount => {
    if (newAmount > amount) {
      setAmount(newAmount)
    }
    setIsDialogOpen(false)
  }
  if (currentValue > amount) {
    setAmount(currentValue)
  }

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleDialogOpen} disabled={!auth.isAuthenticated()}>
        ${roundToHundreths(amount)}
      </Button>
      <BidDialog currentValue={amount} isOpen={isDialogOpen} onClose={handleDialogClose} />
    </Fragment>
  )
}

BidButton.propTypes = {
  currentValue: PropTypes.number
}
BidButton.defaultProps = {
  currentValue: 0
}

export default BidButton
