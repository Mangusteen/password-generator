import './style.css'

const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const passwordDisplay = document.getElementById('passwordDisplay');

// ID of inputs
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');

// arrays of characters 
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90);
const NUMBERS_CHAR_CODES = arrayFromLowtoHigh(48, 57);
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122);
const SYMBOLS_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58, 64))
  .concat(arrayFromLowtoHigh(91, 96))
  .concat(arrayFromLowtoHigh(123, 126));

// loop which create arrays of elements
function arrayFromLowtoHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
// range and number connection
characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountRange.value = value;
  characterAmountNumber.value = value;
}

//form - btn submit --> generate password
const form = document.getElementById('form-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password;
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);

  // loop randomly
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  return passwordCharacters.join('')
}

console.log(UPPERCASE_CHAR_CODES);