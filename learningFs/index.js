const http=require('http');
const httpStatus=require('http-status-codes');
const fs=require('fs');
const routeResponseMap={
    "/":"<h1>This is the home page",
    "/contact":"This is the contact us page!"
}
server=http.createServer((req,res)=>{
    // console.log("You have reached our application!");
    // if(routeResponseMap[req.url])
    // {
    //  res.end(routeResponseMap[req.url]);
    // }
    // else
    // {
    //     res.end("<h1>404 not found!</h1>");
    // }
    var path=`views/${req.url}.html`;
    fs.readFile(path,(error,data)=>{
        // res.writeHead(200,{'Content-Type':'text/plain'})
        res.write(data);
        res.end();
    })
    // fs.appendFile('appendedFile.html',"This text was created after using the functionality the second time!",(error,data)=>{
    //     res.write("Data");
    //     res.end();
    // });
})
server.listen(3000);
console.log("server is listening at 3000 port!")
