var fs = require('fs');

var command = process.argv[2]; //command is total, or deposit (blank), or withdrawal (blank)

var input = parseFloat(process.argv[3]);

var sum = dataArr.reduce(,);

// switch (command) {
//     case total:

//     case withdraw:

//     case deposit:

//     case lotto: 

//     default: 
// }

fs.readFile("bank.txt", "utf8", function(err, data) {

var input = parseFloat(process.argv[3]);

var sum = dataArr.reduce(add, 0);
    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(', ');

    // We will then re-display the content with the split for aesthetics.
    console.log(dataArr);

    // var sum = dataArr.reduce(add, 0);

    // function add(a, b) {
    // return a + b;
    // }

console.log(sum)

    for (var i=0; i<dataArr.length; i++) {
        console.log(dataArr[i]);
    }

  // If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

});

if (command == "total") { 


  var sum = dataArr.reduce(add, 0);
  function add(sum, input) {
    return sum + input;
    }
}