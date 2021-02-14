function art(){
  let pieceName = document.getElementById("piecename").value;
  let cost = document.getElementById("cost").value;
  let artist = document.getElementById("artist").value;
  let description = document.getElementById("description").value;
  let year = document.getElementById("year").value;
  
  if (validation(pieceName, cost, artist, description, year) == true){
    console.log("validation succesfull");
  } else {
    console.log("validation unsuccesfull");
  }
  
  function validation (pieceName, cost, artist, description, year){
    let verification = true;
    if (pieceName.length > 25 || pieceName.length < 2 || pieceName == false){
      console.log("piece name error");
      verification = false;
    }    
    if (cost > 999999 || cost < 1 || cost == false){
      console.log("cost error");
      verification = false;
    }
    if (artist.length > 20 || artist.length < 2 || artist == false){
      console.log("artist error");
      verification = false;
    }
    if (description.length > 250 || description.length < 2 || description == false){
      console.log("description error");
      verification = false;
    }
    if (year > 2019 || year < 0 || year == false){
      console.log("year error"); 
      verification = false;
    }
    return verification;
  }
  
}
















