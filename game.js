var inquirer = require('inquirer');

function Player(name, position, offense, defense) {
    this.name = name,
        this.position = position,
        this.offense = offense,
        this.defense = defense,
        this.goodGame = function() {
            if (Math.floor(Math.random() * 2) == 0) {
                this.offense++;
                console.log(this.name + "'s offense had gone up!\n------------");
            } else {
                this.defense++;
                console.log(this.name + "'s defense had gone up!\n------------");
            }
        },
        this.badGame = function() {
            if (Math.floor(Math.random() * 2) == 0) {
                this.offense--;
                console.log(this.name + "'s offense had gone down!\n------------");
            } else {
                this.defense--;
                console.log(this.name + "'s defense had gone down!\n------------");

            }
        },
        this.printStats = function() {
            console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense);
        }
}
var starters = [];
var subs = [];
var score = 0;

var createPlayer = function() {

    if (starters.length + subs.length < 3) {
        console.log("\nNew player!\n");
        console.log("+++++++++++++++++++++++");

        inquirer.prompt([{
            name: "name",
            message: "Player's name: "
        }, {
            name: "position",
            message: "Player's position: "
        }, {
            name: "offense",
            message: "Offensive ability(select number from 1-10): ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "defense",
            message: "Defensive ability(select number from 1-10): ",
            validate: function(value) {
                if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answers) {

            var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
            if (starters.length < 2) {
                starters.push(player);
                console.log(player.name + " added to starters");

            } else {
                subs.push(player);
                console.log(player.name + " added to subs");
            }

            createPlayer();
        })
    } else {

        playGame(0);
    }
}

playGame = function(x) {
    if (x < 2) {
        x++;
        console.log("------\nRound " + x + "\n-----------");
        var offenseRandom = (Math.floor(Math.random() * 50) + 1);
        var defenseRandom = (Math.floor(Math.random() * 50) + 1);

        var teamOffense = 0;
        var teamDefense = 0;

        for (var i = 0; i < starters.length; i++) {
            teamOffense = teamOffense + starters[i].offense;
            teamDefense = teamDefense + starters[i].defense;
        }
        console.log("Team offense: " + teamOffense);
        console.log("Team defense: " + teamDefense);
        console.log("Random offense: " + offenseRandom);
        console.log("Random defense: " + defenseRandom);

        if (offenseRandom < teamOffense) {
            console.log("You scored a point!");
            score++;
        }
        if (defenseRandom > teamDefense) {
            console.log("You were scored upon!");
            score--;
        }
        inquirer.prompt([{
            name: "confirm",
            type: "confirm",
            message: "Would you like to add a substitution?"
        }]).then(function(answer) {
            if (answer.confirm == true) {
                inquirer.prompt([{
                    name: "sub",
                    type: "rawlist",
                    message: "Who would you like to sub in?",
                    choices: subs,
                }]).then(function(subIn) {

                    var sideline = {};
                    var number = 0;
                    for (var i = 0; i < subs.length; i++) {
                        if (subs[i].name == subIn.sub) {
                            number = i;
                            sideline = subs[i];
                        }
                    }
                    inquirer.prompt([{
                        name: "sub",
                        type: "rawlist",
                        message: "Who would you like to sub out?",
                        choices: starters
                    }]).then(function(subOut) {
                        for (var i = 0; i < starters.length; i++) {
                            if (starters[i].name == subOut.sub) {
                                subs[number] = starters[i];
                                starters[i] = sideline;
                                console.log("Substituion made!")
                            }
                        }
                        playGame(x);
                    })
                })
            } else {
                playGame(x);
            }
        })
    } else {
        console.log("final score is " + score);
        if (score > 0) {
            console.log("Good game! \nCurrent stats have improved!");
            for (var i = 0; i < starters.length; i++) {
                starters[i].goodGame();
            }
        }
        if (score < 0) {
            console.log("Bad game!\nCurrent stats suck!");
            for (var i = 0; i < starters.length; i++) {
                starters[i].badGame();
            }
        } else {
            console.log("It's a tie game!");
        }

        inquirer.prompt([{
            name: "again",
            type: "confirm",
            message: "Would you like to play another match?"
        }]).then(function(answer) {
            if (answer.again == true) {
                playGame(0);
            } else {
                console.log("Come back soon!");
            }
        })
    }
}

createPlayer();
