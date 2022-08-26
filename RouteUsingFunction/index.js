const fs = require('fs');
const http = require('http');
const httpStatus = require('http-status-codes');

const port = 3000;

const getViewUrl = (url) => {
    if(url === '/'){
        return `views/index.html`;
    }
    return `views/${url}.html`;
}

const app = http.createServer((req, res) => {
        fs.readFile(getViewUrl(req.url), (error, data) => {
            if(error){
                res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {'Content-Type': 'text/html'});
                res.write("<h1> Not Found </h1>");
                res.end();
                return;
            }
            res.writeHead(httpStatus.OK, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
});

app.listen(port);
console.log('started!')









// const getUrl=(url)=>{
//     if(url==='/')
//     {
//         return `views/index.html`
//     }
//     else
//     {
//         return `views/${url}.html`;
//     }
// }
// app=app.createServer((req,res)=>{
//     fs.readFile(getUrl(req.url),(err,data)=>{
//         if(err)
//         {
//             res.write("404");
//             res.end();
//         }
//         else
//         {
//             res.write(data);
//             res.end();
//         }
//     })
// })