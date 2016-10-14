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

    if (starters.length + subs.length < 8) {
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
            if (starters.length < 5) {
                starters.push(player);
                console.log(player.name + " added to starters");

            } else {
                subs.push(player);
                console.log(player.name + " added to subs");
            }

            createPlayer();
        })
    } else {

        
        }
    }
}
createPlayer();
