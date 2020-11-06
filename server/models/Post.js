const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    title: {
        type:String,
        required: true
    },
    message: {
        type:String,
        required: true
    },
    creator: String,
    tags: [String],
    image: String,
    likes:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'users'
            }
        }
    ],
    created_at:{
        type: Date,
        default: new Date() 
    }
})

module.exports = Post = mongoose.model('post',PostSchema);