const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title : {type: String, required: true,unique: true},
    body : {type: String, required: true,unique: true},
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
},
{
    timestamps:true,
    versionkey:false,
})

const User = mongoose.model("user",postSchema)

module.exports = User;