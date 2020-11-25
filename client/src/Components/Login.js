import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import poster from '../images/skydive.jpg';
import {connect} from 'react-redux';
import {login} from '../actions/auth';

const useStyles = makeStyles(theme=>({
    login:{
        background:'white',
        padding:'20px',
        borderRadius:'10px',
        marginBottom:'40px'
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
       marginBottom:'40px'

   },
   overlay:{
       width:'100%',
       height:'100%',
       margin:'none',
       background:'rgba(0,0,0,0.25)',
       borderRadius:'10px',
   }


}))

const Login = ({login, isAuthenticated}) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({email:"",password:""})

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        login(formData.email,formData.password);
        
    }

    if(isAuthenticated){
        return <Redirect to="/"/>
    }

    return (
        <div style={{marginLeft:'auto',marginRight:'auto',marginTop:'80px',marginBottom:'80px',maxWidth:'80%'}} >

        <Grid container direction="row" justify='space-between'  >

            <Grid item sm={12} md={7} className={classes.poster} >
                <div className={classes.overlay}>
                <Typography variant="h1" style={{color:'white',padding:'10px'}} >
                    Welcome Back!
                </Typography>
                <Typography variant="subtitle1" style={{color:'white',padding:'10px'}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, nesciunt.
                </Typography>
                </div>
            </Grid>
            
            <Grid item sm={false} md={1} />

            <Grid item sm={12} md={4}  container direction="column" alignContent="center" className={classes.login} >
            <Typography variant="h4" >Sign In</Typography>

            <form className={classes.form} autoComplete='off' noValidate onSubmit={handleSubmit} > 

            <TextField type="email" name="email" size="small" fullWidth
             variant="outlined"  placeholder="Email" margin="normal"
             required autoComplete='email'
             value={formData.email}
             onChange={handleChange}
              /> 

              <TextField type="password" name="password" size="small" fullWidth
             variant="outlined"  placeholder="Password" margin="normal" required
             value={formData.password} autoComplete='curret-password'
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
        </div>
    )
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login)
