
const express = require("express");
const app =express();
app.use(shuh)
// app.use(express.json())
app.get("/book",(req,res)=>{
   res.send("Fetching all books");
})

// const json = require ("./srver.json");
// console.log(json)
// app.use(shuh);

// app.get("/book",(req,res)=>{
//     res.send(json)
// })

app.get("/book/:name",(req,res)=>{
    req.name = req.params.name
    res.send({Bookname:req.name})
})
function shuh(req,res,next)
{
    console.log("fetching all the books");
    next();
}
app.listen("5000",()=>{
    console.log("port is running on 5000");
})





