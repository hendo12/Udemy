//function statement
function greet(name) {
  console.log('Hello ' + name);
}

greet('Henry');


//function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};

greetFunc('Henry');


//Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {

  return('Hello ' + name);

}('Henry');

console.log(greeting);


//wrap function in parenthesis to make it a function expression.
//this allows you to make an anonymous function
//adding '()' after object creates IIFE
(function(name) {

  console.log('Hello ' + name);

}());