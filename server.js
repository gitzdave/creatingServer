var http = require('http')

http.createServer (function (req, res){
  console.log("Server running")
  res.write ("Hey welcome, i have created my first server");
  res.end ();

}).listen("8080");


var express = require ('express');
var cors = require ('cors');
var app = express();
app.use(cors());



var server = app.listen ("8080", function (){
var host = server.adress().adress;
var port = server.adress(),port

})