import React from "react";
import { TextField, Box, Typography, Link, Button, Paper } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {
  MailOutlined,
  AccountCircleRounded,
  VpnKeyOutlined,
} from "@material-ui/icons";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    //Validation using Yub
    validationSchema: yup.object({
      Email: yup.string().required("Enter Valid Email").email(),
      Password: yup.string().required("Enter Valid Password"),
    }),
    //post submited values
    onSubmit: (e) => {
      const email = localStorage.getItem("Email");
      const psw = localStorage.getItem("Password");
      if (formik.values.Email === email && formik.values.Password === psw) {
        alert("Login Successfully");
        navigate("/page");
      } else {
        alert("Enter Valid userName and Password");
      }
    },
  });

  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 300,
    margin: "50px auto",
  };
  const navigate = useNavigate();
  return (
    <Paper elevation={10} style={paperStyle}>
      <div className="form">
        <Box
          sx={{
            width: 350,
            height: 400,
            borderRadius: 5,
          }}
        >
          <AccountCircleRounded
            sx={{ fontSize: 40 }}
            className="icon2"
            color="secondary"
            size="large"
          />
          <h3>LOGIN HERE</h3>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlined />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            color="secondary"
            fullWidth
            name="Email"
            label={
              <Typography variant="headline" component="h3">
                {" "}
                Email{" "}
              </Typography>
            }
            type="email"
            margin="normal"
            autoComplete="off"
            onChange={formik.handleChange}
          ></TextField>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyOutlined />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            name="Password"
            label={
              <Typography variant="headline" component="h3">
                Password{" "}
              </Typography>
            }
            type="password"
            color="secondary"
            margin="normal"
            autoComplete="off"
            fullWidth
            onChange={formik.handleChange}
          ></TextField>
          <div className="button-top">
            <Button
              color="secondary"
              margin="normal"
              variant="outlined"
              fullWidth
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
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </Box>
      </div>
    </Paper>
  );
}
