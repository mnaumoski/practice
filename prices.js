var video = 4.99;
var movie = 11.49;

var addThemUp = function(a,b){
  var sum = a+b;
  return sum;

}

var addTheTax = function(sum){
 var total = sum * 1.1;
 return total;
}
var total = addTheTax(addThemUp(video, movie));

var printTheTotal = function(total) {
  console.log("running the print total function");
  console.log(total.toFixed(2));
}

printTheTotal(addTheTax(addThemUp(video,movie)));

console.log(total);
// console.log(printTheTotal);
