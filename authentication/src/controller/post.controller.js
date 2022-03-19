const express = require('express');
const post = require("../model/post.model")
const router = express.Router();

router.post("",async(req,res)=>{
    try {
        req.body.user_id = req.user_id;
        const post = await post.create(req.body);
        return res.send(post)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("",async(req,res) =>{
    try {
        const post = await post.find().lean().exec();
        return res.send(post);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

 module.exports=router;
