const mongoose = require('mongoose');

module.exports =()=>{
    return mongoose.connect("mongodb+srv://shubham123:12Shubh34@cluster0.eu4wn.mongodb.net/unit4C4?retryWrites=true&w=majority")
}