import Link from "next/link";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const LoginButton = (props: any) => {
  return (
    <Link href="/login" passHref>
      <IconButton {...props}>
        <AccountCircle />
      </IconButton>
    </Link>
  );
};
