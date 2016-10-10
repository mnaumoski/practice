// Instructions: 
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it. 
// HINT: You should not need to change *that much* code. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require('geocoder');

var inquirer = require('inquirer');

inquirer.prompt([
    {
    type: "input",
    message: "What city do you live in?",
    name: "city",
  },
  {type: "input",
    message: "What state do you live in?",
    name: "state"}

  ]).then(function (answers) {
    // Use user feedback for... whatever!! 
    geocoder.geocode(answers.city, function(err, data) {
      console.log(JSON.stringify(data, null, 2));

    });

    // var city = answers.city;
    // var state = answers.state;

    // var address = city + state;


    // geocoder.geocode(address, function(err, data){
});

  //   geocoder.geocode(state, function(err, data){
  // console.log(JSON.stringify(data, null, 2));
//     var state = user.state;
//     var address = city + state;

// // Capture all the words in the address (again ignoring the first two Node arguments)
//     for (var i=2; i<city.length; i++){

//   // Build a string with the address.
//     address = address + "" + nodeArgs[i];
//   console.log(address);


