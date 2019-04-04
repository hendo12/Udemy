var person = new Object();

person['firstName'] = 'Henry';
person['lastName'] = 'Doce';

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
//create a new object called address within the person object
person.address.street = "111 Main St.";
//add a property named street to address object
person.address.city = "Miami";
person.address.state = "Florida";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);