var operation = process.argv[2];
var a = process.argv[3];
var b = process.argv[4];
var c = Math.pow(a,b);

if (operation === "add") {
  console.log(parseFloat(a) + parseFloat(b));
}

if(operation === "subtract") {
  console.log(parseFloat(a) - parseFloat(b));
}

if(operation === "multiply") {
  console.log(a*b);
}
if(operation === "divide") {
  console.log(a/b);
}
if (operation === "remainder") {
  console.log(a%b);
}

if (operation === "exp") {
  console.log(c);
}


// if (a == b) {
//     console.log("equal");
// } else {
//     console.log("not equal");

// }
// console.log(a==b);
// console.log(process);

// console.log(process.argv[2] + process.argv[3])

// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3])0);

// console.log(process.argv);


// var a = "bread";
// console.log("Sriracha. Goes great on.... nothing  " + a);
