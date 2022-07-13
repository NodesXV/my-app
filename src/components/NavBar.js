import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo/svg'
import logoMobile from '../logomobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']:{
            flexDirection: "column"
        }
    },
    logo: {
        width: "15%",
        ['@media (max.width:7890px']: {
            display: "inline-block"
        }
    },
    logoMobile: {
        width: "100";
        ['@media (max.width:780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor:"pointer",
        flexGrow: 1,
        "&.hover":{
            color: "#4f25c8"
        },
        ['@media (nmax-width:780px)']: {
            paddingBottom: "1rem"}
        }
    })



function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo}/>
            <img src={logoMobile} className={classes.logoMobile}/>
            <Typography variants="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variants="h6" className={classes.menuItem}>
                Blog
            </Typography>
            <Typography variants="h6" classname={classes.menuItem}>
            Careers    
            </Typography>
            <Typography variants="h6" classname={classes.menuItem}>
            Demos   
            </Typography>
            <Typography variants="h6" calssname={classes.menuItem}>
            Contact Us   
            </Typography>
            <CustomBtn txt="Trial Our Product"/>
        </Toolbar>
        )
}
export default NavBar
