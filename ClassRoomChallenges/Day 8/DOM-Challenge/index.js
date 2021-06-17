/* 
BRONZE - 
Connect your js file to your html file.
In your html file, create an h1 element with an id of "title".
In your js file, grab your h1 element by its id. 
In your js file, use a property to add text to your h1 element
that says, "This is my Todo List:".
Still in your js file, use a property to style your h1 element and
make it the hex color: "#A9A9A9".
*/

 let title = document.getElementById ("title")
    title.innerText = "This is my To Do list";
    title.style.color = "#A9A9A9";


/* 
SILVER - 
In your html file, create a div element underneath your h1 element
with an id of "div".
In your js file, grab your div element by its id. Still in your js
file, create a new paragraph element. Inside the paragraph element
put in a dummy text (Lorem ipsum). Change the color of the paragraph
text to: "#6495ED". Nest the paragraph element inside the div
element.
*/
 let div = document.getElementById ("div")
 let para = document.createElement ("p");
 para.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec justo id velit malesuada commodo vitae vel lectus. Aenean blandit fringilla placerat. Phasellus sit amet urna suscipit, egestas odio eget, vestibulum nunc. Fusce tincidunt purus in elit imperdiet auctor. Donec vitae enim urna. Morbi fermentum malesuada magna id pharetra. Aenean malesuada fermentum turpis eget ultrices. Aenean quam sapien, ultricies in auctor sit amet, cursus quis dui. Integer at feugiat justo. Ut nec tincidunt tellus. Integer rhoncus pulvinar urna, a commodo risus auctor nec. Sed et nulla in sapien efficitur rutrum ut at lorem. Vestibulum mattis augue quis nisi efficitur, eget maximus tellus rhoncus. Aenean elit quam, vulputate placerat maximus ut, posuere non sem. Fusce molestie laoreet fermentum. Ut eget tellus nulla."
 para.style.color = "#6495ED";
 div.append(para);


 /* 
GOLD - 
In your html file underneath your div element, create an unorganized list
element with an id of "list".
In your js file, grab your ul element by its id. 
Create an array in your js file with 4 different items for your to-do
list. 
Now use a method to go over all the array items. For each item, 
create an li element and put the value of that item into your li element. Append 
the li element to the ul element of "list".
*/

let list = document.getElementById ("list")
let Todo = ["laundry","homework","eat","play with the kids"];

Todo.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.append (li);
});












    






