/*
HOISTING
hoisitng is used to store data to memory so that it can be referenced later.
*/

// console.log(firstName);
// let firstName = "Taylor"

console.log(firstName); //doesn't know what "firstname" means
var firstName = "Taylor"; //saved for later
console.log(firstName); //referenced again here

example();

function example(){
    console.log("Well i guess i can fly now!");
}

function petName(name) {
    console.log(`My cat's name is ${name}`);
}
petName ("Connor");

petName ("Connor"); //hoisting (context execution)
function petName(name) {
    console.log(`My cat's name is ${name}`);
}

/* ONLY DECLARATIONS ARE HOISTED. YOU CANNOT INITIALIZE*/
console.log(hello);
hello="hi" //error because we are initializing. 

//CHALLENGE
/*

*/
