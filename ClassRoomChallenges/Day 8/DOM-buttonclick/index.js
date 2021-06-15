// alert('hello') //pops up when visiting page
// prompt('hello') //pop up to ask info of the user

let Team1points = document.getElementById("Team1points") 

console.log(Team1points.innerText); 
console.log(typeof Team1points.innerText);

// function team1add(){
    // alert('hello from team 1 add');
// }

function initializePoints( ){
    Team1points.innerText = "0"
}

function team1add(){
    let points = Team1points.innerText;
    points = Number(points) + 1;
    Team1points.innerText = points;
}

initializePoints();


 function team1sub(){
     let points = Team1points.innerText;
     if (points !== "0"){
     points = Number(points) - 1;
     Team1points.innerText = points;
     } else{
         alert("Can not go lower than 0");
     }
 }   

 function initializePoints( ){
    Team1points.innerText = "0"
}

initializePoints();



