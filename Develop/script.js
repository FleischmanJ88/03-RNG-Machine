// Assignment code here
window.alert("Enter parameters to define the passwords complexity, click on the button |Generate Password| when when ready")

function generatePassword() {

  var makePassword = []

  function getI(anything) {
    return Math.floor(Math.random() * anything)
  };

  var passText = {
    passwordLength: passLength(),
    lower: passLower(),
    upper: passUpper(),
    number: passNumber(),
    special: passSpec(),
  };

  console.log(passText)

  if (passText.lower) {
    makePassword.push(randomLower());
  }

  if (passText.upper) {
    makePassword.push(randomUpper());
  }

  if (passText.number) {
    makePassword.push(randomNumber());
  }

  if (passText.special) {
    makePassword.push(randomSymbol());
  }

  if (passText.lower === false && passText.upper === false && passText.number === false && passText.special === false) {
    window.alert("You must enter at least 1 parameter. Please try again.");
    return ("Please try again");
  }

  console.log(makePassword);
  console.log(passText.passwordLength, makePassword.length);

  for (let I = makePassword.length; I < passText.passwordLength; I++) {
    makePassword[I] = makePassword[getI(makePassword.length)];
  }

  var passwordString = makePassword.join("");

  makePassword = [];
  return passwordString;
}


var passLength = function () {
  var promptLength = window.prompt("How many characters do you want your password to be, pick a length between 8 and 128.");

  if (promptLength === "" || promptLength === null) {
    window.alert("Please pick a number between 8 and 128.");
    return passLength();
  }

  if (promptLength < 8 || promptLength > 128) {
    window.alert("You have chosen an invalid password length. Please pick between 8 and 128.");
    return promptLength();
  }

  console.log("You have chosen " + promptLength + " characters.");

  var passwordLength = promptLength;

  return passwordLength;
}

var passLower = function () {
  var promptLower = window.confirm("Do you want to use lower case letters?");

  return promptLower;
}
var passUpper = function () {
  var promptUpper = window.confirm("Do you want to use upper case letters?");

  return promptUpper;
}

var passNumber = function () {
  var promptNumber = window.confirm("Do you want to use include numbers?");

  return promptNumber;
}

var passSpec = function () {
  var promptSpecial = confirm("Do you want to use special characters?");

  return promptSpecial;
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  const symbols = "~!@#$%^&*()-=_+[]{}\|;':,.<>/?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
{
  var generateBtn = document.querySelector("#generate");
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

{
  generateBtn.addEventListener("click", writePassword);
}