const mongoose = require('mongoose');
const Fixedacc = require('../model/fixed.model');
const express = require('express');
const router = express.Router();

router.post("",async(req,res)=>{
    try {
        const fixedacc = await Fixedacc.create(req,body)
        return res.status(201).send(fixedacc);
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
router.delect("/:d",async(req,res)=>{
    try {
        const fixedAcc = await Fixedacc.findByIdAndUpdate(req.params.id).lean().exec();
        return res.send(fixedAcc)
    } catch (error) {
        return res.status(500).send(err.message)
    }
})
module.exports = router;