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
//nihal code for authorised
router.patch("/:id", authenticate, authorise(["admin","seller"]), async(req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})


 module.exports=router;
