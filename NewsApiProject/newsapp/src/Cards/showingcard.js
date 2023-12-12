import React from 'react'
import Card from '@mui/material/Card';
import axios from "axios";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import apiConfig from "../config";
import { useNavigate } from "react-router-dom";
export default function Showingcard(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  function addToFavourite(v){
    fetch(`${apiConfig.authapi}/isAuthenticated`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
      }
  }).then(res => res.json())
      .then(data => {
          if (data.status === 401) {
              navigate('/SignIn');
          } else {
            axios.post(`${apiConfig.Favouritesapi}/AddToFavourites`,v)
            handleOpen()
          }
      });
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
        <FavoriteIcon  onClick={()=>{
          var values={
            email:localStorage.getItem("email"),
            source:props.source,
            urlToImage:props.urlToImage,
            description:props.description,
            url:props.url
          }
          addToFavourite(values);
        }}/>
      </Grid>   
    </CardActions>
  </Card>
  <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
     Added to favourites
  </Alert>
</Snackbar>
</>

  )
}
