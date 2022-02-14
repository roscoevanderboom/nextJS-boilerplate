import { Provider } from "../context/index";
import type { AppProps } from "next/app";
import SEO from "../SEO/index";
import Head from "next/head";
import Loading from "./loading";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={SEO.URL} />
        {/* og */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.TITLE} />
        <meta property="og:description" content={SEO.DESCRIPTION} />
        <meta property="og:url" content={SEO.URL} />
        <meta property="og:site_name" content={SEO.TITLE} />
        {/* Twitter */}
        <meta name="twitter:title" content={SEO.TITLE} />
        <meta name="twitter:description" content={SEO.DESCRIPTION} />
        {/* Description + keywords */}
        <meta name="keywords" content={SEO.KEY_WORDS} />
        <meta name="description" content={SEO.DESCRIPTION} />
        <title>{SEO.TITLE}</title>
      </Head>
      <Provider>
        <Component {...pageProps} />
        <Loading />
      </Provider>
    </>
  );
}

export default App;
