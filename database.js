var sqlite3 = require ("sqlite3").verbose();


let db = new sqlite3.Database (":memory:", (err) => {
if (err){
console.error (err.message);
throw err;
}
console.log ("Database connected");
});

const sql = "CREATE TABLE  book (name text)";

db.run (sql,(err) => {
  if (err){
  console.log ("table not created");
  }
  else {
    console.log ("table created");
  var insert =" INSERT INTO book name VALUES (?)"
   db.run ( insert, [" prgramming book"]);
   db.run ( insert, [" Adventure book"]);
   db.run ( insert, [" IT book"]);
  }}
);
module.exports= db;