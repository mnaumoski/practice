var mysql = require('mysql');
var prompt = require('prompt');
// defines the connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "topSongsDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

// READ
// connection.query('SELECT * FROM top5000', function(err, res){
//   if(err) throw err;
//   console.log(res);
// });

connection.query('SELECT * FROM top5000 ', function(err, res) {
    if (err) throw err;
    for (var i = 0; i < 2; i++) {
        console.log("|" + res[i].artist + "|" + res[i].song + "|" + res[i].year + "|" + res[i].totalSales+ "|" + res[i].usSales + "|" + res[i].ukSales + "|" );
    }
    console.log("---------------------------------------------");
});

connection.query('SELECT * FROM top5000 WHERE artist=?', ["Celine Dion"], function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].artist + "|" + res[i].song + "|");
    }
    // console.log(res);
})

// create
// connection.query('INSERT INTO music2 SET ?', {
//     title: "Hit me baby one more time",
//     artist: "Britney Spears",
//     song: "pop"
// }, function(err, res) {
//     // console.log(res);
// })

// // update
// connection.query('UPDATE music2 SET ? WHERE ?', [{ title: "Try" },
//         { artist: "Britney Spears" }
//     ],
//     function(err, res) {
//         // console.log(res);
//     });

// // delete
// connection.query('DELETE FROM music2 WHERE ?', {
//     title: "Hit me baby one more time"
// }, function(err, res) {
//     console.log(res);
// });

