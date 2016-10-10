// NPM Package for reading and writing files
var fs = require('fs'); 
var add = ["pumpkin", "patch", "love fall"];
var query = ["this is fun"];
// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", add, function(err) {

	// If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "movies.txt was updated!"
    console.log("movies.txt was updated!");
});

fs.writeFile("movies.js", query, function(err) {

  // If the code experiences any errors it will log the error to the console. 
    if(err) {
        return console.log(err);
    }

    // Otherwise, it will print: "movies.txt was updated!"
    console.log("movies.txt was updated!");
});s