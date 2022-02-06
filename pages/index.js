import Head from "next/head";
import Home from "./home";

export default function Index() {
  return (
    <div>
      <Head>
        <meta name="keywords" content="Boilerplate" />
        <title>Boilerpalte</title>
      </Head>
      <Home />
    </div>
  );
}