// pages/404.tsx
import { useStore } from "../context";
import { makeStyles } from "@mui/styles";
const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    background: "white",
  },
});
export default function Loading() {
  const { loading } = useStore();
  const classes = styles();
  return (
    loading && (
      <div className={classes.wrapper}>
        <h1>Loading....</h1>
      </div>
    )
  );
}
