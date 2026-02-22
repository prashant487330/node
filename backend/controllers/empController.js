const UserModel=require("../models/userModel")
const ProfileModel=require("../models/profileModel");
const userModel = require("../models/userModel");
const profileModel = require("../models/profileModel");

const empInsert=async(req,res)=>{
    const{username,email,fname,lname}=req.body;
    const user=await userModel.create({
        username:username,
        email:email
    })
    const profile=await profileModel.create({
        firstname:fname,
        lastname:lname,
        userid:user._id
    })
    res.send("user created...")
}

const empDisplay=async(req,res)=>{
    const user=await profileModel.find().populate("userid");
    res.send(user);
}

module.exports={
    empInsert,
    empDisplay
}