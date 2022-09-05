const express=require('express');
const router=express.Router();
router.get('/prachi',(req,res)=>{
    res.send("Hello prachi it was an honour to meet you!");
})
module.exports=router;