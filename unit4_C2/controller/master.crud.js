const mongoose = require('mongoose');
const MasterAcc = require('../model/master.model');
const express = require('express');
const{populate}=require('../model/master.model')
const router = express.Router();

router.get("",async(req,res)=>{
    try {
        const masterAcc = await MasterAcc.find().populate({
            path:"user_id",
            select:["firtName","lastName","age","email"]
        })
    } catch (error) {
        
    }
})

router.post("",async(req,res)=>{
    try {
        const branch = await Branch.create(req,body)
        return res.status(201).send(branch);
    } catch (error) {
        return res.status(500).send(err.message)
    }
})

module.exports = router;