const express = require('express')
const app = express()

app.post("/",(req,res)=>{
    res.status(200).json({
        status:"ok",
        message:"Hello"
    })
})
app.post("/signup",(req,res)=>{
    res.status(200).json({
        status:"ok",
        message:"Hello"
    })
})

app.listen(4000,()=>{
    console.log("Server is running...")
})
