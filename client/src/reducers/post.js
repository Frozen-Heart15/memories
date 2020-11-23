import {
    GET_POSTS,
    GET_USER_POSTS,
    POST_ERROR,
    ADD_POST,
    DELETE_POST,
    LIKED_POST
} from '../actions/types';

const initialState = {
    posts :[],
    post:null,
    userPosts:[],
    loading:true,
    error:{}
}

export default function(state = initialState,action){
    const {type, payload} = action;

    switch(type){
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_USER_POSTS:
            return {
                ...state,
                userPosts: payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,payload],
                loading:false
            }    
        case DELETE_POST:
            return {
                ...state,
                loading:false,
                userPosts : state.userPosts.filter(post=> post._id !== payload)
            }  
        case LIKED_POST:
            return {
                ...state,
                loading:false,
                posts: state.posts.map(post=> post._id === payload.id? {...post, likes:payload.likes}:post),
                userPosts: state.userPosts.map(post=> post._id === payload.id? {...post, likes:payload.likes}:post)
            }      
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            }    
        default:
            return state    
    }
}