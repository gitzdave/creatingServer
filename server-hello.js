var express = require ('express');
var cors = require ('cors');
var app = express();
app.use(cors());



var server = app.listen ('8080', function (){
  console.log ("Hello connecting the data")
//var host = server.adress().adress;
//var port = server.adress().port;

})

app.get ("./hello", function (req, res){
res.write ("Hello people from server side")
res.end ();


//pp.get ("./hello", function (req, res){
  //res.write ("Hello people")
  
  })