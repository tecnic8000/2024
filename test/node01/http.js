const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('helloWorld fromNodeJS1---'); 
        res.end();
    }
    else {
        res.write('using other domain---1');
        res.end();
    }
        
});

server.listen('3000');