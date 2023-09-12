// import http, { ServerResponse,IncomingMessage } from "http"
// const host: number =1990

// const myApp = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>)=>{

// res.writeHead(200)
// res.write("server is up and running using typescript 😎😎")
// res.end()
// })

// myApp.listen(host,()=>{
//     console.log("host is running already");
// })



import fs from "fs";
import http, {ServerResponse, IncomingMessage} from 'http';
import path from "path";

const port :number= 4000


const Sev=http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    res.writeHead(200);
    let connect : string = "site/";

    switch (req.url) {
        case "/":
            connect += "home.html";
            res.statusCode = 200;
            break;
        case "/about":
            connect += "about.html"
            res.statusCode = 200;
            break;
        case "/contact":
            connect += "contact.html"
            res.statusCode = 200;
            break;
        case "/service":
            connect += "service.html"
            res.statusCode = 200;
            break;
        default:
            connect += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path.join(__dirname, connect), (err,data)=>
    {
        if (err)   {
            console.log("An error occured", err);
            res.end()
        }
        else {
            console.log("An error occured", err);
            res.write(data)
            res.end()
        }
    })
})






Sev.listen(port,()=>{
    console.log(`Server is running on:${port}`);
    
})