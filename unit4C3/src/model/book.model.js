const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        likes:{type:Integer, minDefault:0},
        coverImage:{type:String,required:true},
        contents:{type:String,required: true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user" ,required:true}
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const Book = mongoose.model("user",bookSchema)

module.exports = Book;