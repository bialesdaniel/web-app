import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import BidDialog from '../BidDialog'
import { roundToHundreths } from '../../utils'

class BidButton extends Component {
  state = {
    isDialogOpen: false
  }
  handleClick = () => {
    this.setState({ isDialogOpen: true })
  }
  render() {
    const { currentValue, teamName, teamId, match } = this.props
    const { isDialogOpen } = this.state
    return (
      <div>
        <Button variant="outlined" onClick={this.handleClick}>
          ${roundToHundreths(currentValue)}
        </Button>
        <BidDialog
          auctionId={get(match, 'params.auctionId')}
          currentValue={currentValue}
          isOpen={isDialogOpen}
          onClose={() => this.setState({ isDialogOpen: false })}
          teamId={teamId}
          teamName={teamName}
        />
      </div>
    )
  }
}

BidButton.propTypes = {
  currentValue: PropTypes.number,
  match: PropTypes.object.isRequired,
  teamId: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired
}
BidButton.defaultProps = {
  currentValue: 0
}

export default withRouter(BidButton)
