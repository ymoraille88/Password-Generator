// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

  var passwordMinimumLength = 8;
  var passwordMaximumLength = 128;
  var password = '';
  var specialCharecters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  var numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  var uppersList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']

  var lowersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  // var length = parseInt(
  //   prompt('How many characters would you like your password to contain?'),
  var length = parseInt(prompt('How many characters would you like your password to contain?'));
  var possibleCharacters = '';

  if (length >= passwordMinimumLength && length <= passwordMaximumLength) {

    var hasUppersList = confirm('Do you want upperCase letters?');

    if (hasUppersList) {
      possibleCharacters += uppersList.join('');
    }
    var hasLowersList = confirm('Do you want lowerCase letters?');


    if (hasLowersList) {
      possibleCharacters += lowersList.join('');
    }
    var hasSpecialCharecters = confirm('Do you want specialCharecters?');

    if (hasSpecialCharecters) {
      possibleCharacters += specialCharecters.join('');
    }
    var hasNumbersList = confirm('Do you want numbers?');

    if (hasNumbersList) {
      possibleCharacters += numbersList.join('');

    }

    if (hasUppersList || hasLowersList || hasSpecialCharecters || hasNumbersList) {
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * possibleCharacters.length);
        password += possibleCharacters[random];
      }
      return password;
    } else {
      alert("Please choose at least one character type.");
      return "";
    }
  } else {
    alert("Please choose between 8 and 128.");
    return "";
  }


  //   if(hasLowersList) {
  //     alert('addLower');

  //   }

  //   if(hasUppersList) {
  //     alert('addUpper');
  //   }

  //   if(hasSpecialCharactersList) {
  //     alert('addSpecial');
  //   }

  //   if(hasNumbersList) {
  //     alert('add Number');
  //   }

  //   return password;
  // }
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
