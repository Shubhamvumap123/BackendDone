const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname : {type: String  ,required : true},
    lastname : {type: String , required : true},
    email : {type : String , required : true}

},
{
    versionKey : false,
    timestamps : true
})

const User = new mongoose.model("user" , userSchema)

module.exports = User;