// Make a dogs object with three keys...

// First key called "raining" with a value of true

// Second key called "noise" with a value of "Woof!"

var dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: function(){
    if (dogs.raining == true) {
      console.log(dogs.noise)
  }
}
}


// First key called "raining" with a value of false // Second key called "noise" with a value of "Meow!"

// Third key calle "makeNoise" which contains a function which console.logs
// the noise to the screen if it is raining cats
var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: function(){
    if (cats.raining == true) {
      console.log(cats.noise);
  }

}
}

console.log(dogs.noise);
console.log(cats.noise);


cats.raining = true;

cats.makeNoise();
dogs.makeNoise();

function hysteria() {
  if (cats.raining && dogs.raining) {
    console.log("Mass hysteria");
  }
}

hysteria();
// Third key calle "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs





// Make the dog bark

// Make the cat meow

// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.

// BONUS: Look to see if you can find any means to simplify your code further and further