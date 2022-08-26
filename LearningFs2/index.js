// console.log(require('module').builtinModules);
const http=require('http');
const httpStatus=require('http-status-codes');
const fs=require('fs');
server=http.createServer((req,res)=>{
    var path=`views/${req.url}.html`;
fs.readFile(path,(err,data)=>{
    if(err)
    {
        res.write("File not found!");
        res.end();
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    }
    
})
// fs.appendFile('views/thankyou.html',"Aur batao kya haal hai tumhara bro!",(err,data)=>{
//     if(err)
//     {
//         res.write("error");
//         res.end();
//     }
//     else{
//         res.end("data")
//     }
// })
// fs.unlink('views/thankyou.html',(err,data)=>{
//     if(err)
//     {
//         res.write("File could not be removed!");
//         res.end();
//     }
//     else
//     {
//         res.write("The file was removed!");
//         res.end();
//     }
// })
// fs.rename('views/index.html','home.html',(err,data)=>{
//     if(err)
//     {
//         res.write(err);
//         res.end();
//     }
//     else
//     {
//         res.write("The file could not be removed!");
//         res.end();
//     }
// })
});
server.listen(3000);
console.log("The server at port 3000 has been started!");