/*
ARROW FUNCTIONS
*/

// arrow functions were introduced in ES6. They're a more concise way of writing function expressions. 
//   (1)    (2)
let hi = () => {
    console.log('hi');
};
hi();

/*
    1. set arrow function to a variable
    2. use arrow to signify that it's a function.

    arrow functions can be hoisted. they are NOT declarations.
*/

//CONCISE BODY
let hi= () => console.log("hi");
hi();

//BLOCK BODY
let hi = () => {
    console. log("hi");
};
hi();

//CONCISE VS BODY
let apples = () => console.log('There are ${x} apples.');
apples(10);

//More than one parameter will rewuire parentheses.



