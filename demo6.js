var http = require("http");
var url = require("url");
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    let params = url.parse(request.url, true).query;
    for (let key in params) {
        console.log(key + " = " + params[key])
    }
    response.end("");
}).listen(8888);
console.log("已创建服务器，地址为 http://127.0.0.1:8888");