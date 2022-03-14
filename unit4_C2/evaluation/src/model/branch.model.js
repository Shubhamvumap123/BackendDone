const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({

    "name":{type:String,required:true},
    "address":{type:String,required:true},
    "IFSC":{type:String,required:true},
    "MICR":{type:Number,required:true},
},{
    timestamps:true,
    versionKey:false
});


module.exports = mongoose.model('branchDetails',bankSchema);

