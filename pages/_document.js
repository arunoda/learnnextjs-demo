import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps (ctx) {
    return Document.getInitialProps(ctx)
  }

  render () {
    return (
     <html>
       <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-light.min.css" rel="stylesheet" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
