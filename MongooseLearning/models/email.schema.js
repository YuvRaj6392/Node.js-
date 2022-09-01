const mongoose=require("mongoose");
let emailSchema=new mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    createdAt:Date
})
emailSchema.methods.getFullName=function(){
    return this.firstName+" "+this.lastName;
}

emailSchema.statics.findByFirstName=function(value){
    this.find({firstName:value},(err,doc)=>{
        console.log(doc)
    })
}
emailSchema.pre('save',function(){
    let date=Date.now();
   this.createdAt=date;
})
module.exports=mongoose.model('Email',emailSchema);
