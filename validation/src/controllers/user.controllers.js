const express = require("express");

const { body, validationResult } = require('express-validator');


const User = require('../models/user.model')

const router = express.Router();

router.post("", 

body("firstName").trim().not().isEmpty().withMessage("first name cannot be empty").isLength({min:4}).withMessage("mininmum 4 character is required"),
body("lastName").trim().not().isEmpty().withMessage("first name cannot be empty").isLength({min:4}).withMessage("mininmum 4 character is required"),
body("email").isEmail().custom(async(value) =>{
    const user = await User.findOne({email:value});

    if(user){
        throw new Error("Email is already taken");
    }
    return true;
}),
body("pincode").isLength({min:6},{max:6}).withMessage("mininmum 6 character is required"),

body("age").not().isEmpty().withMessage("Age cannont empty")
.isNumeric()
.withMessage("Age must be a number between 1 to 100")
.custom((val)=>{
    if(val<1|| val>100){
        throw new Error("Incorrect age provided");
    }
    return true;
}),
body("gender")
.trim()
.not()
.isEmpty()
.custom((val)=>{
    if(val=="Male" || val=="Female" || val=="Other"){
        return true;
    }else{
        throw new Error("Incorrect gender provided");
    }
   
}),
// body("email").isEmail(),

async(req,res)=>{
    try {
        console.log(body("firstName"));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const users = await User.create(req.body)
        return res.status(201).send(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;