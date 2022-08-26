const http = require('http');
const httpStatus = require('http-status-codes');

const port = 3000;
const app = http.createServer((req, res) => {
	// if(req.url === '/ping'){
	// 	res.writeHead(httpStatus.StatusCodes.ACCEPTED, {'Content-Type':'text/plain'});
	// 	res.write('Pong');
	// 	res.end();
	// }else {
	// 	res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {'Content-Type':'text/plain'});
	// 	res.write('Not Found');
	// 	res.end();
	// }
    if(req.url==="/ping")
    {
        res.writeHead(httpStatus.StatusCodes.ACCEPTED,{'Content-Type':'application/json'});
        res.write("pong");
        res.end();
    }
    else
    {
        res.writeHead(httpStatus.StatusCodes.NOT_FOUND,{'Content-Type':'application/json'});
     res.write("oops! this page could not be found! ")
        res.end();
    }
});

app.listen(port);
