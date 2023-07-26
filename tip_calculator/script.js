//define the global variables
let billInput = document.querySelector("#bill"); //bill input field
let bill = 0;
let peopleInput = document.querySelector("#people"); //people input field
let people = 0;
let errorSpan = document.querySelector("#errorMessage"); // span to  display error when pople is 0
let selectedTip = 0;
let tipPerPerson = document.getElementById("money_tip");
let totalPerPerson = document.getElementById("money_total");
const tipBoxes = document.querySelectorAll(".container__tip__box");
let customTipInput = document.getElementById("customTip");

//function to check input

function inputCheck(input) {
  // Check if the input is not null or undefined
  if (input !== null && input !== undefined) {
    // Convert the input to a number
    const num = Number(input);

    // Check if the converted number is a valid number and not NaN
    if (!isNaN(num)) {
      // Check if the number is non-zero
      if (num !== 0) {
        return num; // Input is a non-zero number
      }
    }
  }
  return 0; // Input is not a non-zero number
}

//function to calculate the tip

function calculateTip() {
  if (bill <= 0) {
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    return;
  }

  if (people === 0) {
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";
    return;
  }
  tipAmount = ((bill * selectedTip) / people).toFixed(2);
  console.log(tipAmount);
  totalAmount = ((bill + bill * selectedTip) / people).toFixed(2);
  console.log(totalAmount);
  tipPerPerson.textContent = tipAmount;
  totalPerPerson.textContent = totalAmount;
}

// check bill amount

billInput.addEventListener("input", function () {
  bill = inputCheck(parseFloat(billInput.value));
  console.log(bill);
});

//check num of people and for 0 people

peopleInput.addEventListener("input", function () {
  people = inputCheck(Number(peopleInput.value));

  if (people !== 0) {
    peopleInput.style.border = "none";
    errorSpan.classList.add("hidden");
  } else {
    peopleInput.style.border = "2px solid red";
    errorSpan.classList.remove("hidden");
  }
  console.log(people);
});

//function to calculate tip

function selectTip(tip) {
  selectedTip = parseFloat(tip / 100);
  // console.log(selectedTip);
  calculateTip();
}

//function to calculate custom tip

function calculateCustomTip() {
  selectedTip = parseFloat(customTipInput.value) / 100;
  calculateTip();
}

// to calculate custom tip as the user enters the tip amount

customTipInput.addEventListener("input", calculateCustomTip);

//function to hightlight the selected tip

function handleTipBoxClick(event) {
  // Remove the "selected" class from all tip boxes (if it exists)
  tipBoxes.forEach((box) => box.classList.remove("selected"));

  // Add the "selected" class to the clicked tip box
  event.target.classList.add("selected");
}

// Add a click event listener to each tip box
tipBoxes.forEach((box) => {
  box.addEventListener("click", handleTipBoxClick);
});

//crude method the reset the page
function resetCalculator() {
  location.reload();
}
