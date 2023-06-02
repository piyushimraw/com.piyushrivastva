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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4N28SV');</script>
              `,
            }}
          ></script>
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K4N28SV"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              name="gtag"
              title="gtag"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
