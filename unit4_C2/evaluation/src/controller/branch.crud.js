const mongoose = require('mongoose');

const Branch = require('../model/branch.model')

const express = require('express')

const router = express.Router();

//post request to create branch

router.post("", async(req,res)=>{

    try{
        const branch = await Branch.create(req.body)
        return res.status(201).send(branch)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;
