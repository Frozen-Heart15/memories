import React from 'react'
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import moment from 'moment';
import {Card, CardMedia, CardContent, CardActions, Button, Typography, makeStyles} from '@material-ui/core';
import ThumbAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import {deletePost, likePost} from '../actions/post';

const useStyles = makeStyles(theme=>({
  card:{
    position:'relative',
    zIndex:'1',
    height:'400px'
  },
  media:{
    backgroundColor:"rgba(0,0,0,0.3)",
    backgroundBlendMode:'darken',
    height:'230px'
  },
  overlay:{
    position:'absolute',
    top:'5%',
    left:'5%',
    zIndex:'20',
    color:'white',
  }
}))

const PostItem = ({auth, post:{_id, name,image, creator, created_at, title, message, likes,user,tags},canDelete, deletePost, likePost}) => {
    
    const classes = useStyles();
  let msg = message.substring(0,50);
    
    return (
        
            <Card className={classes.card}>
            <CardMedia
            component="img"
            alt={title}
            image={image}
            title={title}
            className={classes.media}
            />
            <div className={classes.overlay}>

            <Typography variant="body2">{creator}</Typography>
            <Typography variant="body2">{moment(created_at).fromNow()}</Typography>

            </div>
            <CardContent>
            <Typography variant="body2" color="primary" component="p">
            {tags.map(item => '#' + item.trim()+ ' ')}
            </Typography>
            <Typography  variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {msg}
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small"  color="primary" onClick={()=>likePost(_id)} >
          <ThumbAltIcon fontSize="small"/> {likes.length}
        </Button>
       { canDelete && <Button size="small"  color="primary" onClick={()=>deletePost(_id)} >
          <DeleteIcon fontSize="small"/>
        </Button>}
      </CardActions> 
            </Card>
     
    )
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps,{deletePost, likePost})(PostItem)
