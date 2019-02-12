import React from 'react'
import MyLayout from '../components/MyLayout'
import marked from 'marked'
import Highlight from 'react-highlight'

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

export default function withPost(options) {
  return class PostPage extends React.Component {
    render() {
      return (
        <MyLayout>
          <h1>{options.title}</h1>
          <div>
            <Highlight innerHTML>{marked(options.content)}</Highlight>
          </div>
        </MyLayout>
      )
    }
  }
}
