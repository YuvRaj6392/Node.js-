const express=require('express');
const router=express.Router();
const products=require('./products');


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