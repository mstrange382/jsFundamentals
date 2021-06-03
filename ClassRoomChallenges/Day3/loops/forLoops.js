//forInLoop
//in does not require that the thing you lop through be numbered
let teach =  "mIke";
let capName;

for (n in teach){
    if (n==0){
        capName = teach[n]. toUpperCase();
    }   else {
        capName += teach[n].toLowerCase();}
    }
    console.log(capName);
//Mike

//forOfLoop
//of requires that your 'thing' you're looping through be iterable--that means it needs to be numbered

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1}

for (item of student){
    console.log(item);
}
//code breaks

let catArray=['tabby', 'british shorthair','burmese'];

for (cat of catArray){
    console.log(cat,'says meow');
}
//"for of" grabs the value of the thing not the number.
//"for in" grabs the number of the thing.


