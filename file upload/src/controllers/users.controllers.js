    
    
    const express = require('express');

const User = require('../models/users.model');

const upload = require("../middlewares/upload")

const gallary = require("../middlewares/gallary")

const router = express.Router()

router.get("/",async(req,res)=>{
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});
router.post("/",upload.single("profilePicture"),async(req,res)=>{
    try {
        const user = await User.create({
           firstName:req.body.firstName,
           profilePicture:req.file.path,
        });
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({message:error.message});
        // return res.status(500).send("profilepic")
    }
});

router.post("/multiple",gallary.array("profilePicture",5),async(req, res)=>{

    try{
        const filePaths = req.files.map((file) =>{
            return file.path;
        });
        const user = await User.create({
            firstName:req.body.firstName,
            profilePic:filePaths,
        });
        return res.status(200).send(user);
    }catch (error) {
console.log("error",error)
    }

}
)

module.exports = router;