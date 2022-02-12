import { makeStyles } from "@mui/styles";

const topNavStyles = makeStyles({
  list: {
    display: "flex",
    alignItems: "center",
  },
  listItems: {
    color: "inherit",
    listStyle: "none",
    margin: "0 12px"
  },
   toolbar: {
    display: "flex",
    justifyContent: 'space-between'
   }
})

export default topNavStyles;