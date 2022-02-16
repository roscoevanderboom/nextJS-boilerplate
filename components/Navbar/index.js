import Link from "next/link";
import { AppBar, Toolbar, Stack, ButtonBase } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar component="header">
      <Toolbar variant="regular" component="nav">
        <Stack spacing={2} component="ul" direction="row">
          <ButtonBase>
            <Link href="/">Home</Link>
          </ButtonBase>
          <ButtonBase>
            <Link href="/about">About</Link>
          </ButtonBase>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
