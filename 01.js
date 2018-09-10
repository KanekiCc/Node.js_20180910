var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    //判断在地址栏里面输入的时文件地址还是文件夹地址
    if(pathname.indexOf(".")==-1){
        //127.0.0.1:3000/index.html
        pathname+="index01.html"
    }
    //./static/logo.png
    //取到文件路径 logo.png http://127.0.0.1:3000/static/logo.png
    var fileurl="./"+path.normalize("./static"+pathname)
    console.log(fileurl);
    var extname=path.extname(pathname)
    fs.readFile(fileurl,(err,data)=>{
        if(err){
                res.end("404 Not Found")
        }else{
            getmime(extname,(mime)=>{
                res.writeHead(200,{"Content-type":mime})
                res.end(data)
            })
        }
    })
}).listen(3000,"127.0.0.1")
console.log("the server has already run on 3000");

function getmime(extname,callback){
    fs.readFile("./mime.json",(err,data)=>{
        console.log(data);
        var mimeJson=JSON.parse(data)
        console.log(mimeJson);
        var mime=mimeJson[extname]||"text/plain"
        callback(mime)
    })
}0