const express = require("express");
const connect = require("./config/db")
const app = express();
const{register,login} = require("./controller/auth.controller")
app.use(express.json());
app.use("/register",register);
app.use("/login",login);
app.use("/todos", todoController)



app.listen(5000,async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message)
    }
    console.log("listening")
})