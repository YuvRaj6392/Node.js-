const { response } = require('express');
const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const port=8080;
const router=require('./testroute');
const cookieParser=require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//you can miss the character before ?

app.post('/',(req,res)=>{
    res.send(__dirname,'/form.html')
})

app.listen(port,()=>{
    console.log(`we are listening to port ${port}`)
})










// app.get('/:firstName/:lastName',(req,res)=>{
//     res.send(`The first name is ${req.params.firstName} and the last name is ${req.params.lastName}`);
// })


// app.get('/',(req,res)=>{
//     // res.send(`${req.query.sessionId} and ${req.query.course}`);
   
//     res.sendFile(__dirname+'/form.html');
//     console.log(req.body);

// })

// app.post('/post-test',(req,res)=>{
//     console.log(req.body);
//     res.send("hello!");
// })
