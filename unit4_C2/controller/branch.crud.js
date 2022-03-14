const mongoose = require('mongoose');
const Branch = require('../model/branch.model');
const express = require('express');
const router = express.Router();

router.post("",async(req,res)=>{
    try {
        const branch = await Branch.create(req,body)
        return res.status(201).send(branch);
    } catch (error) {
        return res.status(500).send(err.message)
    }
})

module.exports = router;