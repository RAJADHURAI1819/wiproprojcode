import React from "react";
import apiConfig from "../config";
import axios from "axios";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { Link , Outlet } from 'react-router-dom'
import { NewsContext} from '../Context/context';
import AccountCircle from '@mui/icons-material/AccountCircle';
const navcontent = ['Home', 'Favourites', 'Business', 'Sports','Science','Technology','Health','Entertainment'];
const Navbar=()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [a,b]=React.useState(false)
  const [c,e]=React.useState(false)
  const [y,z]=React.useState(false)
  const [dd,ddd]=React.useState("")
  
const[set,get]=React.useState("")
const {setfun}=React.useContext(NewsContext)
const Logout = () => {
  setAnchorEl(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        axios.post(`${apiConfig.authapi}/logout`).then(data=>{
    // console.log(data)
  })
    };
    React.useEffect(()=>{
      var d=localStorage.getItem("email")
    if(d==null){
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

function handleChange(event){
  get(event.target.value);
}
const handleClose = () => {
  setAnchorEl(null);
};
const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleMenu1 = (event) => {
  setAnchorE2(event.currentTarget);
};
const handleClose1 = () => {
  setAnchorE2(null);
};
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2}}
          >
            <AccountCircle sx={{color:'white'}}/>
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem sx={{bgcolor:"black"}}onClick={handleClose}><Link to="/Profile" style={{textDecoration:'none' ,color:'blue'}}>Profile</Link></MenuItem>
                <MenuItem sx={{bgcolor:"black"}}onClick={Logout}><Link to="/" style={{textDecoration:'none' ,color:'blue'}}>Logout</Link></MenuItem>
              </Menu>
             {y? <Typography  position="static" className="navbar-brand" sx={{flexGrow:10}}  >
            {dd}
          </Typography>: <Typography position="static" className="navbar-brand" sx={{flexGrow:10}}>
          Guest
          </Typography>}
          <Avatar sx={{mr:2}} src="newsssss.jpg"/>
          <a className="navbar-brand" style={{flexGrow:2}}>
            NewsApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">            
              <form className="d-flex px-4 ">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleChange}
                />
                <Button className="btn btn-outline-success"   variant="contained" color="success"
                onClick={()=>
                  setfun(set)}>
                <Link to="search"style={{textDecoration:'none' ,color:'whitesmoke'}}>Search</Link> 
                </Button>
              </form>
            </ul>
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Categories">
              <IconButton onClick={handleMenu1} sx={{ p: 0 }}>
              <MenuIcon sx={{color:'white'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorE2)}
              onClose={handleClose1}
            > 
            <div style={{backgroundColor:'black'  }}>          
            <MenuItem  onClick={handleClose1} ><Link to="" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[0]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="favourite" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[1]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="business" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[2]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="sports" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[3]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="science" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[4]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="technology" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[5]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="health" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[6]}</Link></MenuItem>  
            <MenuItem  onClick={handleClose1}><Link to="entertainment" style={{textDecoration:'none' ,color:'whitesmoke'}}>{navcontent[7]}</Link></MenuItem>    
            </div>      
            </Menu>
          </Box>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default Navbar;
