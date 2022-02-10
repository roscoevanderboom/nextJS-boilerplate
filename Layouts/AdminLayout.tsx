import type { NextPage } from "next";
import { AdminNav } from "../components/Nav/Topnav";
import layoutStyles from "../styles/jss/layoutStyles";

const AdminLayout: NextPage = ({ children }) => {
  const classes = layoutStyles();
  return (
    <>
      <AdminNav />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default AdminLayout;
