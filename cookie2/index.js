const express=require('express');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser')
const app=express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(request,response)=>{
   response.sendFile(__dirname+'/form.html');
})


app.use('/authenticate',(req,res,next)=>{
    if(req.cookies.user)
    {
       if(req.cookies.user==="admin")
       {
        res.send("Welcome back!")
       }
       else
       {
        res.sendStatus(404)
       }
    }
    else
    {
        next();
    }

})



app.get('/authenticate',(req,res)=>{
    const name=req.query.name;
    const email=req.query.email;
    res.cookie('user','admin',{maxAge:360000},{signed:true});
    res.send(`hello ${name} your email id is ${email}`)
})


app.listen(8080,()=>{
    console.log("The server is listening to the port 8080");
})