const mongoose = require("mongoose");

const masterAcc = new mongoose.Schema({

    "balance":{type:Number,required:true},

    //to get used details and branch id

    "user_id":{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    "branch_id":{type:mongoose.Schema.Types.ObjectId,ref:"branchDetails",required:true},
    "saving_id":{type:mongoose.Schema.Types.ObjectId,ref:"savingAccount",required:true},
    "fixed_id":{type:mongoose.Schema.Types.ObjectId,ref:"fixedAccount",required:true},

},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("masterAccount",masterAcc)