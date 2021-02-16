// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

// const Index = (props) => (
// <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//     {props.shows.map(({show}) => (
//         <li key={show.id}>
//         <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//         </Link>
//         </li>
//     ))}
//     </ul>
// </Layout>
// )

// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()

//     console.log(`Show data fetched. Count: ${data.length}`)

//     return {
//     shows: data
//     }
// }

// export default Index


// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'

// function getPosts () {
// return [
//     { id: 'hello-nextjs', title: 'Hello Next.js'},
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
// ]
// }

// export default () => (
// <Layout>
//     <h1>My Blog</h1>
//     <ul>
//     {getPosts().map((post) => (
//     <li key={post.id}>
//         <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//         <a>{post.title}</a>
//         </Link>
//         </li>
//     ))}
//     </ul>
//     <style jsx>{`
//     h1, a {
//     font-family: "Arial";
//     }

//     ul {
//     padding: 0;
//     }

//     li {
//     list-style: none;
//     margin: 5px 0;
//     }

//     a {
//     text-decoration: none;
//     color: blue;
//     }

//     a:hover {
//     opacity: 0.6;
//     }
//     `}</style>
// </Layout>
// )

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//   </li>
// )

const PostLink = ({ post }) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
        <a>{post.title}</a>
        </Link>
    <style jsx>{`
        li {
        list-style: none;
        margin: 5px 0;
        }

        a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
        }

        a:hover {
        opacity: 0.6;
        }
    `}</style>
    </li>
)

export default () => (
<Layout>
    <h1>My Blog</h1>
    <ul>
    {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
    ))}
    </ul>
    <style jsx>{`
    h1 {
        font-family: "Arial";
    }

    ul {
        padding: 0;
    }

    // li {
    // list-style: none;
    // margin: 5px 0;
    // }

    // a {
    // text-decoration: none;
    // color: blue;
    // }

    // a:hover {
    // opacity: 0.6;
    // }
    `}</style>
</Layout>
)
