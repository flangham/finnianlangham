import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" />
          <title>Finnian Langham | Front-end Developer &amp; Designer</title>
          <meta
            name="description"
            content="Finnian Langham is a front-end developer &amp; designer. He primarily works with creatives, helping to make their digital visions a reality."
          />
          <meta property="og:title" content="Finnian Langham | Front-end Developer &amp; Designer" />
          <meta property="og:type" content="Website" />
          <meta property="og:url" content="https://finnianlangham.com/" />
          <meta
            property="og:description"
            content="Finnian Langham is a front-end developer &amp; designer. He primarily works with creatives, helping to make their digital visions a reality."
          />
          <meta property="og:image" content="/og-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
