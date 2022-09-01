const mongoose=require("mongoose");
const emailModel=require('./models/email.schema');
mongoose.connect("mongodb://0.0.0.0:27017/c13batch",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("Connected to the database");
   

    var user1=new emailModel({
        email:"yuvraj@gmail.com",
    });

    user1.save().then((doc)=>{
        console.log(doc)
    }).catch((err)=>{
        console.log(err)
    })

    






}).catch((err)=>{
    console.log(`Could not connect to the database because of ${err}`);
})