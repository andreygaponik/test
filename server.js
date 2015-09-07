var http = require("http");
<<<<<<< HEAD
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
=======

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
>>>>>>> f794a878647508d62f15a52e9cd9c43a66c34cea
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Worlds");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
<<<<<<< HEAD
  console.log("Server has started.");
=======
  console.log("Server has started, hello2.");
>>>>>>> f794a878647508d62f15a52e9cd9c43a66c34cea
}

exports.start = start;