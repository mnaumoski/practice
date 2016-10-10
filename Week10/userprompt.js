// Create a basic command line Node application using the inquirer package.
var inquirer = require('inquirer');
inquirer.prompt([
    {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  
  { type: "password",
    message: "What is your password?",
    name: "password" },
  {
    type: "input",
    message: "What is your age",
    name: "age"

  },
  {
    type: "list",
    message: "Pick your favorite from the list!",
    choices: ["blue", "white", "black"],
    name: "You love this color:"
  }

  ]).then(function (answers) {
    // Use user feedback for... whatever!! 
});
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

//  	- Basic input, 
//		- Password, 
//		- List, 
//		- Checkbox, 
//		- and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
