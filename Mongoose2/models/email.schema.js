const mongoose=require("mongoose");
const validator=require("validator")
let emailSchema=new mongoose.Schema({
    email:String,
})



module.exports=mongoose.model('Email',emailSchema);
