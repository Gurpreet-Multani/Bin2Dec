const inputBin = document.querySelector("#binary-input");
const form = document.querySelector(".bin-converter");
const DecimalResult = document.querySelector("#decimal-input");

//make this into a function to make the code look cleaner
function ConvertBinarytoDecimal() {
  //this is a number
  let inputvaluebinary = inputBin.value;
  //turn string into number/float/this is a decimal number
  let StrToNum = parseInt(inputvaluebinary, 2);
  // replace DecimalResult with the value of StrToNum
  DecimalResult.value = StrToNum;
  console.log(StrToNum);
}

// New function to check for letters and set custom validity
function NoLettersAllowed(inputElement) {
  // Check if the input value contains any letters (a-z or A-Z)
  if (/[a-zA-Z]/.test(inputElement.value)) {
    // If letters are found, set a custom error message
    inputElement.setCustomValidity(
      "Input must only contain binary digits (0s and 1s). Letters are not allowed."
    );
    inputElement.reportValidity(); // Show the message to the user
    return false;
  } else {
    // If no letters are found, ensure the custom validity is clear
    inputElement.setCustomValidity("");
    inputElement.reportValidity(); // Clear any existing custom message (if needed)
    return true;
  }
}

form.addEventListener("submit", function (event) {
  // 1. Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // **Clear any previous custom message to allow for re-validation**
  inputBin.setCustomValidity("");

  //checks if the form is valid
  const IsTheFormValid = form.checkValidity();
  //checks if the form is valid/checks for letters
  NoLettersAllowed(inputBin);

  if (IsTheFormValid) {
    //code for true
    console.log("Form is valid");
    //conversion performed here
    ConvertBinarytoDecimal();
  } else {
    //code for false
    console.log("Form is invalid");
    inputBin.setCustomValidity("Please use a binary number between 0-1");
    form.reportValidity();
  }
});

console.log(inputBin.checkValidity());

//make a short if statement
//if (we find letters in our input.value = its validity as false )
