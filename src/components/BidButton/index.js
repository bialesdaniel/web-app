import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { AuthConsumer } from '../../context/AuthContext'
import BidDialog from '../BidDialog'
import { roundToHundreths } from '../../utils'

class BidButton extends Component {
  state = {
    isDialogOpen: false,
    amount: 0
  }
  handleClick = () => {
    this.setState({ isDialogOpen: true })
  }
  static getDerivedStateFromProps(nextProps, previousState) {
    const amount = nextProps.currentValue >= previousState.amount ? nextProps.currentValue : previousState.amount
    return { amount }
  }
  render() {
    const { school, teamId, auctionId } = this.props
    const { isDialogOpen, amount } = this.state
    return (
      <AuthConsumer>
        {({ auth }) => (
          <div>
            <Button variant="outlined" onClick={this.handleClick} disabled={!auth.isAuthenticated()}>
              ${roundToHundreths(amount)}
            </Button>
            <BidDialog
              auctionId={auctionId}
              currentValue={amount}
              isOpen={isDialogOpen}
              onClose={newAmount =>
                this.setState({ isDialogOpen: false, amount: newAmount > amount ? newAmount : amount })
              }
              teamId={teamId}
              school={school}
            />
          </div>
        )}
      </AuthConsumer>
    )
  }
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
