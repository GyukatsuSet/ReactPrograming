// 돌려보기
const http = require('http')
const ctype = {'Content-Type' : 'text/html; charset=utf-8'}

const svr = http.createServer(handler)
svr.listen(1972)

function handler (req, res){
    const url = req.url

    // 최상위 페이지(메인 피에지)
    if(url === '/' || url ==='/index.html'){
        showIndexPage(req, res)
        return
    }

    //(주사위 페이지)
    if(url.substr(0, 6) === '/dice/'){
        showIndexPage(req, res)
        return
    }

    //이외(404)
    res.writeHead(404, cytpe)
    res.end('404 Not Found')
}

//html 페이지
function showIndexPage (req, res){
    res.writehead(200, cytpe)
    const html = '<h1>주사위 페이지 안내</h1>\n' + 
        '<p><a href = "/dice/6">6면체 주사위</a></p>' +
        '<p><a href = "/dice/12">12면체 주사위</a></p>'
    res.end(html)
}

//주사위 페이지
function showDicePage (req, res){
    res.writehead(200, cytpe)
    const a = req.url.split('/') // 몇 면체 주사위인지 확인
    const num = parseInt(a[2])

    const rnd = Math.floor(Math.random() * num) + 1 // 임의 숫자 생

    res.end('p style = "font size : 72px;">' + rnd + '</p>') //출력
    console.log("Succed");
}