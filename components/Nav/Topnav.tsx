import Link from "next/link";
import { AppBar, Toolbar, Stack, ButtonBase } from "@mui/material";
import { LoginButton } from "../Buttons";
import { adminRoutes, publicRoutes } from "../../routes";
import topNavStyles from "../../styles/jss/components/topNavStyles";

export function AdminNav() {
  const classes = topNavStyles();

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Stack component="ul" direction="row" spacing={2}>
          {adminRoutes.map((route) => (
            <ButtonBase
              component="li"
              key={route.text}
              className={classes.listItems}
            >
              <Link href={route.href} passHref>
                <a>{route.text}</a>
              </Link>
            </ButtonBase>
          ))}
        </Stack>
        <LoginButton color="warning" />
      </Toolbar>
    </AppBar>
  );
}

export function PublicNav() {
  const classes = topNavStyles();

  return (
    <AppBar color="default" position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        <ul className={classes.list}>
          {publicRoutes.map((route) => (
            <li key={route.text} className={classes.listItems}>
              <Link href={route.href} passHref>
                <a>{route.text}</a>
              </Link>
            </li>
          ))}
        </ul>
        <LoginButton color="info" />
      </Toolbar>
    </AppBar>
  );
}
