import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import poster from '../images/skydive.jpg';

const useStyles = makeStyles(theme=>({
    login:{
        background:'white',
        padding:'20px',
        borderRadius:'10px',
        maxWidth:'350px',
    },
   link:{
       textDecoration:'none',
       color:'blue'
   },
   poster:{
       backgroundImage: `url(${poster})`,
       backgroundPosition:"center",
       backgroundSize:'cover',
       borderRadius:'10px',
       padding:'0px !important',
       fontFamily:'Montserrat, sans-serif',

   },
   overlay:{
       width:'100%',
       height:'100%',
       margin:'none',
       background:'rgba(0,0,0,0.25)',
       borderRadius:'10px',
       

   }


}))

const Login = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({email:"",password:""})

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        console.log(formData);
    }

    return (
        <Container style={{marginTop:'80px',marginBottom:'80px'}} >

        <Grid container justify='space-between'  >

            <Grid item sm={8} className={classes.poster} >
                <div className={classes.overlay}>
                <Typography variant="h1" style={{color:'white',padding:'10px'}} >
                    Welcome Back!
                </Typography>
                <Typography variant="subtitle1" style={{color:'white',padding:'10px'}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, nesciunt.
                </Typography>
                </div>
            </Grid>

            <Grid item sm={4} container direction="column" alignContent="center" className={classes.login} >
            <Typography variant="h4" >Sign In</Typography>

            <form className={classes.form} onSubmit={handleSubmit} > 

            <TextField type="email" name="email" size="small" fullWidth
             variant="outlined"  placeholder="Email" margin="normal"
             required
             value={formData.email}
             onChange={handleChange}
              /> 

              <TextField type="password" name="password" size="small" fullWidth
             variant="outlined"  placeholder="Password" margin="normal" required
             value={formData.password}
             onChange={handleChange}
              /> 

              <Button type="submit" variant="contained" fullWidth
              style={{margin:'10px 0'}} color="primary"  > 
                  Submit </Button>
                  </form>
              <Typography variant="subtitle1" size="1" color="textSecondary">
                  Don't have an account? 
                  <Link className={classes.link} to="/register">{'  '}Sign up</Link>
                  </Typography>    
           
            </Grid>

            </Grid>
        </Container>
    )
}

export default Login
