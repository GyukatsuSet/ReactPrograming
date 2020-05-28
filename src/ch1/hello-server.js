const http = require('http')

const svr = http.createServer(handler) // 서버 생성
svr.listen(1972) // 포트 사용(1972)

function handler (req, res){
    console.log('url : ', req.url)
    console.log('method : ', req.method)

    res.writeHead(200,{'Content-Type' : 'text/html'})
    res.end('<h1>November 21, 1972. Kim Doo-han collapsed from high blood pressure, a long-standing chronic disease. He was 55 years old, and it was only a month after the dictatorship of the Park Chung-hee regime passed the Yushin Constitution for another extension of power..</h1>\n')
}