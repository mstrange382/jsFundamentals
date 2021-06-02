/*
conditionals - control behavior in JS & determine if code can run. Checks truth/falsehood. IF true, code will run.
*/


/*
Falsy values - considered fasle

1)false
2)null
3)undefined
4)0
5)NaN (not a number)
6) " " (empty string)
*/

/*
Truthy value - considered true
1)true
2)a number that is not zero, positive or neagtive
3) "3" (non-empty string)
*/

let snowing=true;

if (snowing == true){
    console.log('It is snowing outside!');
}


let snowing=false;

if(snowing==false){
    console.log(`It stopped snowing. It's too warm.`);
}


/*
IF ELSE - if expression is false, will run next block of code. Else statement specifies block of code to be executed if condition is fasle.
*/

let puppies =3;
if (puppies < 1){
    console.log(`I need more pups.`);
 } else {
        console.log('i have enough puppers')
    }





