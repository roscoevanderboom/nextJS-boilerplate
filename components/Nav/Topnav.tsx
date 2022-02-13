// Hooks
import { useStore } from "../../context";
// Components
import { AppBar, Toolbar, Stack } from "@mui/material";
import { LoginButton, LogoutButton, TopnavButton } from "../Buttons";
import { adminRoutes, publicRoutes } from "../../routes";
import topNavStyles from "../../styles/jss/components/topNavStyles";

export function AdminNav() {
  const classes = topNavStyles();
  const { user } = useStore();

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Stack component="ul" direction="row" spacing={2}>
          {adminRoutes.map((route) => (
            <TopnavButton key={route.text} route={route} classes={classes} />
          ))}
        </Stack>
        <div>
          <LoginButton color="inherit" />
          {user && <LogoutButton color="inherit" />}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export function PublicNav() {
  const classes = topNavStyles();
  const { user } = useStore();

  return (
    <AppBar color="default" position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Stack component="ul" direction="row" spacing={2}>
          {publicRoutes.map((route) => (
            <TopnavButton key={route.text} route={route} classes={classes} />
          ))}
        </Stack>
        <div>
          <LoginButton color="info" />
          {user && <LogoutButton color="info" />}
        </div>
      </Toolbar>
    </AppBar>
  );
}
