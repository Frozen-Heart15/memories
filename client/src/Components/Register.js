import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import poster from '../images/trekking.jpg';
import { setAlert } from '../actions/alert';
import {register} from '../actions/auth';
import {connect} from 'react-redux';


const useStyles = makeStyles(theme=>({
    register:{
        background:'white',
        padding:'20px',
        borderRadius:'10px',
        marginBottom:'40px',
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
    marginBottom:'40px',

},
overlay:{
    width:'100%',
    height:'100%',
    margin:'none',
    background:'rgba(0,0,0,0.3)',
    borderRadius:'10px',
}

}))

const Register = ({setAlert,register, isAuthenticated}) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({name:"",email:"",password:"",cpassword:""})

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const {name,email,password,cpassword} = formData;

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        if(password !== cpassword){
            setAlert('Password does not match')
        }else{
            register({name,email,password});
        }
    }

    if(isAuthenticated){
        return <Redirect to="/"/>
    }

    return (
        <div style={{maxWidth:'80%',margin:'auto',marginTop:'80px',marginBottom:'80px'}} >

        <Grid container justify='space-between'  >

        <Grid item sm={12} md={7} className={classes.poster} >
                <div className={classes.overlay}>
                <Typography variant="h2" style={{color:'white',padding:'10px',paddingTop:'20px'}} >
                    Store memories so that they last forever.
                </Typography>
                <Typography variant="subtitle1" style={{color:'white',padding:'10px'}} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, nesciunt.
                </Typography>
                </div>
            </Grid>

            <Grid item sm={0} md={1} />

            <Grid item sm={12} md={4} container direction="column" alignContent="center" className={classes.register} >
            <Typography variant="h4" >Sign Up</Typography>

            <form className={classes.root} autoComplete='off' onSubmit={handleSubmit} > 

            <TextField type="text" name="name" size="small" fullWidth
             variant="outlined"  placeholder="Full Name" margin="normal"
             required
             value={formData.name}
             onChange={handleChange}
              />

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

              <TextField type="password" name="cpassword" size="small" fullWidth
             variant="outlined"  placeholder="Confirm Password" margin="normal" required
             value={formData.cpassword}
             onChange={handleChange}
              /> 

              <Button type="submit" variant="contained" fullWidth
              style={{margin:'10px 0'}} color="primary"  > 
                  Submit </Button>
                  </form>
              <Typography variant="subtitle1" size="1" color="textSecondary">
                  Already have an account? 
                  <Link className={classes.link} to="/login">{'  '}Sign In</Link>
                  </Typography>    
           
            </Grid>

            </Grid>

        </div>
    )
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{setAlert,register})(Register)
