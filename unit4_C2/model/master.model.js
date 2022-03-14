const mongoose = require("mongoose");

const masterAcc = new mongoose.Schema({
    "balance":{type: "string",required: true},
    "user_id":{type:String.Schema.Types.ObjectID,required:true,ref:'user'},
    "branch_id":{type:String.Schema.Types.ObjectID,required:true,ref:'branchDetails'},
    "saving_id":{type:String.Schema.Types.ObjectID,required: true,ref:'savingAccount'},
    "fixed_id":{type:String.Schema.Types.ObjectID,required: true,ref:'fixedAccount'},
    
},{
    timestamps:true,
    versionKey:false,
})
module.exports= mongoose.model("masterAccount", masterAcc);