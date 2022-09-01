const mongoose=require("mongoose");
let emailModel=require('./models/email.schema')
mongoose.connect('mongodb://0.0.0.0:27017/c13mongoose',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("Database connection Successful")
     
    var user1=new emailModel({
        email:"yuvraj@gmail.com",
        firstName:"Pre",
        lastName:"Save"

    })
    let fullName=user1.getFullName();
  console.log(fullName);

    //emailModel.findByFirstName("Yuv");

    // emailModel.findOneAndUpdate({
    //     email:"yuvraj@gmail.com"
    // },{email:"darsh@gmail.com"},{new:true}).then(doc=>{
    //     console.log(doc)
    // }).catch(err=>{
    //     console.log(err)
    // })

    // emailModel.find({
    //     email:"yuvraj@gmail.com"
    // }).then(doc=>{
    //     console.log(doc)
    // }).catch(err=>{
    //     console.log(err)
    // })

    user1.save().then(
        (doc)=>{
            console.log(doc)
        }
    ).catch(err=>{
        console.log(err)
    })

}).catch(err=>{
    console.log(`Database connection error! ${err}`);
})
