const inputBin = document.querySelector("#binary-input");
const form = document.querySelector(".bin-converter");

form.addEventListener("submit", function (event) {
  // 1. Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // **Clear any previous custom message to allow for re-validation**
  inputBin.setCustomValidity("");

  //checks if the form is valid
  const IsTheFormValid = form.checkValidity();

  if (IsTheFormValid) {
    //code for true
    console.log("Form is valid");
    // You can now perform the conversion here
  } else {
    //code for false
    console.log("Form is invalid");
    inputBin.setCustomValidity("Please use a binary number between 0-1");
    form.reportValidity();
  }
});

//add math function-grabs current binary values and converts to decimal
//grabs that decimal value and adds that to input
