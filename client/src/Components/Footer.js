import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor:'white',
        borderRadius:'10px',
        maxWidth:'80%',
        margin:'auto',
        marginTop:'80px',
        marginBottom:'20px',
        padding:'10px',
        fontFamily:'Montserrat, sans-serif',
    },
    

}))


const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography variant="h6" align="center" color="textSecondary" >
            Copyright &copy; Memories 2020
            </Typography>
        </div>
    )
}

export default Footer
