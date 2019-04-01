import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import AuthContext from '../../context/AuthContext'

const LoginSignupButton = () => {
  const { auth } = useContext(AuthContext)
  return (
    <Button onClick={auth.isAuthenticated() ? auth.logout : auth.login} color="inherit">
      {auth.isAuthenticated() ? 'Logout' : 'Login'}
    </Button>
  )
}

export default LoginSignupButton
