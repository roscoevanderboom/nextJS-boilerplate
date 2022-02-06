import Head from "next/head";
import PublicLayout from "../components/Layouts/Public";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="keywords" content="Boilerplate" />
        <title>Boilerpalte</title>
      </Head>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </div>
  );
}

export default MyApp;
