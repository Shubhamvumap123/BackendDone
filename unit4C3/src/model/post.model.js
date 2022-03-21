const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        firstName:{type:String, required: true},
        lastName:{type:String, required: true},
        body:{type:String, required: true,unique:true},
        content:{type: String, required: true}

    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const Post = mongoose.model("post",postSchema)

module.exports = Post;