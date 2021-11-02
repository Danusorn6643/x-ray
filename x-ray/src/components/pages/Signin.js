import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: 10,
    },
  },
  formControl: {
    minWidth: window.innerWidth / 6,
  },
  selectEmpty: {
    marginTop: 5,
  },
  form: {
    textAlign: "center",
  },
  TextField: {
    width: 300,
  }
}));

const SignIn = () => {
  const wrapper = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.form}>
        <div className="container mt-5" ref={wrapper}>
          <h1>Sign In</h1>
          <br />
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className = {classes.TextField}
                  type="email"
                  label="Email address"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className = {classes.TextField}
                  type="password"
                  label="Password"
                  name="password"
                  required
                />
              </Grid>
            </Grid>
            <br />
            <Button type="submit" size="large" variant="outlined">
              Submit
            </Button>
            <Link to="/signup">
              <Button variant="outlined" size="large" type="button" to="/signup">
                Sign up
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
