/**
 * madlibs.js activity
 **/

// STUDENTS
// ========

var inquirer = require("inquirer");

function MadLibs(adjectives,nouns,verbs) = {
  this.adjectives = adjectives;
  this.nouns = nouns;
  this.verbs = verbs;
  this.story = "Unfortunately, [nouns] is [nouns] and I [verb] my [noun] so we couldn`t go [verbs] like everybody else."

}

// Your constructor should be able 
// to create objects with four properties...

// 1. An empty array of adjectives.
// 2. An empty array of nouns.
// 3. An empty array of verbs.
// 4. An array or string which will contain 
//    all of the individual pieces of your story.


// Your inquirer prompts should be contained 
// within a recursive function with a callback parameter,
// which we will use to print out our final story



// HINTS
// =====
// 1. Keep in mind how you will select/replace specific elements 
//    when laying out the framework for your story 
//    and the callback function you will be using 
//    to create/print the final product.

// 2. Start out with a small and simple story 
//    before moving onto more complex tales.



// The madlib constructor
function MadLib(nouns,adjectives,verbs) {
  this.nouns = nouns;
  this.adjectives = adjectives;
  this.verbs = verbs;
  this.story = "Once upon a [noun] there was a [adjective] village filled with [noun]. The villagers loved to [verb] all day long.";
  // When does the story get personalized?
  // That will become clear at the end of this file.
}

// Global variables
var loop = 0;
var nouns = [];
var adjectives = [];
var verbs = [];

// Our inquirer prompts, set up as a looping function
var getWords = function(loop){
  // We get two nouns.
  if(loop < 2){
    inquirer.prompt({
      name:"noun",
      message:"Enter a noun: "
    }).then(function(answer){
      // Notice how this promis method 
      // pushes the noun into the global nouns array
      nouns.push(answer.noun);
      // It then iterates the loop,
      loop++;
      // and runs the getWords function again,
      // but with the new value of loop for the argument.
      getWords(loop);
    })
  }
  // Then we get an adjective.
  if(loop >= 2 && loop < 3){
    inquirer.prompt({
      name:"adjective",
      message: "Enter an adjective: "
    }).then(function(answer){
      // The adjective portion's promise method 
      // is the same as the noun portion.
      adjectives.push(answer.adjective);
      loop++;
      getWords(loop);
    })
  }
  // Then, a verb.
  if(loop >= 3 && loop < 4){
    inquirer.prompt({
      name:"verb",
      message:"Enter a verb: "
    }).then(function(answer){
      // This should look familiar.
      verbs.push(answer.verb);
      loop++;
      getWords(loop);
    })
  }
  // When GetWords reaches loop 4, 
  // it takes the data the user entered
  // and instantiates an object of the madlib class.
  if(loop >= 4){
    var madLib = new MadLib(nouns,adjectives,verbs);
    // The new object is then sent to the constructStory function.
    constructStory(madLib);
  }
}

// This function edits the story in a madLibs object
// to reflect the nouns, adjectives and verbs that the user entered.
var constructStory = function(completeObject){
  console.log("got in here");
  // two nouns
  for(var i=0;i<2;i++){
    completeObject.story = completeObject.story.replace("[noun]",completeObject.nouns[i]);
  }
  // one adjective
  for(var i=0;i<1;i++){
    completeObject.story = completeObject.story.replace("[adjective]",completeObject.adjectives[i]);
  }
  // one verb
  for(var i=0;i<1;i++){
    completeObject.story = completeObject.story.replace("[verb]",completeObject.verbs[i]);
  }
  // Then, show the user the story.
  console.log(completeObject.story);
}

// With all of our global variables and functions defined
// we can now trigger the getWords function and set our app in motion.
getWords(loop);
Contact GitHub API Training Shop Blog About
