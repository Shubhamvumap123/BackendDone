const express = require("express");
const mongoose = require("mongoose");
const app = express();


const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/")
}
//User Scema
//step 1:-creating the Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

},
    {
        timestamp: true,
        versionKey: false,
    }
)

//step2:-models creating
const User = mongoose.model("user", userSchema);

//bookSchema
//step 1:-creating a userSchema
const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    body: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId,
        res: "user",
         required: true },
         authorId: { type: mongoose.Schema.Types.ObjectId,
            res: "user",
             required: true },
},
    {
        timestamp: true,
        versionKey: false,
    })
//step2:model
const Book = mongoose.model("book", bookSchema);

//auther authorSchema
//step1:-creating Schema 
const authorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId,
         res: "user",
          required: true },
bookId:{ type: mongoose.Schema.Types.ObjectId,
    res: "book",
     required: true }
},
    {
        timestamp: true,
        versionKey: false,
    }
)
//step2:-models
const Author = mongoose.model("author", authorSchema);

//users crud
app.get("/users",async(req,res) =>{
    try {
        const user = await User.find().lean().exec()
    } catch (error) {
         
    }
})
app.listen(5000, async () => {
    try {
        await connect()
    } catch (error) {

        console.log("error", error)
    }
    console.log("server listening 5000");
})