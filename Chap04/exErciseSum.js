// exersiceSum.js

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
            res.end(data);
        });
    }
}).listen(8080, ()=> {
    console.log(`8080포트번호로 열어서 대기중`);
});

//#endregion


//#region 2. get 방식으로 넘어온 두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기

// var server = http.createServer(function(req, res){
//   console.log('req.url', req.url)
//   if(req.url === '/favicon.ico'){
//     res.end()
//     return
//   }

//   // <1> url을 parsing하여 객체로 저장
//   const parsedURL = url.parse(req.url); 
//   console.log('parsedURL.query : ', parsedURL.query);  // num1=1&num2=100

//   // <2> parsing된 url에서 querystring을 추출하여 객체로 저장
//   const qs = querystring.parse(parsedURL.query); 
//   console.log('querystring : ', qs);  // { num1: '1', num2: '100' }

//   // <3> 변수 num1, num2에 querystring의 num1, num2값을 정수로 변환하여 저장
//   let num1 = parseInt(qs.num1);
//   let num2 = parseInt(qs.num2); 
//   console.log(`num1 : ${num1}, num2 : ${num2}`);

//   // <4> num1, num2에 잘못된 값이 들어있으면 400 Bad Request 에러 코드 전송
//   if( Number.isNaN(num1) || Number.isNaN(num2) ){
//     res.statusCode = 400;  // 400 Bad Request
//     res.end('<h1>Bad Request</h1>');
//   }else{
//     var sum = 0;
//     for(var i=num1; i<=num2; i++){
//       sum += i;
//     }
//     res.end(`<h1>${sum}</h1>`);  // <4> num1부터 num2까지의 합계를 <h1>태그로 감싸서 출력한다. 
//   }
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });

//#endregion
