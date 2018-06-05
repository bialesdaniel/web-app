import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'
import Auctions from './Auctions/AuctionsMain'
import CreateAuction from './Auctions/CreateAuction'
import AuctionDetails from './Auctions/AuctionDetails'
import StaticPage from './StaticPage'
import Callback from './Callback'
import Auth from '../services/Auth'
import { PUBLIC_URL } from '../config/config'

const auth = new Auth()

const handleAuthentication = nextState => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  content: {
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3
  }
})

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header login={auth.login} logout={auth.logout} isAuthenticated={auth.isAuthenticated} />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Auctions} />
            <Route exact path="/auctions/new" component={CreateAuction} />
            <Route exact path="/auctions/:auctionId" component={AuctionDetails} />
            <Route exact path="/rules" render={() => <StaticPage markdownSource={`${PUBLIC_URL}/static/rules.md`} />} />
            <Route exact path="/about" render={() => <StaticPage markdownSource={`${PUBLIC_URL}/static/about.md`} />} />
            <Route
              exact
              path="/callback"
              render={props => {
                handleAuthentication(props)
                return <Callback {...props} />
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
