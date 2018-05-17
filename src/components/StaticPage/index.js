import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    textAlign: 'left',
    marginLeft: '10%',
    marginRight: '10%'
  }
}

class StaticPage extends Component {
  state = {
    markdownContent: ''
  }

  async setMarkdownContent() {
    const { markdownSource } = this.props
    const { data: markdownContent } = await axios(markdownSource)
    this.setState({ markdownContent })
  }

  componentDidMount() {
    this.setMarkdownContent()
  }

  componentDidUpdate(prevProps) {
    const { markdownSource } = this.props
    if (prevProps.markdownSource !== markdownSource) {
      this.setMarkdownContent()
    }
  }

  render() {
    const { markdownContent } = this.state
    const { classes } = this.props
    return <ReactMarkdown className={classes.root} source={markdownContent} escapeHtml={false} />
  }
}

StaticPage.propTypes = {
  markdownSource: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StaticPage)
