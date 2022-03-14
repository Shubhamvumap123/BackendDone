const express = require('express');
const mongoose = require('mongoose');





const app = express();
app.use(express.json());



app.listen(5000,async()=>{
    try {
        await connect();
    } catch (error) {
        consoel.log("error", error);
    }
})