var sqlite3 = require ("sqlite3").verbose();


let db = new sqlite3.Database (":memory:", (err) => {
if (err){
console.error (err.message);
throw err;
}
console.log ("connected");
});

const sql = "CREATE TABLE  book (name text year text)";

db.run (sql,(err) => {
  if (err){
  console.log ("table not created");
  }
  else {
    console.log ("table created");
  var insert =" INSERT INTO book (name year) VALUES (?)"
   db.run ( insert, [" prgramming book", "2013"]);
   db.run ( insert, [" Adventure book", "2013"]);
   db.run ( insert, [" IT book","2013"]);
  }}
);
module.exports= db;