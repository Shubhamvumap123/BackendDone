const express= require("express");
const app = express();

const Comment = require("../models/comment.js")

app.post("" , async(req, res)=>{
    try{
        const comment = await Comment.create(req.body);
        res.status(200).send(comment);
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.get("" , async(req,res)=>{
    try{
        const comment = await Comment.find({}).populate({path :"postId" , select : ["title"] , populate : {path : "userId" , select : {firstname : 1}}}).populate({path : "userId" , select : ["firstname" , "lastname"]}).lean().exec();
        res.status(200).send(comment)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.patch("/:id" , async(req,res)=>{
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body , {new : true})
        res.status(200).send(comment)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.delete("/:id" , async(req,res)=>{
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id)
        res.status(200).send(comment);
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

module.exports=app;