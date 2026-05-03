const http = require('http');
const url = require('url')

const myServer = http.createServer((req,res)=>{
    
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    console.log("PATH:", myUrl.pathname);
    switch (myUrl.pathname){
        case "/":
            res.end("Home");
            break;
        case "/about":
            const username = myUrl.query.myname;
            const role = myUrl.query.role;
            const id = myUrl.query.id;
            res.end(`Hi ${username} \n and userId :${id} \n Role ${role}` );
            break;
        case "/contact":
            res.end("Contact-us")
            break;
        default:
            res.end("404 Error !");
    }
})

myServer.listen(8000,()=>console.log("Server Started !"))
