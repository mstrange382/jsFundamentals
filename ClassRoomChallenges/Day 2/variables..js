var myName = "Rob"
var person1 = 'Josh';
var person2 = `Brenda`
let animal = "tiger"
​
const weather = "cloudy"
console.log("Weather", weather)
​
// weather = 'rainy' < Produces and Error because of the const at line 7
console.log("Weather Changed", weather)
​
var myname = "Jeff"
​
console.log("My Name", myName )
​
// var myName = "Steve"  < Not Needed
​
// Reassigning a variable we do not need to reinitialize the bucket
myName = "Steve"
​
console.log("My Name Changed", myName)
​
let phrase = "Good Morning"
​
// console.log(phrase, myName) // Works fine
​
// console.log(phrase+" "+myName) // Works fine
​
console.log(`${phrase} ${myName}, how are you?`)



let myName="Mitch"
let buddy="ScottM"


console.log(myName.length);
console.log(buddy.length);

let Mitch=true;

if (Mitch){
    console.log(`Mitch's name is shorter.`);
}

let Mitch=6;
if (Mitch>5){
    console.log(`Mitch's name is shorter.`)
} else {
    console.log(`Scott's name is longer.`);
}

