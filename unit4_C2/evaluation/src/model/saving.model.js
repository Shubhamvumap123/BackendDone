const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema({
    "accountNo":{type:Number,required:true,unique:true},
    "balance":{type:Number,required:true},
    "interestRate": {type:Number,required:true},
    "user_id":{type:mongoose.Schema.Types.ObjectId,required:true,ref:'user'},
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("savingAccount",savingSchema)