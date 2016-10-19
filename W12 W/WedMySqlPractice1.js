var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "musicdb"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

connection.query('SELECT * FROM music2 ', function(err, res){
  if(err) throw err;
  for (var i=0; i<res.length; i++) {
    console.log(res[i].id + "|" + res[i].title + "|" + res[i].artist + "|" + res[i].genre)
  }
  console.log("---------------------------------------------");
})
connection.query('SELECT * FROM music WHERE genre=?', ["pop"], function(err, res){
  if(err) throw err;
  for (var i=0; i<res.length; i++) {
    console.log(res[i].id + "")
  }
  console.log(res);
})
// connection.query('RAW MYSQL', function(err, res){
//   if(err) throw err;
//   console.log(res);
// })
// create a database before attempting to connect to it. Doing otherwise will return an error.

// BONUS: Using MySQL Workbench, create a table in your databse with four columns...

// Primary Key of "ID" which auto-increments
// A column called "title"
// A column called "artist"
// A column called "genre"
// BONUS: Using MySQL Workbench, populate your table with a few rows of dummy data

// BONUS: Start looking into how you can use the MySQL package to read data from a MySQL database