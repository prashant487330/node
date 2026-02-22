const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const EmpRoute=require("./routes/empRoute")

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/relationship").then(()=>{
    console.log("Database connected successfully")
})

app.use(cors())
app.use("/employees", EmpRoute);

app.listen(8000,()=>{
    console.log("Server run on 8000 port.")
})