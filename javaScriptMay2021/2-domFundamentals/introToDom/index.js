const header = document.getElementById('header');
console.log(header);

header.style.color = "green"

const errorlist = document.getElementsByClassName('error-list');
console.log(errorlist);

errorlist[1].innerText = "I changed error 2";

//example 1 looping
for(let i=0; i<errorlist.length; i++){
    errorlist[i].style.color="red";
}

//example 2 looping
for(error of errorlist){
    error.style.color = "green";
}

//example 3 looping forEach // CAN NOT DO

errorlist.forEach((error) => (error.style.color ="purple"));


const tags = document.getElementsByTagName("p");
console.log(tags);

tags[0].innerText = "i changed the paragraph text";

const listItems = document.getElementsByTagName("li");
console.log(listItems);

listItems[0].style.fontStyle = "italic";