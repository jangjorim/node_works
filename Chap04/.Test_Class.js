var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
const portNumber = 8080;

var server = http.createServer((req, res) => {
    
    var parsedUrl = url.parse(req.url);     // url parsing

    var qs = querystring.parse(parsedUrl.query);  // querystring parsing

    if(qs.num1 && qs.num2) {
        var result = 0;
        var n1 = parseInt(qs.num1); // qs.num1을 숫자로 변환한
        var n2 = parseInt(qs.num2); // qs.num2를 숫자로 변환한
        var condition = qs.operator;
        if(Number.isNaN(n1) || Number.isNaN(n2)) {
            // 2.1.1.2 숫자가 아니면...
            fs.readFile('./calculator.html', (err, data) => {
                res.end(data);
            });
            return;
        }

        result = calculator(n1, n2, condition);
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(`
            <h1>계산 결과: ${result}</h1>
            <h3><a href="http://localhost:${portNumber}">첫 화면으로 돌아가기</a></h3>
        `);

    }else {    
        fs.readFile('./calculator.html', (err, data) => {
            res.end(data);
        });
    }
    function calculator(n1, n2, condition){
        switch (condition){
            case "add":
                return n1 + n2;
            case "subtract":
                return n1 - n2;
            case "multiply":
                return n1 * n2;
            case "divide":
                return n1 / n2;
        }
    }

}).listen(8080, ()=> {
    console.log(`8080포트번호로 열어서 대기중`);
});