function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function() {
        console.log(this.hungry);

        if (this.hungry === true) {
            console.log("That was yummy");
            this.hungry = false;
            this.sleepy = true;

        } else if (this.hungry == false) {
            console.log("No thanks! I'm full!");
        }
    }

    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else  {
            console.log("No way! I'm not sleepy!");
        }
    }
    this.play = function() {
        if (this.bored === true) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else  {
            console.log("Not right now. Later?");

        }
    }
    this.increaseAge = function() {
      this.age += 1;
      console.log("Happy Birthday to me! I am "+this.age+" old!");
    }

}

var Dog = new DigitalPal();
Dog.Outside = false;
Dog.Bark = function() {
  console.log("Woof!");
}
Dog.goOutside = function() {
  if(this.Outside === false) {
    console.log("Yay! I love the outdoors!");
    this.Outside = true;
    this.Bark();
  } else if (this.Outside == true) {
    console.log("We're already outside though...");
  }
}

Dog.goInside = function() {
  if (this.Outside === true) {
    console.log("Do we have to? Fine...");
    this.Outside == false;
  } else if (this.Outside == false) {
    console.log("I'm already inside...");
  }
}

var Cat = new DigitalPal;
Cat.HouseCondition = 100;
Cat.meow = function() {
  console.log("Meow!");
}
Cat.destroyFurniture = function() {
  this.HouseCondition -= 10;
  console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  this.bored = false;
  this.sleepy = true;

  if(this.HouseCondition = 0) {

  }
}
Cat.buyNewFurnitue = function() {
  this.HouseCondition += 50;
  console.log("Are you sure about that?");
}

