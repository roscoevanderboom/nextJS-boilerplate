import { makeStyles } from "@mui/styles";
import { flex_centered } from "../globals";

const loginStyles = makeStyles({
  flex_centered,
  paper: {
    padding: 25,
    width: "100%",
    maxWidth: 500
  },
  form: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column'
  }
});

export default loginStyles;