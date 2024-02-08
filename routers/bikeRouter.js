const express=require("express")
const bikeModel=require("../models/bikeModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
  let data=req.body
  let bikeModelObj1=await new bikeModel(data)
  res.json(bikeModelObj1)
})

module.exports=router