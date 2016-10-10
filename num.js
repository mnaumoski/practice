var num1 = process.argv[2];
var num2 = process.argv[3];

var a = num1%7;
var b = num2%7;


if (num1 == num2) {
  console.log("they are equal");
} else {
  console.log("not!");
}

if (a+b==0) {
  console.log("Divisible by 7")
} else {
  console.log("Nope- not to seven");
}