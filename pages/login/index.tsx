import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import { Paper, Divider, Button } from "@mui/material";
import { DefaultInput } from "../../components/Inputs";
import loginStyles from "../../styles/jss/pages/login";

const init = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(init);
  const classes = loginStyles();
  const handleChange = (key: string) => (e: any) => {
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={classes.flex_centered}>
      <Paper sx={{ boxShadow: 10 }} className={classes.paper}>
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <DefaultInput
            id="email-input"
            label="Email"
            error={false}
            helperText="Please enter a valid email"
          />
          <DefaultInput
            id="password-input"
            label="Password"
            error={false}
            type="password"
            helperText="Incorrect password"
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
        <br />
        <Divider />
        <p>Don't have an account yet?</p>
        <Link href="/registration">
          <a>Click here to register.</a>
        </Link>
      </Paper>
    </div>
  );
}
