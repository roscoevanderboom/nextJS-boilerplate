import { TextField } from "@mui/material";



export function DefaultInput() {
    return (
        <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
        />
    )
}