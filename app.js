const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const student=require("./models/student")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/contact",(req,res)=>{
    res.send("welcome")
})

app.listen(8080,()=>{
    console.log("server start")
})

app.post("/add",(req,res)=>{
    res.send("welcome add")
})
