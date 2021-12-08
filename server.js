var http = require('http')

http.createServer (function (req, res){
  console.log("Server running")
  res.write ("Hey welcome, i have created my first server");
  res.end ();

}).listen("8080");

