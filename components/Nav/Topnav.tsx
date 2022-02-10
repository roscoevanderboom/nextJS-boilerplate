import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { adminRoutes, publicRoutes } from "../../routes";

const styles = makeStyles({
  list: {
    display: "flex",
    alignItems: "center",
  },
  listItems: {
    color: "inherit",
    listStyle: "none",
    margin: "0 12px"
  }
})

export function AdminNav() {
  const classes = styles();

  return (
    <ul className={classes.list}>
      {adminRoutes.map((route) => (
        <li key={route.text} className={classes.listItems}>
          <Link href={route.href} passHref>
            <a>{route.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function PublicNav() {
  const classes = styles();

  return (
    <ul className={classes.list}>
      {publicRoutes.map((route) => (
        <li key={route.text} className={classes.listItems}>
          <Link href={route.href} passHref>
            <a>{route.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
