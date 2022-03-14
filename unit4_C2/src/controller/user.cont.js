const express= require("express");
const app = express();
const User = require("../models/user.js")

app.post("" , async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(200).send(user)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.get("" , async(req,res)=>{
    try{
        const user = await User.find({}).lean().exec()
        res.status(200).send(user);
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.patch("/:Id" , async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.Id , req.body , {new : true})
        res.status(200).send(user)
    }
    catch(err)
    {
        res.status(500).send(err)
    }
})

app.get("/:id" , async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec()
        res.status(200).send(user);
    }
    catch(err)
    {
        res.status(500).send(err)                                                                                                                                                                                                                                                                                                                                                                                                                
    }
})

module.exports=app;