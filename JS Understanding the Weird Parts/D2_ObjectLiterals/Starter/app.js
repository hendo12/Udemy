//shorthand to create a new object. Called Object literal
var Henry = {
  firstName: 'Henry', 
  lastName: 'Doce',
  address: {
    city: 'Miami',
    state: 'Florida',
    street: '10th'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstName);
}

greet(Henry);

greet({firstName: 'Mary', lastName: 'Doe'});

//dot notation does the exact same thing
Henry.address2 = {
  street:'333 Second St.'
}

/* above is same as:

person = new Object();
person.firstName = 'Henry';
person.lastName = 'Doce';

*/