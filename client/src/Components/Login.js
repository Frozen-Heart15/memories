import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles(theme=>({
    login:{
        background:'white',
        padding:'20px',
        borderRadius:'10px',
        width:'350px',
        marginTop:'50px',
    },
   link:{
       textDecoration:'none',
       color:'blue'
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
        <Container className={classes.login} >
            <Grid container direction="column" alignContent="center" >
            <Typography variant="h4" >Login</Typography>

            <form className={classes.root} onSubmit={handleSubmit} > 
            <TextField type="text" name="email" size="small" fullWidth
             variant="outlined"  placeholder="Email"
             value={formData.email}
             onChange={handleChange}
              /> 

              <TextField type="password" name="password" size="small" fullWidth
             variant="outlined"  placeholder="Password"
             value={formData.password}
             onChange={handleChange}
              /> 

              <Button type="submit" variant="contained" color="primary"  > 
                  Submit </Button>
                  </form>
              <Typography variant="body2" color="textSecondary">
                  Don't have an account? 
                  <Link className={classes.link} to="/register">Sign up</Link>
                  </Typography>    
           
            </Grid>
        </Container>
    )
}

export default Login
