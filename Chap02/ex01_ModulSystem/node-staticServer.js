// node -static 서드파티 모듈을 사용한 정적 파일 서버 

var static = require('node-static');

var file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);