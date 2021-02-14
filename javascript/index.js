let things = ['please choose', 'male', 'female', 'transgender', 'non binary', 'other'];

let x = document.getElementById("gender");
for (i = 0; i < things.length; i++){
  let y = `<option value="${i}">${things[i]}</option>`;
  x.innerHTML += y;
}

function myFunction(){
  let email = "";
  //getting the values and setting the initial colour
  let firstName = document.getElementById("firstName").value;/*       */ document.getElementById("firstName").style.borderColor = "#4CAF50"; document.getElementById("firstName_p").style.color = "#4CAF50";
  let lastName = document.getElementById("lastName").value;/*          */ document.getElementById("lastName").style.borderColor = "#4CAF50"; document.getElementById("lastName_p").style.color = "#4CAF50";
  let age = document.getElementById("age").value;/*      this is a gap      */ document.getElementById("age").style.borderColor = "#4CAF50"; document.getElementById("age_p").style.color = "#4CAF50";
  let date = document.getElementById("date").value;/*                      */ document.getElementById("date").style.borderColor = "#4CAF50"; document.getElementById("date_p").style.color = "#4CAF50";
  let houseNumber = document.getElementById("houseNumber").value;/* */ document.getElementById("houseNumber").style.borderColor = "#4CAF50"; document.getElementById("houseNumber_p").style.color = "#4CAF50";
  let postcode = document.getElementById("postcode").value;/*          */ document.getElementById("postcode").style.borderColor = "#4CAF50"; document.getElementById("postcode_p").style.color = "#4CAF50";
  let gender = document.getElementById("gender").value;/*   also a gap   */ document.getElementById("gender").style.borderColor = "#4CAF50"; document.getElementById("gender_p").style.color = "#4CAF50";
  email = document.getElementById("email").value;/*     also a gap        */ document.getElementById("email").style.borderColor = "#4CAF50"; document.getElementById("email_p").style.color = "#4CAF50";
  //checking the validation
  if (validation(firstName, lastName, age, date, houseNumber, postcode, gender, email) == true){
    console.log("complete success");
    setTimeout(function (){
    //setting the colours to green
    document.getElementById("output_here").style.color = "#4CAF50"; //NEED TO CHANGE THIS TO A PROPER FUNCTION!!
    document.getElementById("output_here").innerHTML = "success!";

    }, 250); 

  } else {
    //setting the colours to red
    console.log("validation failure");
    document.getElementById("output_here").style.color = "#F01000";
    document.getElementById("output_here").innerHTML = "somethings wrong!";
  }
}

function validation(firstName, lastName, age, date, houseNumber, postcode, gender, email){
  let verification = true;
  //chekcing the first name 
  if (firstName.length < 2 || firstName.length > 10){
    console.log("first name error");
    document.getElementById("firstName").style.borderColor = "#F01000";
    document.getElementById("firstName_p").style.color = "#F01000";
    verification = false; }
  //checking the last name
  if(lastName.length < 2 || lastName.length > 10){
    console.log("last name error");
    document.getElementById("lastName").style.borderColor = "#F01000";
    document.getElementById("lastName_p").style.color = "#F01000";
    verification = false; }
  //checking the age 
  if(age > 100 || age < 10 || age == false){
    console.log("age error");
    document.getElementById("age").style.borderColor = "#F01000";
    document.getElementById("age_p").style.color = "#F01000";
    verification = false; }
  //checking the date
  if(date == false){
    console.log("date error");
    document.getElementById("date").style.borderColor = "#F01000";
    document.getElementById("date_p").style.color = "#F01000";
    verification = false; }
  //checking the house number
  if(houseNumber < 1 || houseNumber > 1000){
    console.log("house number error");
    document.getElementById("houseNumber").style.borderColor = "#F01000";
    document.getElementById("houseNumber_p").style.color = "#F01000";
    verification = false; }
  //postcode      
  //gathering the 2 parts of the postcode
  let pc1 = postcode.substring(0,3);
  let pc2 = postcode.substring(4,7);
  //check for number
  let x = parseInt(pc1.substring(2,3));
  let y = parseInt(pc2.substring(0,1));
  //check for letters
  let a = pc1.substring(0,2);
  let b = pc2.substring(1,3);
  //check
  if(check_postcode1(x,y) == false && check_postcode2(a,b) == false){
    console.log("postcode error");
    document.getElementById("postcode").style.borderColor = "#F01000";
    document.getElementById("postcode_p").style.color = "#F01000";
    verification = false; }
  //checking the gender
  if(gender == 0){
    console.log("gender error");
    document.getElementById("gender").style.borderColor = "#F01000";
    document.getElementById("gender_p").style.color = "#F01000";
    verification = false; }
  if(check_email(email) == false){
    console.log("email error");
    document.getElementById("email").style.borderColor = "#F01000";
    document.getElementById("email_p").style.color = "#F01000";
    verification = false; }
  return verification;
}

//first function
function check_postcode1 (x,y){
  if (!isNaN(x) && !isNaN(y)){
    return true;
  } else {
    return false;
  }
}
//second function
function check_postcode2 (a,b){
  if (isNaN(a) && isNaN(b)){
    return true;
  } else {
    return false;
  }
}

function check_email(email){
  return false;
}







