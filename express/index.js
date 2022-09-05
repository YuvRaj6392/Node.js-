const express=require('express')
const app=express();

// function sayHello(request,response,next)
// {
//     console.log("we are in say hello middleware");
//     next()
// }
const port=8080;
app.get('/',(req,res)=>{
    res.send("hello from express app!")

    console.log(req.ip)
})

app.listen(port,()=>{
    console.log(`Application is running on ${port}`)
})