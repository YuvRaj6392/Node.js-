const express=require('express');
const bodyParser=require('body-parser');
const router=require('./test.route')
const cors=require('cors')
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//  app.use(cors)
const port=8080;

app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/form.html');
   });

app.post('/form-submitted',(request,response)=>{
    response.send(`Hello there ${request.body.name}`)
   
})
   
app.use('/',router);

app.use('*',(req,res)=>{
    res.sendStatus(404);
})

// app.use((req, res, next) => {
//     res.sendStatus(404);
// })

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


