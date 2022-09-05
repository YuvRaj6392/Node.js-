const express=require('express');
const router=express.Router();

router.get('/myorders/prachi',(request,response)=>{
    response.send(`Prachi past orders page`);
   });


router.get('/cart/addtocart',(request,response)=>{
    response.send(`Some Code here to add product to
   cart collection in MongoDB`);
   });
   
module.exports=router;