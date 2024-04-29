const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/shiva")
.then(()=>{
    console.log("Mongo db connected")
})
.catch(()=>{
    console.log("failed")
})
const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=new mongoose.model("66a5",LoginSchema)
module.exports=collection