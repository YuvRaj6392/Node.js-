const mongoose=require('mongoose');
const childSchema=mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    gender:{type:String}
})

module.exports=mongoose.model('Child',childSchema);