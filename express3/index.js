const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//  app.use(cors)
const port=8080;

app.post('/', (request, response)=>{
    response.sendFile(__dirname +'/form.html');
    console.log(request.body)
   });
   

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})