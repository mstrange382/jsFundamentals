let button1 = document.getElementById("button-fetch");
console.log(button1);
button1.addEventListener("click", handleClick);

function getJoke(){
    let apiUrl = `https://api.chucknorris.io/jokes/random`;
    fetch(apiUrl)
    .then((Response)=> Response.json())
    .then((result) => displayJoke(result.value))
    .catch((error) => console.log(error));
    console.log("hey there from getJoke() function");
}

getJoke();

function displayJoke(joke){
    console.log(joke);
    let div = document.getElementById ("display-fetch");
    div.innerText = "";
    let para = document.createElement ("p");
    para.innerText = joke;
    div.appendChild(para);
}


function handleClick(){
    getJoke();
    }





// async function getJokeAysnc(){
//     let apiUrl = `https://api.chucknorris.io/jokes/random`;
//     try{
//     const Response = await fetch(apiUrl); // JSON format
//     const result = await Response.json(); // converts JSON to OBJ literal
//     console.log(result);
//     } catch (error){
//         console.log(Error);
//     }
// 