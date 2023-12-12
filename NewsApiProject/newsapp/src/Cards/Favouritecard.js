import React from 'react'
import Card from '@mui/material/Card';
import axios from "axios";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import apiConfig from "../config";
export default function Favouritecard(props) {
    function RemoveFromFavourite(value){
      var d=localStorage.getItem("email")
        axios.delete(`${apiConfig.Favouritesapi}/DeleteFromFavourites/?email=${d}&q=${value}`)
    }
  return (
    <>
    <Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      height="140"
      image={props.urlToImage}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      { props.source.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {props.description}
      </Typography>
    </CardContent>
    <CardActions>
    <Grid item xs={4} sx={{flexGrow:0.9}}>
    <Button variant="contained" href={props.url}>View</Button>
      </Grid>
      <Grid item xs={8} >
        <DeleteIcon onClick={()=>{
          var value=props.id
          RemoveFromFavourite(value);
        }}/>
      </Grid>      
    </CardActions>
  </Card>
</>
  )
}
