import * as React from 'react';
import UpdateProfile from './updateProfile';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import apiConfig from "../config";
import GuestProfile from './guestProfile';
import AppBar from '@mui/material/AppBar';

export default function Profile() {
  const [a,b]=React.useState("")
  const [c,e]=React.useState("")
  const [dd,ddd]=React.useState("")
  const [y,z]=React.useState(false)
 
React.useEffect(()=>{
  var d=localStorage.getItem("email")
  document.body.style.backgroundColor="black"
if(d==null){
ddd("Guest")
z(false)
}else{
  axios.get(`${apiConfig.authapi}/getregister/${d}`).then(data=>{
    b(data.data.firstname)
    e(data.data.lastname)
var f=a+" "+c
z(true)
    ddd(f)
  })
}
})
function ready(){
  var d=localStorage.getItem("email")
  axios.get(`${apiConfig.authapi}/getregister/${d}`).then(data=>{
    b(data.data.firstname)
    e(data.data.lastname)
var f=a+" "+c
z(true)
    ddd(f)
  })
}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'white', height: '80vh'}}>
        <AppBar position="static">
          <img src="newss.jpg" style={{height:100}}></img>
      </AppBar>
          <h1 style={{marginLeft:250}}>Hi ,</h1>
          <h2 style={{marginLeft:220}} id="title">{dd}</h2>
          {y?<UpdateProfile/>:<GuestProfile/>}
    </Box>
      </Container>
    </React.Fragment>
  );
}

