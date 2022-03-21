const express = require("express");
const mongoose = require('mongoose')
const router = express.Router()
const user = require("../model/user.model")
 const upload=require("../middleware/uploadProfilePic")

 const app = express();

 app.get("/",async(req,res) =>{
try {
    const users = await user.find()
    return res.status(200).send(users)
} catch (err) {
    return res.status(500).send({message:err.message});
}
 });

 app.post("/",upload.single("ProfilePic"),async(req,res)=>{
     try {
         const user = await user.create({
             profilePic:req.file.path,
         });
         return res.status(200).send(user);
     } catch (err) {
         return res.status(500).send({message:err.message})
     }
 }) 

 module.export=app;