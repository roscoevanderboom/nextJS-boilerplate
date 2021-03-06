import Head from "next/head";
import PublicLayout from "../components/Layouts/Public";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Boilerplate" />
        <meta name="description" content="Boilerplate for NextJS" />
        <title>Boilerpalte</title>
      </Head>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </>
  );
}

export default MyApp;
