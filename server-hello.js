var express = require ('express');
var cors = require ('cors');
var bodyParser = require("body-Parser")
var app = express();
app.use(cors());


server = app.listen ('8080', function (){
  console.log ("Hello connecting and listening");
//var host = server.adress().adress;
//var port = server.adress().port;

});

app.get ('/', function (req, res){
  res.json ({message:"ok"});

});