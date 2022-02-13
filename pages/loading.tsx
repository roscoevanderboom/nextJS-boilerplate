// pages/404.tsx
import { makeStyles } from "@mui/styles";
const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});
export default function Loading() {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <h1>Loading....</h1>
    </div>
  );
}
