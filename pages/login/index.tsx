import type { NextPage } from "next";
import { LoginProps } from "../../types/login";
import React, { SyntheticEvent, useState } from "react";
import { handleSignIn } from "../../lib/firebase/auth";
import Link from "next/link";
import { Paper, Divider, Button } from "@mui/material";
import { Title } from "../../components/Typography";
import { DefaultInput } from "../../components/Inputs";
import loginStyles from "../../styles/jss/pages/login";

const init = {
  email: "",
  password: "",
};

const Login: NextPage = () => {
  const [formData, setFormData] = useState<LoginProps>(init);

  const classes = loginStyles();

  const handleChange = (key: string) => (e: any) => {
    setFormData({ ...formData, [key]: e.currentTarget.value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      window.alert("Form incomplete");
      return;
    }
    handleSignIn({ ...formData });
  };

  return (
    <div className={classes.flex_centered}>
      <Paper sx={{ boxShadow: 10 }} className={classes.paper}>
        <Title>Login</Title>
        <form onSubmit={handleSubmit} className={classes.form}>
          <DefaultInput
            id="email-input"
            label="Email"
            type="email"
            onChange={handleChange("email")}
          />
          <DefaultInput
            id="password-input"
            label="Password"
            type="password"
            onChange={handleChange("password")}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
        <br />
        <Divider />
        <p>{`Don't have an account yet?`}</p>
        <Link href="/registration">
          <a className={classes.link}>Click here to register.</a>
        </Link>
      </Paper>
    </div>
  );
};

export default Login;
