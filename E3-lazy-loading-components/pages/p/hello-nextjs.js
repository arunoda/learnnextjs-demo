import withPost from '../../lib/with-post'

export default withPost({
  title: 'Hello Next.js',
  content: `
Creating a page in a Next.js app is pretty simple.

Simply create a directory called "pages".
Then add the following content in a file called \`pages/index.js\`

~~~js
export default () => (
  <div>
    <p>Next.js is great!</p>
  </div>
)
~~~
`
})
