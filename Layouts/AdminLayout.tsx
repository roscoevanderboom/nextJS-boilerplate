import type { NextPage } from "next";
import { AppBar, Toolbar } from "@mui/material";
import { AdminNav } from "../components/Nav/Topnav";
import layoutStyles from "../styles/jss/layoutStyles";

const AdminLayout: NextPage = ({ children }) => {
  const classes = layoutStyles();
  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar variant="dense">
          <AdminNav />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default AdminLayout;
