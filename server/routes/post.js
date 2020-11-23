const express = require('express');
const router = express.Router()
const {check, ValidationResult, validationResult} = require('express-validator');
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const User = require('../models/User');


//@route    POST /post
//@desc     create a post
//@access   Private
router.post('/',[auth,[
    check('title','Title is required').not().isEmpty(),
    check('message','Message is required').not().isEmpty()
]],async (req,res)=>{
     
    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

    try {
        const user = await User.findById(req.user.id).select('-password');

        let newPost = new Post(req.body)
        newPost.user = req.user.id;
        newPost.creator = user.name;

        const post = await newPost.save();
        res.json(post);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
})

//@route    GET /post
//@desc     get posts
//@access   Public
router.get('/',async (req,res)=>{
    try {
        const posts = await Post.find().sort({created_at:-1});
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route    GET /post/user
//@desc     get posts of a particular user
//@access   Private
router.get('/user',auth,async (req,res)=>{
    try {
        const posts = await Post.find({user:req.user.id}).sort({created_at:-1});
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route    GET /post/:id
//@desc     get a post
//@access   Private
router.get('/:id',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message:'No post Found'})
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({message:'No post Found'})
        }
        res.status(500).send('Server Error');
    }
})


//@route    DELETE /post/:id
//@desc     remove a post
//@access   Private
router.delete('/:id',auth,async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message:'No post Found'})
        }

        if(post.user.toString() !== req.user.id){
            return res.status(401).json({message:'Not authorized'})
        }

        await post.remove()
        res.json({message:"Post removed!"});

    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({message:'No post Found'})
        }
        res.status(500).send('Server Error');
    }
})

//@route    PUT /post/like/:id
//@desc     like a post
//@access   Private
router.put('/like/:id',auth,async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message:'No post Found'})
        }

        //Check if already liked
        if(post.likes.filter(like=>like.user.toString() === req.user.id).length > 0){
            let index = post.likes.findIndex(like=> like.user.toString() === req.user.id)
            post.likes.splice(index,1);
            // res.json({message:"Post already liked"})
        }else{
            post.likes.unshift({user:req.user.id})
        }
        await post.save()
        res.json(post.likes);

    } catch (error) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({message:'No post Found'})
        }
        res.status(500).send('Server Error');
    }
})


module.exports = router;