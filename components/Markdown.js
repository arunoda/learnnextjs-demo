import React from 'react'
import marked from 'marked'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false
})

export default class Markdown extends React.Component {
  render () {
    const { content } = this.props

    return (
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}/>
    )
  }
}
