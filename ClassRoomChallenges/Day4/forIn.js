let student ={
    name: "Amruta",
    awesome: true,
    certification: "javascript",
    week: 1
    //properties: value
    //key = property
};

//For in loops great for iterating over values in an objec.
//For in loops count the countable properties in an object.

//Objects contain propeerties that are numerable. Properties in an object don't contain an index like arrrays but they can be counted.

//poperties are keys. keys go IN object (lock) for it to correctly work and unlock.

for(item in student){
    //console.log(item);
    console.log(student.name[item]);
}
//For in loop itereates over a student object
//each iteration return a property(item)
//key/property is used to access the value of the key/properry


/* BRONZE

    - Using a for in loop, console.log the name of each character from the 
    members key in the fellowshipOfTheRing object.

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

for(character in fellowshipOfTheRing.members){
    if (){
        console.log(`''s name does not begin with a vowel'`);
        
    }
    else {
        console.log(`'__'s name does begin with a vowel'`)
    }

}








//DOT NOTATION!!!

/* SILVER
    - Add a conditional to the for in loop that checks if the characters 
    name does NOT begin with a vowel. Then, using string interpolation, 
    console.log either '__'s name does not begin with a vowel' or '__'s 
    name does begin with a vowel'.
*/


