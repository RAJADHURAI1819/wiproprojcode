import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import apiConfig from "../config";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button, InputLabel, unstable_composeClasses } from '@mui/material';
export default function UpdateProfile(props) {
    const navigate = useNavigate();
    const [a,b]=React.useState("")
  const [c,e]=React.useState("")
  const [y,z]=React.useState(false)
  const[get,set]=React.useState(0)
    const handleChange1=(event)=>{
        b(event.target.value)
      }
      const handleChange2=(event)=>{
        e(event.target.value)
      }
      function edit(){
        if(y==true){
        z(false)
        }else{
          z(true)
        }
          }
          React.useEffect(()=>{
            var d1=localStorage.getItem("email")
            axios.get(`${apiConfig.Favouritesapi}/GetFavourites/${d1}`).then(data=>{
              var ss=data.data.length
              set(ss)
            })
          })
      const submitChange=()=>{
        var v={
            "firstname":a,
            "lastname":c
        }
        var d=localStorage.getItem("email")
        axios.put(`${apiConfig.authapi}/getuserupdate/${d}`,v)
        z(false)
      document.body.style.backgroundColor="white"
        navigate('/')
      }
  return (
    <>
        <Grid container spacing={2}>
<Grid item xs={4}>
<Button variant="contained"sx={{ml:16}}style={{textDecoration:'none' ,color:'whitesmoke'}} onClick={edit}>Update Profile </Button>
</Grid>
<Grid item xs={4}>
<Button variant="contained"sx={{ml:16}}><Link to="/" onClick={()=>document.body.style.backgroundColor="white"}s style={{textDecoration:'none' ,color:'whitesmoke'}}>Home Button</Link> </Button>
</Grid>
{y?
<div style={{marginTop:20}}>
<InputLabel sx={{ml:20}}>FirstName :   
     <Input id="firstname" sx={{ml:3}}  onChange={handleChange1}/>
     </InputLabel>
     <InputLabel sx={{ml:20}}>LastName :  
     <Input id="lastname"  sx={{ml:3}}  onChange={handleChange2}/>
      </InputLabel>
      <Button variant="contained" sx={{ml:46,mt:2}} onClick={submitChange}>Save</Button></div>:null}
</Grid>
<Typography sx={{mt:3}}>Favourites added : {get} <Button href="/favourite">Click to view</Button></Typography>
</>

  )
}
