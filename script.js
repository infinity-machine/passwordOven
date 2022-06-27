var characterAmountRange = document.getElementById('characterAmountRange');
var characterAmountNumber = document.getElementById('characterAmountNumber');
var includeUppercase = document.getElementById('includeUppercase');
var includeNumbers = document.getElementById('includeNumbers');
var includeSymbols = document.getElementById('includeSymbols');
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var lettersUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var Symbols = ['!', '@', '#', '$', '%', '^', '&', '*','_', '-', '+', '=', '?']
var generateBtn = document.querySelector("#generate"); 

characterAmountNumber.addEventListener('input', syncRange);
characterAmountRange.addEventListener('input', syncRange);
function syncRange(event) {
    var value = event.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
function generatePassword() {
    passwordResult = ''
    for (var index = 0; index < characterAmountNumber.value; index++) {
        passwordResult = letters[Math.floor(Math.random()*26)]




        console.log(passwordResult)
    }   
    
    
    }
    

    // passwordResult = letters[Math.floor(Math.random())* characterAmountNumber.value] 
    // console.log(passwordResult)
    // return passwordResult

    
  
    
 
  

   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// console.log(characterAmountNumber.value)
//     console.log(includeUppercase.checked)
//     console.log(includeNumbers.checked)
//     console.log(includeSymbols.checked)