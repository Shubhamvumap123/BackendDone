const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    firstName:{type: String, required: true},
    lastName:{type:String, required:false},
    profilePicture:[{type: String, required:true}],

},
{ 
    timestamp:true,
    versionKey:false,
}
)

module.exports = mongoose.model('user',userSchema);
