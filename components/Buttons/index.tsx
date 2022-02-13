import { handleSignOut } from "../../lib/firebase/auth";
// Components
import Link from "next/link";
import { IconButton, IconButtonProps, ButtonBase } from "@mui/material";
import { AccountCircle, ExitToAppRounded } from "@mui/icons-material";
// Types
import { TopnavButtonProps } from "./types";

export const LoginButton = (props: IconButtonProps) => {
  return (
    <Link href="/login" passHref>
      <IconButton {...props}>
        <AccountCircle />
      </IconButton>
    </Link>
  );
};

export const LogoutButton = (props: IconButtonProps) => {
  const signOut = () => {
    let confirm = window.confirm("Logout?");
    if (confirm) handleSignOut();
  };
  return (
    <IconButton {...props} onClick={signOut}>
      <ExitToAppRounded />
    </IconButton>
  );
};

export const TopnavButton = (props: TopnavButtonProps) => {
  return (
    <ButtonBase
      component="li"
      color="primary"
      centerRipple={true}
      className={props.classes.listItems}
    >
      <Link href={props.route.href} passHref>
        <a>{props.route.text}</a>
      </Link>
    </ButtonBase>
  );
};
