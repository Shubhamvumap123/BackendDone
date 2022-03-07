const express = require("express");
const app = express();
app.use(express.json())
app.use(logger)
// app.use(checkPermission)
app.get("/books",(req,res)=>{
    res.send("books")
});
app.get("/libraries",checkPermission("librarian"),(req,res)=>{
    // req.name = req.param.name
    res.send({route:"/libriaries",permission:req.permission})
    res.send({permission:true})
});
app.get("/authors",checkPermission("authors"),(req,res)=>{
    res.send({route:"/author",permission:req.permission})
    res.send({permission:true})
});


function logger(req,res,next){
    console.log(req.path);
    next()
}
function checkPermission(isit){
    return function (req,res,next)
    {
        if(isit=="librarian"){
            if(req.path=="/libraries"){
                req.permission==true;
                next()
            }
        }if(isit=="authors"){
            if(req.path=="/author"){
                req.permission=true;
                next()
            }
        }
    }
   
}

app.listen("5000",()=>{
    console.log("port is running on 5000")
});
