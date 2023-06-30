var http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url)
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("\{\"key\"\:\"hello\"\}");
    res.end();
  })
  .listen(3000);
