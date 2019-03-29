import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
const { CancelToken } = axios //Only needed because storyshots unmount before componentDidMount called

const styles = {
  root: {
    textAlign: 'left',
    marginLeft: '10%',
    marginRight: '10%'
  }
}

const StaticPage = ({ markdownSource, classes }) => {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    const { token, cancel } = CancelToken.source()
    const getMarkdownContent = async () => {
      try {
        const { data } = await axios.get(markdownSource, { cancelToken: token })
        setMarkdownContent(data)
      } catch (e) {
        if (!axios.isCancel(e)) {
          setMarkdownContent(e.message)
        }
      }
    }
    getMarkdownContent()
    return cancel
  }, [markdownSource])

  const { root } = classes
  return <ReactMarkdown className={root} source={markdownContent} escapeHtml={false} />
}

StaticPage.propTypes = {
  markdownSource: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StaticPage)
