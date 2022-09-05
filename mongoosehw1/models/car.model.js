const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');
const objectId=mongoose.Schema.Type.ObjectId
const carSchema=mongoose.schema({
    make:{
        type:String
    },
    model:{
        type:String
    },
    owner:{
        type:ObjectId,
        ref:"CarOwner"

    }

})
module.exports=mongoose.model("car",carSchema)