import Link from "next/link";
import { makeStyles } from "@mui/styles";
import routes from "../../routes";

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
      {routes.map((route) => (
        <li key={route.text} className={classes.listItems}>
          <Link href={route.href} passHref>
            <a>{route.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
