// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// The function generatePassword has been invoked with different variables that represent different values. These are contained in strings.   
function generatePassword() {
  var numbers = "0123456789";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!#$%&'()*+,-./:;<=>?@[^_`]{|}~\ ";
  console.log(symbols)
  var Chars = "";
  var password1 = "";
  var passwordLength = prompt("Please enter between 8 and 128 characters for your password length");

  //This is validating the users password length
  if (passwordLength === null) { }
  //I have used the parseInt function because passwordLength value = null is a string argument, which returns an integer. The integers in this case are from 8-128.   
  else if (passwordLength == "" || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    alert("Invalid Password Length. Please follow length criteria");
  }
  // At this stage this is prompting users to include numbers in their password
  var numberResponsePrompt = confirm("Do you want numbers in your password?");
  if (numberResponsePrompt) {
    Chars = Chars + numbers;

  }
// At this stage this is prompting users to include lowercase characters in their password
  var lowerCaseCharsPrompt = confirm("Do you want lowercase characters in your password?");
  if (lowerCaseCharsPrompt) {
    Chars = Chars + lowerCaseChars;

  }

// At this stage this is prompting users to include uppercase characters in their password
  var upperCaseCharsPrompt = confirm("Do you want uppercase characters in your password?");
  if (upperCaseCharsPrompt) {
    Chars = Chars + upperCaseChars;

  }

// At this stage this is prompting users to include symbols in their password
  var symbolPrompt = confirm("Do you want symbols in your password?");
  if (symbolPrompt) {
    Chars = Chars + symbols;
    console.log(symbols)

  }

//Here is the statement that makes sure users are selecting at least one character type in their password.
//If they don't input at least one character type an alert will pop up stating that    

  if (Chars != "") {
    for (var i = 0; i < passwordLength; i++) {
      var randomnum = Math.floor(Math.random() * Chars.length);
      password1 += Chars.substring(randomnum, randomnum + 1);
    }
    }
    else{
      alert("Please select at least one character type");
    }
    return password1;

   }
    
