import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InputAdornment from '@material-ui/core/InputAdornment'

class CurrencyNumberFormat extends Component {
  render() {
    const { inputRef, onChange, ...other } = this.props
    return (
      <NumberFormat
        {...other}
        ref={inputRef}
        onValueChange={values => {
          onChange({ target: { value: values.value } })
        }}
        prefix="$"
        decimalScale={2}
        fixedDecimalScale={true}
      />
    )
  }
}
CurrencyNumberFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

const styles = {
  stepButton: {
    padding: '0px',
    minWidth: '0px'
  }
}

class CurrencyInputField extends Component {
  render() {
    const { classes, onDecrease, onIncrease, ...props } = this.props
    return (
      <TextField
        {...props}
        InputProps={{
          inputComponent: CurrencyNumberFormat,
          endAdornment: (
            <InputAdornment position="end">
              <Button className={classes.stepButton} onClick={onDecrease}>
                <ExpandMoreIcon />
              </Button>
              <Button className={classes.stepButton} onClick={onIncrease}>
                <ExpandLessIcon />
              </Button>
            </InputAdornment>
          )
        }}
      />
    )
  }
}

CurrencyInputField.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
}

export default withStyles(styles)(CurrencyInputField)
