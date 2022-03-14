const express = require("express");
const mongoose = require("mongoose");
 const app = express();
//connect mongodb
const connectDB = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/book")
}
//create schema
const userSchema = mongoose.Schema({
    _id:Number,
    book:String,
    first_name:String ,
    last_name :String,
    ckeckIn :String,
    ckeckout:String,
    ip_address :String, 
})
//model
//users=user
const User = mongoose.model("book_collection",userSchema)
//db.users.find().pretty()

app.get("/book_collection", async(req,res)=>{
    const user = await User.find({}).lean().exec()
    console.log(user)
    return res.send(user)
})
 app.listen(5000,async()=>{
     try {
         await connectDB()
         
     } catch (error) {
         console.log("something went wrong ")
     }
     console.log("listening at 5000")
 })