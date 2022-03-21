const mongoose = require("mongoose")

const publicationSchema = new mongoose.Schema(
    {
  
        name:{type:String,required: true},
        postId:{type:mongoose.Schema.Types.ObjectId,ref:"post" ,required:true},
        bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book" ,required:true}
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const Publication = mongoose.model("user",publicationSchema)

module.exports = Publication;