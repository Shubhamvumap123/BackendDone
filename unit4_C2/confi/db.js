const mongoose = require('mongoose');
const connect = ()=>{
    return mongoose.connect("mongodb+srv://shubham123:12Shubh34@cluster0.djlrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
module.exports=connect;