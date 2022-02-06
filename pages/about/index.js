import Head from "next/head";
import Header from "../../components/Header";
const About = () => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="about" />
        <meta name="description" content="The about page" />
        <title>About</title>
      </Head>
      <main>
        <Header text="About" />
      </main>
    </div>
  );
};

export default About;
