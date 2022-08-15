import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from"react-router-dom"
const Header = () => {
    const[value,setValue]=useState();
  return <>
    <AppBar sx={{backgroundColor:"#232F3D"}} position="sticky">
    <Toolbar>
        <Typography>
            
            <MenuBookIcon/>    
           
            
        </Typography>
        <Tabs textColor='inherit' indicatorColor='secondary' onChange={(e,val)=>setValue(val)} value={value}
        sx={{ml:'auto'}}>
<Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
<Tab  LinkComponent={NavLink} to="/books" label='Books'/>

<Tab LinkComponent={NavLink} to="/about" label='About us'/>
        </Tabs>
        </Toolbar>
    </AppBar>



  </>
  
}

export default Header