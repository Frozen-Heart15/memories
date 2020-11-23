import axios from 'axios';
import {setAlert} from './alert';
import {GET_POSTS, POST_ERROR, ADD_POST, GET_USER_POSTS, DELETE_POST, LIKED_POST} from './types';

//Get Posts
export const getPosts = ( ) => async dispatch =>{
    try {
        const res = await axios.get('./api/post')

        dispatch({
            type:GET_POSTS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Get User Posts
export const getUserPosts = ( ) => async dispatch =>{
    try {
        const res = await axios.get('./api/post/user')

        dispatch({
            type:GET_USER_POSTS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Add Post
export const addPost = (formData ) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('./api/post',formData, config)

        dispatch({
            type:ADD_POST,
            payload: res.data
        })

        dispatch(setAlert('Post Created'));

    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Delete Post
export const deletePost = (id) => async dispatch =>{
    try {
        await axios.delete(`./api/post/${id}`)

        dispatch({
            type:DELETE_POST,
            payload: id
        })

    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
        })
    }
}

//Like Post
export const likePost = (id) => async dispatch =>{
    try {
        const res = await axios.put(`./api/post/like/${id}`)

        dispatch({
            type:LIKED_POST,
            payload:{id, likes:res.data}
        })

    } catch (err) {
        dispatch({
            type:POST_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
        })
    }
}