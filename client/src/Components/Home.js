import React, { useEffect} from 'react';
import {Container, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {getPosts} from '../actions/post';
import PostItem from './PostItem';

const Home = ({getPosts, post:{posts, loading}}) => {

    useEffect(()=>{
        getPosts()
    },[getPosts, posts])

    return (
        <div style={{maxWidth:'80%',margin:'auto',marginTop:'40px'}}>
            <Grid container alignItems='stretch' spacing={2}>
                {posts.map(post => {
                    return (<Grid item xs={12} sm={6} md={4} lg={3} key={post._id}>
                    <PostItem post={post} canDelete={false}/>
                    </Grid>)
                })}
            </Grid>
        </div>
    )
}

const mapStateToProps = state =>({
    post: state.post
})

export default connect(mapStateToProps,{getPosts})(Home);
