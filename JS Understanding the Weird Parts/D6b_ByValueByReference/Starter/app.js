//by value (primitives)
var a = 3;
var b;

b = a;
a = 2; 
//when by value when I change the value of 'a' after 
//assigning 'b', 'b' is not altered

console.log(a, b); //logs 2, 3

//by reference (all objects (including functions))
var c = {greeting: 'hi'};
var d;

d = c; //points d to the same place in memory that c points to. it is not a copy of c

c.greeting = 'hello'; //mutating c changes d

console.log(c, d);

//by reference (even as paramters)

function changeGreeting(obj) {
  obj.greeting = 'Hola'; //mutate
}

changeGreeting(d);
console.log(c,d); //again, mutating one reference will mutate both

//equals operator sets up new memory space (new address)
c = {greeting: 'howdy'}; //didn't exist in memory already so new space is created
console.log(c,d);