const express = require("express");
const app=express();
const EmpRoute = require("./routes/empRoute");
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");

// const { config } = require("dotenv");
// require("dotenv")=config;
require('dotenv').config();

// require("dotenv").config
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Succesfully Connected!");
})
app.use((req,res,next)=>{
    console.log("App level middleware 1")
    next();
})

app.use((req,res,next)=>{
    console.log("App level middleware 2")
    next();
})

app.get("/about",(req,res,next)=>{
    console.log("Path level middleware 1")
    next();
},(req,res,next)=>{
    console.log("Path level middleware 2")
    next();
},(req,res)=>{
    console.log("About page")
    res.send("This is About Page")
})

app.use((req,res,next)=>{
    console.log("App level Middleware 3")
})

app.use("/employees", EmpRoute);
const Port=process.env.PORT;
app.listen(8000, ()=>{
    console.log("process.env.PORT");
})