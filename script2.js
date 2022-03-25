// Assignment Code
var generateBtn = document.querySelector("#generate");

//password elements
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*()-_=+";
console.log(lowercase)
console.log(uppercase)
console.log(symbols)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passLength = window.prompt("How many characters would you like your password?");
  //var passNum = window.confirm("Would you like numbers?");
  //var passLow = window.confirm("Would you like lowercase letters?");
  //var passUpper = window.confirm("Would you like uppercase letters?");
 // var passSym = window.confirm("Would you like special characters?");



  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);

  function generatePassword(passLength){
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
 }
     
 function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }



  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);