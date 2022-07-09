// CHARACTER ARRAYS
var lettersLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var lettersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*','_', '-', '+', '=', '?']

// DOCUMENT GRABS
var characterAmountRange = document.getElementById('characterAmountRange');
var characterAmountNumber = document.getElementById('characterAmountNumber');
var includeLowercase = document.getElementById('includeLowercase');
var includeUppercase = document.getElementById('includeUppercase');
var includeNumbers = document.getElementById('includeNumbers');
var includeSymbols = document.getElementById('includeSymbols');
var generateBtn = document.querySelector("#generate"); 

// EVENT LISTENERS
characterAmountNumber.addEventListener('input', syncRange);
characterAmountRange.addEventListener('input', syncRange);
generateBtn.addEventListener("click", writePassword);

// SYNC RANGE AND NUMBER INPUTS
function syncRange(event) {
    var value = event.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}

// COOK PASSWORD
function generatePassword() {
    var passwordRaw = []
    var passwordCooked= '';  
    if (includeLowercase.checked) passwordRaw = passwordRaw.concat(lettersLowercase);
    if (includeUppercase.checked) passwordRaw = passwordRaw.concat(lettersUppercase);
    if (includeNumbers.checked) passwordRaw = passwordRaw.concat(numbers);
    if (includeSymbols.checked) passwordRaw = passwordRaw.concat(symbols);
    for (index = 0; index < characterAmountNumber.value; index++) {
        var characterToAdd = passwordRaw[Math.floor(Math.random () * passwordRaw.length)]
        passwordCooked = passwordCooked + characterToAdd
        }
    console.log(passwordCooked)
    if (passwordCooked.includes(undefined)) return 'please make a selection!!!'  
    return passwordCooked;
}

// SERVE COOKED PASSWORD
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




