var a;

// goes to internet and looks for a value

a = null; //or "", 0, or undefined -> then would be false

if (a || a === 0) {
  console.log('Something is there.');
}