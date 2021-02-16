// import {withRouter} from 'next/router'
// import Layout from '../components/MyLayout.js'

// const Page = withRouter((props) => (
//     <Layout>
//       <h1>{props.router.query.title}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
// ))

// export default Page

// import Layout from '../components/MyLayout.js'
// import fetch from 'isomorphic-unfetch'

// const Post =  (props) => (
//     <Layout>
//       <h1>{props.show.name}</h1>
//       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//       <img src={props.show.image.medium}/>
//     </Layout>
// )

// Post.getInitialProps = async function (context) {
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()

//   console.log(`Fetched show: ${show.name}`)

//   return { show }
// }

// export default Post


import Layout from '../components/MyLayout.js'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'

export default withRouter((props) => (
  <Layout>
  <h1>{props.router.query.title}</h1>
  <div className="markdown">
    <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
    `}/>
  </div>
  <style jsx global>{`
    .markdown {
      font-family: 'Arial';
    }

    .markdown a {
      text-decoration: none;
      color: blue;
    }

    .markdown a:hover {
      opacity: 0.6;
    }

    .markdown h3 {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
    }
  `}</style>
  </Layout>
))