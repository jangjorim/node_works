var fs = require('fs')

//// 1. 파일 쓰기 & 읽기 
// fs.writeFile('./readme.txt', 'Hello world', function(err){
//     console.log('파일 쓰기 완료')

//     fs.readFile('./readme.txt', 'utf-8', function(err, data){
//         console.log(data)
//     })
// })

// // 2. 파일에 내용 추가하기
// fs.appendFile('./readme.txt', '\n안녕하세요', 'utf-8', ()=>{
//     console.log('데이터 추가 완료')
//     fs.readFile('./readme.txt', 'utf-8', function(err, data){
//         console.log(data)
//     })
// })

//// 3. 파일 존재 여부 확인

// fs.access('./readme.txt', fs.R_OK, (err)=> {
//     if(err){
//         console.log('해당 파일을 찾을 수 없습니다.')
//         return;
//     }
//     fs.readFile('./readme.txt', 'utf-8', function(err, data){
//         console.log(data)
//    })
// })

// 4. 디렉토리 읽기

fs.readdir('./', (err, files) =>{
    console.log(files)
})


