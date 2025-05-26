const passwordDisplay = document.getElementById("passwordDisplay");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBER_CHARS = "0123456789";
const SYMBOL_CHARS = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  const length = +lengthInput.value;
  let charPool = "";

  if (uppercaseCheckbox.checked) charPool += UPPERCASE_CHARS;
  if (lowercaseCheckbox.checked) charPool += LOWERCASE_CHARS;
  if (numbersCheckbox.checked) charPool += NUMBER_CHARS;
  if (symbolsCheckbox.checked) charPool += SYMBOL_CHARS;

  if (charPool.length === 0) {
    alert("Please select at least one character type!");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  const pwd = generatePassword();
  if (pwd) passwordDisplay.textContent = pwd;
});

copyBtn.addEventListener("click", () => {
  const pwd = passwordDisplay.textContent;
  if (!pwd || pwd === "Your Secure Password") return alert("No password to copy!");

  navigator.clipboard.writeText(pwd).then(() => {
    alert("Password copied to clipboard!");
  }).catch(() => {
    alert("Failed to copy password.");
  });
});
