import Document, { Head, Main, NextScript, Html } from "next/document";

import ANALYTICS_ID from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WXG0KCPWNX"
          ></script>
          <link
            href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WXG0KCPWNX');
              `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
