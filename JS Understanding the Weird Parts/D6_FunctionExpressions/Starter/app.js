greet();

function greet() {
  console.log('hi');
}

//function expression, also an anonymous function->

var anonymousGreet = function () {
  console.log('hi');
}

//how to invoke the anonymous function ->

anonymousGreet();

function log(a) {
  console.log(a);
}

log(function () {
  console.log('hi');
});
