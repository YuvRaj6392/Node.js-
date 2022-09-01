const http=require("http");
const httpsStatus=require("http-status-codes");
const fs=require("fs");
server=http.createServer((req,res)=>{
    let url=req.url;
    console.log(url);
    if(url.indexOf(".html")!==-1)
    {
        fs.readFile(`views/${url}.html`,(err,data)=>{
            if(err)
            {
                res.write(err);
                res.end();
            }
            else
            {
                res.write(data);
                res.end();
            }
        })
    }
    else
    {
        res.write("file not found!");
        res.end();
    }
})
server.listen(3000);
console.log("The server has been start at port 3000");
