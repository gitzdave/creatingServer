var express = require ('express');
var cors = require ('cors');
var bodyParser = require("body-parser");
var app = express();
var db = require ("./database.js")
app.use(cors());


server = app.listen ('8080', function (){
  console.log ("Hello connecting and listening");
//var host = server.adress().adress;
//var port = server.adress().port;

});

app.get ('/', function (req, res,next){
 let sql = " SELECT ( name,genre) FROM book ORDER BY name"
 var params = [];
 db.all ( sql, params, (err,rows)=> {
if (err){
res.status(400).json({error: err.message});
return;
}
res.json ({message:"success",
data:rows}
)
 })
 
});