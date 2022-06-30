import React from "react";
import {
  TextField,
  Box,
  Grid,
  Paper,
  Link,
  Button,
  Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function Register() {
  //Peper Style fro card
  const paperStyle = {
    padding: 20,
    height: 600,
    width: 500,
    margin: "50px auto",
  };

  //Formik Validation
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },

    //Validation using Yub
    validationSchema: yup.object({
      FirstName: yup
        .string()
        .required("Enter Valid UserName")
        .min(4, "Minimum 4 character Required")
        .max(20, "Maximum 20 character Required"),
      LastName: yup
        .string()
        .required("Enter LastName")
        .min(1, "Minimum 1 character Required"),
      Email: yup.string().required("Enter Valid Email").email(),
      Password: yup.string().required("Enter Valid Password"),
      ConfirmPassword: yup
        .string()
        .oneOf([yup.ref(" Password"), null], "Passwords must match"),
    }),
    
    //post submited values
    onSubmit: (e) => {
      alert(
        ` ${formik.values.FirstName} ${formik.values.LastName} Your Account  Created sucessfully`
      );
      localStorage.setItem("Email", formik.values.Email);
      localStorage.setItem("Password", formik.values.Password);
      axios.post("http://localhost:5000/Regsister", e);
      navigate("/");
    },
  });

  return (
    <div className="form">
      <Paper elevation={10} style={paperStyle}>
        <div className="form">
          <Box
            sx={{
              width: 350,
              height: 400,
              borderRadius: 5,
            }}
          >
            <form>
              <AccountCircleRoundedIcon
                sx={{ fontSize: 40 }}
                className="icon1"
                color="secondary"
                size="large"
              />
              <h4>CREATE ACCOUNT</h4>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    name="FirstName"
                    label={
                      <Typography variant="headline" component="h5">
                        FirstName
                      </Typography>
                    }
                    type="text"
                    value={formik.values.FirstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.FirstName ? (
                    <span>{formik.errors.FirstName}</span>
                  ) : null}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    name="LastName"
                    label={
                      <Typography variant="headline" component="h5">
                        LastName{" "}
                      </Typography>
                    }
                    type="text"
                    value={formik.values.LastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.LastName ? (
                    <span>{formik.errors.LastName}</span>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name="Email"
                    label={
                      <Typography variant="headline" component="h5">
                        Email
                      </Typography>
                    }
                    type="email"
                    margin="normal"
                    value={formik.values.Email}
                    onChange={formik.handleChange}
                  />
                </Grid>
                {formik.errors.Email ? (
                  <span>{formik.errors.Email}</span>
                ) : null}
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKeyOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                    name="Password"
                    label={
                      <Typography variant="headline" component="h4">
                        Password
                      </Typography>
                    }
                    type="password"
                    color="secondary"
                    margin="normal"
                    value={formik.values.Password}
                    onChange={formik.handleChange}
                    autoComplete="off"
                  />
                </Grid>
                {formik.errors.Password ? (
                  <span>{formik.errors.Password}</span>
                ) : null}
                <Grid item xs={12}>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKeyOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                    name="ConfirmPassword"
                    label={
                      <Typography variant="headline" component="h4">
                        ConfirmPassword
                      </Typography>
                    }
                    type="password"
                    color="secondary"
                    margin="normal"
                    value={formik.values.ConfirmPassword}
                    onChange={formik.handleChange}
                    autoComplete="off"
                  />
                </Grid>
                {formik.errors.ConfirmPassword ? (
                  <span>{formik.errors.ConfirmPassword}</span>
                ) : null}
              </Grid>
              <div className="button-top">
                <Button
                  color="secondary"
                  fullWidth
                  variant="outlined"
                  onClick={formik.handleSubmit}
                >
                  {
                    <Typography variant="body" component="h4">
                      Submit
                    </Typography>
                  }
                </Button>
              </div>
              <div className="link">
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </div>
            </form>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
