 const express = require ("express");

 const app = express()
const book = require ("./book.json")
app.use(express.json())//file of json we tell that to app to do use
//  getreuest= take data fron api
//  delect=delect data from api
//  put/patch= put data and changes
app.get("/shubham",(request,res)=>{
res.send("Hellow")
}) 
app.get("/book",(request,res)=>{
    res.send({mybooks:book})
})
app.listen(5000,()=>{
    console.log("lisning on port 5000")
})

