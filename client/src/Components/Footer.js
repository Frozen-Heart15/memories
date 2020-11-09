import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor:'white',
        borderRadius:'10px',
        marginTop:'80px',
        marginBottom:'20px',
        padding:'10px',
        fontFamily:'Montserrat, sans-serif',
    },
    

}))


const Footer = () => {

    const classes = useStyles();

    return (
        <Container className={classes.footer}>
            <Typography variant="h6" align="center" color="textSecondary" >
            Copyright &copy; Memories 2020
            </Typography>
        </Container>
    )
}

export default Footer
