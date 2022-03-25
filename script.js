// Assignment Code
var generateBtn = document.querySelector("#generate");

//password elements
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", ",", ".", "<", ">", "'", ":", ";", "-", "_", "/", "?", "=", "+"];
console.log(lowercase)
console.log(uppercase)
console.log(symbols)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passLength = window.prompt("How many characters would you like your password?");
  var passNum = window.confirm("Would you like numbers?");
  var passLow = window.confirm("Would you like lowercase letters?");
  var passUpper = window.confirm("Would you like uppercase letters?");
  var passSym = window.confirm("Would you like special characters?");
  var maxPass = "";

  console.log(passLength);
  console.log(passNum);
  console.log(passLow);
  console.log(passUpper);
  console.log(passSym);

  function generatePassword(passLength){
  var maxPass;
    if (passNum, passLow, passUpper, passSym){
      var maxPass = maxPass.concat(numbers, lowercase, uppercase, symbols);
      console.log(maxPass);
    } else if (passNum, passLow, passUpper) {
      var maxPass = maxPass.concat(numbers, lowercase, uppercase);
      console.log(maxPass);
    } else if (passNum, passLow, passSym){
      var maxPass = maxPass.concat(numbers, lowercase, symbols);
      console.log(maxPass)
    } else if (passNum, passUpper, passSym) {
      var maxPass = maxPass.concat(numbers, uppercase, symbols)
    } else if (passLow, passUpper, passSym) {
      var maxPass = maxPass.concat(lowercase, uppercase, symbols)
    } else if (passLow, passSym) {
      var maxPass = maxPass.concat(lowercase, symbols)
    } else if (passUpper, passSym) {
      var maxPass = maxPass.concat(uppercase, symbols)
    } else if (passNum, passLow) {
      var maxPass = maxPass.concat(numbers, lowercase)
    } else if (passNum, passUpper) {
      var maxPass = maxPass.concat(numbers, uppercase)
    } else if (passNum, passSym) {
      var maxPass = maxPass.concat(numbers, symbols)
    } else if (passLow) {
      var maxPass = maxPass.concat(lowercase)
    } else if (passUpper) {
      var maxPass = maxPass.concat(uppercase)
    } else if (passNum) {
      var maxPass = maxPass.concat(numbers)
    } else if (passSym) {
      var maxPass = maxPass.concat(symbols)
    } else {
      
    }
      for (var i = 0; i < passLength; i++) {
        var pass = Math.floor(Math.random() * maxPass.length);
        console.log(pass)
      } return 
  }



  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
