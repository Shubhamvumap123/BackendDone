const express= require("express");
const app = express();
const Post = require("../models/post.js")
const Comment = require("../models/comment.js")

app.post("" , async(req,res)=>{
    try{
        const post = await Post.create(req.body)
        res.status(200).send(post)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.get("" , async(req,res)=>{
    try{
        const post = await Post.find({}).lean().exec();
        res.status(200).send(post)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.get("/:id" , async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id).lean().exec();
        res.status(200).send(post)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.patch("/:id" , async(req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id , req.body , {new : true})
        res.status(200).send(post)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.delete("/:id" , async(req,res)=>{
    try{
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send(post)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.get("/:postId/pavan" , async(req,res)=>{
    try{
        const comment = await Comment.find({postId : req.params.postId}).lean().exec()
        res.status(200).send(comment)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

module.exports=app;