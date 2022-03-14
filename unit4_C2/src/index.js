const express= require("express");
const app = express();

const usercontroller = require("./controller/user.cont.js")
const postcontroller= require("./controller/post.cont.js")
const commentcontroller = require("./controller/comment.cont.js")


const connect = require("./configs/db.js")
app.use(express.json())

app.use("/users/" , usercontroller)
app.use("/posts" , postcontroller);
app.use("/comments" , commentcontroller);

app.listen(5500, async()=>{
    try{
        await connect()
        console.log("Iam connected bro !!")
    }
    catch{
        console.log("sorry bro to connect !!")
    }
    console.log("port is on 5500")
})