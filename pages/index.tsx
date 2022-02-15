import type { NextPage } from "next";
import { Paragraph } from "../components/Typography";
import Link from "next/link";
import PublicLayout from "../Layouts/PublicLayout";
import homePageStyles from "../styles/jss/pages/homePage";

const Home: NextPage = () => {
  const classes = homePageStyles();
  return (
    <PublicLayout>
      <div className={classes.wrapper}>
        <header>
          <h1 className="title">Landing page with public layout</h1>
        </header>
        <br />
        <Link passHref href="/dashboard/profile">
          <a>Go to Dashboard</a>
        </Link>
        <br />
        <main style={{ width: 1000 }}>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero
            dolores nisi pariatur esse eveniet ea rerum laudantium iusto soluta
            quasi magnam laborum, eligendi est voluptate quibusdam qui eius
            porro!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero
            dolores nisi pariatur esse eveniet ea rerum laudantium iusto soluta
            quasi magnam laborum, eligendi est voluptate quibusdam qui eius
            porro!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero
            dolores nisi pariatur esse eveniet ea rerum laudantium iusto soluta
            quasi magnam laborum, eligendi est voluptate quibusdam qui eius
            porro!
          </Paragraph>
        </main>
      </div>
    </PublicLayout>
  );
};

export default Home;
