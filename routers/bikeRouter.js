const express=require("express")
const bikeModel=require("../models/bikeModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
  let data=req.body
  let bikeModelObj1=new bikeModel(data)
  await bikeModelObj1.save()
  res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
  let data=await bikeModel.find()
  res.json(data)
})

module.exports=router