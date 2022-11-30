// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  // characters, minimum and maximum length
  var charetcs = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz0123456789\
  ()ABCDEFGHIJKLMOPQRSTUVWXYZ";
  var passwordMinimumLength = 8;
  var passwordMaximumLength = 128;
  var password ="";
  var specialCharects = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var numbersList = "0123456789";
  var uppersList = "ABCDEFGHIJKLMNOPQRSTUVXYZ".toUpperCase();
  var lowersList = "abcdefghijklmnopqrstuvwxyz";
}

// acceptable password
var passwordRules = prompt('Character types Accepted in Password abcdefghijklmnopqrstuvwxyz0123456789\
()ABCDEFGHIJKLMOPQRSTUVWXYZ ' + 1 + specialCharects);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
