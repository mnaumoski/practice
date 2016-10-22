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
    runSearch();
})

// READ
// connection.query('SELECT * FROM top5000', function(err, res){
//   if(err) throw err;
//   console.log(res);
// });
function runSearch{
prompt.start();

// Get these properties from the user:
// songs sung by a specific artist
// artists who appear within the top 5000 more than once
// data contained within a specific range
// specific song in

// * HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL's documentation to find some of them.
// * BONUS: Update your application to add in a new column called `genre` which takes a specific song within the top 5000 charts, calls a music API like Spotify, and then updates that song's row to include the genre found. 
prompt.get([ 'songsBySpecificArtist', 'artistMoreThanOnce', 'specificRange', 'specificSong'], function(err, result) {



    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
});

connection.query('SELECT * FROM top5000 ', function(err, res) {
    if (err) throw err;
    for (var i = 0; i < 2; i++) {
        console.log("|" + res[i].artist + "|" + res[i].song + "|" + res[i].year + "|" + res[i].totalSales + "|" + res[i].usSales + "|" + res[i].ukSales + "|");
    }
    console.log("---------------------------------------------");
});
}

connection.query('SELECT * FROM top5000 WHERE artist=?', ["Celine Dion"], function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].artist + "|" + res[i].song + "|");
    }
    // console.log(res);
})

// SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1
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
