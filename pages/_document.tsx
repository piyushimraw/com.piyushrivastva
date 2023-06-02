import Document, { Head, Main, NextScript, Html } from "next/document";

import ANALYTICS_ID from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <link
            href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
