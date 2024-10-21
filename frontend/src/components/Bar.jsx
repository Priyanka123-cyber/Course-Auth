import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
const Bar = () => {
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/course')
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:'#16639C'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>  </Typography>
            <Link to={'/'}><IconButton size='large' color='white'><HomeIcon/></IconButton></Link>
            <Link to={'/add'}><IconButton><AddIcon/>Add Course</IconButton></Link>
            <Link to={'/'}><Button onClick={clearUser}>Logout</Button></Link>
          </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Bar