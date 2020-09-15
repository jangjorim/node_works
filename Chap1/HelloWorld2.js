var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.end('<h1>Hello world!!</h1>');
});

server.listen(3000);//port 번호 : 프로세스를 구분시켜주기 위해서