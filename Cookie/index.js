const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser('cristiano'));
app.get('/',(req,res)=>{
    res.cookie('edtech','benzema',{signed:true});
    res.send('cookie has been set!')
})

app.get('/readCookies',(req,res)=>{
    res.send(req.signedCookies.edtech);
    
    res.end();
})

app.listen(8080,()=>{
    console.log("The server is running on port 8080")
})