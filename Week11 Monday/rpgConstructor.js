function Person(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.PrintStats = function() {
        console.log("This person's name is " + this.name);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.hitpoints);

    };
    this.IsAlive = function() {
        if (this.hitpoints > 0) {
            console.log("It's alive");
            return true;
        } else {
            console.log("White-walker! Run!");
            return false;
        }
    };
    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    };

    this.LevelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };
}
var new1 = new Person("Tom", "CPA", "Male", 50, 100, 200);
var new2 = new Person("Kim", "CPA", "Female", 40, 150, 230);


new1.PrintStats();
new1.IsAlive();
new1.LevelUp();

new1.attack(new2);

new2.PrintStats();
new2.IsAlive();

new1.PrintStats();



// * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

// * LevelUp: Strength by 5, and their HitPoints by 25.

// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!
