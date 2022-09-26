const express=require('express');
const session=require('express-session');
const app=express();
app.use(session({
    secret:"hsfdl3uh43ljdhr9sdfj"
}))

app.get('/',(req,res)=>{

    req.session.name="SampleSession";
    res.send("session has been set!");

})

app.get('/session',(req,res)=>{
    const name=req.session.name;
    res.send(name);
})

app.listen(8080,()=>{
    console.log("the port is running at port 8080!")
})