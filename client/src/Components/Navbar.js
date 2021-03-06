import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import { Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import logo from '../images/logo.png';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

const useStyles = makeStyles(theme=>({
    navbar:{
        backgroundColor:'white',
        borderRadius:'10px',
        maxWidth:'80%',
        margin:'auto',
        marginTop:'20px',
        padding:'10px',
        fontFamily:'Montserrat, sans-serif',
        
    },
    link:{
        marginLeft:'10px',
        marginTop:'5px',
        color:'grey',
        textDecoration:'none',
        fontSize:'1.3rem', 
        '&:hover':{
            color:'blue',
        },
        
    },
    logo:{
        color:'black',
        textDecoration:'none'
    }
    

}))

const Navbar = ({auth:{isAuthenticated,loading},logout}) => {

    const classes = useStyles();

    const guestLinks =(
        <Fragment>
         <Link className={classes.link} to="/login">Login</Link>
         <Link className={classes.link} to="/register">Register</Link>
         </Fragment>
    )

    const authLinks =(
        <Fragment>
         <Link className={classes.link} to="/profile">Profile</Link>
         <a className={classes.link} href='#!' onClick={logout}>Logout</a>
         </Fragment>
    )

    return (
        <div className={classes.navbar} >
            <Grid container direction="row" className={classes.brand} justify="space-between" alignItems="center">
            <Grid item xs={12} md={4}  container direction="row" > 
                <img src={logo} alt="logo" height="50px" width="50px" />
                <Link className={classes.logo} to="/">
                <Typography variant="h3" style={{fontFamily:'Pacifico, cursive'}} >Memories</Typography> 
                </Link>   
             </Grid>
            <Grid item xs={12} md={3} container direction="row" justify="space-evenly" >
               {!loading && (<Fragment> {isAuthenticated? authLinks : guestLinks} </Fragment>)}
            </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps,{logout})(Navbar)
