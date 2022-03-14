
const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comment : {type  : String , required : true},
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "post",
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
})

const Comment = new mongoose.model("comment" , commentSchema)

module.exports = Comment;