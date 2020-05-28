const fs = require('fs')

// 동기적으로 파일을 읽어들인다
const data = fs.readFileSync('text.txt', 'utf-8')
console.log(data)

//비동기적으로 파일을 읽어들인다
fs.readFile('text.txt', 'utf-8', readHandler)

function readHandler (err, data){
    console.log(data)
}