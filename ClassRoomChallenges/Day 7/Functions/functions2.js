function greeting(){
    //anything in here (curly brackets) will get executed when the function gets called. 
console.log("Hello from greeting!");
}

greeting();


// expressions
// order matters
// difference between expression & declarations
    // declaration gets hoisted
    //expressions do not

let greetingExperssion = function (){
    console.log("Hello from greeting!");
}

greetingExperssion();

//CHALLENGE//
//create a func that, when invoked, lists out the numbers 1-10
    //create func
    //for-loop inside func
    //invoke = call func

function numbers(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}
numbers();


//PARAMATERS
//func have paranaters that are place holders for data that we can pass into the func

function studentGreeting(studentName){
    console.log(`Good afternoon ${studentName}`);
}

studentGreeting("Mitch");

function greetingFullName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`
    console.log(`Hello my name is ${fullName}`);
}
greetingFullName("Mitch", "Strange");


function area(length,width){
    let areaCalc = length * width
    return areaCalc
}

let area1 = area(4 , 10)
console.log(area1);

function volume(length, width, height){
    let volume = length * width * height
    return volume
}
let volume1 = volume (4,10,25)
console.log(volume1);


function convertDogYearsToHumanYears(DogAge){
    let HumanAge = (DogAge-2) * 4 + 21;
    return HumanAge
}
let roscoAge = convertDogYearsToHumanYears (5);
console.log(roscoAge);