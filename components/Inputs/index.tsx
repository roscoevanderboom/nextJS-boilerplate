import { TextField, TextFieldProps } from "@mui/material";
import inputStyles from "../../styles/jss/components/inputStyles";

export function DefaultInput(props: TextFieldProps) {
  const { error, id, label, value, helperText, variant, color } = props;
  const classes = inputStyles();
  return (
    <TextField
      id={id}
      {...props}
      value={value}
      error={error}
      className={classes.root}
      color={color ? color : "secondary"}   
      label={label ? label : null}      
      helperText={helperText && error ? helperText : ""}
      variant={variant ? variant : "standard"}
    />
  );
}
