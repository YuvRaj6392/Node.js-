const express=require('express');
const multer=require('multer');
const app=express();

const storage=multer.diskStorage({
    destination: "./images",
    filename:(req,file,callBack)=>{
        callBack(null, Date.now() + '_'+file.originalname)
    }

});

const uploadMiddleware=multer({
    storage:storage
})

// app.post('/upload',uploadMiddleware.single("image"),(req,res)=>{
//     res.send('file has been uploaded!')
// })
app.post('/upload',uploadMiddleware.array("images",3),(req,res)=>{
    res.send('file has been uploaded!')
})

app.listen(8080,()=>{
    console.log("server is listening to port 8080")
})