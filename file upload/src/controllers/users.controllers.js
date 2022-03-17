  const express = require('express');

const User = require('../models/users.model');

const upload = require("../middlewares/upload")

const router = express.Router()

router.get("",async(req,res)=>{
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});
router.post("",upload.single("profilePic"),async(req,res)=>{
    try {
        const user = await User.create({
           firstName:req.body.firstName,
           profilePic:req.file.path,
        });
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message:arr.message});
    }
});

router.post("/multiple",upload.any("profilePic"),async(req,res)=>{
    try{
        const filePaths = req.files.map((file) =>{
            return file.path;
        });
        const user = await User.create({
            firstName:req.body.firstName,
            profilePic:filePath,
        });
        
    }catch (error) {
console.log("error",error)
    }
})

module.exports = router;