import Head from "next/head";
import PublicLayout from "../components/Layouts/Public";
import Header from "../components/Header";
const About = () => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="about" />
        <meta name="description" content="The about page" />
        <title>About</title>
      </Head>
      <PublicLayout>
        <main>
          <Header text="About" />
        </main>
      </PublicLayout>
    </div>
  );
};

export default About;
