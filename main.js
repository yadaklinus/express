const express = require("express")
const app = express()
const PORT = 1946

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
    console.log("runing")
})