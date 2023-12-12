import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from 'formik'
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import apiConfig from "../config";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const theme = createTheme();
export default function SignUp() {
  let navigate = useNavigate();
  const formik=useFormik({
    initialValues:{
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:''
    },onSubmit:values=>{
      axios.post(`${apiConfig.authapi}/register`, values)
      .then(data => {
        if(data.data.status==409){
console.log("User already exists")
        }else{
          navigate('/SignIn');
        }
      })

    },
    validationSchema:yup.object().shape({
        firstname: yup.string()
            .min(3, 'FirstName is too short')
            .max(10, 'FirstName is too long')
            .required('FirstName cannot be left blank'),
        lastname: yup.string()
            .min(3, 'LastName is too short')
            .max(10, 'LastName is too long')
            .required('LastName cannot be left blank'),
        email: yup.string()
            .email('Invalid Email Address')
            .required('Email cannot be left blank'),
        password: yup.string()
            .required('Password cannot be left blank'),            
        confirmpassword: yup.string()
            .required('Confirm Password cannot be left blank')
            .test('confirmpassword', 'Password & confirm password should be same', function(cpass){
                if(this.parent.password===cpass){
                    return true;
                }
                return false;
            })

    }),
});
const classes = useStyles();

  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",

            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box noValidate  sx={{ mt: 1 }}  >
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
            <form  className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                    <TextField id="firstname" name="firstname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname}placeholder="First Name" variant="outlined"
                     label="Firstname" fullWidth />
                    {formik.errors.firstname && formik.touched.firstname ? <span className="text-danger">{formik.errors.firstname}</span> : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="lastname" name="lastname" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} placeholder="Last Name" variant="outlined"
                     label="Lastname" fullWidth />
                    {formik.errors.lastname && formik.touched.lastname ? <span className="text-danger">{formik.errors.lastname}</span> : null}
                    </Grid>
                    <Grid item xs={12}>
                    <TextField  id="email" name="email" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  placeholder="Email" variant="outlined"
                     label="Email" fullWidth  />
                    {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                    </Grid>
                    <Grid item xs={12}>
                    <TextField  id="password" name="password" type="password"onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}  placeholder="Password" variant="outlined"
                     label="Password" fullWidth />
                    {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                    </Grid>
                <Grid item xs={12}>
                    <TextField  id="confirmpassword" name="confirmpassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpassword} placeholder="Confirm password" variant="outlined"
                     label="Confirmpassword" fullWidth />
                    {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className="text-danger">{formik.errors.confirmpassword}</span> : null}
                </Grid>                
</Grid>
<Box sx={{ m: 3 }} />
<Button
                         type="submit"  
                          fullWidth
                          variant="contained"                  
                          color="primary"     
                        >
                          Sign Up
                        </Button>

            </form>
                </div>
              </Container>
              <Box sx={{ m: 3 }} />
              <Grid container>
                <Grid
                  item
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link to="/SignIn" variant="body2">
                    {"Already Have Account? Sign-In "}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
