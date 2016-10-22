var mysql = require('mysql');
var prompt = require('prompt');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "GreatBay"
})


function promptUser() {

 inquirer.prompt([
   {
     name: "name",
     type:"input",
     message: "What is your name?"
   },
   {
     type: 'list',
     name: "action",
     message: "What would you like to do?",
     choices: ['Post an item','Bid on an item']
   }])
   .then(function(answers) {
        if (answers.action === "Post an item") {
            inquirer.prompt([
            {
               type:"input",
               name: "item",
               message: "What item do you want to sell?"

            }])
            .then(function(answers) {
                console.log("Great! You want to sell " + answers.item);


            })
         } else {
         //bid
         }
       })
 }

promptUser();

function printConnectionId() {
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})
}

function printTable() {
// READ
connection.query('SELECT * FROM items', function(err, res){
  if(err) throw err;
  console.log(res);
});

connection.query('SELECT * FROM items ', function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + "|" + res[i].descriptor + "|" + res[i].higherBid + "|" + res[i].sellerName + "|" + res[i].buyerName)
    }
    console.log("---------------------------------------------");
})

}


// connection.query('SELECT * FROM music WHERE genre=?', ["pop"], function(err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//         console.log(res[i].id + "")
//     }
//     // console.log(res);
// })

// // create
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


