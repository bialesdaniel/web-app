import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import AuthContext from '../../context/AuthContext'
import BidDialog from '../BidDialog'
import { roundToHundreths } from '../../utils'

const BidButton = ({ currentValue, teamId, school, auctionId }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [amount, setAmount] = useState(currentValue)
  const { auth } = useContext(AuthContext)

  const handleDialogOpen = () => {
    setIsDialogOpen(true)
    console.log('clicked')
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
    <div>
      <Button variant="outlined" onClick={handleDialogOpen} disabled={!auth.isAuthenticated()}>
        ${roundToHundreths(amount)}
      </Button>
      <BidDialog
        auctionId={auctionId}
        currentValue={amount}
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        teamId={teamId}
        school={school}
      />
    </div>
  )
}

BidButton.propTypes = {
  currentValue: PropTypes.number,
  teamId: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  auctionId: PropTypes.string.isRequired
}
BidButton.defaultProps = {
  currentValue: 0
}

export default BidButton
