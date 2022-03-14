const mongoose = require('mongoose');

const Fixedacc = require('../model/fixed.model')

const express = require('express')
const router = express.Router();

router.post("", async(req,res)=>{

    try{
        const fixedAcc = await Fixedacc.create(req.body)
        return res.status(201).send(fixedAcc)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.delete("/:id", async(req,res)=>{

    try{
        const fixedAcc = await Fixedacc.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(fixedAcc)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;
