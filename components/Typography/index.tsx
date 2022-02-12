import { Typography, TypographyProps } from "@mui/material";
import typographyStyles from "../../styles/jss/components/typographyStyles";

export const Title = (props: TypographyProps) => {
  const classes = typographyStyles();
  return (
    <Typography
      {...props}
      className={props.className ? props.className : classes.title}
      variant={props.variant ? props.variant : "h1"}
      align={props.align ? props.align : "center"}
    >
      {props.children}
    </Typography>
  );
};
