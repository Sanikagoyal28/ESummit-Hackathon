import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./homepage.css"
import Navbar from "../Navbar/navbar";

function Homepage (){
    return <>
  <Navbar />
    <div className="HOME">
    {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary"> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shutter
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
    <div className="navbarH">
        <p className="titleH">Shuttle</p>
        {/* <button className="loginH">Login</button> */}
    </div>
    </div>

    </>
}

export default Homepage