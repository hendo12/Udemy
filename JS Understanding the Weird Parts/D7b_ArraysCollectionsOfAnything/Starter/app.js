/* could do:

var arr = new Array();

or 

*/

var arr = [
  1, 
  false, 
  {
    name: 'Henry',
    address: 'Miami'
  },
  function(name) { //function expression
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  'hello'
];

console.log(arr);

arr[3](arr[2].name);//calls function in array and passes name from array



