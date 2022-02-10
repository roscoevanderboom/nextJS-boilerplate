import React, { SyntheticEvent, useState, FormEvent } from "react";
import Link from "next/link";
import { Paper, Divider, Button } from "@mui/material";
import { DefaultInput } from "../../components/Inputs";
import registrationStyles from "../../styles/jss/pages/login";

const init = {
  email: "",
  password: "",
  confirm: "",
};

export default function Registration() {
  const [formData, setFormData] = useState(init);
  const classes = registrationStyles();

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
        <h2 className="title">Registration</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <DefaultInput
            id="email-input"
            label="Email"
            type="email"
            error={false}
            onChange={handleChange("email")}
            helperText="Please enter a valid email"
          />
          <DefaultInput
            id="password-input"
            label="Password"
            error={false}
            type="password"
            onChange={handleChange("password")}
          />
          <DefaultInput
            id="confirm-password-input"
            label="Confirm Password"
            error={false}
            type="password"
            onChange={handleChange("confirm")}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
        <br />
        <Divider />
        <p>Already have an account?</p>
        <Link href="/registration">
          <a>Click here to login.</a>
        </Link>
      </Paper>
    </div>
  );
}
