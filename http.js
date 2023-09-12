const http = require("http")

const PORT = 2000

const myApp = http.createServer((request, response)=>{
if (req.url === "/"){
    res.writeHead(200, {
        "content-type":"text/html"  })
        res.write(`<html><boby><p>This is my home Page.
        </p></body></html>`)
        res.end();
}
else if (req.url === "/about"){
    res.writeHead(200, {
        "content-type":"text/html"  })
        res.write(`<html><boby><p>This is my About Page.
        </p></body></html>`)
        res.end();
}
else if (req.url === "/contact"){
    res.writeHead(200, {
        "content-type":"text/html"  })
        res.write(`<html><boby><p>This is my Contact Page.
        </p></body></html>`)
        res.end();
} else res.end("invalid Request");

})


myApp.listen(PORT,()=>{
    console.log("host is running already");
})

