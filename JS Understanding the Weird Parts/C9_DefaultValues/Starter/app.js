const greet = (name) => {
  name = name || '<Your name here>'; 
  /*this sets a default value in case nothing is passed as a 
  parameter. Need to be careful if '0' can be passed.*/
  console.log('Hello' + name);
}

greet(Henry);
//would return 'Hello Henry'

greet(); 
/* would initially return 'Hello undefined' because 
undefined would be coerced into a string upon concatenation.
Once || is added in function to set default value for name, this
should return 'Hello <Your name here> */