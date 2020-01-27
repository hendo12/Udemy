
let txt = "Programming courses alwayS starts with a hello world example."

let regex1 = /s\s/gi;
let regex2 = /world/;

//----------------- RegExp Methods --------------------------

//returns boolean 
//console.log(regex1.test(txt));

//returns array with matched expression, index, and input
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
console.log(regex1.exec(txt));
//console.log(regex2.exec(txt));

//toString returns string of the regular expression syntax

//----------------- String Methods --------------------------

//outputs an array that is identical to the one produced above by exec
//console.log(txt.match(regex1));

//search returns index of match
//console.log(txt.search(regex1));

//replace replaces regex pattern with second argument passed
//--> not descrutive to original string
//console.log(txt.replace(regex1, 'hi'));

//returns array with the input removed - 
//first index is before match, second index is after the match
//console.log(txt.split(regex1));