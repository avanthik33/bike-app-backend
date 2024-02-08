const mongoose=require("mongoose")

const bikeModel=new mongoose.Schema({
  bikeId:{
    type:String,
    required:true
  },
  bikeName:String,
  bikeColor:String,
  bikePrice:String
})

module.exports=new mongoose.model("bikeCollection",bikeModel)