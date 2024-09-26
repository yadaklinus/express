const express = require("express")
const app = express()
const PORT = 1946

app.set("view engine","ejs")

require("dotenv").config()

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
    console.log(`runing ${process.env.name}`)
})
