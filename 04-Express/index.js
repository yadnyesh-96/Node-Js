/*
const http = require("http")
const url = require('url')

const myServer = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url,true)
    console.log(myUrl);
    switch(myUrl.pathname){
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            const username = myUrl.query.myname;
            res.end(`Hi ${username} and your id = ${myUrl.query.id}`);
            break;
        case "/contact":
            res.end("Contact");
            break;
        default:
            res.end("Error 404");
    }
})

myServer.listen(8000,()=>console.log("Server Start ....!"))
*/

const express = require('express');

const app = express()
app.get('/',(req,res)=>{
    res.end("Hello from Express");
})

app.listen(8000,()=>console.log("Server started ...!"));