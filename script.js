// Assignment Code
var generateBtn = document.querySelector("#generate");

//password elements
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()-_=+{[}],.';:";

//password elements shifted into arrays
var numArr = numbers.split("");
var lowArr = lowercase.split("");
var upArr = uppercase.split("");
var symArr = symbols.split("");



// Write password to the #password input
function writePassword() {
  var maxPass = "";
  var chonkArray = [];

  var passLen = prompt("How long would you like your password to be?");

  if(confirm("Would you like your password to contain upper case letters?")){
    Array.prototype.push.apply(chonkArray, upArr);
  }

if(confirm("Would you like your password to contain lower case letters?")){
    Array.prototype.push.apply(chonkArray, lowArr);
}

if(confirm("Would you like your password to contain numbers?")){
    Array.prototype.push.apply(chonkArray, numArr);
}

if(confirm("Would you like your password to contain symbols?")){
    Array.prototype.push.apply(chonkArray, symArr);
}

for(var i=0; i<passLen; i++){
  var random = Math.floor(Math.random()*chonkArray.length);
  maxPass += chonkArray[random];
}

  document.getElementById("password").innerHTML = maxPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
