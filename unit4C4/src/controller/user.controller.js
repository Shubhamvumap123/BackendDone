const express = require("express");

const router = express.Router()

const User = require("../models/userModel");



router.post('/register',
body("firstName"),body("lastName"),
body("email").custom(async(value)=>{
let user = await User.find({email:value}).lean().exec();
let check = await User.findOne({email:req.body.email}).lean().exec();
if(check) {
    return res.send({message:"try another"})
}
if(user){
    true;
}
throw new Error("error")



})
)
router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email:req.bosy.email})
        if(!user){
            return res.send({message:"wrong"})
        }
    } catch (error) {
        res.send(error.message)
    }
})
module.exports=router