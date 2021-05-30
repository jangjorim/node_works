var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

//#region  1. createServer
var server = http.createServer((req, res) => {
    // 1.1 url 얻어오기
    console.log('req.url : ', req.url);

    var parsedUrl = url.parse(req.url);     // url parsing
    console.log('parsedUrl ', parsedUrl);

    // 1.2 url에서 qs 파싱하기
    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    console.log('qs ', qs);

    // 2.1 (qs 존재할경우)
    // 2.1.1 qs값들이 숫자인지 확인
    if(qs.num1 && qs.num2) {
        var result = 0;
        var n1 = parseInt(qs.num1); // qs.num1을 숫자로 변환한
        var n2 = parseInt(qs.num2); // qs.num2를 숫자로 변환한
        if(Number.isNaN(n1) || Number.isNaN(n2)) {
            // 2.1.1.2 숫자가 아니면...
            fs.readFile('./sum.html', (err, data) => {
                res.end(data);
            });
            return;
        } else {
            // 2.1.1.1 숫자면 더한 값 response 해주기
            // 계산식으로 result에 적합한 값을 넣어주기
            for(var i = n1; i <= n2; i++) {
                result += i;
            }
            res.end(`<h1>${result}</h1>`);
        }        
    } else {    
        // 2.2 qs 존재하지 않을 경우
        // 초기 html 파일을 뿌려준다
        // sum.html 파일을 사용
        fs.readFile('./sum.html', (err, data) => {
            console.log('++++++++++'+data);
            res.end(data);
        });
    }
}).listen(8080, ()=> {
    console.log(`8080포트번호로 열어서 대기중`);
});
//#endregion