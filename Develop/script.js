// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var passwordMinimumLength = 8;
var passwordMaximumLength = 128;
var password =[]
var specialCharects = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
console.log (specialCharects)
var numbersList = ['0','1','2','3','4','5','6','7', '8', '9']

var uppersList = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']

var lowersList = "abcdefghijklmnopqrstuvwxyz";
function generatePassword() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  alert(length)
  var randomEl = Math.floor(Math.random() * numbersList.length)
  // alert(randomEl)
  password.push(randomEl)

}

// acceptable password
// 1 + specialCvar passwordRules = prompt('Character types Accepted in Password abcdefghijklmnopqrstuvwxyz0123456789\
// ()ABCDEFGHIJKLMOPQRSTUVWXYZ ' + harects);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
