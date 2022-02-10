import type { NextPage } from "next";
import { PublicNav } from "../components/Nav/Topnav";
import layoutStyles from "../styles/jss/layoutStyles";

const PublicLayout: NextPage = ({ children }) => {
  const classes = layoutStyles();
  return (
    <>
      <PublicNav />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default PublicLayout;
