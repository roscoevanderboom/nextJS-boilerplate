import type { NextPage } from "next";
// Hooks
import { useStore } from "../context";
// Components
import { AdminNav } from "../components/Nav/Topnav";
import layoutStyles from "../styles/jss/layoutStyles";
// Pages
import Custom401 from "../pages/401";

const AdminLayout: NextPage = ({ children }) => {
  const { user } = useStore();
  const classes = layoutStyles();

  if (!user) {
    return <Custom401 />;
  } else {
    return (
      user && (
        <>
          <AdminNav />
          <main className={classes.main}>{children}</main>
        </>
      )
    );
  }
};

export default AdminLayout;
