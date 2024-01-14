import React,{useState} from 'react';
import {AppBar,Toolbar,Typography,Tabs,Tab,useMediaQuery,useTheme} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from "./DrawerComp";
const PAGES =["Products","Services","AboutUs","ContactUs"];
const Header = () => {
    const[value,setValue]=useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

  return (
   <React.Fragment>
    <AppBar sx={{background:'#063970'}}>
        <Toolbar>
        <ShoppingCartCheckoutIcon/>

           { isMatch ?(
                <>
                <Typography sx={{fontSize:'1.5rem',paddingLeft:'10%'}}>SHOPEE</Typography>
                <DrawerComp/>
                </>
            ):(
                <>
                <Tabs textColor='inherit' value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                    {
                        PAGES.map((page,index)=>(
                            <Tab key={index} label={page}></Tab>
                        ))
                    }
            {/* <Tab label="Products" ></Tab>
            <Tab label="Services" ></Tab>
            <Tab label="ContactUs" ></Tab>
            <Tab label="AboutUs" ></Tab> */}
        </Tabs>
        <button sx={{marginLeft:"auto"}}variant="contained">Login{" "}</button>
        <button variant="contained">SignUp</button>
                </>
            )}

        </Toolbar>
        
    </AppBar>
   </React.Fragment>
  )
}

export default Header
