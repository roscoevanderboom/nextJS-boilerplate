import Head from "next/head";
import PublicLayout from "../components/Layouts/Public";
import Header from "../components/Header";

export default function Index() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Boilerplate" />
        <title>NextJS MUI V5 Boilerplate</title>
      </Head>
      <PublicLayout>
        <main>
          <Header text="NextJS MUI V5 Boilerplate" />
        </main>
      </PublicLayout>
    </>
  );
}
