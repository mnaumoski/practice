// INSTRUCTIONS:
// Level 1: Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
// Level 2 (More Challenging): Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrive the year it was created. 
// ----------------------------------------------------------------------------------

// ... are the places where you need to code!

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...

// Grab or assemble the movie name  and store it in a variable called "movieName"
// ...

// Then run a request to the OMDB API with the movie specified 

var movieName = process.argv[2];

var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// This line is just to help us debug against the actual URL.  
console.log(queryUrl);

var request = require('request');

request(queryUrl, function (error, response, body) {
  if (!error && response.statusCode == 200);
  console.log("The release year of " + movieName + " is " + JSON.parse(body)['Year']);
  console.log(movieName + " is " + JSON.parse(body)['Awards']);
});

// ...
	// If the request is successful
	// ... 

	// Then log the Release Year for the movie
	// ...