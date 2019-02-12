import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function PostLink(props) {
  return (
    <li>
      <Link href={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

export default function() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
