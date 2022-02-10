import type { NextPage } from "next";
import { AppBar, Toolbar } from "@mui/material";
import { PublicNav } from "../components/Nav/Topnav";
import layoutStyles from "../styles/jss/layoutStyles";

const PublicLayout: NextPage = ({ children }) => {
  const classes = layoutStyles();
  return (
    <>
        <AppBar color="default" position="static">
        <Toolbar variant="dense">
          <PublicNav />
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default PublicLayout;
