import React, { Fragment, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import AuthContext from '../../../context/AuthContext'
import InfoSnackBar, { LOGIN_REQUIRED_MESSAGE } from '../../Messaging/SnackBars/Info'
import { withRouter } from 'react-router'

const CreateAuctionButton = ({ history }) => {
  const [isMessageOpen, setIsMessageOpen] = useState(false)
  const { auth } = useContext(AuthContext)
  const handleClick = () => {
    if (auth.isAuthenticated()) {
      history.push('/auctions/new')
    } else {
      setIsMessageOpen(true)
    }
  }
  return (
    <Fragment>
      <Tooltip id="tooltip-create-auction" title="Create Auction" placement="left" enterDelay={400}>
        <IconButton aria-label="Create Auction" color="inherit" onClick={handleClick}>
          <AddBoxIcon />
        </IconButton>
      </Tooltip>
      <InfoSnackBar isOpen={isMessageOpen} onClose={() => setIsMessageOpen(false)} message={LOGIN_REQUIRED_MESSAGE} />
    </Fragment>
  )
}

CreateAuctionButton.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(CreateAuctionButton)
