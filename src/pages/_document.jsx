import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome=1" />
          <meta name="keywords" content="N.E. Lilly, Nathan E. Lilly, portfolio, development" /> 
          <meta name="description" content="N.E.Lilly public portfolio of art, development, &amp; design." />
          <meta name="author" content="Nathan E. Lilly" />
          <meta name="color-scheme" content="light dark" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
          {/* <link href="https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:300,300i,400,400i,500,500i" rel="stylesheet" /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" /> */}

          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#a00" />
          <meta name="msapplication-TileColor" content="#a00" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body id="top">
          <article className="page">
            <Main />
            <NextScript />
          </article>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
