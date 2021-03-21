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
  var passwordLength = 10;
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[^_`]{|}~\ ";
  var passwd = "";
  console.log(chars.substring(7, 10));
  console.log (chars.length);
  for (var i=0; i<passwordLength; i++){
    var randomnum = Math.floor(Math.random() * chars.length);
    passwd += chars.substring(randomnum,randomnum+1);
    console.log (passwd);
}




return passwd; 






}

