import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';
export default function GuestProfile() {
  return (
    <Button variant="contained"sx={{ml:26}} ><Link to="/" onClick={()=>document.body.style.backgroundColor="white"}style={{textDecoration:'none' ,color:'whitesmoke'}}>Home Button</Link> </Button>
  )
}
