const express=require("express");
const route=express.Router();
const EmpController=require("../controllers/empController");

route.post("/insert",EmpController.empInsert);
route.get("/display",EmpController.empDisplay);

module.exports=route;