const mongoose = require('mongoose');

const Saving = require('../model/saving.model');

const express = require('express')
const router = express.Router();

//post request to create saving account

router.post("", async(req,res)=>{

    try{
        const savingAcc = await Saving.create(req.body);
        return res.status(201).send(savingAcc);

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;


