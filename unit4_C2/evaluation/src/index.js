const express = require('express');
const connect = require('./config/db');
const masterController = require('./controller/master.crud')
const userController = require("./controller/user.crud");
const branchController = require("./controller/branch.crud");
const fixedController = require("./controller/fixed.crud")
const savingController = require("./controller/saving.crud")

const app = express();

app.use(express.json());

app.use("/users", userController)
app.use("/masterAccount",masterController)
app.use("/branch", branchController)
app.use("/fixedAccount",fixedController)
app.use("/savingAccount",savingController)


app.listen(9510,async ()=>{
    try{
        console.log('Listnening on port 9510')
        await connect();
    }catch(err){
        console.log(err.message)
    }
})