import React,{useState} from 'react'
import {Container, Grid, TextField, Button, Typography, makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import FileBase from 'react-file-base64';
import {addPost} from '../actions/post';


const useStyles = makeStyles(theme=>({

    outerform:{
        backgroundColor:'white',
        marginTop:'20px',
        borderRadius:'10px',
        
    },
    form:{
        padding:'10px',
    }

}))

const Profile = ({addPost}) => {

    const classes = useStyles();

    const [postData, setPostData] = useState({ title: '', message: '', tags: '', image: '' });

    const clear = () => {
        setPostData({ title: '', message: '', tags: '', image: '' });
      };

      const handleSubmit = async (e)=>{
          e.preventDefault();
          addPost(postData);
          clear();
      }

    return (
        <Container>
          <Grid container alignItems='stretch' justify='space-between' spacing={1}>
                <Grid item xs={12} sm={7}>

                </Grid>

                <Grid item xs={12} sm={4} className={classes.outerform} >
                <form autoComplete="off" noValidate  className={`${classes.root} ${classes.form}`}  onSubmit={handleSubmit}>
        <Typography variant="h6"> Creating a Memory</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
                </Grid>
          </Grid> 
        </Container>
    )
}

export default connect(null,{addPost})(Profile);
