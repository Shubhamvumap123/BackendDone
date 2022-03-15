const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        firstName:{type:String,required: true},
        lastName:{type:String,required: true},
         email:{type:String,required: true},
          pincode:{type:String,required: true}, 
          age:{type:String,required: true},
           gender:{type:String,required: true},

    },
    {
        timestamp:true,
        versionKey:false,
    }
)

const User = mongoose.model('user',userSchema);

module.exports = User;