/*
scope
-locally - think indy as the local scope
-globally - think planet earth as our global scope
*/

let x ="declared outside of the function";

function exampleScope () {
    let x = "declared inside the function";
    console.log ("we are inside the function exampleScope");
    // console.log (x);
}

exampleScope();
console.log (x);

//example 2

let color= "blue";
function skyColor(){
    color = "pink";
    console.log (color);
}

skyColor();
console.log(color);

/* var VS let
    const - cannot be reinitialized
    var - scoped to the nearest function block
    let - scoped to the nearest enclosing block
*/

var color = "blue";

function skyColor(){
    var color = "pink";
    if (1==1) {
        var color = "purple";
        console.log(color);
    }
    console.log(color);
}

skyColor();
console.log(color);
//VAR is scoped to the nearest function block, NOT the nearest enclosing block like LET. That is why the 1st variable declaration of color gets reinitialzed as purple.

//LET
let color = "blue";

function skyColor(){
    let color = "pink";
    if (1==1) {
        let color= "purple";
        console.log (color); //purple
    }
    console.log(color); //pink
}

skyColor();
console.log(color); //blue
//LET we don't have to worry about bleeding/scope creeping in the functions/conditionals.
