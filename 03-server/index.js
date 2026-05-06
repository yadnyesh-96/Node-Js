const http = require('http');
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    let sr = 1;
    if (req.url === "/favicon.ico") return res.end();
    const myLog = `${sr} | ${(new Date()).toLocaleString()}  |   ${req.url} |\n`;
    fs.appendFile("logs.txt", myLog, (err, data) => {
        // res+=1;
        switch (req.url) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("About Page");
                break;
            case "/contact":
                res.end("Contact us");
                break;
            default:
                res.end("404 ERROR");
        }
    })
});

myServer.listen(8000, () =>
    console.log("Server Started !"))