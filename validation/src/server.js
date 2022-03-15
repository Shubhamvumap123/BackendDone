

const connect = require("./confligs/db")

const app = require("./index");

app.listen(5000,async()=>{
try { 
    await connect();
} catch (error) {
    console.log("error",error);
}
console.log("listening server 5000")
})