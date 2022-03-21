const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String, required: true,min:3,max:30},
        lastName:{type:String,min:3,max:30, optional:true, required: true},
        age:{type:Integer,min:1,max:150 ,required: true},
        email:{type:String, required: true,unique:true},
        profileImage:{type: String, required: true}

    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const User = mongoose.model("user",userSchema)

module.exports = User;