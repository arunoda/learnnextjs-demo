import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import loadDB from '../lib/load-db'

function PostLink(props) {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

function Index({ stories }) {
  return (
    <Layout>
      <h1>Hacker News - Latest</h1>
      <ul>
        {stories.map(story => (
          <PostLink key={story.id} id={story.id} title={story.title} />
        ))}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const db = await loadDB()

  const ids = await db.child('topstories').once('value')
  let stories = await Promise.all(
    ids
      .val()
      .slice(0, 10)
      .map(id =>
        db
          .child('item')
          .child(id)
          .once('value')
      )
  )

  stories = stories.map(s => s.val())

  return { stories }
}

export default Index
