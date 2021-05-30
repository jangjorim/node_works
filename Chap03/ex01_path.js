var path = require('path')
//경로 관련 전역 변수

console.log(__dirname) // 현재 디렉토리 경로
console.log(__filename) // 현재 파일 경로

//path 모듈의 메소드

console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.basename(__filename))
console.log(path.parse(__filename))

// 객체를 path string으로 변환

var newPath = path.format({ root: 'D:\\',
dir: 'D:\\node_works\\Chap03',
base: 'ex01_path.js',
ext: '.js',
name: 'ex01_path' })

console.log('newPath: ', newPath)

// path.join() 인자들을 조합하여 새로운 경로 생성
var joinPath = path.join(__dirname, path.sep, 
    '..', 'Chap02', path.sep, 'index.html')

console.log('joinPath: ', joinPath)

