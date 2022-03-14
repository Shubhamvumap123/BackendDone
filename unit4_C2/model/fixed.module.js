const mongoose = require('mongoose');
const fixedSchema=new mongoose.Schema({
    "account_number":{type:Number,required:true,unique:true},
    "balance":{type:String,required:true},
    "interestRate":{type:Number,required: true},
    "startDate":{type:Date,required:true},
    "maturityDate":{type:Date,required:true},
    "user_id":{type:String.Schema.Types.ObjectID,required:true,ref:'user'},
    
},
{
    timestamp:true,
    versionKey:false,
});
module.exports = mongoose.model("fixedAccount",fixedSchema);
