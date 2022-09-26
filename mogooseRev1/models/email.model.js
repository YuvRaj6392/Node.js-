const mongoose=require('mongoose');
module.exports=mongoose.model('email',mongoose.Schema({
    name:{type:Object},
    age:{type:Number}
},
{ timestamps: true }));