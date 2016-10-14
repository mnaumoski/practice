function Programmer(name, title, age, progLang) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.progLang = progLang;
    // this.PrintStats = function() {
    //     console.log("This person's name is " + this.name);
    //     console.log(this.title);
    //     console.log(this.age);
    //     console.log(this.progLang);
      }


Programmer.prototype.PrintStats = function() {
  console.log("Name: " + this.name + "\nPostions: " + "\nAge: " + this.age + "\nFavorite language: " +this.progLang);
}

var bob = new Programmer ("Bob", "JP", 12, "JS");
bob.PrintStats();

// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

//     * Your "Programmer" constructor should be able to take in the following information...

//         * The programmer's name
//         * Their position/job title
//         * How old they are
//         * Favorite programming language
    
//     * Now create a method for the constructor that would print all of the information contained within an object to the console.

//     * Finally, create a "Programmer" object and call the method to print its contents