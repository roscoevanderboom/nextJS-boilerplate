import type { NextPage } from "next";
import { RegProps } from "../../types/login";
import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import { Paper, Divider, Button } from "@mui/material";
import { Title } from "../../components/Typography";
import { DefaultInput } from "../../components/Inputs";
import registrationStyles from "../../styles/jss/pages/login";

const init = {
  email: "",
  password: "",
  confirm: "",
};

const Registration: NextPage = () => {
  const [formData, setFormData] = useState<RegProps>(init);
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
        <Title>Registration</Title>
        <form onSubmit={handleSubmit} className={classes.form}>
          <DefaultInput
            id="email-input"
            label="Email"
            type="email"
            required
            error={false}
            onChange={handleChange("email")}
            helperText="Please enter a valid email"
          />
          <DefaultInput
            id="password-input"
            label="Password"
            error={false}
            required
            type="password"
            onChange={handleChange("password")}
          />
          <DefaultInput
            id="confirm-password-input"
            label="Confirm Password"
            error={false}
            required
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
        <Link href="/login">
          <a className={classes.link}>Click here to login.</a>
        </Link>
      </Paper>
    </div>
  );
};

export default Registration;
