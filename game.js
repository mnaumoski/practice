var inquirer = require('inquirer');

function Player(name, position, offense, defense) {
        this.name = name,
        this.position = position,
        this.offense = offense,
        this.defense = defense,
        this.GoodGame = function() {
          if (Math.floor(Math.random() * 2) == 0) {
            this.offense++;
          }
          else {
            this.defense++;

          }
        },
        this.BadGame = function() {
          if (Math.floor(Math.random() * 2) == 0) {
            this.offense--;
          }
          else {
            this.defense--;

          }},
        this.printStats = function() {
          console.log("Name: " + this.name + "\nPosition: " + this.position  +  "\nOffense: " + this.offense + "\nDefense: " + this.defense);
        }

}


var count = 0;
var players = [];
var subs = [];


var addPlayer = function() {

    if (players.length + subs.length < 8) {
     console.log("New player added below");
     console.log("+++++++++++++++++++++++");

            inquirer.prompt([{
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "What is position do you play?"
            }, {
                name: "offense",
                message: "How offensive are ya? (select number from 1-10)"
            }, {
                name: "defense",
                message: "How defensive are ya? (select number from 1-10)"
            }]).then(function(answers) {
                
                var player = new Player(answers.name, answers.position, answers.offense, answers.defense);
                if (starters.length < 5) {
                  starters.push[player];
                  console.log(starters);

                } else if (starters.length > 5) {


                
                subs.push[player]; 
//                 player.printInfo();
//                 count++;
//                 addPlayer();
            }
        }

//     } else {
//         for (var x = 4; x < playerArr.length; x++) {
//             console.log(playerArr[x]);


//         }
//     }
// }

// function coinFlip() {
//     return Math.floor(Math.random() * 2);
// }

// coinFlip();



//   * Now create a program which allows you to create 3 unique players; 2 starters and 1 subs.

//   * Once all of the players have been created, print their stats.

//   * Once your code is functioning properly, move on to create a function called "playGame" which will /
//be run once all of your players have been created and will do the following...

//     * Loops 10 times
//     * Each time the function loops, two random numbers between 1 and 50 are rolled and compared against your starter's offensive and defensive stats
//       * If the first number is lower than the sum of your team's offensive stat, add one point to your team's score.
//       * If the second number is higher than the sum of your team's defensive stat, remove one point from your team's score.
//     * After the score has been changed, you may choose to substitute any of your players within the starters array with any of those players within the subs array.
//     * If your score is positive after the game has finished, run goodGame() for all of those players currently within the starters array. If your score is negative after the game has finished, run badGame() for all of those players currently within your starters array. If the score is equal to zero, then do nothing.
//     * Prompts the player if they would like to play again: runs playGame from the start once more if they do and ends the program if they don't.

//   * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

//   * HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
