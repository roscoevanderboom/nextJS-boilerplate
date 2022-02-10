import { TextField, TextFieldProps } from "@mui/material";
import inputStyles from "../../styles/jss/components/inputStyles";

export function DefaultInput(props: TextFieldProps) {
  const { error, id, label, value, helperText, variant } = props;
  const classes = inputStyles();
  return (
    <TextField
      id={id}
      {...props}
      value={value}
      error={error}
      className={classes.root}
      label={label ? label : null}      
      helperText={helperText && error ? helperText : ""}
      variant={variant ? variant : "standard"}
    />
  );
}
