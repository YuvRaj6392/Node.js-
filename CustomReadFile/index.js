const http=require("http");
const httpsStatus=require("http-status-codes");
const fs=require('fs');
const { off } = require("process");
server=http.createServer((req,res)=>{
    let url=req.url;
    if(url.indexOf(".html")!==-1)
    {
        customReadFile(`./views${url}.html`,res);
    }
    else if(url.indexOf(".js")!==-1)
    {
        customReadFile(`./public/js${url}`,res);
    }
    else 
    {
        customReadFile(`./${url}.html`,res);
    }
const customReadFile=(file_path,res)=>{
    fs.readFile(file_path,(err,data)=>{
        if(err)
        {
            res.write("404");
            return;
        }
        else
        {
            res.write(data);
        }
    })
}
    res.end();
})
server.listen(3000);
console.log("the server has been started at port 3000");
