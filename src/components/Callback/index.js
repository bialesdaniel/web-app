import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import {CircularProgress} from 'material-ui/Progress'


const styles=(theme)=>({
  root:{
    margin:theme.spacing.unit *3
  }
})
class Callback extends Component{
  render(){
    const {classes} = this.props
    return (
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='stretch'
        className={classes.root}
        >
        <Grid item xs={12}>
          <CircularProgress size='40%' color='secondary'/>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Callback)
