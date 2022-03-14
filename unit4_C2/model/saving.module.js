const mongoose = require("mongoose");

const savingSchema = new mongoose.Schema({
    "account_number":{type:Number, required:true,unique:true},
    "balance":{type:Number,required:true},
   "interestRate":{type:Number,required:true},
   "user_id":{type:String.Schema.Types.ObjectID,required:true,ref:'user'},
   
},
{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("savingAccount",savingSchema)