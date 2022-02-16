import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Boilerplate" />
        <meta name="description" content="Boilerplate for NextJS" />
        <title>Boilerpalte</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
