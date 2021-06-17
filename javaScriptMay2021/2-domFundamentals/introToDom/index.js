// const header = document.getElementById('header');
// console.log(header);

// header.style.color = "red"

// const errorlist = document.getElementsByClassName('error-list');
// console.log(errorlist);

// errorlist[1].innerText = "I changed error 2";

// //example 1 looping
// for(let i=0; i<errorlist.length; i++){
//     errorlist[i].style.color="red";
// }

// //example 2 looping
// for(error of errorlist){
//     error.style.color = "green";
// }
// console.log("Hello!");
// //example 3 looping forEach // CAN NOT DO

// // errorlist.forEach((error) => (error.style.color ="purple"));

// console.log("Hello!");
// const tags = document.getElementsByTagName("p");
// console.log(tags);

// tags[0].innerText = "i changed the paragraph text";

// const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// listItems[0].style.fontStyle = "italic";
// listItems[1].style.fontStyle = "italic";

// for (let i = 0; i< listItems.length; i++){
//     listItems [i].style.fontStyle = "italic";
// // }


// //query selector = css selectors
// //very specific

// // const header= document.querySelector('h1');
// const header= document.querySelector('#header');
// console.log(header);

const errorList = document.querySelector (".error-list");
// console.log(errorList);

// const errorList2 = document.querySelector ("body > div > ul > li:nth-child(2)")
// console.log(errorList2);


const headerTags = document.querySelectorAll ("h1");
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h=>{
    h.style.color="blue";
})

const listItems = document.querySelectorAll(".error-list");

listItems.forEach([li] =>{
    li.style.fontStyle = "italic"
});
