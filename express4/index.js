const express=require('express');
const port=8080;
const app=express();
const router=require('./router');


app.use('/',router);

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
});