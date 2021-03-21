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

// At this stage alerts will pop up for the user to validate the password criteria. It will return a random secure password for the function generatePassword  
function generatePassword(){
  var numbers = "0123456789"; 
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbols = "!#$%&'()*+,-./:;<=>?@[^_`]{|}~\ ";
  var chars = ''; 
  var password1 = '';  
//Making sure that the generated password has no issues and is generating according to the length set, which is a substring 
  console.log(chars.substring(7, 10));
  console.log (chars.length);

  var passwordLength = prompt("Please enter between 8 and 128 characters for your password length");

//This is validating the users password length
  if (passwordLength === null){}
  else if (passwordLength == '' || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){
    alert("Invalid Password Length. Please follow length criteria");
  }
// At this stage this is allowing users to include character type in their password
var numberResponse = confirm("Do you want numbers in your password?");
if (numberResponse){
  chars = chars + numbers;

}

var lowerCaseChars = confirm("Do you want lowercase characters in your password?");
if (lowerCaseChars){
  chars = chars + lowerCaseChars;

}

var upperCaseChars = confirm("Do you want uppercase characters in your password?"); 
if (upperCaseChars){
  chars = chars + upperCaseChars;

}

var symbols = confirm("Do you want symbols in your password?"); 
if (symbols){
  chars = chars + symbols;

}

if (chars != ''){
  for (var i=0; i<passwordLength; i++){
    var randomnum = Math.floor(Math.random() * chars.length);
    password1 += chars.substring(randomnum,randomnum+1);
    console.log (password1);

}

return password1; 

}
}