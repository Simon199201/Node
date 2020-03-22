var http = require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type": "text/plain"})
    for (let i = 0; i < 10; i++) {
        response.write("hello,world\n");
    }
    response.end("");
}).listen(8888);
console.log("已创建服务器，地址为 http://127.0.0.1:8888");