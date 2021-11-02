import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
}));

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const wrapper = React.createRef();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setFirstName(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "lastname") {
      setLastname(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = e.target.elements;
    const newUser = {
      id: uuidv4(),
      firstname,
      lastname,
      username,
      email: email.value,
      createAt: new Date(),
      image: null,
    };
    const user = {
      email: email.value,
      password: password.value,
    };
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.form}>
        <div className="container mt-5" ref={wrapper}>
          <h1>Sign Up</h1>
          <br/>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Lastname"
                  name="lastname"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  type="email"
                  label="Email address"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <br />
            <Button type="submit" size="large" variant="outlined">
              Submit
            </Button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
