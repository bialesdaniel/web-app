import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
const CancelToken = axios.CancelToken //Only needed because storyshots unmount before componentDidMount called
const { token, cancel } = CancelToken.source()

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
    try {
      const { data: markdownContent } = await axios.get(markdownSource, { cancelToken: token })
      this.setState({ markdownContent })
    } catch (e) {
      if (!axios.isCancel(e)) {
        this.setState({ markdownContent: e.message })
      }
    }
  }

  async componentDidMount() {
    await this.setMarkdownContent()
  }

  async componentDidUpdate(prevProps) {
    const { markdownSource } = this.props
    if (prevProps.markdownSource !== markdownSource) {
      await this.setMarkdownContent()
    }
  }

  componentWillUnmount() {
    cancel()
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
