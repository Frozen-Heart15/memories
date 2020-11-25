import React,{useState, useEffect} from 'react'
import { Grid, TextField, Button, Typography, makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import FileBase from 'react-file-base64';
import {addPost, getUserPosts} from '../actions/post';
import PostItem from './PostItem';



const useStyles = makeStyles(theme=>({

    outerform:{
        backgroundColor:'white',
        borderRadius:'10px',
        height:'100%',
    },
    form:{
        padding:'10px',
    },
    [theme.breakpoints.down('sm')]:{
        profile:{
            direction:'column-reverse'
        },
        outerform:{
            marginBottom:"20px"
        }
    }
    

}))

const Profile = ({addPost,getUserPosts, post:{userPosts, loading}}) => {

    const classes = useStyles();

    useEffect(()=>{
        getUserPosts()
    },[getUserPosts, userPosts])

    const [postData, setPostData] = useState({ title: '', message: '', tags: '', image: '' });

    const clear = () => {
        setPostData({ title: '', message: '', tags: '', image: '' });
      };

      const handleSubmit = async (e)=>{
          e.preventDefault();
          console.log(postData);
          addPost(postData);
          clear();
      }

    return (
        <div style={{maxWidth:'80%',margin:'auto',marginTop:'40px'}}>
          <Grid container alignItems='stretch' className={classes.profile} justify='space-between' spacing={1}>
                

                <Grid item xs={12} sm={6} md={4} container justify="center" className={classes.outerform} >
                <form autoComplete="off" noValidate  className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit}>
                  {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
                  <Typography variant="h6"> Creating a Memory</Typography>
                  <TextField name="title" variant="outlined" label="Title" style={{marginBottom:'5px'}} fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} /> 
                  <TextField name="message" variant="outlined" placeholder="only 50 characters" label="Message" style={{marginBottom:'5px'}} fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} /> 
                  <TextField name="tags" variant="outlined" label="Tags (coma separated)" style={{marginBottom:'5px'}} fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                  <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} /></div>
                  <Button className={classes.buttonSubmit} variant="contained" style={{marginBottom:'5px', marginTop:'5px'}} color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button variant="contained" color="secondary" size="small" style={{marginBottom:'5px'}} onClick={clear} fullWidth>Clear</Button>
                </form>
                </Grid>

                <Grid item xs={12} sm={6} md={8} container justify="center"  spacing={2} >
                {userPosts.map(post => {
                    return (<Grid item xs={12} md={6} key={post._id}>
                    <PostItem post={post} canDelete={true}/>
                    </Grid>)
                })}
                </Grid>

          </Grid> 
        </div>
    )
}

const mapStateToProps = state =>({
    post: state.post
})

export default connect(mapStateToProps,{addPost,getUserPosts})(Profile);
