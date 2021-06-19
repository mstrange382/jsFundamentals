
  
  function character(){
    fetch('https://rickandmortyapi.com/api/character/')
    .then (Response => Response.json())
    .then (json => displayCharacter(json))
    .catch((error) => console.log(error))
  }
  
  character();
  
  
  function displayCharacter(json){
      console.log(json);
      let Rick = json.results[0].image
      let Morty = json.results[1].image
       document.getElementById("imageOne").src=Rick;
       document.getElementById("imageTwo").src=Morty;
  }