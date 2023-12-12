import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import apiConfig from "../config";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockResetIcon from "@mui/icons-material/LockReset";
// import axios from "axios";
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
export default function Forgetpassword() {
  const [a,b]=React.useState("")
  const [c,d]=React.useState("")
  const[y,z]=React.useState("")
  const[t,u]=React.useState("")
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handle=(event)=>{
    d(event.target.value)
  }
  const hand=(event)=>{
    z(event.target.value)
  }
  const han=(event)=>{
    u(event.target.value)
  }
  const handleChange=(event)=>{
b(event.target.value)
  }
  function getotp(){
    var e={"email":a}
    u("")
    z("")
    d("")
axios.post(`${apiConfig.authapi}/forgotpassword`,e).then(data=>{
  if(data.data.status==401){
document.getElementById("exist").innerText="Email id doesn't exist"
  }else{
    handleOpen()
    document.getElementById("exist").innerText=""
    document.getElementById("otp").innerText=""
  document.getElementById("pass").innerText=""
  document.getElementById("confirmpass").innerText=""
  }
})
  }
  function getreset(){
    var e={
      "otp":c,
      "email":a,
     "password":y,
     "confirmpassword":t
    }
    if(y.length==0){
      document.getElementById("pass").innerText="password cannot be left blank"
    }else if(t==""){
      document.getElementById("confirmpass").innerText="confirm password cannot be left blank"
    }else if(!(/^.{3,10}$/.test(y))&&!(/^.{3,10}$/.test(t))){
      document.getElementById("pass").innerText="password should have minimum 3 characters"
      document.getElementById("confirmpass").innerText="confirm password should have minimum 3 characters"
    }else {
    axios.post(`${apiConfig.authapi}/setpassword`,e).then(data=>{
if(data.data.status==500){
  document.getElementById("otp").innerText=data.data.msg
}else if (data.data.status==400){
  document.getElementById("pass").innerText=data.data.msg
  document.getElementById("confirmpass").innerText=data.data.msg
}else{
    document.getElementById("otp").innerText=""
    document.getElementById("pass").innerText=""
    document.getElementById("confirmpass").innerText=""
    navigate('/SignIn');

}
    })
  }}
  const classes = useStyles();

  return (
    <div>
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
              "url(https://img.freepik.com/premium-vector/cyber-security-computer-data-encryption-internet-protection-background-with-stream-binary-data-code-digital-key-personal-information-safety-digital-data-secure-access-with-password-key_8071-10144.jpg?w=2000)",

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
              <LockResetIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <form className={classes.form} >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          id="email"
                          name="email"
                          type="text"
                          onChange={handleChange}
                          value={a}
                          placeholder="Email"
                          variant="outlined"
                          label="Enter Registered E-mail ID"
                          fullWidth
                        />
                        <span id="exist" style={{color:'red'}}></span>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ m: 1 }} />
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={getotp}
                        >
                          Send OTP to Registered E-mail
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="OTP"
                          name="OTP"
                          type="text"
                          placeholder=""
                          variant="outlined"
                          label="Enter OTP Here"
                          fullWidth
                          value={c}
                          onChange={handle}
                        />
                         <span id="otp" style={{color:'red'}}></span>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="password"
                          name="password"
                          type="password"
                          onChange={hand}
                          value={y}
                          placeholder="Password"
                          variant="outlined"
                          label="New Password"
                          fullWidth
                        />
            <span id="pass" style={{color:'red'}}></span>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="confirmpassword"
                          name="confirmpassword"
                          type="password"
                          onChange={han}
                          value={t}
                          placeholder="Confirm password"
                          variant="outlined"
                          label="Confirm Password"
                          fullWidth
                        />
                          <span id="confirmpass" style={{color:'red'}}></span>
                      </Grid>
                    </Grid>
                    <Box sx={{ m: 3 }} />
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={getreset}
                    >
                      Reset Password
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
                    {"Go to Login page"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      OTP sent to email
    </Alert>
  </Snackbar>
  </div>
  );
}
