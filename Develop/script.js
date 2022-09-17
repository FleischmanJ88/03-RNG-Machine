//Assignement Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandom(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  var userInput = window.prompt("What is your preferred password length?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your password length must be between 8 and 128 characters")
    return
  }
  var userWantsNumbers = window.confirm("Do you want numbers in the password?")
  var userWantsSymbols = window.confirm("Do you want symbols in the password?")
  var userWantsLower = window.confirm("Do you want lower case in the password?")
  var userWantsUpper = window.confirm("Do you want upper case in the password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  var lowerLettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperLettersList = []


  var optionalList = []

  for (var i = 0; i < lowerLettersList.length; i++) {
    upperLettersList[i] = lowerLettersList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionalList.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionalList.push(symbolList)
  }

  if (userWantsLower === true) {
    optionalList.push(lowerLettersList)
  }

  if (userWantsUpper === true) {
    optionalList.push(upperLettersList)
  }

  if (optionalList.length === 0) {
    optionalList.push(lowerLettersList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomChoice = getRandom(optionalList)
    var randomChar = getRandom(randomChoice)
    generatedPassword += randomChar
  }

  return generatedPassword
}
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)