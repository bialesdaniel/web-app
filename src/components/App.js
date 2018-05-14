import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Header from './Header'
import Auctions from './Auctions/AuctionsMain'
import CreateAuction from './Auctions/CreateAuction'
import Callback from './Callback'
import Auth from '../services/Auth'


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

const styles=(theme)=>({
  root:{
    textAlign:'center'
  },
  content:{
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3
  }
})

class App extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Header auth={auth}/>
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Auctions}/>
            <Route exact path="/auctions/new" component={CreateAuction}/>
            <Route exact path="/callback" render={(props)=>{
                handleAuthentication(props)
                return <Callback {...props}/>
              }}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
