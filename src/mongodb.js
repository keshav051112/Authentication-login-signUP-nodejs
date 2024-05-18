const mongoose = require("mongoose")
 
mongoose.connect("mongodb://localhost:27017/LOGINSIGNUP")
.then(()=>{
    console.log("mongoDB connected")
})
.catch(()=>{
    console.log("failed to connect")
})


const loginSchema = new mongoose.Schema({
   name:{
    type:String ,
    required:true
   },
   password:{
    type:String ,
    required:true
   }
})

const collection = new mongoose.model("LOGINSINGUP",loginSchema)

module.exports= collection
