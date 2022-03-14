const mongoose = require('mongoose');

const MasterAcc = require("../model/master.model")

const express = require('express');
const { populate } = require('../model/master.model');
const router = express.Router();

// get request to get all maasterAccount with details

router.get("",async(req,res)=>{

    try{
        const masterAcc = await MasterAcc.find().populate({
            path:"user_id",
            select:["firstName","lastName","age","email","address","gender"]
        }).lean().exec();

        req.send(masterAcc);

    }catch(err){
        res.status.status(500).send(err.message)
    }
})

// get only one account by masterAccountID

router.get("/:id",async(req,res)=>{

    try{

        const masterAcc = await MasterAcc.findById(req.params.id)
        populate({
            path:"fixed_id",
            select:["accountNo","balance"]
        }).populate({
            path:"saving_id",
            select:["accountNo","balance"]
        }).lean().exec();

        req.send(masterAcc);

    }catch(err){
        res.status.status(500).send(err.message)
    }
})

router.post('', async(req,res)=>{
    try{

        const masterAccount = await MasterAcc.create(req.body)
        return res.status(201).send(masterAccount)

    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports = router;
