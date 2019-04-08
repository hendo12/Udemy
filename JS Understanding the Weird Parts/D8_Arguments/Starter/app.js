function greet (firstName, lastName, language, ...other) {

  language = language || 'en'; //sets default if no param is passed

  if (arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('--------------');
    return;
  }

  console.log(firstName);
  console.log(lastName);
  console.log(language);
  console.log(arguments);
  console.log('arg 0: ' + arguments[0]);//functions like an array, but isn't really
  console.log('-------------')
}

greet();
greet('Henry');
greet('Henry', 'Doe');
greet('Henry', 'Doe', 'es', 'Miami', 'Florida');