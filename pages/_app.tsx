import { ReactComponentElement, useEffect } from "react";
import { AppProps } from "next/app";

import "../components/styles/layout.css";
import TagManager from "react-gtm-module";

/**
 * Root level component for all pages
 * @param {ReactComponentElement} Component Page component to be rendered
 * @param {object} pageProps All props for the page
 */
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-K4N28SV" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
