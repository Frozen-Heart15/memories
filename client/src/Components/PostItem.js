import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {Card, CardMedia, CardContent, CardActions, Button, Typography, makeStyles} from '@material-ui/core';
import ThumbAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme=>({

}))

const PostItem = ({auth, post:{_id, name,image, created_at, title, message, likes,user,tags}}) => {
    
    const classes = useStyles();

    
    return (
        
            <Card>
            <CardMedia
            image={image}
            title={title}
            />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(created_at).fromNow()}</Typography>
            </div>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {message}
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          <ThumbAltIcon fontSize="small"/> {likes.length}
        </Button>
        <Button size="small" color="primary">
          <DeleteIcon fontSize="small"/>
        </Button>
      </CardActions>
            </Card>
     
    )
}

const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps,{})(PostItem)
