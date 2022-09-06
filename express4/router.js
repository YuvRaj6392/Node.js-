const cookieParser = require('cookie-parser');
const express=require('express');
const router=express.Router();
const products=require('./products');
const cookieParser=require('cookie-parser');
const app=express();
app.use(cookieParser())


router.get('/',(req,res)=>{
    // res.download('harry.txt');
    res.cookie('edtech','upgrad',{signed:true}).send('cookie has been set!');
    res.send("Hey yuvraj you are on the home page!")
})

router.get('/products',(req,res)=>{
    res.send(products);
});



router.get('/products/:id',(req,res)=>{
    const id = req.params.id;


    for(let i=0;i<products.length;i++)
    {
        if(products[i].id===parseInt(id))
        {
            res.send(products[i]);
            return
        }
    }
    res.send('Not found')
})

module.exports=router;