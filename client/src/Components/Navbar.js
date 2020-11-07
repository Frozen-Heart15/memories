import React from 'react'
import {Link} from 'react-router-dom';
import {Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import logo from '../images/logo.png';

const useStyles = makeStyles(theme=>({
    navbar:{
        backgroundColor:'white',
        borderRadius:'10px',
        marginTop:'20px',
        padding:'10px',
        fontFamily:'Montserrat, sans-serif',
    },
    link:{
        marginLeft:'10px',
        color:'grey',
        textDecoration:'none',
        fontSize:'1.3rem', 
               
    }

}))

const Navbar = () => {

    const classes = useStyles();

    return (
        <Container className={classes.navbar} maxWidth="lg">
            <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={6} container direction="row" s> 
                <img src={logo} alt="logo" height="50px" width="50px" />
                <Typography variant="h3" style={{fontFamily:'Pacifico, cursive'}} >Memories</Typography>    
             </Grid>
            <Grid item md={2} container direction="row" justify="space-evenly" >
                <Link className={classes.link} to="/login">Login</Link>
                <Link className={classes.link} to="/register">Register</Link>
            </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar
