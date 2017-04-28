import Layout from '../components/MyLayout.js'
import Markdown from '../components/Markdown'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <Markdown content={`
This is out blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.

         `}/>
    </Layout>
)
