const mongoose=require('mongoose');
const childModel=require('./models/child');
const schoolAdmissionModel=require('./models/schoolAdmission');
mongoose.connect('mongodb://0.0.0.0:27017/LFS',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connected to the database");


childModel.insertMany([{
    name:"yuvraj",
    age:23,
    gender:"male"
},{
    name:"avi",
    age:26,
    gender:"male"
},
{
    name:"anubhav",
    age:22,
    gender:"male"
}],((err,doc)=>{
    if(err)
    {
        console.log("Could not insert the fields for child table");
    }
    else
    {
        console.log("Inserted the field for child table!");
    }
}));

schoolAdmissionModel.insertMany([{
    enrollmentCode:"yuv123"
},{
    enrollmentCode:"avi123"
},
{
    enrollmentCode:"anubhav123"
}],((err,doc)=>{
    if(err)
    {
        console.log("Could not insert the fields for school admission table");
    }
    else
    {
        console.log("Inserted the field for school admission table!");
    }
}));






}).catch(()=>{
    console.log("Failed to connect to the database!");
})