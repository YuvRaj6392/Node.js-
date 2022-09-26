const mongoose=require('mongoose');
const emailModel = require('./models/email.model');
const Email=require('./models/email.model')
const express=require('express');
const app=express();

mongoose.connect('mongodb://0.0.0.0:27017/FirstDatabase',{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to the database");
    // const email=new Email({
    //     name:"yuvraj1",
    //     age:23
    // })
    // email.save().then((doc)=>{
    //     console.log(doc)
    // }).catch(()=>{
    //     console.log("Failed to insert the field!")
    // })

    // Email.find({}).then(doc=>{
    //     console.log(doc)
    // }).catch(()=>{
    //     console.log("Error in finding the result!")
    // })

    // Email.find({name:"shrestha"},(err,data)=>{
    //     if(err)
    //     {
    //         console.log("Error in finding Shreshtha");
    //         return;
    //     }
    //     console.log(data)
    // })

    // Email.findOneAndUpdate({
    //     name:"shrestha"
    // },{
    //     name:"shrestha Raj"
    // },{
    //     new:true
    // }
    // ).then(doc=>{
    //     console.log(doc)
    // }).catch(()=>{
    //     console.log("Error in updating the name of shrestha!")
    // })

    // Email.findOneAndUpdate({
    //     name:"shrestha Raj"
    // },{
    //     name:"shrestha Gupta"
    // },{
    //     new:true
    // },(err,data)=>{
    //     if(err)
    //     {
    //         console.log("Error in updating the name of Shrestha!");
    //         return;
    //     }
    //     console.log(data)
    // })

    // Email.updateMany({
    //     age:{$gte:23}
    // },{age:30}).then(doc => {
    //     console.log(doc)
    //     })
    //     .catch(err => {
    //     console.error(err)
    //     })

    // Email.findOneAndRemove({name:'yuvraj'}).then(doc => {
    //     console.log(doc)
    //    })
    //    .catch(err => {
    //     console.error(err)
    //    })

//    Email.remove({}).then(()=>{
//     console.log("yuvraj se panga nahi beta!")
//    }).catch(()=>{
//     console.log("kya laga yuvraj database uda dega tu haan!")
//    })

}).catch(err=>{
    console.log("Failed to connect to the database")
})

// const middle=(req,res,next)=>{
//     console.log('middleware has been activated!')
//     next();
// }
// app.use('/',(req,res)=>{
//     res.send('hello yuv aur kya haal hai tumhare')
    
//     fetch('https://api.ipify.org/?format=json').then(res=>res.json()).then(data=>{
//         console.log(typeof(data))
//         const email=new Email({
//         name:data,
//         age:23
//     })
//     email.save().then((doc)=>{
//         console.log(doc)
//     }).catch(()=>{
//         console.log("Failed to insert the field!")
//     })
//     });
  
// })

app.get('/:id',(req,res)=>{
    console.log(res.send(req.params.id))
})

app.get('/',(req,res)=>{

    res.send(`${req.query.name} & ${req.query.age}`)
   
})

app.listen(8080,()=>{
    console.log(`The server is running at port 8080`)
})