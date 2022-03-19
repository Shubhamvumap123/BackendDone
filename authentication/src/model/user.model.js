const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true,unique: true},
    password : {type: String, required: true},
},
{
    timestamps:true,
    versionkey:false,
});
userSchema.pre("save",function(next){
    let hashedPassword = this.password + "secrete";
    this.password = hashedPassword;
    return next();
})
const User = mongoose.model("user",userSchema)

module.exports = User;