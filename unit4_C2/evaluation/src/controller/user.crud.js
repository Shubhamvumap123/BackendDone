const mongoose = require('mongoose');

const User = require('../model/user.model')

const express = require('express')
const router = express.Router();

router.post("", async(req,res)=>{

    try{
        const users = await User.create(req.body)
        return res.status(201).send(users)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;
